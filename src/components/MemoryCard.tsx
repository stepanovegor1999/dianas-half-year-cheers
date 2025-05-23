import React from "react";

interface MemoryCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

const MemoryCard: React.FC<MemoryCardProps> = ({
  image,
  title,
  description,
  delay = 0,
}) => (
  <div
    className="bg-white/90 rounded-2xl shadow-md border border-rose-100 flex flex-col items-center overflow-hidden hover:shadow-pink-300 transition-all duration-300 transform hover:scale-[1.025] animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      loading="lazy"
    />
    <div className="p-4 text-center flex-1 flex flex-col justify-between">
      <h3 className="font-playfair text-xl text-pink-600 mb-2">{title}</h3>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

export default MemoryCard;
