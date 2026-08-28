import { ACESFilmicToneMapping, PerspectiveCamera, Scene, SRGBColorSpace, WebGLRenderer } from 'three';
import type { MotionProfile } from '@/motion/motionProfile';

export type RenderContext = {
  renderer: WebGLRenderer;
  scene: Scene;
  camera: PerspectiveCamera;
  /** Verschiebt das Bild seitlich, damit die Headline auf freiem Himmel liegt. */
  setShift: (factor: number) => void;
  /** Markiert die Szene als geändert. Ohne Änderung wird nicht gerendert. */
  invalidate: () => void;
  resize: () => void;
  dispose: () => void;
};

export function createRenderContext(
  canvas: HTMLCanvasElement,
  profile: MotionProfile,
  onLost: () => void,
): RenderContext | null {
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: profile === 'full',
      powerPreference: 'high-performance',
    });
  } catch {
    return null;
  }

  const dprCap = profile === 'full' ? 1.5 : 1.25;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, dprCap));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setClearAlpha(0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(34, 1, 0.5, 400);

  let dirty = true;
  let visible = true;
  let running = true;
  let shift = 0;
  let size = { w: 1, h: 1 };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width));
    const h = Math.max(1, Math.round(rect.height));
    renderer.setSize(w, h, false);
    size = { w, h };
    // Im Hochformat wird der vertikale Bildwinkel geweitet, damit horizontal genug
    // Platz bleibt. Untere Grenze fuer den horizontalen Winkel: 34 Grad.
    const vFovBase = 34;
    const aspect = w / h;
    const needed = 2 * (180 / Math.PI) * Math.atan(Math.tan((34 * Math.PI) / 360) / Math.max(aspect, 0.35));
    camera.fov = Math.min(52, Math.max(vFovBase, aspect < 1 ? needed : vFovBase));
    camera.aspect = w / h;
    applyShift();
    dirty = true;
  };

  /** Off-Axis-Projektion. Positiver Faktor schiebt den Inhalt nach rechts. */
  function applyShift() {
    const { w, h } = size;
    if (shift <= 0.001) {
      camera.clearViewOffset();
      camera.updateProjectionMatrix();
      return;
    }
    // Desktop: Haus nach rechts, Text links auf freiem Himmel.
    // Mobil: Haus nach oben, Text darunter.
    if (w < 900) camera.setViewOffset(w, h, 0, h * 0.17 * shift, w, h);
    else camera.setViewOffset(w, h, -w * 0.15 * shift, 0, w, h);
  }

  const setShift = (factor: number) => {
    const next = Math.max(0, Math.min(1, factor));
    if (Math.abs(next - shift) < 0.01) return;
    shift = next;
    applyShift();
    dirty = true;
  };

  const invalidate = () => { dirty = true; };

  const io = new IntersectionObserver((entries) => {
    visible = entries.some((e) => e.isIntersecting);
    if (visible) dirty = true;
  }, { rootMargin: '100px' });
  io.observe(canvas);

  const onVisibility = () => { if (document.hidden) visible = false; else { visible = true; dirty = true; } };
  document.addEventListener('visibilitychange', onVisibility);

  const onContextLost = (e: Event) => {
    e.preventDefault();
    running = false;
    onLost();
  };
  canvas.addEventListener('webglcontextlost', onContextLost);

  const onResize = () => resize();
  window.addEventListener('resize', onResize);

  resize();

  const loop = () => {
    if (!running) return;
    if (dirty && visible) {
      renderer.render(scene, camera);
      dirty = false;
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  const dispose = () => {
    running = false;
    io.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
    canvas.removeEventListener('webglcontextlost', onContextLost);
    window.removeEventListener('resize', onResize);
    scene.traverse((obj) => {
      const mesh = obj as { geometry?: { dispose: () => void }; material?: { dispose: () => void } | Array<{ dispose: () => void }> };
      mesh.geometry?.dispose();
      if (Array.isArray(mesh.material)) mesh.material.forEach((m) => m.dispose());
      else mesh.material?.dispose();
    });
    renderer.dispose();
  };

  return { renderer, scene, camera, setShift, invalidate, resize, dispose };
}
