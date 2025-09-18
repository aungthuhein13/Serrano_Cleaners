import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Our Services" },
  { id: "how-it-works", label: "How It Works" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact Form" },
];

export default function Navbar() {

  // Smooth scroll handler
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-between px-24 py-5">
        {/* Logo Section: Use your image or text */}
        <div className="flex flex-col items-start ml-2">
          <img src="../public/assets/serrano-logo.svg" alt="Serrano Drycleaners Logo" className="h-12 w-auto mb-1" />
        </div>
        {/* Contact Section - perfectly aligned, same color */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-500 text-xl" />
            <span className="text-lg text-gray-800 font-medium">1234 Elm St, City, ST 99999</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-500 text-xl" />
            <span className="text-lg text-gray-800 font-medium">(123) 456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-green-500 text-xl" />
            <span className="text-lg text-gray-800 font-medium">info@serranodrycleaner.com</span>
          </div>
        </div>
        {/* Request Pickup Button - moved inward with mr-2 */}
        <a
          href="#contact"
          className="bg-green-500 text-white text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-green-600 transition mr-2"
        >
          Request a Pickup
        </a>
      </div>
    </header>
  );
}

