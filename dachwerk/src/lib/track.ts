/**
 * Conversion-Tracking als duenner Adapter. Es ist kein Werkzeug eingebunden.
 * Aufrufe laufen ausschliesslich hierueber, damit spaeter eine Auswertung ohne
 * Umbau moeglich ist. Kein Aufruf ohne Einwilligung, keine personenbezogenen
 * Daten im Payload, siehe docs/06, Abschnitt 19.
 */
export type TrackEvent =
  | 'hero_cta_view' | 'hero_cta_click' | 'hero_skip'
  | 'bridge_potenzialcheck_click' | 'services_bridge_click'
  | 'choice_select' | 'process_potenzialcheck_click'
  | 'projects_slider_use' | 'statement_beratung_click'
  | 'form_start' | 'form_step' | 'form_error' | 'form_submit'
  | 'phone_click' | 'sticky_action_click' | 'region_place_click';

export type TrackPayload = Record<string, string | number>;

/** Im Musterprojekt immer false. Ein echtes Consent-Werkzeug ersetzt genau diese Funktion. */
function hasConsent(): boolean {
  return false;
}

const sanitize = (p?: TrackPayload): TrackPayload | undefined => {
  if (!p) return undefined;
  const out: TrackPayload = {};
  for (const [k, v] of Object.entries(p)) {
    if (k === 'text' || k === 'freitext' || k === 'name' || k === 'email' || k === 'telefon') continue;
    if (k === 'plz' && typeof v === 'string') {
      out.plz_region = v.slice(0, 1);
      continue;
    }
    out[k] = v;
  }
  return out;
};

export function track(event: TrackEvent, payload?: TrackPayload): void {
  const clean = sanitize(payload);
  if (!hasConsent()) {
    if (import.meta.env.DEV) console.debug('[track, ohne Einwilligung verworfen]', event, clean);
    return;
  }
  if (import.meta.env.DEV) console.debug('[track]', event, clean);
}
