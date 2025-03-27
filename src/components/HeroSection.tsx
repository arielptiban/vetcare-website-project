import Button from "./Button";
import Pill from "./ui/Pill";


export default function HeroSection() {
    return (
        <>
            <section id="home"
                className="min-h-screen flex items-center relative pt-20 overflow-hidden font-primary">
                {/* Background Blobs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="blob-shape w-96 h-96 top-1/4 right-0"></div>
                    <div className="blob-shape w-80 h-80 bottom-1/4 left-10"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <Pill text="Clínica Veterinaria Especializada" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                                Cuidamos a tu mascota con amor y dedicación
                            </h1>
                            <p className="text-lg text-description mb-8 max-w-lg font-normal" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
                                En VetCare Plus nos dedicamos a proporcionar atención médica de la más alta calidad para todos tus animales. Tu mascota merece lo mejor.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
                                <Button type="primary" text="Conocer Servicios" />
                                <Button type="secondary" text="Agendar Cita" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
                            <div className="relative">
                                <div className="absolute -inset-0 bg-gradient-to-r from-sage to-teal rounded-full blur-xl opacity-30"></div>
                                <div className="organic-card overflow-hidden">
                                    <div className="aspect-w-1 aspect-h-1">
                                        <img
                                            src="https://img.freepik.com/fotos-premium/retrato-perro-border-collie-gato-escondido-detras_748076-74.jpg"
                                            alt="Veterinario atendiendo a una mascota"
                                            className="object-cover w-full md:h-[700px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
