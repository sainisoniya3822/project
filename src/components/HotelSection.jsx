"use client";

const amenities = [
  {
    id: 1,
    icon: "🛕",
    title: "Nearby Temple",
    description: "Nearby temple for peaceful and spiritual visits.",
    availability: "Always open",
  },
  {
    id: 2,
    icon: "🍽️",
    title: "Restaurant",
    description: "On-site restaurant serving delicious meals in a cozy, welcoming atmosphere.",
    availability: "24/7",
  },
  {
    id: 3,
    icon: "🌸",
    title: "Lush Green garden",
    description: "Lush green garden offering a peaceful and refreshing escape.",
    availability: "Always Open",
  },
  {
    id: 4,
    icon: "📶",
    title: "Free Wi-Fi",
    description: "High-speed internet access throughout the property.",
    availability: "24/7",
  },
  {
    id: 5,
    icon: "🛏️",
    title: "Room Service",
    description: "24-hour room service for your convenience and comfort.",
    availability: "24/7",
  },
  {
    id: 6,
    icon: "🚗",
    title: "Parking",
    description: "Complimentary parking for all guests with valet service.",
    availability: "24/7",
  },
];

export default function HotelAmenities() {
  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;500&display=swap');
        .amenities-section { font-family: 'Lato', sans-serif; }
        .amenities-heading { font-family: 'Playfair Display', serif; }

        .bg-image {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1920&q=90');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: 0;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(240, 232, 223, 0.88) 0%,
            rgba(220, 185, 160, 0.82) 40%,
            rgba(200, 155, 130, 0.78) 70%,
            rgba(180, 120, 100, 0.75) 100%
          );
          z-index: 1;
        }

        .divider-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, #6b1f1f, transparent);
          margin: 14px auto 0;
        }

        .amenity-card {
          background: rgba(107, 31, 31, 0.86);
          border: 1px solid rgba(201, 169, 110, 0.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 0.4s ease,
                      background 0.3s ease,
                      border-color 0.3s ease;
        }
        .amenity-card:hover {
          transform: translateY(-8px);
          background: rgba(120, 35, 35, 0.94);
          box-shadow: 0 24px 56px rgba(107, 31, 31, 0.35);
          border-color: rgba(201, 169, 110, 0.4);
        }

        .icon-box {
          width: 52px;
          height: 52px;
          background: rgba(201, 169, 110, 0.15);
          border: 1px solid rgba(201, 169, 110, 0.3);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          margin-bottom: 18px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .amenity-card:hover .icon-box {
          background: rgba(201, 169, 110, 0.25);
          border-color: rgba(201, 169, 110, 0.5);
        }

        .availability-badge {
          display: inline-block;
          margin-top: 14px;
          font-size: 0.72rem;
          color: #c9a96e;
          letter-spacing: 0.08em;
          font-weight: 500;
          text-transform: uppercase;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-header { animation: fadeUp 0.8s ease forwards; }
        .anim-card-1 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .anim-card-2 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.2s; opacity: 0; }
        .anim-card-3 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.3s; opacity: 0; }
        .anim-card-4 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.4s; opacity: 0; }
        .anim-card-5 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.5s; opacity: 0; }
        .anim-card-6 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.6s; opacity: 0; }
      `}</style>

      {/* Background Image */}
      <div className="bg-image" />

      {/* Light Maroon Tinted Overlay */}
      <div className="bg-overlay" />

      <div className="amenities-section relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="anim-header text-center mb-16">
          <h2 className="amenities-heading text-5xl font-bold text-[#3b1a0a] tracking-tight drop-shadow-sm">
            Hotel Amenities
          </h2>
          <div className="divider-line" />
          <p className="mt-6 text-[#5a2a15] max-w-2xl mx-auto text-base leading-relaxed font-light tracking-wide">
            Enjoy our comprehensive range of facilities designed to make your
            stay comfortable and memorable.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, index) => (
            <div
              key={item.id}
              className={`amenity-card rounded-2xl p-7 flex flex-col anim-card-${index + 1}`}
            >
              <div className="icon-box">
                <span>{item.icon}</span>
              </div>

              <h3 className="amenities-heading text-white text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-[#e8d5b5] text-sm leading-relaxed font-light flex-1">
                {item.description}
              </p>

              <span className="availability-badge">{item.availability}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}