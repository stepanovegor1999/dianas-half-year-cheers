
import { Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const handleClick = () => {
    toast({
      title: "Люблю тебя!",
      description: "С тобой хочу еще много-много полгодий 💞",
      duration: 4000,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative flex flex-col gap-8 items-center py-14 px-6 bg-white/90 rounded-3xl shadow-xl border border-rose-100 max-w-xl w-full animate-fade-in">
        <div className="animate-fade-in">
          <Heart className="text-pink-500 drop-shadow-md" size={84} strokeWidth={1.5} fill="#fb7185" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-playfair text-pink-600 drop-shadow animate-fade-in text-center">
          Диана, с полугодием нашей любви!
        </h1>
        <div className="text-lg md:text-xl font-playfair text-gray-700 animate-fade-in text-center max-w-lg">
          Каждый день с тобой — настоящее счастье.<br />Спасибо за эти 6 волшебных месяцев! 💖
        </div>
        <button
          onClick={handleClick}
          className="mt-2 px-8 py-3 bg-gradient-to-br from-pink-400 to-pink-300 text-white text-lg rounded-full shadow-lg font-playfair transition-transform transform hover:scale-105 hover:shadow-pink-200 focus:outline-none outline-none animate-fade-in"
        >
          Люблю тебя!
        </button>
      </div>
    </div>
  );
};

export default Index;
