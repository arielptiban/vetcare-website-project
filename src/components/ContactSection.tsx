
import ContactForm from "./ContactForm"
import Pill from './ui/Pill';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
const ContactInfo = ({ icon: Icon, title, children }: any) => {
    return (
        <div className="flex items-start gap-4 p-4">
            <div className="bg-sage/30 p-3 rounded-full">
                <Icon className="text-teal" size={20} />
            </div>
            <div>
                <h3 className="font-medium mb-1">{title}</h3>
                <div className="text-foreground/80 text-sm">{children}</div>
            </div>
        </div>
    );
};

export default function ContactSection() {
    return (
        <>
            <section
                id="contact"
                className="section-padding "
            >

                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Pill text="Contacto" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in " style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                            Estamos para ayudarte
                        </h2>
                        <p className="text-foreground/80 animate-fade-in " style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                            No dudes en contactarnos para cualquier consulta, emergencia o para agendar una cita.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info and Map */}
                        <div className="animate-fade-in-right " style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>

                            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.72960715391!2d-78.66281839459998!3d-1.2570574631660176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381a37fef551f%3A0x7a2dbc24d832161b!2sAmbato!5e0!3m2!1ses!2sec!4v1743631506475!5m2!1ses!2sec"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación de VetCare Plus"
                                    className="w-full h-full"
                                ></iframe>
                            </div>

                            <div className="p-6 bg-white">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <ContactInfo icon={MapPin} title="Dirección">
                                        <p>Av. Principal 123, <br />Ciudad, País</p>
                                    </ContactInfo>

                                    <ContactInfo icon={Phone} title="Teléfono">
                                        <p>+123 456 7890</p>
                                        <p>+123 456 7891 (Emergencias)</p>
                                    </ContactInfo>

                                    <ContactInfo icon={Mail} title="Email">
                                        <p>info@vetcareplus.com</p>
                                        <p>citas@vetcareplus.com</p>
                                    </ContactInfo>

                                    <ContactInfo icon={Clock} title="Horario">
                                        <p>Lunes a Viernes: 9am - 8pm</p>
                                        <p>Sábados: 10am - 6pm</p>
                                        <p>Emergencias: 24/7</p>
                                    </ContactInfo>
                                </div>
                            </div>

                        </div>

                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    )
}
