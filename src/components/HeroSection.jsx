import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/df1v3yied/image/upload/v1750048492/1H3A5072_okofmu.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-[#f2e6d8] px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          From Intimate Gatherings to{" "}
          <span className="text-4xl sm:text-6xl font-abril text-transparent bg-clip-text bg-gradient-to-r from-[#b38c64] to-[#f2e6d8] tracking-wide">
            Grand Weddings
          </span>{" "}
          —
          <span className="block text-[#f2e6d8] mt-2">
            We host it all.
          </span>
        </h1>

        <p className="text-base sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Your story, your celebration — wrapped in luxury and heritage.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6">
          <button className="bg-[#f2e6d8] text-[#562D1D] px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
            Book Your Stay
          </button>

          <Link
            href="/contact"
            className="w-full sm:w-auto border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#f2e6d8] hover:text-gray-800 transition-all duration-300 text-center"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;