
import React, { useEffect, useRef } from "react";

const heartsNum = 14;
const heartColors = [
  "#fb7185", "#fda4af", "#fbcfe8", "#f472b6",
  "#be185d", "#fee2e2", "#ae5dba"
];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const HeartSVG = ({ color }: { color: string }) => (
  <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
    <path
      d="M23.5 2.5C26.54 2.5 29 4.96 29 8c0 7.56-12.27 15.41-12.27 15.41a2.5 2.5 0 01-2.46 0S3 15.56 3 8a5.5 5.5 0 016-5.5c2.28 0 4.25 1.44 5.27 3.54C16.75 3.94 18.72 2.5 21 2.5h2.5z"
      fill={color}
      opacity="0.65"
    />
  </svg>
)

export default function FloatingHearts() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hearts = ref.current?.querySelectorAll<HTMLDivElement>(".fh-heart");
    if (!hearts) return;

    hearts.forEach((el, idx) => {
      const delay = random(0, 6);
      const duration = random(9, 19);
      el.style.setProperty("--fh-delay", `${delay}s`);
      el.style.setProperty("--fh-duration", `${duration}s`);
      el.style.setProperty("--fh-left", `${random(0, 96)}vw`);
      el.style.setProperty("zIndex", "0");
    });
  }, []);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 w-full h-full z-0">
      {Array.from({ length: heartsNum }).map((_, i) => (
        <div
          className="fh-heart absolute"
          key={i}
          style={{
            bottom: -36,
            left: 0,
            animation: "floating-heart var(--fh-duration,12s) linear var(--fh-delay,0s) infinite",
            willChange: "transform, opacity",
            opacity: 0.25 + Math.random() * 0.6,
          }}
        >
          <div 
            style={{ 
              transform: `scale(${random(0.6, 1.3)}) rotate(${random(-16,18)}deg)` 
            }}
          >
            <HeartSVG color={heartColors[i % heartColors.length]} />
          </div>
        </div>
      ))}
    </div>
  );
}
