import { useEffect, useState } from "react"
import VitalCareLogo from "./VitalCareLogo";
import Button from "./Button";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    //responsive menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);


    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-4">
                <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex justify-between items-center">
                    <VitalCareLogo />

                    <nav className="hidden md:flex items-center space-x-10 font-primary">
                        <a href="" className="nav-link">Inicio</a>
                        <a href="" className="nav-link">Servicios</a>
                        <a href="" className="nav-link">Equipo Médico</a>
                        <a href="" className="nav-link">Testimonios</a>
                        <a href="" className="nav-link">Contacto</a>
                        <Button text="Agendar Cita" type="primary" />

                    </nav>
                </div>

            </header>
        </>
    )
}
