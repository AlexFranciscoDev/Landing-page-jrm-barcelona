import { useEffect, useState } from "react";
import './ImageCarousel.css';

// Images
const images = [
  { src: "/img/about-us1.webp", alt: "Our pastora" },
  { src: "/img/about-us2.webp", alt: "Praise and worship" },
  { src: "/img/about-us3.webp", alt: "Sharing the gospel" },
];

export const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Index starts with the first image
  //const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % images.length;
      });
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="carousel">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              aria-hidden={index !== activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
