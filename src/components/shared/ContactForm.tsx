/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Mail, MapPin, Phone, Calendar } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactInfo = [
        {
            icon: Phone,
            text: '+88 01875 899-096',
            href: 'tel:+8801875899096',
        },
        {
            icon: Mail,
            text: 'neuralbind.soft@gmail.com',
            // Open Gmail compose with pre-filled "To" field
            href: 'https://mail.google.com/mail/?view=cm&fs=1&to=neuralbind.soft@gmail.com',
        },
        {
            icon: MapPin,
            text: '104 Capital Super Market, Farmgate Dhaka, Bangladesh',
            // Open Google Maps with the location query
            href: 'https://www.google.com/maps/search/?api=1&query=104+Capital+Super+Market,+Farmgate+Dhaka,+Bangladesh',
        },
    ];


    const inputClasses = "bg-[#0B1E3D] border-[#1F75FE]/30 text-white placeholder:text-[#B0C4DE] focus:border-[#4CA1FF] transition-colors";

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Reset form after submission
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-20 bg-[#162C54]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4CA1FF]">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-lg text-[#B0C4DE] max-w-2xl mx-auto">
                        Ready to transform your digital presence? Get in touch with us today.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-[#0B1E3D]/50 p-8 rounded-lg">
                        <h3 className="text-xl font-semibold mb-6 text-white">Send us a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className={inputClasses}
                            />
                            <Input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className={inputClasses}
                            />
                            <Input
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className={inputClasses}
                            />
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                rows={5}
                                required
                                className={inputClasses}
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white border-0 transition-all disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8 lg:pl-8">
                        <div className="bg-[#0B1E3D]/50 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;
                                    return item.href ? (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="flex items-center space-x-3 text-[#B0C4DE] hover:text-[#4CA1FF] transition-colors"
                                            target='_blank'
                                        >
                                            <Icon className="w-5 h-5 text-[#4CA1FF]" />
                                            <span>{item.text}</span>
                                        </a>
                                    ) : (
                                        <div key={index} className="flex items-center space-x-3">
                                            <Icon className="w-5 h-5 text-[#4CA1FF]" />
                                            <span className="text-[#B0C4DE]">{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="bg-[#0B1E3D]/50 p-8 rounded-lg">
                            <h4 className="text-lg font-semibold mb-4 text-white">Schedule a Meeting</h4>
                            <p className="text-[#B0C4DE] mb-4 text-sm">
                                Book a free consultation to discuss your project requirements.
                            </p>
                            <Button
                                asChild
                                className="w-full bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white border-0 transition-all disabled:opacity-50"
                            >
                                <a
                                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation+with+NeuralBind&details=Let%27s+discuss+your+project+requirements&location=Google+Meet&sf=true&output=xml"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Calendar className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                                    Book Google Meet
                                </a>
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;