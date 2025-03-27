import { useEffect, useState } from "react"
import VitalCareLogo from "./VitalCareLogo";

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
            <header className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py4"}>
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <VitalCareLogo />

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="" className="text-dark">Inicio</a>
                        <a href="">Servicios</a>
                        <a href="">Equipo Médico</a>
                        <a href="">Testimonios</a>
                        <a href="">Contacto</a>
                        <a href="">Agendar Cita</a>
                    </nav>
                </div>

            </header>
        </>
    )
}
