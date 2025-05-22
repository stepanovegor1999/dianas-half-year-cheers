import { Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import MemoryCard from "@/components/MemoryCard";
import LoveQuotes from "@/components/LoveQuotes";
import FloatingHearts from "@/components/FloatingHearts";

const memories = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Прогулка в парке",
    description: "Наш первый совместный пикник на траве — только мы и летний ветерочек.",
  },
  {
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    title: "Знакомство с котиком",
    description: "Твой пушистик пытался занять все место на коленях и сразу меня полюбил!",
  },
  {
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    title: "Вечера с фильмами",
    description: "Обнимашки под пледом и просмотр любимых фильмов. Самые уютные моменты.",
  },
  {
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    title: "Мечтательные разговоры",
    description: "Бесконечные беседы за кофе и построение совместных планов.",
  },
];

const Index = () => {
  const handleClick = () => {
    toast({
      title: "Люблю тебя!",
      description: "С тобой хочу еще много-много полгодий 💞",
      duration: 4000,
    });
  };

  return (
    <>
      <FloatingHearts />
      <div className="flex min-h-screen items-center justify-center pb-16 relative z-10">
        <div className="main-love-block relative flex flex-col gap-8 items-center py-14 px-6 bg-white/90 rounded-3xl shadow-xl border border-rose-100 max-w-xl w-full animate-fade-in">
          {/* Блок цитат */}
          <LoveQuotes />
          <div className="animate-fade-in">
            <Heart className="text-pink-500 drop-shadow-md pulse" size={84} strokeWidth={1.5} fill="#fb7185" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-pink-600 drop-shadow animate-fade-in text-center">
            Диана, с полугодием нашей любви!
          </h1>
          <div className="text-lg md:text-xl font-playfair text-gray-700 animate-fade-in text-center max-w-lg">
            Каждый день с тобой — настоящее счастье.<br />Спасибо за эти 6 волшебных месяцев! 💖
          </div>
          <button
            onClick={handleClick}
            className="mt-2 px-8 py-3 bg-gradient-to-br from-pink-400 to-pink-300 text-white text-lg rounded-full shadow-lg font-playfair transition-transform transform hover:scale-105 hover:shadow-pink-200 focus:outline-none outline-none animate-fade-in pulse"
          >
            Люблю тебя!
          </button>
          {/* Секция воспоминаний */}
          <div className="w-full flex flex-col items-center gap-4 mt-8">
            <h2 className="text-2xl font-playfair text-pink-500 font-bold animate-fade-in">✨ Наши воспоминания ✨</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full animate-fade-in">
              {memories.map((m, i) => (
                <MemoryCard {...m} key={m.title} delay={300 + i * 150} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
