"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/img1.jpg", type: "photo" },
  { src: "/images/img2.jpg", type: "photo" },
  { src: "/images/img3.jpg", type: "photo" },
  { src: "/images/img4.jpg", type: "photo" },
  { src: "/images/img5.jpg", type: "photo" },
  { src: "/images/img6.jpg", type: "photo" },
  { src: "/images/img7.jpg", type: "photo" },
  { src: "/images/img8.jpg", type: "photo" },
  { src: "/images/img9.jpg", type: "photo" },
  { src: "/images/img10.jpg", type: "photo" },
  { src: "/images/img11.jpg", type: "photo" },
  { src: "/images/img12.jpg", type: "photo" },
  { src: "/images/img13.jpg", type: "photo" },
  { src: "/images/img14.jpg", type: "photo" },
  { src: "/images/img15.jpg", type: "photo" },
  { src: "/images/img16.jpg", type: "photo" },

];

export default function AboutPage() {
  const [filter, setFilter] = useState("photo");

  const filteredImages = images.filter((img) => img.type === filter);

  return (
    <div className="bg-[#e6d5c3] min-h-screen py-10 px-4">
      
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-brown-800">
          Gallery & Videos
        </h1>
        <p className="text-gray-700 mt-2">
          Explore the beauty and elegance through stunning photographs
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setFilter("photo")}
          className={`px-6 py-2 rounded-full ${
            filter === "photo"
              ? "bg-orange-500 text-white"
              : "bg-white text-black"
          }`}
        >
          Photos
        </button>

        <button
          onClick={() => setFilter("video")}
          className={`px-6 py-2 rounded-full ${
            filter === "video"
              ? "bg-orange-500 text-white"
              : "bg-white text-black"
          }`}
        >
          Videos
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-60 rounded-xl overflow-hidden shadow-md hover:scale-105 transition"
          >
            <Image
              src={img.src}
              alt="gallery"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}