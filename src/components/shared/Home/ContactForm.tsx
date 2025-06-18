/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Calendar, Send, CheckCircle, AlertCircle, Clock, User, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

    const contactInfo = [
        {
            icon: Phone,
            text: '+88 01875 899-096',
            href: 'tel:+8801875899096',
            label: 'Call us directly'
        },
        {
            icon: Mail,
            text: 'neuralbind.soft@gmail.com',
            href: 'https://mail.google.com/mail/?view=cm&fs=1&to=neuralbind.soft@gmail.com',
            label: 'Send us an email'
        },
        {
            icon: MapPin,
            text: '104 Capital Super Market, Farmgate Dhaka, Bangladesh',
            href: 'https://www.google.com/maps/search/?api=1&query=104+Capital+Super+Market,+Farmgate+Dhaka,+Bangladesh',
            label: 'Visit our office'
        },
    ];


    const getInputClasses = (fieldName: string) => {
        const baseClasses = "bg-[#0B1E3D]/80 border-2 text-white placeholder:text-[#B0C4DE]/70 transition-all duration-300 hover:bg-[#0B1E3D] backdrop-blur-sm";
        const focusClasses = "focus:border-[#4CA1FF] focus:bg-[#0B1E3D] focus:shadow-lg focus:shadow-[#4CA1FF]/20";
        const errorClasses = formErrors[fieldName] ? "border-red-400 focus:border-red-400" : "border-[#1F75FE]/30";
        const successClasses = !formErrors[fieldName] && formData[fieldName as keyof typeof formData] ? "border-green-400/50" : "";

        return `${baseClasses} ${focusClasses} ${errorClasses} ${successClasses}`;
    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(response);

            if (!response.ok) throw new Error('Network error');

            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '' });
            setFormErrors({});
        } catch (error) {
            console.error('Submission failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };


    // Auto-hide success message
    useEffect(() => {
        if (submitStatus === 'success') {
            const timer = setTimeout(() => setSubmitStatus('idle'), 5000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-[#162C54] via-[#1A2F5A] to-[#0F1B36] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#4CA1FF] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1F75FE] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] rounded-full mb-6 shadow-lg shadow-[#1F75FE]/30">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#4CA1FF] to-[#1F75FE] bg-clip-text text-transparent">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-xl text-[#B0C4DE] max-w-2xl mx-auto leading-relaxed">
                        Ready to transform your digital presence? Get in touch with us today and let&apos;s create something amazing.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                    {/* Contact Form */}
                    <div className="flex flex-col justify-between bg-[#0B1E3D]/30 backdrop-blur-xl p-8 rounded-2xl border border-[#1F75FE]/20 shadow-2xl hover:shadow-[#1F75FE]/10 transition-all duration-300 h-full">
                        <div className="flex items-center mb-8">
                            <MessageSquare className="w-6 h-6 text-[#4CA1FF] mr-3" />
                            <h3 className="text-2xl font-semibold text-white">Send us a message</h3>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg flex items-center animate-in slide-in-from-top-4 duration-500">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                                <span className="text-green-400">Message sent successfully! We&apos;ll get back to you soon.</span>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg flex items-center animate-in slide-in-from-top-4 duration-500">
                                <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                                <span className="text-red-400">Failed to send message. Please try again.</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative group">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                                    <User className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'name' ? 'text-[#4CA1FF]' : 'text-[#B0C4DE]/50'
                                        }`} />
                                </div>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Full Name"
                                    required
                                    className={`${getInputClasses('name')} pl-12 h-12`}
                                />
                                {formErrors.name && (
                                    <p className="text-red-400 text-sm mt-1 animate-in slide-in-from-top-2 duration-300">{formErrors.name}</p>
                                )}
                            </div>

                            <div className="relative group">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                                    <Mail className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-[#4CA1FF]' : 'text-[#B0C4DE]/50'
                                        }`} />
                                </div>
                                <Input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Email Address"
                                    required
                                    className={`${getInputClasses('email')} pl-12 h-12`}
                                />
                                {formErrors.email && (
                                    <p className="text-red-400 text-sm mt-1 animate-in slide-in-from-top-2 duration-300">{formErrors.email}</p>
                                )}
                            </div>

                            <div className="relative group">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                                    <Phone className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'phone' ? 'text-[#4CA1FF]' : 'text-[#B0C4DE]/50'
                                        }`} />
                                </div>
                                <Input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('phone')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Phone Number (Optional)"
                                    className={`${getInputClasses('phone')} pl-12 h-12`}
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white border-0 transition-all duration-300 disabled:opacity-50 group shadow-lg hover:shadow-xl hover:shadow-[#1F75FE]/30 transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Clock className="w-5 h-5 mr-2 animate-spin" />
                                        Subscribing...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                                        Subscribe
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col justify-between bg-[#0B1E3D]/30 backdrop-blur-xl p-8 rounded-2xl border border-[#1F75FE]/20 shadow-2xl hover:shadow-[#1F75FE]/10 transition-all duration-300 h-full">
                        <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
                            <Phone className="w-6 h-6 text-[#4CA1FF] mr-3" />
                            Get in Touch
                        </h3>
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="flex items-start space-x-4 p-4 rounded-xl bg-[#0B1E3D]/40 hover:bg-[#0B1E3D]/60 text-[#B0C4DE] hover:text-white transition-all duration-300 group border border-transparent hover:border-[#4CA1FF]/30"
                                        target='_blank'
                                        rel="noopener noreferrer"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#1F75FE]/20 to-[#4CA1FF]/20 rounded-lg flex items-center justify-center group-hover:from-[#1F75FE] group-hover:to-[#4CA1FF] transition-all duration-300">
                                            <Icon className="w-6 h-6 text-[#4CA1FF] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div className="flex-grow">
                                            <p className="font-medium text-white mb-1">{item.label}</p>
                                            <p className="text-sm group-hover:text-[#4CA1FF] transition-colors duration-300">{item.text}</p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Meeting Section: full width below the grid */}
                <div className="mt-8">
                    <div className="bg-[#0B1E3D]/30 backdrop-blur-xl p-8 rounded-2xl border border-[#1F75FE]/20 shadow-2xl hover:shadow-[#1F75FE]/10 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <Calendar className="w-6 h-6 text-[#4CA1FF] mr-3" />
                            <h4 className="text-xl font-semibold text-white">Schedule a Meeting</h4>
                        </div>
                        <p className="text-[#B0C4DE] mb-6 leading-relaxed">
                            Book a free 30-minute consultation to discuss your project requirements, timeline, and how we can help bring your vision to life.
                        </p>
                        <Button
                            asChild
                            className="w-full h-12 bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white border-0 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-[#1F75FE]/30 transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <a
                                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation+with+NeuralBind&details=Let%27s+discuss+your+project+requirements&location=Google+Meet&sf=true&output=xml"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                            >
                                <Calendar className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                                Book Google Meet
                            </a>
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactForm;