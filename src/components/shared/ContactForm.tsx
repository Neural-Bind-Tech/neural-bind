import React from 'react';
import { Button } from '../ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';

const ContactForm = () => {
    return (
        <section id="contact" className="py-20 bg-[#162C54]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4CA1FF]">Let&apos;s Work Together</h2>
                    <p className="text-lg text-[#B0C4DE]">
                        Ready to transform your digital presence? Get in touch with us today.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div>
                        <form className="space-y-6">
                            <div>
                                <Input
                                    placeholder="Full Name"
                                    className="bg-[#0B1E3D] border-[#1F75FE]/30 text-white placeholder:text-[#B0C4DE] focus:border-[#4CA1FF]"
                                />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-[#0B1E3D] border-[#1F75FE]/30 text-white placeholder:text-[#B0C4DE] focus:border-[#4CA1FF]"
                                />
                            </div>
                            <div>
                                <Input
                                    placeholder="Phone Number"
                                    className="bg-[#0B1E3D] border-[#1F75FE]/30 text-white placeholder:text-[#B0C4DE] focus:border-[#4CA1FF]"
                                />
                            </div>
                            <div>
                                <Textarea
                                    placeholder="Tell us about your project..."
                                    rows={5}
                                    className="bg-[#0B1E3D] border-[#1F75FE]/30 text-white placeholder:text-[#B0C4DE] focus:border-[#4CA1FF]"
                                />
                            </div>
                            <Button className="w-full bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white border-0">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-[#4CA1FF]" />
                                    <span className="text-[#B0C4DE]">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-[#4CA1FF]" />
                                    <span className="text-[#B0C4DE]">hello@neuralbind.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="w-5 h-5 text-[#4CA1FF]" />
                                    <span className="text-[#B0C4DE]">Global Remote Team</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Schedule a Meeting</h4>
                            <Button
                                variant="outline"
                                className="border-[#1F75FE] text-[#1F75FE] hover:bg-[#1F75FE] hover:text-white"
                            >
                                Book Google Meet
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;