import { useEffect, useState } from "react"
import VitalCareLogo from "./VitalCareLogo";
import Button from "./Button";
import { Menu, X } from 'lucide-react';

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

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  
                ${scrolled
                        ? 'bg-white/90 backdrop-blur-md shadow-sm py-2'
                        : 'bg-transparent py-4'
                    }`}>
                <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex justify-between items-center">
                    <VitalCareLogo />

                    <nav className="hidden md:flex items-center space-x-10 font-normal text-dark">
                        <a href="" className="nav-link">Inicio</a>
                        <a href="" className="nav-link">Servicios</a>
                        <a href="" className="nav-link">Equipo Médico</a>
                        <a href="" className="nav-link">Testimonios</a>
                        <a href="" className="nav-link">Contacto</a>
                        <Button text="Agendar Cita" type="primary" />

                    </nav>
                    {/* Menu Responsive */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-dark"
                        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={` bg-white backdrop-blur-sm flex flex-col pt-20 pb-6 px-6 md:hidden transition-all duration-300 ease-in-out z-40  h-full
                     ${isMenuOpen
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-full "
                        }
                    `

                    }>
                    <nav className="flex flex-col space-y-6">
                        <a href="#home" className="text-xl" onClick={closeMenu}>Inicio</a>
                        <a href="#services" className="text-xl" onClick={closeMenu}>Servicios</a>
                        <a href="#team" className="text-xl" onClick={closeMenu}>Equipo Médico</a>
                        <a href="#testimonials" className="text-xl" onClick={closeMenu}>Testimonios</a>
                        <a href="#contact" className="text-xl" onClick={closeMenu}>Contacto</a>
                        <a href="#contact" className="btn-primary text-center mt-4" onClick={closeMenu}>Agendar Cita</a>
                    </nav>
                </div>


            </header>
        </>
    )
}
