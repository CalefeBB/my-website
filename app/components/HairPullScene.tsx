"use client";

import { useEffect, useState } from "react";

export default function HairPullScene() {
  const [pulling, setPulling] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const cycle = (next: boolean, delay: number) => {
      t = setTimeout(() => {
        setPulling(next);
        cycle(!next, next ? 2200 : 2800);
      }, delay);
    };
    cycle(true, 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="empregada-scene">
      <svg
        viewBox="0 0 320 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%" }}
        aria-label="A Empregada — cena clássica"
      >
        <defs>
          <radialGradient id="emp-bg" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#2a0018" />
            <stop offset="100%" stopColor="#060008" />
          </radialGradient>
          <linearGradient id="emp-hair" x1="0%" y1="0%" x2="60%" y2="100%">
            <stop offset="0%" stopColor="#F0D86A" />
            <stop offset="50%" stopColor="#C8980E" />
            <stop offset="100%" stopColor="#8A6500" />
          </linearGradient>
          <linearGradient id="emp-hair2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5E080" />
            <stop offset="100%" stopColor="#A87C08" />
          </linearGradient>
          <linearGradient id="emp-skin" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FECFB8" />
            <stop offset="100%" stopColor="#E8907A" />
          </linearGradient>
          <linearGradient id="emp-skin2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5B89A" />
            <stop offset="100%" stopColor="#D87060" />
          </linearGradient>
          <radialGradient id="emp-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.68)" />
          </radialGradient>
          <filter id="emp-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="emp-shadow">
            <feDropShadow dx="1" dy="3" stdDeviation="4" floodColor="rgba(0,0,0,0.55)" />
          </filter>
          <pattern id="emp-scan" width="1" height="4" patternUnits="userSpaceOnUse">
            <rect width="1" height="2" fill="transparent" />
            <rect y="2" width="1" height="2" fill="rgba(0,0,0,0.1)" />
          </pattern>
        </defs>

        {/* ── BACKGROUND ── */}
        <rect width="320" height="400" fill="url(#emp-bg)" />
        <ellipse cx="160" cy="130" rx="130" ry="100" fill="rgba(180,80,10,0.06)" />

        {/* ── BODY / SHOULDERS ── */}
        <path
          d="M 38,400 Q 64,315 77,272 Q 95,248 120,244 L 200,244 Q 225,248 243,272 Q 256,315 282,400 Z"
          fill="#12091e"
        />
        <path
          d="M 120,244 Q 140,237 160,235 Q 180,237 200,244 Q 188,262 160,265 Q 132,262 120,244 Z"
          fill="#1c0f30"
        />

        {/* ── NECK ── */}
        <path
          d="M 143,202 Q 139,224 137,244 L 183,244 Q 181,224 177,202 Z"
          fill="url(#emp-skin2)"
        />

        {/* ── HAIR BACK LAYER ── */}
        {/* Left strands */}
        <path
          className={pulling ? "emp-hair-pull" : "emp-hair-sway"}
          d="M 115,98 Q 86,140 70,210 Q 58,260 63,318 Q 66,348 70,372"
          stroke="#7A5800" strokeWidth="28" fill="none" strokeLinecap="round"
        />
        <path
          className={pulling ? "emp-hair-pull" : "emp-hair-sway"}
          d="M 118,95 Q 92,136 76,205 Q 65,254 70,312 Q 73,342 79,366"
          stroke="url(#emp-hair)" strokeWidth="18" fill="none" strokeLinecap="round"
        />
        <path
          className={pulling ? "emp-hair-pull" : "emp-hair-sway"}
          d="M 123,92 Q 99,130 87,196 Q 79,244 84,300"
          stroke="#F0D86A" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.4"
        />
        {/* Right strands */}
        <path
          d="M 205,98 Q 234,140 250,210 Q 262,260 257,318 Q 254,348 250,372"
          stroke="#7A5800" strokeWidth="28" fill="none" strokeLinecap="round"
        />
        <path
          d="M 202,95 Q 229,136 244,205 Q 255,254 250,312 Q 247,342 241,366"
          stroke="url(#emp-hair)" strokeWidth="18" fill="none" strokeLinecap="round"
        />
        <path
          d="M 197,92 Q 222,130 234,196 Q 242,244 237,300"
          stroke="#F0D86A" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.4"
        />

        {/* Top hair mass */}
        <ellipse cx="160" cy="82" rx="66" ry="40" fill="#7A5800" />
        <ellipse cx="160" cy="76" rx="63" ry="34" fill="url(#emp-hair2)" />
        <ellipse cx="155" cy="67" rx="46" ry="22" fill="#F0D86A" opacity="0.45" />
        <path
          d="M 122,70 Q 148,58 168,62 Q 188,60 202,72"
          stroke="rgba(255,248,180,0.32)" strokeWidth="10" fill="none" strokeLinecap="round"
        />

        {/* ── FACE ── */}
        <ellipse
          cx="160" cy="158"
          rx="57" ry="67"
          fill="url(#emp-skin)"
          filter="url(#emp-shadow)"
        />
        <ellipse cx="130" cy="160" rx="22" ry="40" fill="rgba(200,100,60,0.06)" />
        <ellipse cx="190" cy="160" rx="22" ry="40" fill="rgba(200,100,60,0.06)" />
        <ellipse cx="160" cy="216" rx="36" ry="16" fill="rgba(210,110,75,0.1)" />
        <path d="M 107,122 Q 118,103 160,98 Q 202,103 213,122" fill="#9A7808" opacity="0.38" />

        {/* ── EYEBROWS ── */}
        <path d="M 123,130 Q 132,124 146,129" stroke="#6A4210" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M 174,128 Q 183,124 195,130" stroke="#6A4210" strokeWidth="3.5" fill="none" strokeLinecap="round" />

        {/* ── LEFT EYE ── */}
        <ellipse cx="136" cy="147" rx="14" ry="9" fill="white" />
        <ellipse cx="136" cy="148" rx="9" ry="9" fill="#5C3010" />
        <ellipse cx="136" cy="148" rx="5" ry="5" fill="#1A0A00" />
        <circle cx="140" cy="145" r="2.5" fill="white" opacity="0.85" />
        <circle cx="133" cy="149" r="1" fill="white" opacity="0.4" />
        <path d="M 123,141 Q 135,136 149,140" stroke="#1A0A00" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="124" y1="141" x2="121" y2="136" stroke="#1A0A00" strokeWidth="1.2" />
        <line x1="128" y1="139" x2="126" y2="134" stroke="#1A0A00" strokeWidth="1.2" />
        <line x1="132" y1="138" x2="131" y2="133" stroke="#1A0A00" strokeWidth="1.2" />
        <line x1="137" y1="137" x2="137" y2="132" stroke="#1A0A00" strokeWidth="1.2" />
        <line x1="142" y1="138" x2="143" y2="133" stroke="#1A0A00" strokeWidth="1.2" />
        <line x1="147" y1="140" x2="149" y2="136" stroke="#1A0A00" strokeWidth="1.2" />
        <path d="M 124,153 Q 136,156 148,153" stroke="rgba(100,50,10,0.35)" strokeWidth="1" fill="none" />

        {/* ── RIGHT EYE ── */}
        <ellipse cx="184" cy="147" rx="14" ry="9" fill="white" />
        <ellipse cx="184" cy="148" rx="9" ry="9" fill="#5C3010" />
        <ellipse cx="184" cy="148" rx="5" ry="5" fill="#1A0A00" />
        <circle cx="188" cy="145" r="2.5" fill="white" opacity="0.85" />
        <circle cx="181" cy="149" r="1" fill="white" opacity="0.4" />
        <path d="M 171,140 Q 185,136 197,141" stroke="#1A0A00" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="172" y1="140" x2="170" y2="135" stroke="#1A0A00" strokeWidth="1.2" />
        <line x1="176" y1="138" x2="175" y2="133" stroke="#1A0A00" strokeWidth="1.2" />
        <line x1="181" y1="137" x2="181" y2="132" stroke="#1A0A00" strokeWidth="1.2" />
        <line x1="186" y1="137" x2="187" y2="132" stroke="#1A0A00" strokeWidth="1.2" />
        <line x1="191" y1="138" x2="193" y2="133" stroke="#1A0A00" strokeWidth="1.2" />
        <line x1="196" y1="141" x2="198" y2="137" stroke="#1A0A00" strokeWidth="1.2" />
        <path d="M 172,153 Q 184,156 196,153" stroke="rgba(100,50,10,0.35)" strokeWidth="1" fill="none" />

        {/* Tear (appears when pulling) */}
        <path
          d="M 122,154 Q 120,164 123,172"
          stroke="rgba(160,215,255,0.85)" strokeWidth="2" fill="none" strokeLinecap="round"
          className={pulling ? "emp-tear" : "emp-tear-hidden"}
        />
        <ellipse
          cx="123" cy="174" rx="3" ry="4" fill="rgba(160,215,255,0.5)"
          className={pulling ? "emp-tear" : "emp-tear-hidden"}
        />

        {/* ── NOSE ── */}
        <path
          d="M 156,161 Q 152,174 155,180 Q 160,184 165,180 Q 168,174 164,161"
          stroke="rgba(180,85,55,0.32)" strokeWidth="1.5" fill="none"
        />
        <circle cx="156" cy="178" r="3.5" fill="rgba(200,110,80,0.13)" />
        <circle cx="164" cy="178" r="3.5" fill="rgba(200,110,80,0.13)" />

        {/* ── MOUTH ── */}
        <path
          d="M 140,194 Q 150,189 160,190 Q 170,189 180,194 Q 170,203 160,204 Q 150,203 140,194 Z"
          fill="#B03020"
        />
        <path d="M 147,194 Q 160,199 173,194 L 173,196 Q 160,201 147,196 Z" fill="rgba(255,240,235,0.52)" />
        <path
          d="M 140,194 Q 148,189 153,191 Q 157,189 160,190 Q 163,189 167,191 Q 172,189 180,194"
          stroke="#8A1A10" strokeWidth="0.8" fill="none"
        />
        <path
          d="M 148,192 Q 160,190 172,192"
          stroke="rgba(255,180,160,0.28)" strokeWidth="2" fill="none" strokeLinecap="round"
        />

        {/* Cheek blush */}
        <ellipse cx="111" cy="170" rx="20" ry="12" fill="rgba(255,115,85,0.15)" />
        <ellipse cx="209" cy="170" rx="20" ry="12" fill="rgba(255,115,85,0.15)" />

        {/* ── PULLING HAND ── */}
        <g className={`emp-hand ${pulling ? "emp-hand-active" : ""}`}>
          <path
            d="M 345,15 Q 310,35 292,60 Q 278,82 272,108"
            stroke="rgba(180,100,70,0.22)" strokeWidth="28" fill="none" strokeLinecap="round"
          />
          <path
            d="M 345,15 Q 310,35 292,60 Q 278,82 272,108"
            stroke="#FECFB8" strokeWidth="22" fill="none" strokeLinecap="round"
          />
          <path
            d="M 272,108 Q 268,116 264,124"
            stroke="#FECFB8" strokeWidth="20" fill="none" strokeLinecap="round"
          />
          {/* Palm */}
          <ellipse cx="256" cy="130" rx="24" ry="17" fill="#FECFB8" />
          {/* Fingers */}
          <path d="M 237,120 Q 228,111 231,102 Q 236,97 242,104 Q 244,112 242,120 Z" fill="#FECFB8" stroke="#DDA070" strokeWidth="0.6" />
          <path d="M 245,117 Q 238,108 242,100 Q 247,95 253,102 Q 254,110 252,117 Z" fill="#FECFB8" stroke="#DDA070" strokeWidth="0.6" />
          <path d="M 253,116 Q 248,107 252,100 Q 258,95 263,103 Q 263,111 260,117 Z" fill="#FECFB8" stroke="#DDA070" strokeWidth="0.6" />
          <path d="M 261,117 Q 257,109 262,102 Q 268,98 272,105 Q 272,113 268,118 Z" fill="#FECFB8" stroke="#DDA070" strokeWidth="0.6" />
          {/* Thumb */}
          <path d="M 235,127 Q 228,120 230,112 Q 234,107 240,112 Q 242,120 240,127 Z" fill="#FECFB8" stroke="#DDA070" strokeWidth="0.6" />
          {/* Knuckle */}
          <path d="M 239,116 Q 252,112 263,115" stroke="rgba(190,100,70,0.32)" strokeWidth="1" fill="none" strokeLinecap="round" />
          {/* Grabbed hair */}
          <path
            d="M 177,88 Q 208,100 250,122"
            stroke="#C8980E" strokeWidth="11" fill="none" strokeLinecap="round"
          />
          <path
            d="M 175,90 Q 210,103 252,126"
            stroke="#F5E080" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.52"
          />
        </g>

        {/* ── VIGNETTE ── */}
        <rect width="320" height="400" fill="url(#emp-vignette)" />

        {/* ── TITLE BAR ── */}
        <rect x="0" y="336" width="320" height="64" fill="rgba(0,0,0,0.84)" />
        <line x1="0" y1="336" x2="320" y2="336" stroke="#C8980E" strokeWidth="1.5" opacity="0.9" />
        <line x1="0" y1="337.5" x2="320" y2="337.5" stroke="rgba(255,220,80,0.16)" strokeWidth="0.5" />
        <text
          x="160" y="362"
          textAnchor="middle" fontSize="21" fontWeight="bold"
          fontFamily="Georgia, 'Times New Roman', serif"
          letterSpacing="5" fill="#F0D86A"
          filter="url(#emp-glow)"
        >
          A EMPREGADA
        </text>
        <text
          x="160" y="381"
          textAnchor="middle" fontSize="8.5"
          fontFamily="'Courier New', monospace"
          letterSpacing="4" fill="rgba(255,200,80,0.48)"
        >
          CENA CLÁSSICA
        </text>

        {/* ── VHS OVERLAY ── */}
        <circle cx="18" cy="17" r="5" fill="#ff2222" className="emp-rec-dot" />
        <text x="28" y="21" fontSize="8.5" fill="#ff2222" fontFamily="'Courier New', monospace" letterSpacing="2" fontWeight="bold">REC</text>
        <text x="308" y="21" fontSize="8.5" fill="rgba(255,255,255,0.3)" fontFamily="'Courier New', monospace" textAnchor="end" className="emp-timecode">00:04:27</text>

        {/* Scanlines */}
        <rect width="320" height="400" fill="url(#emp-scan)" />
      </svg>
    </div>
  );
}
