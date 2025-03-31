
import Pill from './ui/Pill'
import { UserRound, BookUser } from "lucide-react";
import { Team } from '../consts/Team';
import { useEffect, useState } from 'react';

export default function AboutSection() {
    const [selectedMember, setSelectedMember] = useState(Team[0]);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('opacity-100');
    //                 entry.target.classList.remove('opacity-0');
    //                 observer.unobserve(entry.target);
    //             }
    //         },
    //         { threshold: 0.1 }
    //     );

    // })
    return (
        <>
            <section id='about' className='section-padding transition-opacity duration-1000 overflow-hidden'>
                <div className='max-w-[1400px] mx-auto'>
                    <div className='text-center max-w-3xl mx-auto mb-12'>
                        <Pill text='Nuestro Equipo' />
                        <h2 className='font-primary text-dark text-3xl md:text-4xl font-bold mb-4 '>
                            Conoce a nuestros especialistas
                        </h2>
                        <p className='text-dark/90'>
                            Profesionales altamente capacitados y apasionados por el bienestar de tus mascotas
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8'>
                        <div>
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <div className='absolute inset-0 bg-gradient-to-r from-sage/30 to-teal/30 mix-blend-overlay'></div>
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className='w-full h-[500px] object-cover'
                                />

                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {selectedMember.name}
                                    </h3>
                                    <span className='inline-block bg-primary/80 text-white text-sm font-medium px-4 py-1 rounded-full mb-3'>
                                        {selectedMember.role}
                                    </span>
                                    <p className="text-white/90 text-lg">
                                        {selectedMember.bio}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='hidden md:flex'>
                            <div className='bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg'>
                                <h3 className='text-xl font-semibold mb-6 flex items-center'>
                                    <UserRound className="mr-2 h-5 w-5 text-teal" />
                                    Nuestro equipo médico
                                </h3>

                                <div className="space-y-4">
                                    {
                                        Team.map((member, index) => (
                                            <div
                                                key={member.name}
                                                onClick={() => setSelectedMember(member)}
                                                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-4 ${selectedMember.name === member.name
                                                    ? 'bg-sage/30 border-l-4 border-teal shadow-md'
                                                    : 'hover:bg-sage/10'
                                                    }`}
                                            >
                                                <div className='relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md'>
                                                    <img src={member.image} alt={member.name} className='h-full w-full object-cover' />
                                                </div>
                                                <div>
                                                    <h4 className='font-medium'>{member.name}</h4>
                                                    <p className='text-sm text-dark/80'>{member.role}</p>
                                                </div>
                                            </div>
                                        ))}
                                </div>

                                <div className='mt-8 p-4 bg-sage/10 rounded-xl border border-sage/30'>
                                    <div className='flex items-start'>
                                        <BookUser className='h-8 w-8 text-teal mt-1' />
                                        <p className='ml-3 text-sm text-dark/80'>
                                            Todos nuestros especialistas cuentan con certificaciones internacionales
                                            y formación continua en las últimas técnicas veterinarias.
                                        </p>
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
