import React, { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile"; // обязательно подключи

const heartColors = [
  "#fb7185", "#fda4af", "#fbcfe8", "#f472b6",
  "#be185d", "#fee2e2", "#ae5dba"
];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const HeartSVG = ({ color, size }: { color: string; size: number }) => (
  <svg width={size} height={(size * 28) / 32} viewBox="0 0 32 28" fill="none">
    <path
      d="M23.5 2.5C26.54 2.5 29 4.96 29 8c0 7.56-12.27 15.41-12.27 15.41a2.5 2.5 0 01-2.46 0S3 15.56 3 8a5.5 5.5 0 016-5.5c2.28 0 4.25 1.44 5.27 3.54C16.75 3.94 18.72 2.5 21 2.5h2.5z"
      fill={color}
      opacity="0.65"
    />
  </svg>
);

export default function FloatingHearts() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const heartsNum = isMobile ? 6 : 14;

  useEffect(() => {
    const hearts = ref.current?.querySelectorAll<HTMLDivElement>(".fh-heart");
    if (!hearts) return;

    hearts.forEach((el, i) => {
      const delay = random(0, 6);
      const duration = random(10, 20);
      const size = random(0.8, 1.4);
      const blur = random(0, 1.2);
      const xOffset = random(-8, 8);

      const isLeft = i < heartsNum / 2;
      const left = isMobile
        ? random(isLeft ? 5 : 70, isLeft ? 25 : 90)
        : random(isLeft ? 0 : 75, isLeft ? 25 : 95);

      el.style.setProperty("--fh-delay", `${delay}s`);
      el.style.setProperty("--fh-duration", `${duration}s`);
      el.style.setProperty("--fh-left", `${left}vw`);
      el.style.setProperty("--fh-scale", `${size}`);
      el.style.setProperty("--fh-blur", `${blur}px`);
      el.style.setProperty("--fh-x", `${xOffset}vw`);
    });
  }, [isMobile]);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 w-full h-full z-0 overflow-hidden">
      {Array.from({ length: heartsNum }).map((_, i) => {
        const size = isMobile ? 20 : 32;
        return (
          <div
            className="fh-heart absolute"
            key={i}
            style={{
              bottom: -36,
              left: 0,
              animation: "floating-heart var(--fh-duration,12s) linear var(--fh-delay,0s) infinite",
              willChange: "transform, opacity",
              opacity: 0.25 + Math.random() * 0.6,
              transform: `scale(var(--fh-scale)) translateX(0)`,
              filter: `blur(var(--fh-blur))`,
            }}
          >
            <div style={{ transform: `rotate(${random(-20, 20)}deg)` }}>
              <HeartSVG color={heartColors[i % heartColors.length]} size={size} />
            </div>
          </div>
        );
      })}
    </div>
  );
}