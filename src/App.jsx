import ParallaxSection from "./components/ParallaxSection";
import HeroSection from "./components/HeroSection";
import ScrollRevealSection from "./components/ScrollRevealSection";
import AvailabilityGrid from "./components/AvailabilityGrid";
import ImageGallery from "./components/ImageGallery";
import AnimatedNavbar from "./components/AnimatedNavbar";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer"; // ✅ NEW
import ContactSection from "./components/ContactSection"; // ✅ NEW
import GoogleVerification from "./components/GoogleVerification"; // ✅ ADDED

function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <GoogleVerification /> {/* ✅ Added here to inject meta tag */}
      <AnimatedNavbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="experience">
        <ParallaxSection />
      </section>
      <section id="availability" className="bg-black text-white">
        <ScrollRevealSection
          title="Available Luxury Cars"
          content="Check availability of premium models in real-time."
        />
        <AvailabilityGrid />
      </section>
      <section id="gallery">
        <ImageGallery />
      </section>
      <CTASection />
      <section id="contact">
        <ContactSection /> {/* ✅ Fancy contact section with form */}
      </section>
      <Footer /> {/* ✅ Clean footer */}
    </div>
  );
}

export default App;
