"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/lobby.jpg",
    alt: "Luxury Resort Lobby",
    label: "Luxury Lobby",
  },
  {
    id: 2,
    src: "/images/gallery/evening.jpg",
    alt: "Romantic Evening Ambience",
    label: "Evening Ambience",
  },
  {
    id: 3,
    src: "/images/gallery/exterior.jpg",
    alt: "Resort Exterior",
    label: "Resort Exterior",
  },
  {
    id: 4,
    src: "/images/gallery/reception.jpg",
    alt: "Reception Area",
    label: "Reception",
  },
  {
    id: 5,
    src: "/images/gallery/entrance.jpg",
    alt: "Resort Entrance",
    label: "Grand Entrance",
  },
  {
    id: 6,
    src: "/images/gallery/spa.jpg",
    alt: "Couples Spa",
    label: "Couples Spa",
  },
  {
    id: 7,
    src: "/images/gallery/pool.jpg",
    alt: "Resort Pool Area",
    label: "Pool Area",
  },
  {
    id: 8,
    src: "/images/gallery/paradise.jpg",
    alt: "Beachside Paradise",
    label: "Beachside Paradise",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{ backgroundColor: "#f0e8de" }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #d4b896 0%, transparent 50%), radial-gradient(circle at 80% 20%, #c9a882 0%, transparent 40%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-5xl font-bold mb-3 tracking-tight"
            style={{ color: "#4a2c1a", fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Gallery
          </h2>
          <p
            className="text-base italic"
            style={{ color: "#8b5e3c", fontFamily: "'Georgia', serif" }}
          >
            Glimpse into the beauty and elegance of our romantic resort
          </p>
          <div className="flex items-center justify-center mt-4 gap-3">
            <div className="h-px w-16" style={{ backgroundColor: "#b8845a" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#b8845a" }} />
            <div className="h-px w-16" style={{ backgroundColor: "#b8845a" }} />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setLightbox(item)}
            />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            className="px-8 py-3 rounded-full text-white font-medium text-sm uppercase transition-all duration-300 hover:opacity-80 hover:scale-105 active:scale-95 shadow-lg"
            style={{ backgroundColor: "#3d1f0d", fontFamily: "'Georgia', serif", letterSpacing: "0.1em" }}
          >
            View Full Gallery
          </button>
        </div>
      </div>

      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}

function GalleryCard({ item, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  const spanClasses = [
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  return (
    <div
      className={`${spanClasses[index]} relative rounded-2xl overflow-hidden cursor-pointer shadow-sm`}
      style={{
        backgroundColor: "#ede0d4",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        boxShadow: hovered ? "0 12px 32px rgba(74,44,26,0.18)" : "0 2px 8px rgba(74,44,26,0.08)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Placeholder */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: "#ede0d4", zIndex: 0 }}
      >
        <span
          className="text-xs font-medium text-center px-2"
          style={{ color: "#c4a882", fontFamily: "'Georgia', serif" }}
        >
          {item.alt}
        </span>
      </div>

      {/* Image */}
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover"
        style={{ transition: "transform 0.5s ease", transform: hovered ? "scale(1.08)" : "scale(1)", zIndex: 1 }}
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-end p-3"
        style={{
          background: "linear-gradient(to top, rgba(61,31,13,0.55) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 2,
        }}
      >
        <span className="text-white text-xs font-semibold tracking-wide" style={{ fontFamily: "'Georgia', serif" }}>
          {item.label}
        </span>
      </div>

      {/* Zoom icon */}
      <div
        className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: "rgba(255,255,255,0.85)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0.7)",
          transition: "all 0.3s ease",
          zIndex: 3,
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4a2c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </div>
    </div>
  );
}

function Lightbox({ item, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(30,14,6,0.85)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: "#1e0e06" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[420px md:h-[540px]">
          <Image src={item.src} alt={item.alt} fill className="object-cover" />
        </div>
        <div className="px-5 py-3 flex items-center justify-between">
          <span className="text-sm font-semibold" style={{ color: "#e8d5c0", fontFamily: "'Georgia', serif" }}>
            {item.label}
          </span>
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border transition-all hover:bg-white hover:text-stone-900"
            style={{ color: "#e8d5c0", borderColor: "#8b5e3c", fontFamily: "'Georgia', serif" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}