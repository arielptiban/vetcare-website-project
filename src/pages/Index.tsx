import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

export default function Index() {
    return (
        <>

            <div className="min-h-screen bg-white">
                <Navbar />
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <ContactSection />
            </div>

        </>
    )
}
