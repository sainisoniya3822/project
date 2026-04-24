"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "Wedding",
  "Reception",
  "Engagement",
  "Cocktail",
  "Haldi",
  "Mehndi",
  "Birthdays",
  "Anniversary",
];

const galleryImages = {
  Wedding: [
    "/images/weddingimg4.jpg",
    "/images/img4.jpg",
  ],
  Reception: [
    "/images/reception1.jpg",
    "/images/reception2.jpg",
  ],
  Engagement: [
    "/images/engagement1.jpg",
    "/images/engagement2.jpg",
  ],
  Cocktail: [
    "/images/cocktail1.jpg",
    "/images/cocktail2.jpg",
  ],
  Haldi: [
    "/images/haldi1.jpg",
    "/images/haldi2.jpg",
  ],
  Mehndi: [
    "/images/mehndi1.jpg",
    "/images/mehndi2.jpg",
  ],
  Birthdays: [
    "/images/birthday1.jpg",
    "/images/birthday2.jpg",
  ],
  Anniversary: [
    "/images/anniversary1.jpg",
    "/images/anniversary2.jpg",
  ],
};

export default function AboutPage() {
  const [activeCategory, setActiveCategory] = useState("Wedding");

  return (
    <div className="bg-[#efe5d6] font-serif">
      {/* Hero */}
      <section className="border-t border-[#e3d6c6] px-3 pt-3 pb-12 text-center">
        <h1 className="mx-auto max-w-5xl text-[42px] font-bold leading-tight text-[#5a2d16] md:text-[60px]">
          Celebrate Your Special Moments
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-[18px] leading-[1.6] text-[#7b5a43] md:text-[20px]">
          From intimate weddings to grand receptions, we create memories that last a
          lifetime.
        </p>
      </section>

      {/* Category Section */}
      <section className="mx-auto max-w-[1080px] px-4">
        <div className="mx-auto max-w-[1080px] px-4 pt-10 pb-10 shadow-[0_8px_20px_rgba(70,45,25,0.12)]">
          <h2 className="mb-10 text-center text-[30px] font-bold text-[#5a2d16] md:text-[34px]">
            ✨ Explore Event Categories ✨
          </h2>

          <div className="flex flex-wrap items-center gap-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-7 py-3 text-[16px] transition-all duration-200 ${
                    isActive
                      ? "border-[#6a341d] bg-[#6a341d] text-white shadow-[0_4px_10px_rgba(106,52,29,0.35)]"
                      : "border-[#6a341d] bg-white text-[#6a341d] hover:bg-[#f8eee5]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="mx-auto max-w-[1080px] px-4 pt-10 pb-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {galleryImages[activeCategory].map((src, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border border-[#ddcfbf] bg-[#eee3d3] shadow-[0_4px_10px_rgba(70,45,25,0.08)] ${
                index === 0 ? "h-[255px]" : "h-[255px]"
              }`}
            >
              <Image
                src={src}
                alt={`${activeCategory} ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}