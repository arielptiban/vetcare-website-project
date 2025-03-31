import Pill from "./ui/Pill";
import { services } from '../consts/Services'
import ServiceCard from "./ServiceCard";
export default function ServicesSection() {
    return (
        <>
            <section id='services' className='section-padding transition-opacity duration-1000 overflow-hidden'>
                <div className='max-w-[1400px] mx-auto'>

                    <div className='text-center max-w-3xl mx-auto mb-12'>
                        <Pill text='Nuestros Servicios' />
                        <h2 className='font-primary text-dark text-3xl md:text-4xl font-bold mb-4 '>
                            Atención veterinaria integral para tus mascotas
                        </h2>
                        <p className='text-dark/90'>
                            Ofrecemos una amplia gama de servicios médicos y de bienestar para garantizar la salud óptima de tus animales.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            services.map((service, index) => (
                                <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
                            ))
                        }

                    </div>

                </div>

            </section>
        </>
    )
}