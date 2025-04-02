
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { MenuLinks } from '../consts/Menu';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="bg-teal text-white pt-16 pb-8 relative overflow-hidden">


                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* About */}
                        <div>
                            <h4 className="text-2xl font-bold mb-6">
                                VetCare<span className="text-sage">Plus</span>
                            </h4>
                            <p className="text-white/80 mb-6">
                                Cuidamos la salud y el bienestar de tus mascotas con profesionalismo y cariño. Tu confianza es nuestra mejor recompensa.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white hover:text-sage transition-colors duration-300">
                                    <Facebook size={20} />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a href="#" className="text-white hover:text-sage transition-colors duration-300">
                                    <Instagram size={20} />
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a href="#" className="text-white hover:text-sage transition-colors duration-300">
                                    <Twitter size={20} />
                                    <span className="sr-only">Twitter</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
                            <ul className="space-y-3">

                                {
                                    MenuLinks.map((link, index) => (
                                        <li>
                                            <a href={link.href} className="text-white/80 hover:text-white transition-colors duration-300">{link.link}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#services" className="text-white/80 hover:text-white transition-colors duration-300">Consultas Generales</a>
                                </li>
                                <li>
                                    <a href="#services" className="text-white/80 hover:text-white transition-colors duration-300">Vacunación</a>
                                </li>
                                <li>
                                    <a href="#services" className="text-white/80 hover:text-white transition-colors duration-300">Cirugía</a>
                                </li>
                                <li>
                                    <a href="#services" className="text-white/80 hover:text-white transition-colors duration-300">Odontología</a>
                                </li>
                                <li>
                                    <a href="#services" className="text-white/80 hover:text-white transition-colors duration-300">Peluquería y Guardería</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Información de Contacto</h4>
                            <ul className="space-y-3 text-white/80">
                                <li className="flex items-start gap-2">
                                    <span className="font-semibold">Dirección:</span>
                                    <span>Av. Principal 123, Ciudad, País</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="font-semibold">Teléfono:</span>
                                    <span>+123 456 7890</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="font-semibold">Email:</span>
                                    <span>info@vetcareplus.com</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="font-semibold">Horario:</span>
                                    <span>Lun-Vie: 9am-8pm, Sáb: 10am-6pm</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="border-white/20 my-8" />

                    <div className="text-center text-white/70">
                        <p>&copy; {currentYear} VetCare Plus. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
