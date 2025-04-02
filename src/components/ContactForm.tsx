import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Normally would send data to backend
        console.log('Form submitted:', formData);

        toast.success('Mensaje enviado correctamente', {
            description: 'Nos pondremos en contacto contigo pronto'
        });



        // Reset form
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
    };

    return (
        <>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-sm rounded-2xl p-8 relative overflow-hidden"
            >
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-sage/10 rounded-full"></div>
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-teal/10 rounded-full"></div>

                <h3 className="text-2xl font-semibold mb-6 relative z-10">Envíanos un mensaje</h3>

                <div className="space-y-6 relative z-10">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Nombre Completo
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-sage focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Correo Electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-sage focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                            placeholder="tu@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Asunto
                        </label>
                        <input
                            id="subject"
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-sage focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                            placeholder="Asunto de tu mensaje"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl border border-sage focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                            placeholder="¿En qué podemos ayudarte?"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                        <span>Enviar Mensaje</span>
                        <Send size={18} />
                    </button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
