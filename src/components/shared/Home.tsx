import React from 'react';
import { Button } from '../ui/button';

const Home = () => {
    return (
        <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3D] via-[#162C54] to-[#0B1E3D]"></div>
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-[#1F75FE] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4CA1FF] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#B0C4DE] bg-clip-text text-transparent">
                        Binding Your Digital Dots, Vision to Execution
                    </h1>
                    <p className="text-xl md:text-2xl text-[#B0C4DE] mb-8 max-w-3xl mx-auto">
                        Your One-Stop Digital Partner for Software, Marketing, AI, and Beyond.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white border-0 px-8 py-3"
                        >
                            Get a Free Consultation
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-[#1F75FE] text-[#1F75FE] hover:bg-[#1F75FE] hover:text-white px-8 py-3"
                        >
                            See Our Services
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;