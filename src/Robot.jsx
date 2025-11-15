import React from 'react'

export default function Robot() {
  return (
    <div className="robot" aria-hidden>
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rb-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#646cff" />
            <stop offset="100%" stopColor="#61dafb" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Antenna */}
        <circle cx="70" cy="16" r="6" fill="url(#rb-grad)" filter="url(#glow)"/>
        <rect x="68" y="22" width="4" height="14" rx="2" fill="#aab4ff" />
        {/* Head */}
        <rect x="32" y="36" width="76" height="50" rx="12" fill="#10131a" stroke="#2a2f3c"/>
        <rect x="40" y="48" width="60" height="18" rx="9" fill="#0e1220" stroke="#394157" />
        {/* Eyes */}
        <circle className="eye eye-l" cx="52" cy="57" r="6" fill="#8ef6ff" />
        <circle className="eye eye-r" cx="88" cy="57" r="6" fill="#8ef6ff" />
        {/* Mouth */}
        <rect x="54" y="68" width="32" height="8" rx="4" fill="#283048" />
        {/* Body */}
        <rect x="40" y="90" width="60" height="40" rx="10" fill="#10131a" stroke="#2a2f3c"/>
        {/* Arms */}
        <rect x="24" y="94" width="14" height="26" rx="7" fill="#10131a" stroke="#2a2f3c"/>
        <rect x="102" y="94" width="14" height="26" rx="7" fill="#10131a" stroke="#2a2f3c"/>
      </svg>
    </div>
  )
}


