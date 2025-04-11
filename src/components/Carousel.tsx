import React, { useState } from "react";

interface Projet {
  title: string;
  images: string[];
}

interface Props {
  projet: Projet;
}

const Carousel: React.FC<Props> = ({ projet }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projet.images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projet.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-64 md:h-96">
      <img
        src={projet.images[current]}
        alt={`Image ${current + 1} du projet ${projet.title}`}
        className="w-full h-full object-cover rounded-lg transition-all duration-300"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
