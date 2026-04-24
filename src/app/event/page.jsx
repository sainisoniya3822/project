"use client";

import { useState } from "react";

const categories = [
  "Wedding", "Reception", "Engagement", "Cocktail",
  "Haldi", "Mehndi", "Birthdays", "Anniversary",
];

const stats = [
  { value: "500+", label: "event Covered" },
  { value: "12+", label: "Years Experience" },
  { value: "10K+", label: "Happy Clients" },
];

export default function AboutPage() {
  const [activeCategory, setActiveCategory] = useState("Wedding");

  return (
    <div style={{ backgroundColor: "#f0e6d3", minHeight: "100vh", fontFamily: "Georgia, serif" }}>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "60px 20px 30px" }}>
        <h1 style={{ fontSize: "2.6rem", fontWeight: "bold", color: "#3d1a08", marginBottom: "12px" }}>
          Celebrate Your Special Moments
        </h1>
        <p style={{ color: "#7a5c3a", fontSize: "1rem", maxWidth: "480px", margin: "0 auto", lineHeight: "1.7" }}>
          From intimate weddings to grand receptions, we create memories that last a lifetime.
        </p>
      </section>

      {/* Category Box */}
      <section style={{ maxWidth: "900px", margin: "20px auto", padding: "0 16px" }}>
        <div style={{
          background: "rgba(255,255,255,0.65)",
          borderRadius: "24px",
          padding: "32px 28px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.06)"
        }}>
          <h2 style={{ textAlign: "center", color: "#3d1a08", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "24px" }}>
            ✨ Explore Event Categories ✨
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  border: "1.5px solid",
                  borderColor: activeCategory === cat ? "#3d1a08" : "#c9a97a",
                  backgroundColor: activeCategory === cat ? "#3d1a08" : "#fff",
                  color: activeCategory === cat ? "#fff" : "#3d1a08",
                  fontFamily: "Georgia, serif",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  fontWeight: activeCategory === cat ? "600" : "400",
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder Grid */}
      <section style={{ maxWidth: "900px", margin: "24px auto", padding: "0 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#e2d0b8",
                borderRadius: "16px",
                height: i === 0 ? "340px" : "160px",
                gridRow: i === 0 ? "span 2" : "span 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#b8956a",
                fontSize: "0.85rem",
                fontStyle: "italic",
              }}
            >
              {activeCategory} {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* About Story */}
      <section style={{ maxWidth: "800px", margin: "32px auto", padding: "0 16px 60px" }}>
        <div style={{
          background: "rgba(255,255,255,0.6)",
          borderRadius: "24px",
          padding: "48px 36px",
          textAlign: "center",
          boxShadow: "0 2px 16px rgba(0,0,0,0.05)"
        }}>
          <h2 style={{ color: "#3d1a08", fontSize: "1.8rem", fontWeight: "bold", marginBottom: "16px" }}>
            Our Story
          </h2>
          <p style={{ color: "#7a5c3a", lineHeight: "1.8", maxWidth: "560px", margin: "0 auto 36px", fontSize: "0.97rem" }}>
            We are a passionate team of event planners dedicated to turning your vision into
            unforgettable celebrations. With years of experience across weddings, receptions,
            and cultural ceremonies, we blend tradition with elegance.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#3d1a08", margin: 0 }}>{s.value}</p>
                <p style={{ color: "#9a7a52", fontSize: "0.85rem", marginTop: "4px" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}