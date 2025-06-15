import { Facebook, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-[#0B1E3D] border-t border-[#1F75FE]/20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">NB</span>
                            </div>
                            <span className="text-xl font-bold">NeuralBind</span>
                        </div>
                        <p className="text-[#B0C4DE]">
                            Your trusted partner for comprehensive digital solutions, from concept to deployment and beyond.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <div className="space-y-2">
                            <Link href="#home" className="block text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors">
                                Home
                            </Link>
                            <Link href="#services" className="block text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors">
                                Services
                            </Link>
                            <Link href="#about" className="block text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors">
                                About
                            </Link>
                            <Link href="#contact" className="block text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors">
                                <Facebook className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors">
                                <Github className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#1F75FE]/20 pt-8 text-center">
                    <p className="text-[#B0C4DE]">© 2025 NeuralBind. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;