"use client";

import { useEffect, useState } from "react";

const TOTAL_HAIRS = 8;
const PLUCK_INTERVAL = 2500;

export default function HairPullScene() {
  const [pluckedIndex, setPluckedIndex] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPluckedIndex((prev) => {
        if (prev >= TOTAL_HAIRS - 1) return -1;
        return prev + 1;
      });
    }, PLUCK_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hair-scene love-card mt-8 py-6 px-4 max-w-sm mx-auto">
      {/* Head silhouette with hairs */}
      <div className="hair-scene-stage">
        <div className="hair-head">
          {/* Hair strands */}
          <div className="hair-strands">
            {Array.from({ length: TOTAL_HAIRS }).map((_, i) => (
              <div
                key={i}
                className={`hair-strand ${i <= pluckedIndex ? "plucked" : ""}`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  left: `${12 + i * (76 / (TOTAL_HAIRS - 1))}%`,
                  transform: `rotate(${-15 + i * (30 / (TOTAL_HAIRS - 1))}deg)`,
                  height: `${28 + Math.sin(i * 0.8) * 8}px`,
                }}
              />
            ))}
          </div>
          {/* Head circle */}
          <div className="hair-head-circle">
            <span className="hair-face">😰</span>
          </div>
        </div>

        {/* Floating plucked hairs */}
        <div className="plucked-hairs-area">
          {Array.from({ length: TOTAL_HAIRS }).map((_, i) => (
            <div
              key={i}
              className={`plucked-hair-float ${i <= pluckedIndex ? "visible" : ""}`}
              style={{
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        {/* Scissors */}
        <div className={`hair-scissors ${pluckedIndex >= 0 ? "snipping" : ""}`}>
          ✂️
        </div>
      </div>

      {/* Retro VHS badge */}
      <div className="vhs-badge mt-5">
        <div className="vhs-scanlines" />
        <div className="vhs-content">
          <div className="vhs-top-row">
            <span className="vhs-rec-dot" />
            <span className="vhs-rec-text">REC</span>
            <span className="vhs-play">▶ PLAY</span>
          </div>
          <p className="vhs-title">A Empregada</p>
          <p className="vhs-subtitle">cena clássica</p>
          <div className="vhs-timecode">00:04:27</div>
        </div>
      </div>

    </div>
  );
}
