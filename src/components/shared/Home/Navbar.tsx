'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo/h.png'
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '#benefits', label: 'Benefits' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '/blog', label: 'Blog' },
        { href: '#about', label: 'About Us' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <nav className="sticky top-0 z-50 bg-[#0B1E3D]/95 backdrop-blur-sm border-b border-[#1F75FE]/20">
            <div className="container px-4 py-4 max-w-[1240px] mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}

                    <Link href='/'>
                        <Image src={logo.src} alt='logo' width={155} height={36} />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-white hover:text-[#4CA1FF] transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <Button className="bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white border-0 transition-all duration-300">
                            <Link
                                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation+with+NeuralBind&details=Let%27s+discuss+your+project+requirements&location=Google+Meet&sf=true&output=xml"
                                target='_blank'
                                className="block w-full h-full"
                            >
                                Schedule a Call
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white hover:text-[#4CA1FF] transition-colors duration-200 p-2"
                        aria-label="Toggle mobile menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'max-h-96 opacity-100 mt-4'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <div className="bg-[#0B1E3D]/98 backdrop-blur-sm rounded-lg border border-[#1F75FE]/20 shadow-lg">
                        <div className="flex flex-col space-y-1 p-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="text-white hover:text-[#4CA1FF] hover:bg-[#1F75FE]/10 px-4 py-3 rounded-lg transition-all duration-200"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Mobile CTA Button */}
                            <div className="pt-4 border-t border-[#1F75FE]/20 mt-2">
                                <Button className="w-full bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white border-0 transition-all duration-300">
                                    <Link
                                        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation+with+NeuralBind&details=Let%27s+discuss+your+project+requirements&location=Google+Meet&sf=true&output=xml"
                                        target='_blank'
                                        onClick={closeMenu}
                                        className="block w-full h-full"
                                    >
                                        Schedule a Call
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10"
                        onClick={closeMenu}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;