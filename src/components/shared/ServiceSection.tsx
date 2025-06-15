import { Card, CardContent } from '../ui/card';
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
        <section id="services" className="py-20 bg-[#162C54]">
            <div className="container max-w-[1240px] mx-auto p-2">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4CA1FF]">
                        What We Offer
                    </h2>
                    <p className="text-lg text-[#B0C4DE]">
                        Comprehensive digital solutions tailored to your needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="bg-[#0B1E3D] border-[#1F75FE]/20 hover:border-[#4CA1FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#1F75FE]/20 overflow-hidden"
                        >
                            <CardContent className="p-6 text-center">
                                <div className="mb-4 flex justify-center">
                                    <Image
                                        src={service.image.src}
                                        alt={service.title}
                                        className="object-contain"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">
                                    {service.title}
                                </h3>
                                <p className="text-[#B0C4DE]">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;