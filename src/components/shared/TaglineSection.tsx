import React from 'react';
import { Card, CardContent } from '../ui/card';
import { FileText, Package, Users, Globe, Heart, Calendar } from 'lucide-react';

const stats = [
    {
        icon: <FileText className="w-12 h-12" />,
        value: "50+",
        label: "Projects",
    },
    {
        icon: <Package className="w-12 h-12" />,
        value: "40+",
        label: "Products",
    },
    {
        icon: <Users className="w-12 h-12" />,
        value: "100+",
        label: "Experts",
    },
    {
        icon: <Globe className="w-12 h-12" />,
        value: "100+",
        label: "Countries",
    },
    {
        icon: <Heart className="w-12 h-12" />,
        value: "10K+",
        label: "Happy Clients",
    },
    {
        icon: <Calendar className="w-12 h-12" />,
        value: "10+",
        label: "Years Experience",
    },
];

const TaglineSection = () => {
    return (
        <section className="relative py10 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3D] via-[#162C54] to-[#0B1E3D]"></div>
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-[#1F75FE] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4CA1FF] rounded-full blur-3xl"></div>
            </div>

            <div className="container relative z-10 max-w-[1240px] mx-auto p-2">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#4CA1FF]">
                        At a Glance
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="bg-[#162C54] border-[#1F75FE]/20 hover:border-[#4CA1FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#1F75FE]/20"
                        >
                            <CardContent className="p-6 text-center">
                                <div className="text-[#4CA1FF] mb-4 flex justify-center">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl font-bold mb-2 text-white">
                                    {stat.value}
                                </h3>
                                <p className="text-sm text-[#B0C4DE]">
                                    {stat.label}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TaglineSection;