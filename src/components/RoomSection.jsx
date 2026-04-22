"use client";

import { useState } from "react";

const rooms = [
  {
    id: 1,
    name: "Family Suite",
    description:
      "Spacious and comfortable, our family rooms are designed for a relaxing stay with your loved ones.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    amenities: [
      "4 people occupancy",
      "Generously spacious",
      "Peaceful Ambience",
      "Entertainment & Connectivity",
      "Wifi",
      "Tea And Kettle",
      "Air-Conditioned Room",
      "In-Room Toiletries Included",
      "Modern Interiors",
    ],
  },
  {
    id: 2,
    name: "Suite Room",
    description:
      "Experience ultimate comfort and luxury in our thoughtfully designed suite rooms.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    amenities: [
      "Small Meetings & Bridal Room",
      "Spacious Living Area",
      "Entertainment & Connectivity",
      "Wifi",
      "Tea And Kettle",
      "In-Room Toiletries Included",
      "Air-Conditioned Suite Room",
      "King Size Bed",
    ],
  },
  {
    id: 3,
    name: "Deluxe Room",
    description:
      "Comfortable accommodation with modern amenities and elegant decor.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    amenities: [
      "King Size Bed",
      "Air-Conditioned Deluxe Room",
      "Lawn Size View",
      "In-Room Toiletries Included",
      "Free Wifi",
      "Tea And Kettle",
      "Greenview Balcony",
      "TV",
    ],
  },
];

const BedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block mr-2 opacity-80"
  >
    <path d="M2 4v16" />
    <path d="M22 4v16" />
    <path d="M2 8h20" />
    <path d="M2 16h20" />
    <rect x="6" y="8" width="4" height="8" />
    <rect x="14" y="8" width="4" height="8" />
  </svg>
);

const DotIcon = () => (
  <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#c9a96e] mr-3 mt-[6px] flex-shrink-0" />
);

export default function RoomSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="min-h-screen bg-[#f0e8df] py-20 px-4 font-serif">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;500&display=swap');
        .room-section { font-family: 'Lato', sans-serif; }
        .room-heading { font-family: 'Playfair Display', serif; }
        .card-hover-img { transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .card-hover-img:hover { transform: scale(1.05); }
        .book-btn {
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease;
        }
        .book-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #6b1f1f;
          transform: translateY(100%);
          transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .book-btn:hover::after { transform: translateY(0); }
        .book-btn:hover { color: #f0e8df; }
        .book-btn span { position: relative; z-index: 1; }
        .room-card {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease;
        }
        .room-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 64px rgba(107, 31, 31, 0.22);
        }
        .divider-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, #c9a96e, transparent);
          margin: 16px auto 0;
        }
        .amenity-item {
          display: flex;
          align-items: flex-start;
          font-size: 0.82rem;
          color: #e8d5b5;
          line-height: 1.5;
          margin-bottom: 6px;
          letter-spacing: 0.01em;
        }
      `}</style>

      <div className="room-section max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="room-heading text-5xl font-bold text-[#3b1a0a] tracking-tight">
            Our Rooms
          </h2>
          <div className="divider-line" />
          <p className="mt-6 text-[#6b4c3b] max-w-2xl mx-auto text-base leading-relaxed font-light tracking-wide">
            Unwind in heritage-inspired rooms at Madhuram Heritage with modern
            amenities, peaceful surroundings, and personalized service—perfect
            for weddings, business trip, or retreats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="room-card bg-[#6b1f1f] rounded-2xl overflow-hidden shadow-xl flex flex-col"
              onMouseEnter={() => setHovered(room.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-3 left-4 z-10 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40 block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20 block" />
                </div>
                <img
                  src={room.image}
                  alt={room.name}
                  className="card-hover-img w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6b1f1f]/60 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="room-heading text-white text-xl font-semibold mb-3 flex items-center gap-2">
                  <BedIcon />
                  {room.name}
                </h3>

                <p className="text-[#e8d5b5] text-sm leading-relaxed mb-5 font-light">
                  {room.description}
                </p>

                <ul className="flex-1 mb-6 space-y-0">
                  {room.amenities.map((amenity, idx) => (
                    <li key={idx} className="amenity-item">
                      <DotIcon />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>

                <button className="book-btn w-full py-3 bg-[#f0e8df] text-[#6b1f1f] rounded-xl font-semibold text-sm tracking-widest uppercase border border-[#f0e8df]">
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}