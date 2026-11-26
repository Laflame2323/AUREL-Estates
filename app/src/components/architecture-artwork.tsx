import type { JSX } from "react";

export function ArchitectureArtwork() {
  return (
    <svg className="aurel-architecture" viewBox="0 0 900 650" role="img" aria-label="Architectural illustration of a contemporary luxury residence">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#dce6df"/><stop offset=".55" stopColor="#a9bcb4"/><stop offset="1" stopColor="#718982"/></linearGradient>
        <linearGradient id="stone" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f5f3e9"/><stop offset="1" stopColor="#aebbb2"/></linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a8c2bd" stopOpacity=".85"/><stop offset="1" stopColor="#244448" stopOpacity=".95"/></linearGradient>
        <filter id="soft"><feGaussianBlur stdDeviation="24"/></filter>
      </defs>
      <ellipse cx="620" cy="525" rx="280" ry="58" fill="#344e49" opacity=".2" filter="url(#soft)"/>
      <path d="M0 470 Q180 430 330 465 T900 450 V650 H0Z" fill="#8fa49a" opacity=".55"/>
      <path d="M80 485 L260 370 L510 370 L690 455 L690 560 L80 560Z" fill="#617d73" opacity=".35"/>
      <path d="M155 355 L420 190 L770 330 L770 485 L155 485Z" fill="url(#stone)"/>
      <path d="M155 355 L420 190 L770 330 L720 350 L420 235 L210 370Z" fill="#f7f5ed"/>
      <path d="M420 235 L420 485 L155 485 L155 355Z" fill="#d5ddd5"/>
      <path d="M420 235 L770 330 L770 485 L420 485Z" fill="#b7c5bc"/>
      <path d="M470 280 L735 350 L735 485 L470 485Z" fill="url(#glass)"/>
      <path d="M470 280 L470 485 M560 304 L560 485 M650 328 L650 485" stroke="#dce6df" strokeWidth="5" opacity=".7"/>
      <path d="M210 370 L390 265 L390 485 L210 485Z" fill="#eef0e9"/>
      <path d="M250 385 L350 327 L350 485 L250 485Z" fill="#78948b"/>
      <path d="M420 190 L770 330 L770 350 L420 215 L155 380 L155 355Z" fill="#fbfaf4"/>
      <path d="M95 485 H805" stroke="#e8eee7" strokeWidth="5" opacity=".8"/>
      <path d="M510 485 Q520 410 570 385 Q620 360 670 390 Q710 415 720 485" fill="#304c45" opacity=".85"/>
      <path d="M510 485 Q520 410 570 385 Q620 360 670 390 Q710 415 720 485" fill="none" stroke="#d8e1d9" strokeWidth="3" opacity=".7"/>
      <path d="M110 515 Q140 455 165 440 M130 520 Q160 465 205 450 M745 520 Q780 450 820 438" stroke="#526e63" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <g fill="#6d897c"><ellipse cx="125" cy="455" rx="35" ry="15" transform="rotate(-28 125 455)"/><ellipse cx="190" cy="453" rx="42" ry="16" transform="rotate(-12 190 453)"/><ellipse cx="800" cy="450" rx="48" ry="18" transform="rotate(-20 800 450)"/></g>
      <path d="M0 565 Q250 535 450 570 T900 560" stroke="#f2f3ef" strokeWidth="2" fill="none" opacity=".65"/>
    </svg>
  );
}

