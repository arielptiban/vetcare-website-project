import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}
export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <>
            <div
                className={`bg-white p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl overflow-hidden relative rounded-xl`}
            >
                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-sage/10 rounded-full"></div>
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-teal/10 rounded-full"></div>

                <div className="w-16 h-16 flex items-center justify-center bg-sage/30 rounded-full mb-4 relative z-10">
                    <Icon className="text-teal" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 relative z-10">{title}</h3>
                <p className="text-dark/80 select-none relative z-10">{description}</p>
            </div>
        </>
    )
}
