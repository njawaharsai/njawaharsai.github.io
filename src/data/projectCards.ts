// SVG card data for each project — illustrated, animated, dark-themed
export interface CardData {
  projectId: string;
  num: string;
  accent: string;
  accRgb: string;
  bgRgb: string;
  bg: string;
  svg: string;
}

export const cardData: CardData[] = [
  /* ── 01  ReliableLLM ─────────────────────────────────────────────── */
  {
    projectId: 'reliable-llm',
    num: '01', accent: '#63ffb4', accRgb: '99,255,180', bgRgb: '6,11,15', bg: '#060b0f',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c1rg" cx="40%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#63ffb4" stop-opacity=".13"/>
      <stop offset="100%" stop-color="#63ffb4" stop-opacity="0"/>
    </radialGradient>
    <filter id="c1gf" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>.cf1{stroke-dasharray:5 4;animation:flow 1.6s linear infinite;}</style>
  </defs>
  <rect width="256" height="256" fill="url(#c1rg)"/>
  <circle cx="44" cy="100" r="18" fill="none" stroke="rgba(99,255,180,.45)" stroke-width="1.5" filter="url(#c1gf)"/>
  <circle cx="44" cy="100" r="5" fill="#63ffb4"/>
  <text x="44" y="126" text-anchor="middle" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(99,255,180,.5)" letter-spacing=".08em">QUERY</text>
  <line class="cf1" x1="62" y1="100" x2="88" y2="100" stroke="rgba(99,255,180,.4)" stroke-width="1"/>
  <rect x="88" y="82" width="58" height="36" rx="2" fill="rgba(99,255,180,.05)" stroke="rgba(99,255,180,.4)" stroke-width="1"/>
  <text x="117" y="97" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="#63ffb4" letter-spacing=".04em">CLASS</text>
  <text x="117" y="110" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(99,255,180,.5)" letter-spacing=".04em">-IFIER</text>
  <line class="cf1" x1="146" y1="100" x2="170" y2="100" stroke="rgba(99,255,180,.4)" stroke-width="1"/>
  <rect x="170" y="82" width="52" height="36" rx="2" fill="rgba(4,10,12,.9)" stroke="rgba(99,255,180,.7)" stroke-width="1.5"/>
  <text x="196" y="104" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="#63ffb4" filter="url(#c1gf)" letter-spacing=".04em">LLM</text>
  <circle cx="196" cy="155" r="14" fill="rgba(99,255,180,.08)" stroke="rgba(99,255,180,.5)" stroke-width="1.5" filter="url(#c1gf)"/>
  <text x="196" y="160" text-anchor="middle" font-family="IBM Plex Mono" font-size="13" fill="#63ffb4">✓</text>
  <line x1="196" y1="118" x2="196" y2="140" stroke="rgba(99,255,180,.3)" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="44" y="162" text-anchor="middle" font-family="IBM Plex Mono" font-size="11" fill="rgba(99,255,180,.8)" font-weight="600" filter="url(#c1gf)">↓21%</text>
  <text x="44" y="175" text-anchor="middle" font-family="IBM Plex Mono" font-size="6" fill="rgba(99,255,180,.4)">TruthfulQA</text>
  <text x="117" y="162" text-anchor="middle" font-family="IBM Plex Mono" font-size="11" fill="rgba(99,255,180,.7)" font-weight="600">↓32%</text>
  <text x="117" y="175" text-anchor="middle" font-family="IBM Plex Mono" font-size="6" fill="rgba(99,255,180,.35)">HaluEval</text>
</svg>`,
  },

  /* ── 02  PicPose ─────────────────────────────────────────────────── */
  {
    projectId: 'picpose',
    num: '02', accent: '#ff6b9d', accRgb: '255,107,157', bgRgb: '12,6,10', bg: '#0c060a',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c2rg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#ff6b9d" stop-opacity=".14"/>
      <stop offset="100%" stop-color="#ff6b9d" stop-opacity="0"/>
    </radialGradient>
    <filter id="c2gf" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="2.5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>.cj2{animation:nodePop 2.4s ease-in-out infinite;}</style>
  </defs>
  <rect width="256" height="256" fill="url(#c2rg)"/>
  <circle cx="128" cy="46" r="15" fill="none" stroke="rgba(255,107,157,.55)" stroke-width="1.5"/>
  <line x1="128" y1="61" x2="128" y2="118" stroke="rgba(255,107,157,.5)" stroke-width="1.5"/>
  <line x1="128" y1="76" x2="98" y2="60" stroke="rgba(255,107,157,.5)" stroke-width="1.5"/>
  <line x1="98" y1="60" x2="76" y2="44" stroke="rgba(255,107,157,.4)" stroke-width="1.5"/>
  <line x1="128" y1="76" x2="162" y2="88" stroke="rgba(255,107,157,.5)" stroke-width="1.5"/>
  <line x1="162" y1="88" x2="190" y2="78" stroke="rgba(255,107,157,.4)" stroke-width="1.5"/>
  <line x1="128" y1="118" x2="106" y2="162" stroke="rgba(255,107,157,.5)" stroke-width="1.5"/>
  <line x1="106" y1="162" x2="88" y2="196" stroke="rgba(255,107,157,.35)" stroke-width="1.5"/>
  <line x1="128" y1="118" x2="158" y2="158" stroke="rgba(255,107,157,.5)" stroke-width="1.5"/>
  <line x1="158" y1="158" x2="172" y2="190" stroke="rgba(255,107,157,.35)" stroke-width="1.5"/>
  <circle class="cj2" cx="128" cy="76" r="4.5" fill="#ff6b9d" opacity=".9"/>
  <circle class="cj2" cx="98" cy="60" r="3.5" fill="#ff6b9d" opacity=".7"/>
  <circle class="cj2" cx="76" cy="44" r="3" fill="#ff6b9d" opacity=".55"/>
  <circle class="cj2" cx="162" cy="88" r="3.5" fill="#ff6b9d" opacity=".7"/>
  <circle class="cj2" cx="190" cy="78" r="3" fill="#ff6b9d" opacity=".55"/>
  <circle class="cj2" cx="128" cy="118" r="4.5" fill="#ff6b9d" opacity=".9"/>
  <circle class="cj2" cx="106" cy="162" r="3.5" fill="#ff6b9d" opacity=".65"/>
  <circle class="cj2" cx="88" cy="196" r="3" fill="#ff6b9d" opacity=".4"/>
  <circle class="cj2" cx="158" cy="158" r="3.5" fill="#ff6b9d" opacity=".65"/>
  <circle class="cj2" cx="172" cy="190" r="3" fill="#ff6b9d" opacity=".4"/>
  <rect x="14" y="14" width="66" height="20" rx="2" fill="rgba(255,107,157,.08)" stroke="rgba(255,107,157,.3)" stroke-width="1"/>
  <text x="47" y="27" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,157,.75)" letter-spacing=".06em">NIMA 8.4/10</text>
  <text x="202" y="44" font-family="IBM Plex Mono" font-size="8.5" fill="rgba(255,107,157,.55)" filter="url(#c2gf)">★★★★</text>
  <text x="200" y="58" font-family="IBM Plex Mono" font-size="6" fill="rgba(255,107,157,.3)" letter-spacing=".06em">AESTHETIC</text>
  <text x="14" y="220" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(255,107,157,.35)" letter-spacing=".08em">RANKNET · +12% PRECISION</text>
</svg>`,
  },

  /* ── 03  Akshara Annotator ──────────────────────────────────────── */
  {
    projectId: 'akshara-annotator',
    num: '03', accent: '#f5a623', accRgb: '245,166,35', bgRgb: '10,7,2', bg: '#0a0702',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c3rg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#f5a623" stop-opacity=".12"/>
      <stop offset="100%" stop-color="#f5a623" stop-opacity="0"/>
    </radialGradient>
    <filter id="c3gf" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>
      .csl3{animation:scanDown 2.8s ease-in-out infinite;transform-origin:0 28px;}
      .cob3{animation:opPulse 1.8s ease-in-out infinite;}
    </style>
  </defs>
  <rect width="256" height="256" fill="url(#c3rg)"/>
  <rect x="68" y="28" width="120" height="158" rx="3" fill="rgba(245,166,35,.04)" stroke="rgba(245,166,35,.22)" stroke-width="1"/>
  <path d="M162 28 L188 28 L162 54 Z" fill="rgba(245,166,35,.07)" stroke="rgba(245,166,35,.2)" stroke-width="1"/>
  <line x1="84" y1="66" x2="172" y2="66" stroke="rgba(245,166,35,.18)" stroke-width="1"/>
  <line x1="84" y1="80" x2="168" y2="80" stroke="rgba(245,166,35,.13)" stroke-width="1"/>
  <line x1="84" y1="94" x2="174" y2="94" stroke="rgba(245,166,35,.18)" stroke-width="1"/>
  <line x1="84" y1="108" x2="164" y2="108" stroke="rgba(245,166,35,.13)" stroke-width="1"/>
  <line x1="84" y1="122" x2="170" y2="122" stroke="rgba(245,166,35,.18)" stroke-width="1"/>
  <line x1="84" y1="136" x2="162" y2="136" stroke="rgba(245,166,35,.13)" stroke-width="1"/>
  <line x1="84" y1="150" x2="172" y2="150" stroke="rgba(245,166,35,.18)" stroke-width="1"/>
  <line x1="84" y1="164" x2="156" y2="164" stroke="rgba(245,166,35,.12)" stroke-width="1"/>
  <line class="csl3" x1="66" y1="28" x2="190" y2="28" stroke="#f5a623" stroke-width="1.8" opacity=".7" filter="url(#c3gf)"/>
  <rect class="cob3" x="84" y="88" width="88" height="20" rx="1" fill="rgba(245,166,35,.1)" stroke="rgba(245,166,35,.6)" stroke-width="1"/>
  <text x="128" y="101" text-anchor="middle" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(245,166,35,.85)" letter-spacing=".06em">RECOGNIZED ✓</text>
  <text x="210" y="50" text-anchor="middle" font-family="IBM Plex Mono" font-size="20" fill="rgba(245,166,35,.75)" font-weight="600" filter="url(#c3gf)">94%</text>
  <text x="210" y="64" text-anchor="middle" font-family="IBM Plex Mono" font-size="6" fill="rgba(245,166,35,.4)" letter-spacing=".1em">ACCURACY</text>
  <rect x="14" y="186" width="68" height="20" rx="2" fill="rgba(245,166,35,.07)" stroke="rgba(245,166,35,.28)" stroke-width="1"/>
  <text x="48" y="199" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(245,166,35,.75)">2-Layer CNN</text>
</svg>`,
  },

  /* ── 04  VATC ────────────────────────────────────────────────────── */
  {
    projectId: 'vatc',
    num: '04', accent: '#4da6ff', accRgb: '77,166,255', bgRgb: '4,9,18', bg: '#040912',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c4rg" cx="38%" cy="42%" r="55%">
      <stop offset="0%" stop-color="#4da6ff" stop-opacity=".13"/>
      <stop offset="100%" stop-color="#4da6ff" stop-opacity="0"/>
    </radialGradient>
    <filter id="c4gf" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="2.5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>.ccur4{animation:blink .9s step-end infinite;}</style>
  </defs>
  <rect width="256" height="256" fill="url(#c4rg)"/>
  <path d="M14,92 Q24,62 36,92 Q48,122 60,92 Q72,57 84,92 Q96,127 108,92" stroke="#4da6ff" stroke-width="1.8" fill="none" opacity=".8" filter="url(#c4gf)"/>
  <path d="M14,100 Q24,82 36,100 Q48,118 60,100 Q72,78 84,100 Q96,118 108,100" stroke="rgba(77,166,255,.25)" stroke-width="1" fill="none"/>
  <line x1="116" y1="92" x2="128" y2="92" stroke="rgba(77,166,255,.5)" stroke-width="1.5"/>
  <polygon points="128,88 135,92 128,96" fill="rgba(77,166,255,.5)"/>
  <text x="74" y="46" text-anchor="middle" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(77,166,255,.55)" letter-spacing=".08em">BERT · NLP</text>
  <rect x="140" y="36" width="102" height="118" rx="3" fill="rgba(4,9,18,.88)" stroke="rgba(77,166,255,.2)" stroke-width="1"/>
  <text x="150" y="55" font-family="IBM Plex Mono" font-size="7" fill="rgba(77,166,255,.9)">def generate():</text>
  <text x="154" y="70" font-family="IBM Plex Mono" font-size="7" fill="rgba(77,166,255,.55)">  parse(voice)</text>
  <text x="154" y="84" font-family="IBM Plex Mono" font-size="7" fill="rgba(77,166,255,.55)">  tokenize()</text>
  <text x="154" y="98" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,255,255,.22)"># BERT embed</text>
  <text x="154" y="112" font-family="IBM Plex Mono" font-size="7" fill="rgba(77,166,255,.55)">  emit(code)</text>
  <text x="150" y="143" font-family="IBM Plex Mono" font-size="7" fill="rgba(77,166,255,.8)">▌<tspan class="ccur4">█</tspan></text>
  <rect x="28" y="140" width="10" height="18" rx="4" fill="none" stroke="rgba(77,166,255,.55)" stroke-width="1.3"/>
  <path d="M21 158 Q21,170 33,170 Q45,170 45,158" stroke="rgba(77,166,255,.45)" stroke-width="1.3" fill="none"/>
  <line x1="33" y1="170" x2="33" y2="178" stroke="rgba(77,166,255,.35)" stroke-width="1.3"/>
  <text x="60" y="158" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(77,166,255,.45)" letter-spacing=".08em">VOICE → CODE</text>
</svg>`,
  },

  /* ── 05  Kisan Seva ──────────────────────────────────────────────── */
  {
    projectId: 'kisan-seva',
    num: '05', accent: '#7fff6b', accRgb: '127,255,107', bgRgb: '4,10,4', bg: '#040a04',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c5rg" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#7fff6b" stop-opacity=".11"/>
      <stop offset="100%" stop-color="#7fff6b" stop-opacity="0"/>
    </radialGradient>
    <filter id="c5gf" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>.ccl5{stroke-dasharray:4 3;animation:flow 2s linear infinite;}</style>
  </defs>
  <rect width="256" height="256" fill="url(#c5rg)"/>
  <line x1="128" y1="82" x2="128" y2="148" stroke="rgba(127,255,107,.6)" stroke-width="2"/>
  <path d="M128,112 Q104,90 100,66 Q126,72 128,98" fill="rgba(127,255,107,.15)" stroke="rgba(127,255,107,.5)" stroke-width="1.2"/>
  <path d="M128,130 Q155,112 158,84 Q133,90 128,116" fill="rgba(127,255,107,.1)" stroke="rgba(127,255,107,.4)" stroke-width="1.2"/>
  <line x1="128" y1="148" x2="113" y2="166" stroke="rgba(127,255,107,.3)" stroke-width="1.2"/>
  <line x1="128" y1="148" x2="128" y2="168" stroke="rgba(127,255,107,.4)" stroke-width="1.2"/>
  <line x1="128" y1="148" x2="143" y2="166" stroke="rgba(127,255,107,.3)" stroke-width="1.2"/>
  <circle cx="54" cy="190" r="20" fill="rgba(127,255,107,.06)" stroke="rgba(127,255,107,.38)" stroke-width="1.2"/>
  <text x="54" y="194" text-anchor="middle" font-size="11" fill="rgba(127,255,107,.7)">🌾</text>
  <text x="54" y="218" text-anchor="middle" font-family="IBM Plex Mono" font-size="6" fill="rgba(127,255,107,.4)" letter-spacing=".06em">FARMER</text>
  <circle cx="202" cy="190" r="20" fill="rgba(127,255,107,.06)" stroke="rgba(127,255,107,.38)" stroke-width="1.2"/>
  <text x="202" y="194" text-anchor="middle" font-size="11" fill="rgba(127,255,107,.7)">🏪</text>
  <text x="202" y="218" text-anchor="middle" font-family="IBM Plex Mono" font-size="6" fill="rgba(127,255,107,.4)" letter-spacing=".06em">DEALER</text>
  <circle cx="128" cy="32" r="20" fill="rgba(127,255,107,.06)" stroke="rgba(127,255,107,.38)" stroke-width="1.2"/>
  <text x="128" y="36" text-anchor="middle" font-size="11" fill="rgba(127,255,107,.7)">🌱</text>
  <text x="128" y="22" text-anchor="middle" font-family="IBM Plex Mono" font-size="6" fill="rgba(127,255,107,.35)" letter-spacing=".06em">EXPERT</text>
  <line class="ccl5" x1="70" y1="178" x2="114" y2="50" stroke="rgba(127,255,107,.28)" stroke-width="1"/>
  <line class="ccl5" x1="186" y1="178" x2="142" y2="50" stroke="rgba(127,255,107,.28)" stroke-width="1"/>
  <line class="ccl5" x1="74" y1="190" x2="182" y2="190" stroke="rgba(127,255,107,.28)" stroke-width="1"/>
</svg>`,
  },

  /* ── 06  Teachable Machine ───────────────────────────────────────── */
  {
    projectId: 'teachable-machine',
    num: '06', accent: '#b06bff', accRgb: '176,107,255', bgRgb: '9,5,16', bg: '#090510',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c6rg" cx="50%" cy="43%" r="55%">
      <stop offset="0%" stop-color="#b06bff" stop-opacity=".13"/>
      <stop offset="100%" stop-color="#b06bff" stop-opacity="0"/>
    </radialGradient>
    <filter id="c6gf" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>
      .cnc6{stroke-dasharray:55;animation:nnConn 2.2s ease-in-out infinite;}
      .cnc6:nth-of-type(even){animation-delay:.35s;}
    </style>
  </defs>
  <rect width="256" height="256" fill="url(#c6rg)"/>
  <rect x="12" y="62" width="30" height="30" rx="2" fill="rgba(176,107,255,.07)" stroke="rgba(176,107,255,.28)" stroke-width="1"/>
  <text x="27" y="82" text-anchor="middle" font-size="14" fill="rgba(176,107,255,.5)">🖼</text>
  <line x1="42" y1="77" x2="56" y2="77" stroke="rgba(176,107,255,.3)" stroke-width="1" stroke-dasharray="2 2"/>
  <circle cx="66" cy="58" r="8" fill="none" stroke="rgba(176,107,255,.5)" stroke-width="1.5"/>
  <circle cx="66" cy="82" r="8" fill="none" stroke="rgba(176,107,255,.5)" stroke-width="1.5"/>
  <circle cx="66" cy="106" r="8" fill="none" stroke="rgba(176,107,255,.45)" stroke-width="1.5"/>
  <circle cx="118" cy="47" r="8" fill="rgba(176,107,255,.09)" stroke="rgba(176,107,255,.6)" stroke-width="1.5"/>
  <circle cx="118" cy="71" r="8" fill="rgba(176,107,255,.09)" stroke="rgba(176,107,255,.6)" stroke-width="1.5"/>
  <circle cx="118" cy="95" r="8" fill="rgba(176,107,255,.09)" stroke="rgba(176,107,255,.6)" stroke-width="1.5"/>
  <circle cx="118" cy="119" r="8" fill="rgba(176,107,255,.09)" stroke="rgba(176,107,255,.55)" stroke-width="1.5"/>
  <circle cx="168" cy="60" r="8" fill="rgba(176,107,255,.14)" stroke="rgba(176,107,255,.7)" stroke-width="1.5"/>
  <circle cx="168" cy="84" r="8" fill="rgba(176,107,255,.14)" stroke="rgba(176,107,255,.7)" stroke-width="1.5"/>
  <circle cx="168" cy="108" r="8" fill="rgba(176,107,255,.14)" stroke="rgba(176,107,255,.65)" stroke-width="1.5"/>
  <circle cx="216" cy="72" r="10" fill="rgba(176,107,255,.18)" stroke="#b06bff" stroke-width="1.8" filter="url(#c6gf)"/>
  <circle cx="216" cy="100" r="10" fill="rgba(176,107,255,.08)" stroke="rgba(176,107,255,.45)" stroke-width="1.5"/>
  <line class="cnc6" x1="74" y1="58" x2="110" y2="47" stroke="rgba(176,107,255,.3)" stroke-width=".8"/>
  <line class="cnc6" x1="74" y1="58" x2="110" y2="71" stroke="rgba(176,107,255,.25)" stroke-width=".8"/>
  <line class="cnc6" x1="74" y1="82" x2="110" y2="71" stroke="rgba(176,107,255,.3)" stroke-width=".8"/>
  <line class="cnc6" x1="74" y1="82" x2="110" y2="95" stroke="rgba(176,107,255,.25)" stroke-width=".8"/>
  <line class="cnc6" x1="74" y1="106" x2="110" y2="95" stroke="rgba(176,107,255,.3)" stroke-width=".8"/>
  <line class="cnc6" x1="74" y1="106" x2="110" y2="119" stroke="rgba(176,107,255,.25)" stroke-width=".8"/>
  <line class="cnc6" x1="126" y1="47" x2="160" y2="60" stroke="rgba(176,107,255,.3)" stroke-width=".8"/>
  <line class="cnc6" x1="126" y1="71" x2="160" y2="60" stroke="rgba(176,107,255,.25)" stroke-width=".8"/>
  <line class="cnc6" x1="126" y1="71" x2="160" y2="84" stroke="rgba(176,107,255,.3)" stroke-width=".8"/>
  <line class="cnc6" x1="126" y1="95" x2="160" y2="84" stroke="rgba(176,107,255,.25)" stroke-width=".8"/>
  <line class="cnc6" x1="126" y1="95" x2="160" y2="108" stroke="rgba(176,107,255,.3)" stroke-width=".8"/>
  <line class="cnc6" x1="126" y1="119" x2="160" y2="108" stroke="rgba(176,107,255,.25)" stroke-width=".8"/>
  <line class="cnc6" x1="176" y1="60" x2="206" y2="72" stroke="rgba(176,107,255,.4)" stroke-width="1"/>
  <line class="cnc6" x1="176" y1="84" x2="206" y2="72" stroke="rgba(176,107,255,.35)" stroke-width="1"/>
  <line class="cnc6" x1="176" y1="84" x2="206" y2="100" stroke="rgba(176,107,255,.3)" stroke-width="1"/>
  <line class="cnc6" x1="176" y1="108" x2="206" y2="100" stroke="rgba(176,107,255,.35)" stroke-width="1"/>
  <text x="232" y="77" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(176,107,255,.75)">CAT</text>
  <text x="232" y="105" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(176,107,255,.4)">DOG</text>
  <rect x="12" y="148" width="232" height="34" rx="2" fill="rgba(176,107,255,.04)" stroke="rgba(176,107,255,.14)" stroke-width="1"/>
  <text x="22" y="164" font-family="IBM Plex Mono" font-size="7" fill="rgba(176,107,255,.5)">model.export(format="keras")</text>
  <text x="22" y="178" font-family="IBM Plex Mono" font-size="7" fill="rgba(176,107,255,.28)"># + OpenCV snippet  ✓</text>
</svg>`,
  },

  /* ── 07  Type News ───────────────────────────────────────────────── */
  {
    projectId: 'type-news',
    num: '07', accent: '#e8c87a', accRgb: '232,200,122', bgRgb: '10,8,4', bg: '#0a0804',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c7rg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#e8c87a" stop-opacity=".1"/>
      <stop offset="100%" stop-color="#e8c87a" stop-opacity="0"/>
    </radialGradient>
    <style>
      .ccur7{animation:blink .75s step-end infinite;}
      .ck7a{animation:keypressAnim 1.8s 0s    infinite;}
      .ck7b{animation:keypressAnim 1.8s .18s  infinite;}
      .ck7c{animation:keypressAnim 1.8s .36s  infinite;}
      .ck7d{animation:keypressAnim 1.8s .54s  infinite;}
      .ck7e{animation:keypressAnim 1.8s .72s  infinite;}
    </style>
  </defs>
  <rect width="256" height="256" fill="url(#c7rg)"/>
  <text x="14" y="38" font-family="IBM Plex Mono" font-size="8.5" fill="rgba(232,200,122,.85)" letter-spacing=".03em" font-weight="600">BREAKING: AI Reshapes</text>
  <text x="14" y="53" font-family="IBM Plex Mono" font-size="8.5" fill="rgba(232,200,122,.85)" letter-spacing=".03em" font-weight="600">Global Markets in 2025</text>
  <line x1="14" y1="60" x2="242" y2="60" stroke="rgba(232,200,122,.12)" stroke-width="1"/>
  <text x="14" y="74" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.32)">The rapid advancement of artificial</text>
  <text x="14" y="87" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.22)">intelligence continues to transform...</text>
  <rect x="12" y="77" width="134" height="10" rx="1" fill="rgba(232,200,122,.07)"/>
  <text x="14" y="86" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.65)">The rapid advancement of</text>
  <text class="ccur7" x="150" y="86" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.85)">|</text>
  <rect class="ck7a" x="14" y="104" width="20" height="18" rx="2" fill="rgba(232,200,122,.06)" stroke="rgba(232,200,122,.2)" stroke-width="1"/>
  <text x="24" y="117" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.55)">Q</text>
  <rect class="ck7b" x="38" y="104" width="20" height="18" rx="2" fill="rgba(232,200,122,.06)" stroke="rgba(232,200,122,.2)" stroke-width="1"/>
  <text x="48" y="117" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.55)">W</text>
  <rect class="ck7c" x="62" y="104" width="20" height="18" rx="2" fill="rgba(232,200,122,.06)" stroke="rgba(232,200,122,.2)" stroke-width="1"/>
  <text x="72" y="117" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.55)">E</text>
  <rect class="ck7d" x="86" y="104" width="20" height="18" rx="2" fill="rgba(232,200,122,.06)" stroke="rgba(232,200,122,.2)" stroke-width="1"/>
  <text x="96" y="117" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.55)">R</text>
  <rect class="ck7e" x="110" y="104" width="20" height="18" rx="2" fill="rgba(232,200,122,.06)" stroke="rgba(232,200,122,.2)" stroke-width="1"/>
  <text x="120" y="117" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.55)">T</text>
  <rect x="134" y="104" width="20" height="18" rx="2" fill="rgba(232,200,122,.04)" stroke="rgba(232,200,122,.15)" stroke-width="1"/>
  <text x="144" y="117" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.4)">Y</text>
  <rect x="158" y="104" width="20" height="18" rx="2" fill="rgba(232,200,122,.04)" stroke="rgba(232,200,122,.12)" stroke-width="1"/>
  <text x="168" y="117" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.35)">U</text>
  <rect x="22" y="126" width="20" height="18" rx="2" fill="rgba(232,200,122,.04)" stroke="rgba(232,200,122,.14)" stroke-width="1"/>
  <text x="32" y="139" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.38)">A</text>
  <rect x="46" y="126" width="20" height="18" rx="2" fill="rgba(232,200,122,.04)" stroke="rgba(232,200,122,.14)" stroke-width="1"/>
  <text x="56" y="139" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.38)">S</text>
  <rect x="70" y="126" width="20" height="18" rx="2" fill="rgba(232,200,122,.04)" stroke="rgba(232,200,122,.14)" stroke-width="1"/>
  <text x="80" y="139" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(232,200,122,.38)">D</text>
  <text x="14" y="168" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(232,200,122,.35)" letter-spacing=".08em">SCRAPED · REAL-TIME · TYPED</text>
</svg>`,
  },

  /* ── 08  Big Little Township ─────────────────────────────────────── */
  {
    projectId: 'big-little-township',
    num: '08', accent: '#ff9f43', accRgb: '255,159,67', bgRgb: '10,6,2', bg: '#0a0602',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c8rg" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#ff9f43" stop-opacity=".12"/>
      <stop offset="100%" stop-color="#ff9f43" stop-opacity="0"/>
    </radialGradient>
    <filter id="c8gf" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="256" height="256" fill="url(#c8rg)"/>
  <circle cx="36" cy="28" r="1.5" fill="rgba(255,159,67,.45)"/>
  <circle cx="72" cy="16" r="1" fill="rgba(255,159,67,.3)"/>
  <circle cx="110" cy="26" r="1.5" fill="rgba(255,159,67,.25)"/>
  <circle cx="158" cy="20" r="1" fill="rgba(255,159,67,.35)"/>
  <circle cx="196" cy="30" r="1.5" fill="rgba(255,159,67,.3)"/>
  <circle cx="230" cy="18" r="1" fill="rgba(255,159,67,.2)"/>
  <circle cx="48" cy="48" r="1" fill="rgba(255,159,67,.2)"/>
  <circle cx="210" cy="52" r="1" fill="rgba(255,159,67,.2)"/>
  <ellipse cx="128" cy="196" rx="105" ry="7" fill="rgba(255,159,67,.04)"/>
  <polygon points="96,172 128,188 128,92 96,76" fill="rgba(255,159,67,.12)" stroke="rgba(255,159,67,.5)" stroke-width="1"/>
  <polygon points="128,188 160,172 160,76 128,92" fill="rgba(255,159,67,.07)" stroke="rgba(255,159,67,.35)" stroke-width="1"/>
  <polygon points="96,76 128,62 160,76 128,92" fill="rgba(255,159,67,.22)" stroke="rgba(255,159,67,.65)" stroke-width="1"/>
  <rect x="103" y="106" width="8" height="10" fill="rgba(255,159,67,.45)"/>
  <rect x="116" y="106" width="8" height="10" fill="rgba(255,159,67,.25)"/>
  <rect x="103" y="126" width="8" height="10" fill="rgba(255,159,67,.25)"/>
  <rect x="116" y="126" width="8" height="10" fill="rgba(255,159,67,.45)"/>
  <rect x="103" y="146" width="8" height="10" fill="rgba(255,159,67,.3)"/>
  <rect x="116" y="146" width="8" height="10" fill="rgba(255,159,67,.2)"/>
  <polygon points="44,172 72,186 72,138 44,124" fill="rgba(255,159,67,.1)" stroke="rgba(255,159,67,.38)" stroke-width="1"/>
  <polygon points="72,186 100,172 100,124 72,138" fill="rgba(255,159,67,.06)" stroke="rgba(255,159,67,.28)" stroke-width="1"/>
  <polygon points="44,124 72,110 100,124 72,138" fill="rgba(255,159,67,.18)" stroke="rgba(255,159,67,.5)" stroke-width="1"/>
  <rect x="52" y="142" width="7" height="9" fill="rgba(255,159,67,.35)"/>
  <rect x="64" y="142" width="7" height="9" fill="rgba(255,159,67,.2)"/>
  <polygon points="156,170 186,184 186,140 156,126" fill="rgba(255,159,67,.09)" stroke="rgba(255,159,67,.35)" stroke-width="1"/>
  <polygon points="186,184 216,170 216,126 186,140" fill="rgba(255,159,67,.05)" stroke="rgba(255,159,67,.22)" stroke-width="1"/>
  <polygon points="156,126 186,112 216,126 186,140" fill="rgba(255,159,67,.16)" stroke="rgba(255,159,67,.45)" stroke-width="1"/>
  <rect x="163" y="144" width="7" height="9" fill="rgba(255,159,67,.3)"/>
  <rect x="174" y="144" width="7" height="9" fill="rgba(255,159,67,.18)"/>
  <text x="128" y="30" text-anchor="middle" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(255,159,67,.35)" letter-spacing=".1em">UNITY · BLENDER · C#</text>
</svg>`,
  },

  /* ── 09  Custom Compiler ─────────────────────────────────────────── */
  {
    projectId: 'custom-compiler',
    num: '09', accent: '#00d4ff', accRgb: '0,212,255', bgRgb: '3,9,14', bg: '#03090e',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c9rg" cx="50%" cy="38%" r="55%">
      <stop offset="0%" stop-color="#00d4ff" stop-opacity=".12"/>
      <stop offset="100%" stop-color="#00d4ff" stop-opacity="0"/>
    </radialGradient>
    <filter id="c9gf" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="2.5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>.ccf9{stroke-dasharray:5 4;animation:flow 1.5s linear infinite;}</style>
  </defs>
  <rect width="256" height="256" fill="url(#c9rg)"/>
  <text x="14" y="32" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(0,212,255,.75)">int main() {</text>
  <text x="20" y="46" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(0,212,255,.5)">  int x = 42;</text>
  <text x="20" y="60" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(0,212,255,.5)">  return x;</text>
  <text x="14" y="74" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(0,212,255,.75)">}</text>
  <path class="ccf9" d="M128 36 L128 52" stroke="rgba(0,212,255,.4)" stroke-width="1.2" fill="none"/>
  <rect x="94" y="54" width="68" height="28" rx="2" fill="rgba(0,212,255,.06)" stroke="rgba(0,212,255,.4)" stroke-width="1"/>
  <text x="128" y="71" text-anchor="middle" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(0,212,255,.85)" letter-spacing=".06em">LEXER</text>
  <text x="172" y="62" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(0,212,255,.5)">[INT]</text>
  <text x="172" y="74" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(0,212,255,.38)">[ID:x]</text>
  <text x="172" y="86" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(0,212,255,.25)">[NUM]</text>
  <path class="ccf9" d="M128 82 L128 98" stroke="rgba(0,212,255,.4)" stroke-width="1.2" fill="none"/>
  <rect x="94" y="100" width="68" height="28" rx="2" fill="rgba(0,212,255,.07)" stroke="rgba(0,212,255,.5)" stroke-width="1"/>
  <text x="128" y="117" text-anchor="middle" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(0,212,255,.9)" letter-spacing=".06em">PARSER</text>
  <text x="14" y="110" font-family="IBM Plex Mono" font-size="6" fill="rgba(0,212,255,.35)">AST:</text>
  <text x="14" y="122" font-family="IBM Plex Mono" font-size="6" fill="rgba(0,212,255,.28)">main()</text>
  <line x1="20" y1="125" x2="20" y2="136" stroke="rgba(0,212,255,.18)" stroke-width="1"/>
  <text x="24" y="137" font-family="IBM Plex Mono" font-size="6" fill="rgba(0,212,255,.22)">decl(x=42)</text>
  <path class="ccf9" d="M128 128 L128 144" stroke="rgba(0,212,255,.4)" stroke-width="1.2" fill="none"/>
  <rect x="84" y="146" width="88" height="28" rx="2" fill="rgba(3,9,14,.95)" stroke="rgba(0,212,255,.65)" stroke-width="1.5" filter="url(#c9gf)"/>
  <text x="128" y="163" text-anchor="middle" font-family="IBM Plex Mono" font-size="7.5" fill="#00d4ff" letter-spacing=".06em">CODE GEN</text>
  <text x="184" y="128" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(0,212,255,.5)">01001000</text>
  <text x="184" y="140" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(0,212,255,.35)">10110001</text>
  <text x="184" y="152" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(0,212,255,.2)">00101110</text>
</svg>`,
  },

  /* ── 10  XINU OS ─────────────────────────────────────────────────── */
  {
    projectId: 'modified-xinu',
    num: '10', accent: '#c8d4e8', accRgb: '200,212,232', bgRgb: '3,3,5', bg: '#030305',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c10rg" cx="50%" cy="38%" r="60%">
      <stop offset="0%" stop-color="#c8d4e8" stop-opacity=".07"/>
      <stop offset="100%" stop-color="#c8d4e8" stop-opacity="0"/>
    </radialGradient>
    <style>
      .ccur10{animation:blink 1s step-end infinite;}
      .clr1{animation:lineReveal 3.2s 0s    linear infinite;}
      .clr2{animation:lineReveal 3.2s .65s  linear infinite;}
      .clr3{animation:lineReveal 3.2s 1.3s  linear infinite;}
      .clr4{animation:lineReveal 3.2s 1.95s linear infinite;}
    </style>
  </defs>
  <rect width="256" height="256" fill="url(#c10rg)"/>
  <rect x="0" y="0" width="256" height="26" fill="rgba(200,212,232,.04)"/>
  <circle cx="14" cy="13" r="4.5" fill="rgba(255,95,87,.55)"/>
  <circle cx="27" cy="13" r="4.5" fill="rgba(255,189,46,.55)"/>
  <circle cx="40" cy="13" r="4.5" fill="rgba(40,200,64,.55)"/>
  <text x="128" y="17" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(200,212,232,.3)" letter-spacing=".1em">xinu — shell</text>
  <line x1="0" y1="26" x2="256" y2="26" stroke="rgba(200,212,232,.06)" stroke-width="1"/>
  <text class="clr1" x="12" y="46" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(200,212,232,.9)">xinu$ <tspan fill="rgba(200,212,232,.6)">boot</tspan></text>
  <text class="clr2" x="12" y="61" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(200,212,232,.55)">  XINU OS v2.1 — Modified</text>
  <text class="clr2" x="12" y="75" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(200,212,232,.38)">  Custom shell loaded ✓</text>
  <text class="clr3" x="12" y="92" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(200,212,232,.9)">xinu$ <tspan fill="rgba(200,212,232,.6)">ls /vfs</tspan></text>
  <text class="clr3" x="12" y="106" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(200,212,232,.38)">  /bin  /etc  /tmp  /proc</text>
  <text class="clr4" x="12" y="122" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(200,212,232,.9)">xinu$ <tspan fill="rgba(200,212,232,.6)">ps aux</tspan></text>
  <text class="clr4" x="12" y="136" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(200,212,232,.32)">  PID  CMD      STATE</text>
  <text class="clr4" x="12" y="150" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(200,212,232,.32)">  001  shell    RUNNING</text>
  <text class="clr4" x="12" y="164" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(200,212,232,.22)">  002  init     SLEEP</text>
  <text x="12" y="180" font-family="IBM Plex Mono" font-size="7.5" fill="rgba(200,212,232,.8)">xinu$ <tspan class="ccur10">█</tspan></text>
</svg>`,
  },

  /* ── 11  Assembly Simulator ──────────────────────────────────────── */
  {
    projectId: 'asm-simulator',
    num: '11', accent: '#ff6b6b', accRgb: '255,107,107', bgRgb: '10,3,3', bg: '#0a0303',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c11rg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#ff6b6b" stop-opacity=".12"/>
      <stop offset="100%" stop-color="#ff6b6b" stop-opacity="0"/>
    </radialGradient>
    <filter id="c11gf" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>
      .crp1{animation:regPulse  1.6s ease-in-out infinite;}
      .crp2{animation:regPulse2 1.6s .55s ease-in-out infinite;}
      .cip11{animation:ipSlide 2.2s ease-in-out infinite;}
    </style>
  </defs>
  <rect width="256" height="256" fill="url(#c11rg)"/>
  <text x="128" y="28" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="rgba(255,107,107,.55)" letter-spacing=".15em">ARM ARCHITECTURE</text>
  <rect class="crp1" x="14" y="38" width="88" height="16" rx="1" stroke="rgba(255,107,107,.38)" stroke-width="1"/>
  <text x="22" y="50" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.75)">R0</text>
  <text x="46" y="50" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.5)">0x0000002A</text>
  <rect class="crp2" x="14" y="58" width="88" height="16" rx="1" stroke="rgba(255,107,107,.28)" stroke-width="1"/>
  <text x="22" y="70" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.65)">R1</text>
  <text x="46" y="70" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.4)">0x00000010</text>
  <rect x="14" y="78" width="88" height="16" rx="1" fill="rgba(255,107,107,.04)" stroke="rgba(255,107,107,.2)" stroke-width="1"/>
  <text x="22" y="90" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.55)">R2</text>
  <text x="46" y="90" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.3)">0x00000000</text>
  <rect x="14" y="98" width="88" height="16" rx="1" fill="rgba(255,107,107,.04)" stroke="rgba(255,107,107,.16)" stroke-width="1"/>
  <text x="22" y="110" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.45)">SP</text>
  <text x="46" y="110" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.25)">0xBEEF0100</text>
  <rect x="14" y="118" width="88" height="16" rx="1" fill="rgba(255,107,107,.03)" stroke="rgba(255,107,107,.14)" stroke-width="1"/>
  <text x="22" y="130" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.38)">LR</text>
  <text x="46" y="130" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.2)">0x00000080</text>
  <text class="cip11" x="112" y="52" font-family="IBM Plex Mono" font-size="8" fill="#ff6b6b" filter="url(#c11gf)">▶</text>
  <text x="126" y="52" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.85)">MOV R0, #42</text>
  <text x="126" y="68" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.55)">ADD R1, R0, #8</text>
  <text x="126" y="84" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.5)">STR R0, [SP]</text>
  <text x="126" y="100" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.35)">BL  func</text>
  <text x="126" y="116" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.3)">CMP R0, R1</text>
  <text x="126" y="132" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.22)">BEQ exit</text>
  <line x1="14" y1="150" x2="242" y2="150" stroke="rgba(255,107,107,.1)" stroke-width="1"/>
  <rect x="14" y="158" width="66" height="22" rx="2" fill="rgba(255,107,107,.05)" stroke="rgba(255,107,107,.2)" stroke-width="1"/>
  <text x="47" y="172" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.5)">COMPILER</text>
  <rect x="88" y="158" width="80" height="22" rx="2" fill="rgba(255,107,107,.05)" stroke="rgba(255,107,107,.2)" stroke-width="1"/>
  <text x="128" y="172" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.5)">ASSEMBLER</text>
  <rect x="176" y="158" width="66" height="22" rx="2" fill="rgba(255,107,107,.07)" stroke="rgba(255,107,107,.3)" stroke-width="1"/>
  <text x="209" y="172" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="rgba(255,107,107,.6)">VM</text>
</svg>`,
  },

  /* ── 12  Blog Detection ──────────────────────────────────────────── */
  {
    projectId: 'blog-detection',
    num: '12', accent: '#26c6da', accRgb: '38,198,218', bgRgb: '3,10,12', bg: '#030a0c',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c12rg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#26c6da" stop-opacity=".12"/>
      <stop offset="100%" stop-color="#26c6da" stop-opacity="0"/>
    </radialGradient>
    <filter id="c12gf" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>
      .cbp{animation:barPulse 2.4s ease-in-out infinite;}
      .cbp:nth-of-type(2){animation-delay:.25s;}
      .cbp:nth-of-type(3){animation-delay:.5s;}
      .ctk{animation:tokenFade 2.6s ease-in-out infinite;}
      .ctk:nth-of-type(2){animation-delay:.35s;}
      .ctk:nth-of-type(3){animation-delay:.7s;}
      .ctk:nth-of-type(4){animation-delay:1.05s;}
    </style>
  </defs>
  <rect width="256" height="256" fill="url(#c12rg)"/>
  <text x="12" y="34" font-family="IBM Plex Mono" font-size="7" fill="rgba(38,198,218,.5)">"The future of technology and</text>
  <text x="12" y="47" font-family="IBM Plex Mono" font-size="7" fill="rgba(38,198,218,.38)"> machine learning in healthcare"</text>
  <rect class="ctk" x="12" y="56" width="44" height="14" rx="2" fill="rgba(38,198,218,.09)" stroke="rgba(38,198,218,.35)" stroke-width=".8"/>
  <text x="34" y="66" text-anchor="middle" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(38,198,218,.75)">future</text>
  <rect class="ctk" x="60" y="56" width="52" height="14" rx="2" fill="rgba(38,198,218,.09)" stroke="rgba(38,198,218,.35)" stroke-width=".8"/>
  <text x="86" y="66" text-anchor="middle" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(38,198,218,.75)">technology</text>
  <rect class="ctk" x="116" y="56" width="44" height="14" rx="2" fill="rgba(38,198,218,.09)" stroke="rgba(38,198,218,.35)" stroke-width=".8"/>
  <text x="138" y="66" text-anchor="middle" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(38,198,218,.75)">learning</text>
  <rect class="ctk" x="164" y="56" width="52" height="14" rx="2" fill="rgba(38,198,218,.09)" stroke="rgba(38,198,218,.35)" stroke-width=".8"/>
  <text x="190" y="66" text-anchor="middle" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(38,198,218,.75)">healthcare</text>
  <path d="M128 74 L128 90" stroke="rgba(38,198,218,.38)" stroke-width="1" stroke-dasharray="3 3"/>
  <rect x="86" y="92" width="84" height="30" rx="3" fill="rgba(38,198,218,.06)" stroke="rgba(38,198,218,.55)" stroke-width="1.5" filter="url(#c12gf)"/>
  <text x="128" y="111" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="#26c6da" letter-spacing=".08em">BERT</text>
  <path d="M128 122 L128 138" stroke="rgba(38,198,218,.38)" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="12" y="152" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(38,198,218,.5)" letter-spacing=".06em">TECHNOLOGY</text>
  <rect class="cbp" x="12" y="155" width="154" height="10" rx="1" fill="rgba(38,198,218,.18)" stroke="rgba(38,198,218,.5)" stroke-width=".8"/>
  <text x="172" y="163" font-family="IBM Plex Mono" font-size="7" fill="rgba(38,198,218,.8)">0.87</text>
  <text x="12" y="176" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(38,198,218,.35)" letter-spacing=".06em">SCIENCE</text>
  <rect class="cbp" x="12" y="179" width="88" height="10" rx="1" fill="rgba(38,198,218,.1)" stroke="rgba(38,198,218,.3)" stroke-width=".8"/>
  <text x="106" y="187" font-family="IBM Plex Mono" font-size="7" fill="rgba(38,198,218,.5)">0.50</text>
  <text x="12" y="200" font-family="IBM Plex Mono" font-size="6.5" fill="rgba(38,198,218,.22)" letter-spacing=".06em">HEALTH</text>
  <rect class="cbp" x="12" y="203" width="52" height="10" rx="1" fill="rgba(38,198,218,.06)" stroke="rgba(38,198,218,.2)" stroke-width=".8"/>
  <text x="70" y="211" font-family="IBM Plex Mono" font-size="7" fill="rgba(38,198,218,.35)">0.30</text>
</svg>`,
  },
];
