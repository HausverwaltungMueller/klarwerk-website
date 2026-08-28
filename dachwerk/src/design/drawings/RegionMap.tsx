/** Arbeitsgebiet als Zeichnung: Zentrum, Radien, Orte. Kein externer Kartendienst. */
const places = [
  { x: 360, y: 190, r: 4, name: 'Hildesheim', lead: true },
  { x: 296, y: 108, r: 2.4, name: 'Sarstedt' },
  { x: 452, y: 132, r: 2.4, name: 'Bad Salzdetfurth' },
  { x: 300, y: 268, r: 2.4, name: 'Alfeld' },
  { x: 446, y: 254, r: 2.4, name: 'Bockenem' },
  { x: 232, y: 176, r: 2.4, name: 'Elze' },
  { x: 494, y: 196, r: 2.4, name: 'Holle' },
];

export function RegionMap() {
  return (
    <div className="drawing-box border border-hair bg-surface-1 p-5" data-map>
      <svg viewBox="0 0 620 340" className="block h-auto w-full min-w-[520px]" role="img"
        aria-label="Stilisierte Karte des Arbeitsgebiets mit Hildesheim im Zentrum und einem Radius von etwa 70 Kilometern.">
        <g fill="none" stroke="var(--text-2)">
          <circle data-map-ring="1" cx="360" cy="190" r="72" strokeWidth="1" />
          <circle data-map-ring="2" cx="360" cy="190" r="126" strokeWidth="1" strokeOpacity="0.6" />
          <circle data-map-ring="3" cx="360" cy="190" r="172" strokeWidth="1" strokeOpacity="0.35" />
        </g>
        <g stroke="var(--nature)" strokeWidth="1" strokeOpacity="0.5" fill="none" data-map-lines>
          <path d="M360 190L296 108M360 190L452 132M360 190L300 268M360 190L446 254M360 190L232 176M360 190L494 196" />
        </g>
        <g fontFamily="var(--font-sans)" fontSize="11" fill="var(--text-1)">
          {places.map((p) => (
            <g key={p.name} data-map-place>
              <circle cx={p.x} cy={p.y} r={p.r} fill={p.lead ? 'var(--energie)' : 'var(--text-1)'} />
              <text x={p.x + 10} y={p.y + 4} fill={p.lead ? 'var(--text-0)' : 'var(--text-1)'} fontSize={p.lead ? 13 : 11}>
                {p.name}
              </text>
            </g>
          ))}
          <text x="360" y="322" textAnchor="middle" fill="var(--text-2)" fontSize="10.5">
            Radius etwa 70 km · stilisierte Darstellung, keine Karteneinbettung
          </text>
        </g>
      </svg>
    </div>
  );
}
