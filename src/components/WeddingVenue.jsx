"use client";

const servicesLeft = [
  "Luxury and trendy decor",
  "On-Site Guest Accommodation",
  "Open Sky Event Space (1500 pax Capacity)",
  "Waterproof Event Setup",
  "On-Ground Wedding Support Team",
];

const servicesRight = [
  "Exclusive In-House Catering",
  "Blissful Bridal Suite",
  "AC Banquet Hall",
  "On-Site Valet Parking Available",
  "Floral Decor",
];

const DotIcon = () => (
  <span className="inline-block w-[7px] h-[7px] rounded-full bg-[#6b1f1f] mr-3 mt-[6px] flex-shrink-0" />
);

export default function WeddingVenue() {
  return (
    <section className="min-h-screen bg-[#f0e8df] py-20 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;500&display=swap');
        .wedding-section { font-family: 'Lato', sans-serif; }
        .wedding-heading { font-family: 'Playfair Display', serif; }
        .divider-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, #c9a96e, transparent);
          margin: 14px auto 0;
        }
        .consult-btn {
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease;
        }
        .consult-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #c9a96e;
          transform: translateX(-100%);
          transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .consult-btn:hover::after { transform: translateX(0); }
        .consult-btn span { position: relative; z-index: 1; }
        .venue-img-box {
          box-shadow: 0 20px 60px rgba(107, 31, 31, 0.15);
          transition: box-shadow 0.4s ease;
        }
        .venue-img-box:hover {
          box-shadow: 0 28px 72px rgba(107, 31, 31, 0.25);
        }
        .venue-img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .venue-img-box:hover .venue-img {
          transform: scale(1.04);
        }
        .service-item {
          display: flex;
          align-items: flex-start;
          font-size: 0.85rem;
          color: #4a2f1a;
          line-height: 1.6;
          margin-bottom: 10px;
        }
      `}</style>

      <div className="wedding-section max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="wedding-heading text-5xl font-bold text-[#3b1a0a] tracking-tight">
            Wedding Venue
          </h2>
          <div className="divider-line" />
          <p className="mt-6 text-[#6b4c3b] max-w-2xl mx-auto text-base leading-relaxed font-light tracking-wide">
            Create magical moments on your special day with our stunning wedding
            venues and personalized services.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left: Content */}
          <div>
            <h3 className="wedding-heading text-3xl font-bold text-[#6b1f1f] mb-6">
              Your Dream Wedding Awaits
            </h3>

            <p className="text-[#4a2f1a] text-sm leading-7 mb-5 font-light">
              Celebrate your big day at Madhuram Heritage – Moradabad's premium
              wedding destination. Our grand outdoor banquet area accommodates
              up to 1,500 guests, ideal for large-scale weddings, receptions,
              and cultural functions. We host only one event at a time, ensuring
              you receive exclusive attention and privacy.
            </p>

            <p className="text-[#4a2f1a] text-sm leading-7 mb-5 font-light">
              With a spacious air-conditioned banquet hall for pre-wedding
              rituals and a waterproof dining area for all-weather celebrations,
              your wedding remains flawless from start to finish. Plus, with the
              adjacent temple, couples can effortlessly blend spiritual rituals
              into their celebrations.
            </p>

            <p className="text-[#4a2f1a] text-sm leading-7 mb-8 font-light">
              We offer customizable wedding packages, elegant décor, live food
              counters, and complete coordination support for your dream wedding.
            </p>

            {/* Services */}
            <div className="mb-5">
              <h4 className="wedding-heading text-base font-bold text-[#3b1a0a] mb-4">
                Our Wedding Services Include:
              </h4>
              <div className="grid grid-cols-2 gap-x-4">
                <ul>
                  {servicesLeft.map((service, idx) => (
                    <li key={idx} className="service-item">
                      <DotIcon />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <ul>
                  {servicesRight.map((service, idx) => (
                    <li key={idx} className="service-item">
                      <DotIcon />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <button className="consult-btn bg-[#6b1f1f] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase">
              <span>Schedule Wedding Consultation</span>
            </button>
          </div>

          {/* Right: Image */}
          <div className="venue-img-box rounded-2xl overflow-hidden h-[690px] bg-[#e8d9cc]">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80"
              alt="Wedding ceremony"
              className="venue-img w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=80";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}