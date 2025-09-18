import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import SectionNavbar from './components/SectionNavbar';

// Optional: install "react-scroll" for smooth scrolling
import { Element } from "react-scroll";

export default function App() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <Navbar />
      <SectionNavbar />
      <Element name="hero"><Hero /></Element>
      <Element name="about"><About /></Element>
      <Element name="services"><Services /></Element>
      <Element name="howitworks"><HowItWorks /></Element>
      <Element name="pricing"><Pricing /></Element>
      <Element name="testimonials"><Testimonials /></Element>
      <Element name="contact"><ContactForm /></Element>
      <footer className="py-6 text-center text-[#222831] opacity-70 text-sm">
        &copy; {new Date().getFullYear()} Serrano Drycleaner. All rights reserved.
      </footer>
    </div>
  );
}