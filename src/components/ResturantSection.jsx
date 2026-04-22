"use client";

const menuItems = [
  {
    id: 1,
    name: "Romantic Dinner",
    description:
      "Candlelit dining experience with our chef's special menu and wine pairing.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: 2,
    name: "Indian Cuisine",
    description:
      "Authentic local flavors prepared with fresh ingredients and traditional recipes.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
  },
  {
    id: 3,
    name: "Continental Menu",
    description:
      "International cuisine featuring the finest ingredients and modern presentation.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
];

const ForkKnifeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6b1f1f"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block mr-2 mb-1"
  >
    <line x1="3" y1="2" x2="3" y2="22" />
    <path d="M7 2v6a4 4 0 0 1-4 4" />
    <line x1="7" y1="12" x2="7" y2="22" />
    <path d="M21 2v20" />
    <path d="M17 2v8" />
    <path d="M17 10a4 4 0 0 0 4-4V2" />
  </svg>
);

export default function RestaurantSection() {
  return (
    <section className="min-h-screen bg-[#f0e8df] py-20 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;500&display=swap');
        .restaurant-section { font-family: 'Lato', sans-serif; }
        .restaurant-heading { font-family: 'Playfair Display', serif; }
        .divider-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, #c9a96e, transparent);
          margin: 14px auto 0;
        }
        .menu-card {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease;
        }
        .menu-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 28px 56px rgba(107, 31, 31, 0.28);
        }
        .card-img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .menu-card:hover .card-img {
          transform: scale(1.06);
        }
        .restaurant-img-box {
          box-shadow: 0 20px 60px rgba(107, 31, 31, 0.14);
          transition: box-shadow 0.4s ease;
        }
        .restaurant-img-box:hover {
          box-shadow: 0 28px 72px rgba(107, 31, 31, 0.24);
        }
        .restaurant-img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .restaurant-img-box:hover .restaurant-img {
          transform: scale(1.04);
        }
      `}</style>

      <div className="restaurant-section max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="restaurant-heading text-5xl font-bold text-[#3b1a0a] tracking-tight">
            T&T Banquet & Dining
          </h2>
          <div className="divider-line" />
          <p className="mt-6 text-[#6b4c3b] max-w-2xl mx-auto text-base leading-relaxed font-light tracking-wide">
            Savor exquisite flavors in our romantic restaurant, where every meal
            becomes a memorable experience.
          </p>
        </div>

        {/* Two Column: Text Left + Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">

          {/* Left: Text */}
          <div>
            <h3 className="restaurant-heading text-2xl font-bold text-[#6b1f1f] mb-6 flex items-center">
              <ForkKnifeIcon />
              Fine Dining Experience
            </h3>
            <p className="text-[#4a2f1a] text-sm leading-7 mb-5 font-light">
              Savor the rich flavors of Moradabad and North India at our
              in-house restaurant. Designed with heritage charm and modern
              elegance, the dining space offers curated menus for both casual
              and event dining.
            </p>
            <p className="text-[#4a2f1a] text-sm leading-7 font-light">
              From traditional Moradabadi dishes and Mughlai delights to live
              food stations during events, we ensure a memorable culinary
              journey. Our restaurant also features a pre-function area –
              perfect for welcome drinks, haldi functions, and social mingling
              before the main event.
            </p>
          </div>

          {/* Right: Image */}
          <div className="restaurant-img-box rounded-2xl overflow-hidden h-72 lg:h-80 bg-[#e8d9cc]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80"
              alt="Restaurant interior"
              className="restaurant-img w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80";
              }}
            />
          </div>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="menu-card bg-[#6b1f1f] rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6b1f1f]/55 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <h4 className="restaurant-heading text-white text-lg font-bold mb-2">
                  {item.name}
                </h4>
                <p className="text-[#e8d5b5] text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}