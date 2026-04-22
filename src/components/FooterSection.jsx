import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#4a1c10] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-5">
          {/* Logo + Brand Name */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-[#f5ede6] flex items-center justify-center overflow-hidden shrink-0">
              {/* Replace with your actual <Image> component */}
              <img
                src="/logo.png"
                alt="Madhuram Heritage Logo"
                className="w-14 h-14 object-contain"
              />
            </div>
            <span className="text-2xl font-semibold tracking-wide font-serif">
              Madhuram Heritage
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm leading-relaxed text-[#d9b8a8] max-w-xs">
            Creating magical moments and unforgettable experiences for couples.
            Where every stay becomes a beautiful love story wrapped in luxury
            and romance.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-1">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-[#d9b8a8] flex items-center justify-center text-white hover:bg-[#d9b8a8] hover:text-[#4a1c10] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-[#d9b8a8] flex items-center justify-center text-white hover:bg-[#d9b8a8] hover:text-[#4a1c10] transition-colors duration-200"
            >
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
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-lg font-semibold mb-5 tracking-wide">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Rooms", href: "/rooms" },
              { label: "Gallery", href: "/gallery" },
              { label: "Testimonials", href: "/testimonials" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#d9b8a8] hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="text-lg font-semibold mb-5 tracking-wide">
            Contact Info
          </h3>
          <ul className="flex flex-col gap-4">
            {/* Address */}
            <li className="flex items-start gap-3 text-sm text-[#d9b8a8]">
              <span className="mt-0.5 text-[#e8614f]">📍</span>
              <span>
                Delhi Rd, opp. Akansha Automobile, Buddhi Vihar, Moradabad,
                Uttar Pradesh 244001
              </span>
            </li>

            {/* Phone 1 */}
            <li className="flex items-center gap-3 text-sm">
              <span className="text-[#e8614f]">📞</span>
              <a
                href="tel:+918755550499"
                className="text-white hover:underline underline"
              >
                +91 8755550499
              </a>
            </li>

            {/* Phone 2 */}
            <li className="flex items-center gap-3 text-sm text-[#d9b8a8]">
              <span className="text-[#e8614f]">📞</span>
              <a
                href="tel:+919222492227"
                className="text-[#d9b8a8] hover:text-white transition-colors"
              >
                +91 9222492227
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3 text-sm text-[#d9b8a8]">
              <span className="text-[#d9b8a8]">✉️</span>
              <a
                href="mailto:hotelmadhuramheritage@gmail.com"
                className="hover:text-white transition-colors"
              >
                hotelmadhuramheritage@gmail.com
              </a>
            </li>

            {/* Concierge */}
            <li className="flex items-center gap-3 text-sm text-[#d9b8a8]">
              <span>🕐</span>
              <span>24/7 Concierge Service</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#7a3a25] mx-6" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#d9b8a8]">
        <p>
          Copyright &copy; 2025 Madhuram Heritage | Developed by{" "}
          <a
            href="https://zentrixinfotech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            ZentrixInfotech
          </a>
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;