import React, { useEffect, useState } from "react";

const quotes = [
  "Диана, ты — моё утро, вечер и каждый вдох между ними.",
  "Когда ты улыбаешься, в мире становится больше света.",
  "В тот день в театре ты стала для меня главным действующим лицом всей пьесы под названием «жизнь».",
  "С тобой каждый день — это как первая весна после долгой зимы.",
  "Диана, ты — мой любимый модуль в 1С, в который я навсегда вошёл ❤️",
  "Диана, твой голос — моя любимая музыка.",
  "Каждая встреча на работе — как новое свидание. Только с кофе и уютом.",
  "Где бы ты ни была — там моё сердце.",
  "Твоя любовь — мой самый нежный оберег.",
  "Каждая минута с тобой — драгоценность, которую я бережно храню.",
  "Ты не просто часть моей жизни, ты — её смысл!",
  "Когда ты рядом, даже тишина звучит красиво.",
  "Диана, ты делаешь мой мир полным и чудесным!"
];


export default function LoveQuotes() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(hide);
  }, [idx]);

  useEffect(() => {
    if (!visible) {
      const next = setTimeout(() => {
        setIdx((prev) => (prev + 1) % quotes.length);
        setVisible(true);
      }, 500);
      return () => clearTimeout(next);
    }
  }, [visible]);

  return (
    <div className="relative min-h-[4rem] flex items-center justify-center px-4 transition-all duration-500 ease-in-out">
      <div
        key={idx}
        className={`text-center text-pink-700 text-lg md:text-2xl font-playfair italic transition-opacity duration-500 ease-in-out absolute max-w-xl ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        “{quotes[idx]}”
      </div>
    </div>
  );
}