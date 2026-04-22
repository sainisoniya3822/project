import React from "react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-[#f2e6d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl text-[#562D1D] mb-8 leading-tight">
                About Us
              </h2>
              <div className="w-24 h-1 bg-[#562D1D] mb-8"></div>
            </div>

            <div className="space-y-8 text-lg text-[#6a3925] leading-relaxed">
              <p className="text-xl leading-8">
                Welcome to Hotel Madhuram Heritage – a landmark 3-star hotel and banquet destination in Moradabad.
              </p>
              <p className="leading-8">
                Whether you’re here for a celebration, a spiritual journey, or a relaxing stay, we offer warm hospitality, elegant design, and seamless services tailored for memorable experiences.
              </p>
              <p className="leading-8">
                Our heritage-inspired architecture, expansive banquet capacity, and personalized service make us the preferred venue for weddings, family gatherings, and corporate events in Moradabad.
              </p>

              <div className="pt-4">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#562D1D] mb-2">500+</div>
                    <div className="text-sm text-[#562D1D] uppercase tracking-wide">Successful Events</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#562D1D] mb-2">15+</div>
                    <div className="text-sm text-[#562D1D] uppercase tracking-wide">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/df1v3yied/image/upload/v1750048492/1H3A5072_okofmu.jpg"
                alt="Luxury resort interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;