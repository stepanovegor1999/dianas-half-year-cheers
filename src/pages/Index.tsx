import { Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import MemoryCard from "@/components/MemoryCard";
import LoveQuotes from "@/components/LoveQuotes";
import FloatingHearts from "@/components/FloatingHearts";
import FloatingKissesRight from "@/components/FloatingKissesRight";

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
	<div>
      <FloatingHearts />
	</div>

      <div className="flex min-h-screen items-center justify-center pb-16 relative z-10">
        <div className="main-love-block relative flex flex-col gap-8 items-center py-14 px-6 bg-white/90 rounded-3xl shadow-xl border border-rose-100 max-w-xl w-full animate-fade-in">
          <div className="animate-fade-in">
            <Heart className="text-pink-500 drop-shadow-md pulse" size={84} strokeWidth={1.5} fill="#fb7185" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-pink-600 drop-shadow animate-fade-in text-center">
            Дианочка, с полугодием нашей любви!
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

          <div className="w-full mt-10">
			<LoveQuotes />
		</div>
        </div>
		<FloatingKissesRight />
      </div>
	  	  
    </>
  );
};
const memories = [
  {
    image: "/photos/our-walk.jpg", // загружено в public/photos/
    title: "Наша прогулка",
    description: "То самое вечернее солнце и ты в лучах.",
  },
  {
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    title: "Котик 🐾",
    description: " 😄",
  },
  // ...
];

export default Index;
