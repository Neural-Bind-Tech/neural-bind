import { Card, CardContent } from '@/components/ui/card';
import cyber from '@/assets/cyber.png';
import data from '@/assets/data.png';
import digital from '@/assets/digital.png';
import mobile from '@/assets/mobile.png';
import software from '@/assets/software.png';
import web from '@/assets/web.png';
import Image from 'next/image';

const services = [
    {
        image: web,
        title: "Website Development",
        description: "Custom, responsive websites built with modern technologies and best practices.",
    },
    {
        image: mobile,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
        image: software,
        title: "Custom Software",
        description: "Tailored software solutions designed specifically for your business needs.",
    },
    {
        image: digital,
        title: "Digital Marketing",
        description: "Strategic marketing campaigns to boost your online presence and growth.",
    },
    {
        image: cyber,
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your digital assets.",
    },
    {
        image: data,
        title: "Data Science Solutions",
        description: "Advanced analytics and AI-powered insights for data-driven decisions.",
    },
];

const ServiceSection = () => {
    return (
        <section id="services" className="py-20 bg-[#162C54] relative overflow-hidden">
            {/* Enhanced background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#101D3F] via-[#081732] to-[#101D3F]"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#4CA1FF]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#1F75FE]/10 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-[#1F75FE]/5 to-[#4CA1FF]/5 rounded-full blur-3xl"></div>

            <div className="container max-w-[1240px] mx-auto p-2 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <span className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-[#4CA1FF]/20 to-[#1F75FE]/20 text-[#4CA1FF] rounded-full border border-[#4CA1FF]/30 backdrop-blur-sm">
                            Our Expertise
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4CA1FF] via-[#87CEEB] to-[#1F75FE]">
                        What We Offer
                    </h2>
                    <p className="text-lg text-[#B0C4DE] max-w-2xl mx-auto leading-relaxed">
                        Comprehensive digital solutions tailored to your needs
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#4CA1FF] to-[#1F75FE] mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group">
                            <Card className="relative bg-gradient-to-b from-[#0B1E3D]/90 to-[#162C54]/90 backdrop-blur-sm border border-[#1F75FE]/20 hover:border-[#4CA1FF]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1F75FE]/20 hover:-translate-y-3 overflow-hidden h-full">
                                {/* Animated background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#4CA1FF]/10 via-transparent to-[#1F75FE]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Subtle glow effect */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#4CA1FF]/5 to-[#1F75FE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                                <CardContent className="relative z-10 p-8 text-center h-full flex flex-col">
                                    <div className="relative mb-6 mx-auto">
                                        {/* Enhanced image container */}
                                        <div className="w-24 h-24 bg-gradient-to-br from-[#4CA1FF]/20 to-[#1F75FE]/20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-[#4CA1FF]/30 group-hover:border-[#4CA1FF]/50 mb-4">
                                            <div className="w-20 h-20 bg-gradient-to-br from-[#1F75FE]/10 to-[#4CA1FF]/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                                <Image
                                                    src={service.image.src}
                                                    alt={service.title}
                                                    className="object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
                                                    width={60}
                                                    height={60}
                                                />
                                            </div>
                                        </div>

                                        {/* Floating ring animation */}
                                        <div className="absolute inset-0 w-24 h-24 mx-auto rounded-3xl border border-[#4CA1FF]/20 group-hover:border-[#4CA1FF]/40 group-hover:scale-125 transition-all duration-700 top-0"></div>
                                    </div>

                                    <div className="flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#4CA1FF] group-hover:to-[#87CEEB] transition-all duration-300">
                                            {service.title}
                                        </h3>

                                        <div className="flex-grow">
                                            <p className="text-[#B0C4DE] leading-relaxed group-hover:text-[#E6F3FF] transition-colors duration-300">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Interactive bottom element */}
                                        <div className="mt-6 pt-4 border-t border-[#4CA1FF]/0 group-hover:border-[#4CA1FF]/30 transition-all duration-500">
                                            <div className="w-0 h-1 bg-gradient-to-r from-[#4CA1FF] to-[#1F75FE] group-hover:w-full transition-all duration-500 rounded-full mx-auto"></div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;