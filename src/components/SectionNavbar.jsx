import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "How It Works", to: "howitworks" },
  { name: "Pricing", to: "pricing" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Contact", to: "contact" },
];

export default function SectionNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`sticky top-0 z-50 bg-gray-200 shadow-lg transition-transform duration-300 ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}

      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #e2e8f0 50%, #f8fafc 75%, #ffffff 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.1)',
        }}>

      <div className="flex justify-center space-x-12 py-5 px-8">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth
            duration={600}
            offset={-60}
            className="cursor-pointer text-[#081108eb] font-semibold text-lg hover:font-bold transition-all duration-200 mr-2 px-3 py-2"
            // activeClass="border-b-2 border-[#2563EB] bg-white bg-opacity-30"
            spy
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}