'use client'
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UnderConstruction = () => {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden min-h-screen flex items-center justify-center text-center">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3D] via-[#162C54] to-[#0B1E3D]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/50 via-transparent to-[#162C54]/30"></div>

            {/* Animated Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-[#1F75FE] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4CA1FF] rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 max-w-3xl">
                <div className="inline-flex items-center space-x-2 px-6 py-3 mb-6 bg-gradient-to-r from-[#4CA1FF]/20 to-[#1F75FE]/20 backdrop-blur-sm border border-[#4CA1FF]/30 rounded-full">
                    <Sparkles className="w-4 h-4 text-[#4CA1FF] animate-pulse" />
                    <span className="text-[#B0C4DE] text-sm font-medium">Hang Tight!</span>
                    <div className="w-2 h-2 bg-[#4CA1FF] rounded-full animate-pulse"></div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6F3FF] to-[#B0C4DE] drop-shadow-2xl">
                    This Page is Under Construction
                </h1>

                <p className="text-xl md:text-2xl text-[#B0C4DE] mb-10 leading-relaxed">
                    We&apos;re currently working hard to bring this page to life.
                    <br className="hidden md:block" />
                    Stay tuned for an awesome experience soon.
                </p>

                <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#4CA1FF]/30 hover:-translate-y-1"
                    onClick={() => window.location.href = '/'}
                >
                    Back to Home
                </Button>
            </div>
        </section>
    );
};

export default UnderConstruction;
