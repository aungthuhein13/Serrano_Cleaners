import { Link } from "react-scroll";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "How It Works", to: "howitworks" },
  { name: "Pricing", to: "pricing" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-90 shadow-sm">
      <div className="flex justify-center space-x-6 py-4">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth
            duration={600}
            offset={-60}
            className="cursor-pointer text-[#2563EB] font-semibold hover:text-[#10B981] transition-colors"
            activeClass="border-b-2 border-[#2563EB]"
            spy
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}