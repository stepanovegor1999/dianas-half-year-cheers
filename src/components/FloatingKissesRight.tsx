import React, { useEffect, useRef } from "react";

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const Kiss = () => (
  <div className="text-[22px] md:text-[26px] rotate-[12deg]">😘</div>
);

export default function FloatingKissesRight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const kisses = ref.current?.querySelectorAll(".floating");
    kisses?.forEach((el) => {
      el.setAttribute("style", `
        left: ${random(80, 96)}vw;
        animation-delay: ${random(0, 5)}s;
        animation-duration: ${random(10, 16)}s;
        transform: scale(${random(0.9, 1.3)});
        filter: blur(${random(0, 1)}px);
      `);
    });
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="floating absolute bottom-[-40px] animate-floating-heart"
        >
          <Kiss />
        </div>
      ))}
    </div>
  );
}
