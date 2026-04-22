"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    address: "",
    numberOfGuests: "",
    numberOfRooms: "",
    specialRequirements: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen bg-[#f0e8df] py-20 px-4 flex items-center justify-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;500&display=swap');
        .form-section { font-family: 'Lato', sans-serif; }
        .form-heading { font-family: 'Playfair Display', serif; }

        .divider-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, #c9a96e, transparent);
          margin: 12px auto 0;
        }

        .form-input {
          width: 100%;
          background: rgba(240, 232, 223, 0.6);
          border: 1.5px solid rgba(107, 31, 31, 0.2);
          border-radius: 10px;
          padding: 11px 14px;
          font-size: 0.85rem;
          color: #3b1a0a;
          font-family: 'Lato', sans-serif;
          outline: none;
          transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }
        .form-input::placeholder { color: #a07060; font-weight: 300; }
        .form-input:focus {
          border-color: #6b1f1f;
          background: rgba(255, 252, 248, 0.9);
          box-shadow: 0 0 0 3px rgba(107, 31, 31, 0.08);
        }

        select.form-input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b1f1f' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
          cursor: pointer;
        }

        .form-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 500;
          color: #5a2a15;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .submit-btn {
          position: relative;
          overflow: hidden;
          background: #6b1f1f;
          color: #f0e8df;
          border: none;
          border-radius: 12px;
          padding: 14px 48px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          font-family: 'Lato', sans-serif;
        }
        .submit-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #c9a96e;
          transform: translateY(100%);
          transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .submit-btn:hover::after { transform: translateY(0); }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(107, 31, 31, 0.28);
          color: #3b1a0a;
        }
        .submit-btn span { position: relative; z-index: 1; }

        .form-card {
          background:#3b1a0a;
          border: 1px solid rgba(107, 31, 31, 0.1);
          box-shadow: 0 32px 80px rgba(107, 31, 31, 0.12), 0 8px 24px rgba(107, 31, 31, 0.06);
        }

        .section-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          margin-top: 4px;
        }
        .section-bar-line {
          flex: 1;
          height: 1px;
          background: rgba(107, 31, 31, 0.12);
        }
        .section-bar-label {
          font-size: 0.7rem;
          color: #c9a96e;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .success-toast {
          animation: slideDown 0.4s ease forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-in { animation: fadeUp 0.7s ease forwards; }
      `}</style>

      <div className="form-section w-full max-w-3xl mx-auto anim-in">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="form-heading text-4xl md:text-5xl font-bold text-[#3b1a0a] tracking-tight">
            Plan For Your Perfect Event
          </h2>
          <div className="divider-line" />
          <p className="mt-5 text-[#6b4c3b] text-sm leading-relaxed font-light tracking-wide max-w-xl mx-auto">
            Tell us about your dream event and we'll get back to you with a
            personalized plan within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="form-card rounded-2xl p-8 md:p-10">

          {/* Success Toast */}
          {submitted && (
            <div className="success-toast mb-6 bg-[#6b1f1f] text-[#f0e8df] rounded-xl px-5 py-3.5 text-sm font-medium flex items-center gap-3">
              <span className="text-lg">✓</span>
              Your inquiry has been sent! We'll reach out shortly.
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Personal Info */}
            <div className="section-bar">
              <span className="section-bar-label">Personal Info</span>
              <div className="section-bar-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
                className="form-input"
              />
            </div>

            {/* Event Details */}
            <div className="section-bar">
              <span className="section-bar-label">Event Details</span>
              <div className="section-bar-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="form-label">Event Type *</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="" disabled>Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="reception">Reception</option>
                  <option value="engagement">Engagement</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="haldi">Haldi Ceremony</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="form-label">Event Date *</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="form-label">Address / City</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your city or full address"
                className="form-input"
              />
            </div>

            {/* Accommodation */}
            <div className="section-bar">
              <span className="section-bar-label">Accommodation</span>
              <div className="section-bar-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div>
                <label className="form-label">Number of Guests *</label>
                <select
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="" disabled>Select guest count</option>
                  <option value="1-50">1 – 50</option>
                  <option value="51-100">51 – 100</option>
                  <option value="101-250">101 – 250</option>
                  <option value="251-500">251 – 500</option>
                  <option value="501-1000">501 – 1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
              <div>
                <label className="form-label">Number of Rooms</label>
                <select
                  name="numberOfRooms"
                  value={formData.numberOfRooms}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="" disabled>Select room count</option>
                  <option value="1-5">1 – 5</option>
                  <option value="6-10">6 – 10</option>
                  <option value="11-20">11 – 20</option>
                  <option value="21-50">21 – 50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
            </div>

            {/* Special Requirements */}
            <div className="section-bar">
              <span className="section-bar-label">Special Requirements</span>
              <div className="section-bar-line" />
            </div>

            <div className="mb-8">
              <label className="form-label">Tell us more</label>
              <textarea
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                placeholder="Any special requests, dietary needs, décor preferences, or additional details..."
                rows={4}
                className="form-input resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button type="submit" className="submit-btn">
                <span>Send Inquiry</span>
              </button>
            </div>

          </form>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-[#9a6a4a] text-xs mt-6 font-light tracking-wide">
          We typically respond within 24 hours · Your information is kept private
        </p>
      </div>
    </section>
  );
}