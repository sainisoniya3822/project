"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    stars: 5,
    review:
      '"Our 10th anniversary celebration was absolutely magical. The romantic ambiance and exceptional service made our stay unforgettable. Every detail was perfect!"',
    name: "Sarah & Michael",
    occasion: "Wedding Anniversary",
  },
  {
    id: 2,
    stars: 5,
    review:
      '"The most romantic getaway we could have asked for. The sunset dinners and spa treatments were divine. We felt like royalty throughout our entire stay."',
    name: "Emily Johnson",
    occasion: "Honeymoon",
  },
  {
    id: 3,
    stars: 5,
    review:
      '"Breathtaking views, luxurious amenities, and impeccable service. This resort truly understands how to create magical moments for couples."',
    name: "David & Lisa",
    occasion: "Romantic Getaway",
  },
  {
    id: 4,
    stars: 5,
    review:
      '"A truly unforgettable experience. The staff went above and beyond to make our wedding day absolutely perfect. We will cherish these memories forever."',
    name: "Priya & Arjun",
    occasion: "Wedding Celebration",
  },
  {
    id: 5,
    stars: 5,
    review:
      '"From the exquisite décor to the flawless coordination, everything exceeded our expectations. Madhuram Heritage is truly a gem for celebrations."',
    name: "Riya & Rohit",
    occasion: "Reception Party",
  },
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="#f5a623"
    className="inline-block"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const totalSlides = Math.ceil(testimonials.length / 3);
  const visibleTestimonials = testimonials.slice(current * 3, current * 3 + 3);

  const prev = () => setCurrent((p) => (p === 0 ? totalSlides - 1 : p - 1));
  const next = () => setCurrent((p) => (p === totalSlides - 1 ? 0 : p + 1));

  return (
    <section className="min-h-screen bg-[#f0e8df] py-20 px-4 flex flex-col justify-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;500&display=swap');
        .testimonial-section { font-family: 'Lato', sans-serif; }
        .testimonial-heading { font-family: 'Playfair Display', serif; }

        .divider-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, #c9a96e, transparent);
          margin: 12px auto 0;
        }

        .testimonial-card {
          background: #6b1f1f;
          border: 1px solid rgba(201, 169, 110, 0.12);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 0.4s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 28px 56px rgba(107, 31, 31, 0.28);
        }

        .nav-btn {
          width: 38px;
          height: 38px;
          border: 1.5px solid rgba(107, 31, 31, 0.35);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b1f1f;
          background: transparent;
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
          cursor: pointer;
        }
        .nav-btn:hover {
          background: #6b1f1f;
          border-color: #6b1f1f;
          color: #f0e8df;
        }

        .card-divider {
          width: 100%;
          height: 1px;
          background: rgba(201, 169, 110, 0.25);
          margin: 18px 0 16px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-in {
          animation: fadeUp 0.55s ease forwards;
        }
      `}</style>

      <div className="testimonial-section max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="testimonial-heading text-4xl md:text-5xl font-bold text-[#3b1a0a] tracking-tight">
            Celebrations Worth Remembering
          </h2>
          <div className="divider-line" />
          <p className="mt-4 text-[#6b4c3b] text-sm tracking-widest font-light italic">
            — Told by Our Guests
          </p>
        </div>

        {/* Slider Row */}
        <div className="flex items-center gap-4">

          {/* Prev Button */}
          <button className="nav-btn flex-shrink-0" onClick={prev} aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((t, i) => (
              <div
                key={`${current}-${i}`}
                className="testimonial-card rounded-2xl p-7 flex flex-col anim-in"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <StarIcon key={s} />
                  ))}
                </div>

                {/* Review */}
                <p className="text-[#e8d5b5] text-sm leading-7 font-light flex-1 italic">
                  {t.review}
                </p>

                {/* Divider */}
                <div className="card-divider" />

                {/* Author */}
                <div>
                  <p className="testimonial-heading text-white font-bold text-base">
                    {t.name}
                  </p>
                  <p className="text-[#c9a96e] text-xs tracking-wide mt-0.5 font-light">
                    {t.occasion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button className='nav-btn flex-shrink-0' onClick={next} aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-7 h-3 bg-[#6b1f1f]"
                  : "w-3 h-4 bg-[#c9a96e] opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}