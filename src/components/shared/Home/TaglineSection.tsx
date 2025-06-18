import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import docs from '@/assets/glance/docs.png'
import calendar from '@/assets/glance/calendar.png'
import client from '@/assets/glance/client.png'
import countries from '@/assets/glance/coronavirus.png'
import product from '@/assets/glance/product.png'
import team from '@/assets/glance/team.png'
import Image from 'next/image';

const stats = [
    {
        icon: docs,
        value: "50+",
        label: "Projects",
    },
    {
        icon: product,
        value: "40+",
        label: "Products",
    },
    {
        icon: team,
        value: "100+",
        label: "Experts",
    },
    {
        icon: countries,
        value: "100+",
        label: "Countries",
    },
    {
        icon: client,
        value: "10K+",
        label: "Happy Clients",
    },
    {
        icon: calendar,
        value: "10+",
        label: "Years Experience",
    },
];

const TaglineSection = () => {
    return (
        <section className="relative py-16 lg:py-32 overflow-hidden">
            {/* Enhanced background with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3D] via-[#162C54] to-[#0B1E3D]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/50 via-transparent to-[#162C54]/30"></div>

            {/* Enhanced decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-[#1F75FE] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4CA1FF] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] rounded-full blur-3xl opacity-5"></div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#4CA1FF]/30 rounded-full animate-bounce"></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#1F75FE]/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-[#87CEEB]/40 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container relative z-10 max-w-[1240px] mx-auto p-2">
                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <span className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-[#4CA1FF]/20 to-[#1F75FE]/20 text-[#4CA1FF] rounded-full border border-[#4CA1FF]/30 backdrop-blur-sm">
                            Our Achievements
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4CA1FF] via-[#87CEEB] to-[#1F75FE] mb-4">
                        At a Glance
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#4CA1FF] to-[#1F75FE] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="group">
                            <Card className="relative bg-gradient-to-b from-[#162C54]/80 to-[#0B1E3D]/80 backdrop-blur-sm border border-[#1F75FE]/20 hover:border-[#4CA1FF]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1F75FE]/20 hover:-translate-y-3 overflow-hidden">
                                {/* Animated background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#4CA1FF]/10 via-transparent to-[#1F75FE]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Floating border effect */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#4CA1FF]/20 to-[#1F75FE]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                                <CardContent className="relative z-10 p-6 text-center">
                                    <div className="relative mb-6 mx-auto w-fit">
                                        {/* Icon container with enhanced styling */}
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#4CA1FF]/20 to-[#1F75FE]/20 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-[#4CA1FF]/30 group-hover:border-[#4CA1FF]/50">
                                            <div className="text-[#4CA1FF] group-hover:text-[#87CEEB] transition-colors duration-300 filter drop-shadow-lg">
                                                <Image
                                                    src={stat.icon}
                                                    alt={stat.label}
                                                    height={32}
                                                    width={32}
                                                    className="group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                        </div>

                                        {/* Rotating ring effect */}
                                        <div className="absolute inset-0 w-16 h-16 mx-auto rounded-2xl border border-[#4CA1FF]/20 group-hover:border-[#4CA1FF]/40 group-hover:scale-125 transition-all duration-700"></div>
                                    </div>

                                    <div className="relative">
                                        <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#4CA1FF] group-hover:to-[#87CEEB] transition-all duration-300 group-hover:scale-105">
                                            {stat.value}
                                        </h3>

                                        <div className="relative">
                                            <p className="text-sm font-medium text-[#B0C4DE] group-hover:text-[#E6F3FF] transition-colors duration-300 tracking-wide">
                                                {stat.label}
                                            </p>

                                            {/* Underline animation */}
                                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#4CA1FF] to-[#1F75FE] group-hover:w-full transition-all duration-500 rounded-full"></div>
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

export default TaglineSection;