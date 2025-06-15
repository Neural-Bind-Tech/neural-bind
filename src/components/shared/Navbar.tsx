import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-[#0B1E3D]/95 backdrop-blur-sm border-b border-[#1F75FE]/20">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">NB</span>
                        </div>
                        <span className="text-xl font-bold">NeuralBind</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#home" className="hover:text-[#4CA1FF] transition-colors">
                            Home
                        </Link>
                        <Link href="#services" className="hover:text-[#4CA1FF] transition-colors">
                            Services
                        </Link>
                        <Link href="#benefits" className="hover:text-[#4CA1FF] transition-colors">
                            Benefits
                        </Link>
                        <Link href="#testimonials" className="hover:text-[#4CA1FF] transition-colors">
                            Testimonials
                        </Link>
                        <Link href="#about" className="hover:text-[#4CA1FF] transition-colors">
                            About Us
                        </Link>
                        <Link href="#contact" className="hover:text-[#4CA1FF] transition-colors">
                            Contact
                        </Link>
                    </div>

                    <Button className="bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white border-0">
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;