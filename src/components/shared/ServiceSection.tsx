import { BarChart3, Code, Settings, Shield, Smartphone, TrendingUp } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from '../ui/card';

const ServiceSection = () => {
    return (
        <section id="services" className="py-20 bg-[#162C54]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4CA1FF]">What We Offer</h2>
                    <p className="text-lg text-[#B0C4DE]">Comprehensive digital solutions tailored to your needs</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Code className="w-8 h-8" />,
                            title: "Website Development",
                            description: "Custom, responsive websites built with modern technologies and best practices.",
                        },
                        {
                            icon: <Smartphone className="w-8 h-8" />,
                            title: "Mobile App Development",
                            description: "Native and cross-platform mobile applications for iOS and Android.",
                        },
                        {
                            icon: <Settings className="w-8 h-8" />,
                            title: "Custom Software",
                            description: "Tailored software solutions designed specifically for your business needs.",
                        },
                        {
                            icon: <TrendingUp className="w-8 h-8" />,
                            title: "Digital Marketing",
                            description: "Strategic marketing campaigns to boost your online presence and growth.",
                        },
                        {
                            icon: <Shield className="w-8 h-8" />,
                            title: "Cybersecurity",
                            description: "Comprehensive security solutions to protect your digital assets.",
                        },
                        {
                            icon: <BarChart3 className="w-8 h-8" />,
                            title: "Data Science Solutions",
                            description: "Advanced analytics and AI-powered insights for data-driven decisions.",
                        },
                    ].map((service, index) => (
                        <Card
                            key={index}
                            className="bg-[#0B1E3D] border-[#1F75FE]/20 hover:border-[#4CA1FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#1F75FE]/20"
                        >
                            <CardContent className="p-6 text-center">
                                <div className="text-[#4CA1FF] mb-4 flex justify-center">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                                <p className="text-[#B0C4DE]">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;