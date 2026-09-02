/**
 * Schnittzeichnung des Dachaufbaus. Bauzeichnungssprache: 1px Linien, Schraffuren
 * je Material, Maßlinie links, Bezugslinien nach rechts.
 * Der Explosionsfaktor wird von der Szene layers gesetzt, über CSS-Variablen.
 */
export function RoofSectionDrawing() {
  // tabIndex noetig: .drawing-box scrollt horizontal auf schmalen Flaechen, ohne
  // Fokusziel waere dieser Bereich mit der Tastatur nicht erreichbar.
  // Gefunden ueber tests/e2e/accessibility.spec.ts, Phase 9.
  return (
    <div className="drawing-box border border-hair bg-surface-1 p-5" data-layer-drawing tabIndex={0}>
      <svg viewBox="0 0 620 300" className="block h-auto w-full min-w-[520px]" role="img"
        aria-label="Schnittzeichnung des Dachaufbaus mit sieben Schichten von den Sparren bis zu den Photovoltaikmodulen.">
        <defs>
          <pattern id="dw-wood" width="10" height="6" patternUnits="userSpaceOnUse">
            <path d="M0 1h10M0 4h10" stroke="var(--text-2)" strokeWidth="0.6" />
          </pattern>
          <pattern id="dw-insul" width="16" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 5q4 -5 8 0t8 0" fill="none" stroke="var(--text-2)" strokeWidth="0.7" />
          </pattern>
          <pattern id="dw-batten" width="24" height="8" patternUnits="userSpaceOnUse">
            <rect x="1" y="1" width="12" height="6" fill="none" stroke="var(--text-2)" strokeWidth="0.7" />
          </pattern>
          <pattern id="dw-tile" width="26" height="12" patternUnits="userSpaceOnUse">
            <path d="M0 11q6 -9 13 0t13 0" fill="none" stroke="var(--dach)" strokeWidth="1" />
          </pattern>
          <pattern id="dw-glass" width="18" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 0v10" stroke="var(--energie)" strokeWidth="0.7" />
          </pattern>
        </defs>

        <g fontFamily="var(--font-sans)" fontSize="11" fill="var(--text-2)">
          {/* Maßlinie */}
          <path d="M84 46v220" stroke="var(--text-2)" strokeWidth="1" />
          <path d="M76 46h16M76 266h16" stroke="var(--text-2)" strokeWidth="1" />
          <text x="70" y="152" textAnchor="end">Aufbau</text>

          {/* Schichten, von unten nach oben */}
          <g data-layer="1"><rect x="104" y="244" width="290" height="22" fill="url(#dw-wood)" stroke="var(--text-2)" /></g>
          <g data-layer="2"><rect x="104" y="200" width="290" height="42" fill="url(#dw-insul)" stroke="var(--text-2)" /></g>
          <g data-layer="3"><rect x="104" y="188" width="290" height="10" fill="none" stroke="var(--text-2)" /></g>
          <g data-layer="4"><rect x="104" y="170" width="290" height="16" fill="url(#dw-batten)" stroke="var(--text-2)" /></g>
          <g data-layer="5"><rect x="104" y="144" width="290" height="24" fill="url(#dw-tile)" stroke="var(--dach)" /></g>
          <g data-layer="6"><rect x="104" y="124" width="290" height="18" fill="none" stroke="var(--text-2)" /></g>
          <g data-layer="7"><rect x="104" y="104" width="290" height="18" fill="url(#dw-glass)" stroke="var(--energie)" /></g>

          {/* Bezugslinien und Nummern */}
          <g stroke="var(--text-2)" strokeWidth="0.8" fill="none">
            <path data-leader="1" d="M372 255h70l14-14h34" />
            <path data-leader="2" d="M372 221h90l14-14h14" />
            <path data-leader="3" d="M372 193h104l14-14h0" />
            <path data-leader="4" d="M372 178h118l14-14" />
            <path data-leader="5" d="M372 156h80l14-14h24" />
            <path data-leader="6" d="M372 133h60l14-14h44" />
            <path data-leader="7" d="M372 113h40l14-14h64" />
          </g>
          <g fill="var(--text-0)" fontSize="11.5">
            <text data-leader-label="1" x="492" y="244">01</text>
            <text data-leader-label="2" x="492" y="210">02</text>
            <text data-leader-label="3" x="492" y="182">03</text>
            <text data-leader-label="4" x="506" y="167">04</text>
            <text data-leader-label="5" x="492" y="145">05</text>
            <text data-leader-label="6" x="492" y="122">06</text>
            <text data-leader-label="7" x="492" y="102">07</text>
          </g>
          <text x="104" y="290" fontSize="10.5">
            Signaturen: Holz als Faser, Dämmung als Welle, Ziegel als Profil, Modulglas als Zellteilung.
          </text>
        </g>
      </svg>
    </div>
  );
}
