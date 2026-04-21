"use client";

import { useState } from "react";

const images = [
  {
    src: "/images/viber_image_2026-04-21_11-30-12-452.jpg",
    alt: "Rezervacija prevoza online",
  },
  {
    src: "/images/viber_image_2026-04-21_11-30-13-608.jpg",
    alt: "Obala Istre",
  },
  {
    src: "/images/viber_image_2026-04-21_11-30-13-677.jpg",
    alt: "Rovinj - Istra",
  },
  {
    src: "/images/viber_image_2026-04-21_11-45-41-871.jpg",
    alt: "Mapa rute Novi Sad - Istra",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="o-nama" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8">Galerija</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-md group cursor-pointer"
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl leading-none hover:text-gray-300 transition"
            onClick={() => setSelected(null)}
          >
            &times;
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
