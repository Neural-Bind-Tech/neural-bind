'use client'
import { Facebook, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'sonner';
import logo from '@/assets/logo/h.png'
const Footer = () => {

    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubscribe = async () => {
        if (!phone) {
            toast.error('Please enter your phone number.');
            return;
        }

        try {
            setLoading(true);

            const res = await fetch('/api/number', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ number: phone }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success('Subscribed successfully!');
                setPhone('');
            } else {
                toast.error(data.message || 'Failed to subscribe.');
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <footer className="relative bg-gradient-to-b from-[#0B1E3D] to-[#061426] border-t border-[#1F75FE]/20">
            {/* Back to Top Button */}


            <div className="max-w-[1240px] mx-auto px-4 pt-16 pb-8">
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Link href='/'>
                                <Image src={logo.src} alt='logo' width={155} height={36} />
                            </Link>
                        </div>
                        <p className="text-[#B0C4DE] mb-6 leading-relaxed">
                            Your trusted partner for comprehensive digital solutions, from concept to deployment and beyond. We transform ideas into powerful digital experiences.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors">
                                <Mail className="w-4 h-4 text-[#4CA1FF]" />
                                <span className="text-sm">support@neuralbind.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors">
                                <Phone className="w-4 h-4 text-[#4CA1FF]" />
                                <span className="text-sm">+88 01875 899-096</span>
                            </div>
                            <div className="flex items-center space-x-3 text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors">
                                <MapPin className="w-4 h-4 text-[#4CA1FF]" />
                                <span className="text-sm">104 Capital Super Market, Farmgate Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white relative">
                            Quick Links
                        </h4>
                        <div className="space-y-3">
                            {[
                                { href: '#home', label: 'Home' },
                                { href: '/services', label: 'Services' },
                                { href: '#benefits', label: 'Benefits' },
                                { href: '#testimonials', label: 'Testimonials' },
                                { href: '#about', label: 'About' },
                                { href: '#contact', label: 'Contact' }
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-[#B0C4DE] hover:text-[#4CA1FF] hover:translate-x-1 transition-all duration-200 text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white relative">
                            Services
                        </h4>
                        <div className="space-y-3">
                            {[
                                'Web Development',
                                'Mobile Apps',
                                'AI Solutions',
                                'Cloud Services',
                                'Digital Strategy',
                                'Maintenance & Support'
                            ].map((service) => (
                                <Link
                                    key={service}
                                    href={`/services/${service}`}
                                    className="block text-[#B0C4DE] hover:text-[#4CA1FF] hover:translate-x-1 transition-all duration-200 text-sm"
                                >
                                    {service}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter & Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white relative">
                            Stay Connected
                        </h4>

                        {/* Number*/}
                        <div className="mb-6">
                            <p className="text-[#B0C4DE] text-sm mb-4">
                                Subscribe to our newsletter for the latest updates and insights.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="flex-1 px-4 py-2 bg-[#1a2942] border border-[#1F75FE]/30 rounded-lg text-white placeholder-[#B0C4DE]/60 focus:outline-none focus:border-[#4CA1FF] transition-colors text-sm"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    disabled={loading}
                                    className="px-4 py-2 bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white rounded-lg transition-all duration-300 hover:shadow-lg text-sm font-medium disabled:opacity-50"
                                >
                                    {loading ? 'Submitting...' : 'Subscribe'}
                                </button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-[#B0C4DE] text-sm mb-4">Follow us on social media</p>
                            <div className="flex space-x-4">
                                {[
                                    { icon: Linkedin, href: 'https://www.linkedin.com/company/neural-bind', label: 'LinkedIn' },
                                    { icon: Facebook, href: 'https://www.facebook.com/neuralbind/', label: 'Facebook' },
                                    { icon: Github, href: 'https://github.com/Neural-Bind-Tech', label: 'GitHub' }
                                ].map(({ icon: Icon, href, label }) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        className="p-2 bg-[#1a2942] border border-[#1F75FE]/30 rounded-lg text-[#B0C4DE] hover:text-white hover:bg-gradient-to-r hover:from-[#1F75FE] hover:to-[#4CA1FF] hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                        aria-label={label}
                                        target='_blank'
                                    >
                                        <Icon className="w-5 h-5" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#1F75FE]/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-[#B0C4DE] text-sm">
                            © 2025 NeuralBind. All rights reserved.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                            <Link href="/privacy" className="text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors text-sm">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors text-sm">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F75FE]/20 via-transparent to-[#4CA1FF]/20"></div>
            </div>
        </footer>
    );
};

export default Footer;