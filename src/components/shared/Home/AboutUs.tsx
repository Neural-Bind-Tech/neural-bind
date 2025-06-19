import React from 'react';
import sunan from '@/assets/images/sunan.png'
import nayeem from '@/assets/images/luffy.jpg'
import noman from '@/assets/images/noman.png'
import Image from 'next/image';

const employees = [
    {
        name: "Abdullah Al Noman",
        image: noman,
        role: "CEO",
        description: "Visionary leader with expertise in business strategy and digital transformation.",
    },
    {
        name: "Sunan Rabbi",
        image: sunan,
        role: "CTO",
        description:
            "Technical architect with deep knowledge in software development and emerging technologies.",
    },
    {
        name: "Sheikh Md Nayeem Hossain",
        image: nayeem,
        role: "Managing Director",
        description:
            "Operations expert focused on delivering exceptional client experiences and project management.",
    },
]

const AboutUs = () => {
    return (
        <section id="about" className="py-20 max-w-[1240px] mx-auto p-2 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#4CA1FF]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1F75FE]/10 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-[#4CA1FF]/20 to-[#1F75FE]/20 text-[#4CA1FF] rounded-full border border-[#4CA1FF]/30">
                            About Us
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4CA1FF] to-[#1F75FE]">
                        Meet NeuralBind
                    </h2>
                    <p className="text-lg text-[#B0C4DE] max-w-3xl mx-auto leading-relaxed">
                        Founded by a team of passionate technologists, NeuralBind is dedicated to bridging the gap between
                        innovative ideas and digital reality.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#4CA1FF] to-[#1F75FE] mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {employees.map((member, index) => (
                        <div key={index} className="group">
                            <div className="relative bg-gradient-to-b from-[#4CA1FF]/5 to-[#1F75FE]/5 backdrop-blur-sm border border-[#4CA1FF]/20 rounded-2xl p-8 text-center hover:border-[#4CA1FF]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4CA1FF]/10 hover:-translate-y-2 min-h-[380px]">
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#4CA1FF]/10 to-[#1F75FE]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="relative mb-6 mx-auto w-fit">
                                        <div className="w-32 h-32 bg-gradient-to-br from-[#1F75FE] via-[#4CA1FF] to-[#87CEEB] rounded-full mx-auto flex items-center justify-center overflow-hidden p-1 group-hover:scale-110 transition-transform duration-500">
                                            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#1F75FE]/20 to-[#4CA1FF]/20">
                                                <Image
                                                    src={member.image.src}
                                                    alt={member.name}
                                                    width={128}
                                                    height={128}
                                                    className='rounded-full object-cover w-full h-full group-hover:scale-105 transition-transform duration-500'
                                                />
                                            </div>
                                        </div>
                                        {/* Floating ring animation */}
                                        <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-[#4CA1FF]/30 group-hover:scale-125 group-hover:border-[#4CA1FF]/50 transition-all duration-700"></div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#4CA1FF] group-hover:to-[#87CEEB] transition-all duration-300">
                                        {member.name}
                                    </h3>

                                    <div className="inline-block mb-4">
                                        <span className="px-3 py-1 text-sm font-semibold bg-gradient-to-r from-[#4CA1FF]/20 to-[#1F75FE]/20 text-[#4CA1FF] rounded-full border border-[#4CA1FF]/30 group-hover:from-[#4CA1FF]/30 group-hover:to-[#1F75FE]/30 group-hover:border-[#4CA1FF]/50 transition-all duration-300">
                                            {member.role}
                                        </span>
                                    </div>

                                    <p className="text-[#B0C4DE] leading-relaxed group-hover:text-[#E6F3FF] transition-colors duration-300">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional Vision section with enhanced styling */}
                <div className="text-center relative">
                    <div className="bg-gradient-to-r from-[#4CA1FF]/10 via-[#1F75FE]/10 to-[#4CA1FF]/10 backdrop-blur-sm border border-[#4CA1FF]/20 rounded-3xl p-8 md:p-12">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4CA1FF]/5 to-transparent rounded-3xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4CA1FF] to-[#87CEEB]">
                                Our Vision
                            </h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-[#4CA1FF] to-[#1F75FE] mx-auto mb-6 rounded-full"></div>
                            <p className="text-lg md:text-xl text-[#B0C4DE] max-w-2xl mx-auto leading-relaxed italic">
                                &quot;To build at least one globally impactful product with 100 million monthly active users.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;