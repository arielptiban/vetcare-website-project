import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";


export default function Index() {
    return (
        <>

            <div className="min-h-screen bg-white">
                <Navbar />
                <HeroSection />
                <AboutSection />

            </div>

        </>
    )
}
