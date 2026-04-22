import React from "react";

const sections = [
  {
    icon: "🏛️",
    title: "Legacy & Location",
    items: [
      "Strategically located on the highway, offering seamless access for guests travelling from within Moradabad and nearby towns.",
      "Adjacent to a beautiful temple complex, making it a spiritual and auspicious venue for weddings and rituals.",
      "A heritage-inspired 3-star property that blends traditional aesthetics with modern comfort.",
    ],
  },
  {
    icon: "🏟️",
    title: "Venue & Infrastructure",
    items: [
      "Sprawling banquet space with a capacity of up to 1,500 guests — perfect for grand weddings, corporate gatherings, and social events.",
      "Dedicated air-conditioned indoor banquet hall for up to 100 guests — ideal for intimate ceremonies, ring exchanges, and pre-wedding events.",
      "Fully covered, weatherproof food layout area ensuring uninterrupted service in all seasons.",
      "Exclusive event policy — only one event hosted at a time, ensuring complete privacy and personalized attention.",
    ],
  },
  {
    icon: "🎊",
    title: "Weddings & Celebrations",
    items: [
      "Tailored wedding packages including theme décor, premium catering, and ritual coordination.",
      "Leverages temple proximity for traditional weddings, pujas, havans, and spiritual ceremonies.",
      "Ideal for destination-style weddings with ritual-to-reception flow across the venue spaces.",
    ],
  },
  {
    icon: "🍽️",
    title: "Dining & Catering",
    items: [
      "In-house restaurant with curated menus inspired by Moradabadi, Mughlai, and North Indian cuisines.",
      "Live counter experiences, designer buffet setups, and personalised culinary experiences for every event.",
      "Professional hospitality team ensuring 5-star level service with a cultural touch.",
    ],
  },
  {
    icon: "🤝",
    title: "Hospitality & Services",
    items: [
      "Experienced event management team offering end-to-end planning support.",
      "Valet parking, security personnel, guest welcome team, and dedicated event coordinators for seamless execution.",
      "Options for bridal lounge, groom rooms, and private waiting areas for key guests.",
    ],
  },
  {
    icon: "🎯",
    title: "Ideal For",
    items: [
      "Big fat Indian weddings",
      "Engagements, receptions, anniversaries",
      "Corporate seminars, conferences, product launches",
      "Community events, cultural functions, religious gatherings",
    ],
  },
];

export default function About() {
  return (
    <div
      className="min-h-screen font-serif"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Hero Banner */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-stone-800 to-amber-950" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(0,0,0,0.35) 38px, rgba(0,0,0,0.35) 40px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1
            className="text-3xl md:text-5xl font-bold tracking-wide"
            style={{
              color: "#e8c97e",
              textShadow: "0 2px 12px #3b1a0a",
              fontFamily: "'Georgia', serif",
            }}
          >
            About Madhuram Heritage Hotel &amp; Banquets
          </h1>
          <p
            className="mt-3 text-sm md:text-base max-w-xl"
            style={{ color: "#f5e6c0", opacity: 0.9 }}
          >
            Discover how our heritage, hospitality, and heart come together to
            craft unforgettable celebrations.
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-4 py-14 md:py-20" style={{ backgroundColor: "#f5ede0" }}>
        <div className="max-w-3xl mx-auto space-y-14">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{section.icon}</span>
                <h2
                  className="text-lg md:text-xl font-bold tracking-wide"
                  style={{ color: "#5c3d1e", fontFamily: "'Georgia', serif" }}
                >
                  {section.title}
                </h2>
              </div>
              <div
                className="mb-4 h-px w-full"
                style={{ backgroundColor: "#c8a96e", opacity: 0.5 }}
              />
              <ul className="space-y-2 pl-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: "#f5ede0" }}
                    />
                    <span
                      className="text-sm md:text-base leading-relaxed"
                      style={{ color: "#4a3520" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}