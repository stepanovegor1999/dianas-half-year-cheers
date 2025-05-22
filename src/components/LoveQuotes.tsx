
import React, { useEffect, useState } from "react";

const quotes = [
  "Любовь — это когда хочется просыпаться рядом каждый день.",
  "С тобой — даже будни превращаются в праздник.",
  "Время с любимым человеком летит незаметно.",
  "Ты — самое лучшее, что со мной случалось.",
  "Где любовь — там и счастье.",
  "Люблю тебя всё сильнее с каждым днём.",
  "Счастье — это держать тебя за руку.",
  "Каждый твой взгляд — мой солнечный рассвет."
];

export default function LoveQuotes() {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3200);
    return () => clearTimeout(timer);
  }, [idx]);

  useEffect(() => {
    if (!show) {
      const next = setTimeout(() => {
        setIdx((prev) => (prev + 1) % quotes.length);
        setShow(true);
      }, 400);
      return () => clearTimeout(next);
    }
  }, [show]);

  return (
    <div className="relative h-12 flex items-center justify-center select-none" style={{minHeight:44}}>
      <span 
        key={idx} 
        className={`text-lg md:text-2xl text-pink-700 font-playfair absolute w-full left-0 right-0 text-center transition-opacity duration-400 ${show ? "opacity-100 animate-fade-in" : "opacity-0"}`}>
        {quotes[idx]}
      </span>
    </div>
  );
}
