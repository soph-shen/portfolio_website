const tornPaper = "M8 10 L38 5 L60 12 L92 4 L119 10 L148 3 L180 9 L210 4 L239 11 L268 5 L295 12 L291 43 L298 70 L291 105 L298 138 L290 174 L298 205 L290 235 L262 229 L230 237 L200 230 L170 238 L141 230 L110 237 L80 229 L49 236 L12 229 L6 200 L12 169 L4 137 L11 107 L4 75 L11 42 Z";

function Record({ className }: { className: string }) {
  return (
    <svg className={`collage-record ${className}`} viewBox="0 0 400 400">
      <circle cx="200" cy="200" r="198" className="record-body" />
      {[180, 174, 168, 162, 156, 150, 144, 138, 132, 126, 120, 114, 108, 102, 96, 90, 84].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} className="record-groove" />
      ))}
      <circle cx="200" cy="200" r="65" className="record-label" />
      <circle cx="200" cy="200" r="51" className="record-label-ring" />
      <path d="M164 183h72M173 217h54" className="record-label-ring" />
      <circle cx="200" cy="200" r="8" className="record-hole" />
    </svg>
  );
}

function Scrap({ className, label }: { className: string; label?: string }) {
  return (
    <div className={`collage-scrap ${className}`}>
      <svg viewBox="0 0 300 240" preserveAspectRatio="none"><path d={tornPaper} /></svg>
      <span className="collage-tape" />
      {label && <span className="collage-handwriting">{label}</span>}
    </div>
  );
}

function Ticket({ className }: { className: string }) {
  return (
    <svg className={`collage-ticket ${className}`} viewBox="0 0 240 100">
      <path d="M5 5h230v29a16 16 0 0 0 0 32v29H5V66a16 16 0 0 0 0-32Z" className="ticket-paper" />
      <path d="M59 8v84" className="ticket-perforation" />
      <path d="M80 29h130M80 40h91M80 70h46M149 61v22m5-22v22m8-22v22m4-22v22m8-22v22m5-22v22m9-22v22m4-22v22m8-22v22m5-22v22" className="ticket-ink" />
      <path d="m26 32 5 13 14 1-11 9 3 14-11-8-12 8 4-14-11-9 14-1Z" className="ticket-ink" />
    </svg>
  );
}

export function MusicCollage() {
  return (
    <div className="music-collage" aria-hidden="true">
      <Scrap className="scrap-navy" />
      <Scrap className="scrap-rose" label="side A" />
      <Scrap className="scrap-gold" label="on repeat" />
      <Scrap className="scrap-cream" />
      <Scrap className="scrap-burgundy" />
      <Scrap className="scrap-bottom" label="track 01" />
      <Record className="record-left" />
      <Record className="record-right" />
      <Ticket className="ticket-left" />
      <Ticket className="ticket-right" />
      <svg className="collage-cassette" viewBox="0 0 260 170">
        <rect x="8" y="8" width="244" height="154" rx="12" />
        <path d="M25 24h210v84H25ZM56 162l13-36h122l13 36M32 40h70m14 0h90" />
        <rect x="48" y="54" width="164" height="40" rx="20" />
        <circle cx="70" cy="74" r="14" /><circle cx="190" cy="74" r="14" />
        <path d="M90 64h80v20H90M70 60v28m-14-14h28m106-14v28m-14-14h28" />
        <circle cx="27" cy="143" r="4" /><circle cx="233" cy="143" r="4" />
      </svg>
      <svg className="collage-doodles doodles-top" viewBox="0 0 220 230">
        <path d="m45 15 6 20 21 2-17 13 5 21-17-13-18 11 7-20-16-14 22 1ZM115 60q-25 8-10 25t-8 26 8 30M155 18l-4 44q-19-4-19 8t20 1l5-39 24-7-4 29q-18-3-17 8t18 1l5-48ZM28 150q42-28 60 17m-16-5 18 9-1-18M141 173l7-10 4 14 13 4-13 5-4 13-5-13-12-4Z" />
      </svg>
      <svg className="collage-doodles doodles-bottom" viewBox="0 0 220 200">
        <path d="M22 40q15-25 28 0t28 0 28 0M140 26l-3 47q-21-5-21 8t21 1l4-41 29-8-3 32q-20-4-20 9t21 0l4-58ZM38 110l5 15 16 2-12 10 3 16-13-9-13 8 4-16-11-11 16-1ZM88 170q40-50 88-35m-17-11 20 10-18 13" />
      </svg>
      <div className="collage-calm" />
      <svg className="collage-grain" width="100%" height="100%">
        <filter id="playlist-paper-grain"><feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
        <rect width="100%" height="100%" filter="url(#playlist-paper-grain)" />
      </svg>
    </div>
  );
}