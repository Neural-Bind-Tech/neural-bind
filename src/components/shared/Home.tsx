import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
    return (
        <section id="home" className="relative py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
            {/* Enhanced multi-layered background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3D] via-[#162C54] to-[#0B1E3D]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/50 via-transparent to-[#162C54]/30"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-[#1F75FE] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4CA1FF] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] rounded-full blur-3xl opacity-5"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#4CA1FF]/30 rounded-full animate-bounce"></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#1F75FE]/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-[#87CEEB]/40 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#4CA1FF]/25 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 max-w-[1240px] p-2">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 px-6 py-3 mb-8 bg-gradient-to-r from-[#4CA1FF]/20 to-[#1F75FE]/20 backdrop-blur-sm border border-[#4CA1FF]/30 rounded-full">
                        <Sparkles className="w-4 h-4 text-[#4CA1FF] animate-pulse" />
                        <span className="text-[#B0C4DE] text-sm font-medium">Your Digital Transformation Partner</span>
                        <div className="w-2 h-2 bg-[#4CA1FF] rounded-full animate-pulse"></div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6F3FF] to-[#B0C4DE] drop-shadow-2xl">
                            Binding Your Digital Dots,
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4CA1FF] via-[#87CEEB] to-[#1F75FE] mt-2">
                            Vision to Execution
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-[#B0C4DE] mb-12 max-w-3xl mx-auto leading-relaxed">
                        Your One-Stop Digital Partner for
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CA1FF] to-[#87CEEB] font-semibold"> Software, Marketing, AI,</span> and Beyond.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                        <Button
                            size="lg"
                            className="group relative bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white border-0 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#4CA1FF]/30 hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4CA1FF]/20 to-[#1F75FE]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10 flex items-center">
                                Get a Free Consultation
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="group relative border-2 border-[#1F75FE]/50 text-[#4CA1FF] hover:bg-gradient-to-r hover:from-[#1F75FE]/10 hover:to-[#4CA1FF]/10 hover:border-[#4CA1FF] hover:text-[#87CEEB] px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#1F75FE]/20 hover:-translate-y-1 backdrop-blur-sm"
                        >
                            <span className="relative z-10">See Our Services</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4CA1FF]/5 to-[#1F75FE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap justify-center items-center gap-8 text-[#B0C4DE]/60 text-sm">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#4CA1FF] rounded-full"></div>
                            <span>100+ Projects Delivered</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#1F75FE] rounded-full"></div>
                            <span>10K+ Happy Clients</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#87CEEB] rounded-full"></div>
                            <span>10+ Years Experience</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-[#4CA1FF]/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-[#4CA1FF] rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default Home;
