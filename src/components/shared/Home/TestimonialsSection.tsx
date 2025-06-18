'use client'
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Sarah Johnson",
            company: "TechStart Inc.",
            role: "CEO & Founder",
            rating: 5,
            testimonial: "NeuralBind transformed our digital presence completely. Their team's expertise and dedication exceeded our expectations. The results speak for themselves - 300% increase",
            avatar: "SJ"
        },
        {
            name: "Michael Chen",
            company: "Global Solutions Ltd.",
            role: "CTO",
            rating: 5,
            testimonial: "Outstanding service and support. They delivered our project on time and within budget. The custom solution has saved us over 40 hours per week in manual processes.",
            avatar: "MC"
        },
        {
            name: "Emily Rodriguez",
            company: "Innovation Hub",
            role: "Product Manager",
            rating: 5,
            testimonial: "The custom software solution they built for us has streamlined our operations significantly. Our team productivity increased by 150% since implementation.",
            avatar: "ER"
        },
        {
            name: "David Kim",
            company: "StartupX",
            role: "Founder",
            rating: 5,
            testimonial: "Incredible attention to detail and innovative solutions. NeuralBind doesn't just deliver code - they deliver business transformation. Absolutely phenomenal!",
            avatar: "DK"
        },
        {
            name: "Lisa Thompson",
            company: "Enterprise Corp",
            role: "VP of Technology",
            rating: 5,
            testimonial: "Working with NeuralBind was a game-changer. Their strategic approach and technical expertise helped us scale from 1K to 100K users seamlessly.",
            avatar: "LT"
        }
    ];


    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index: React.SetStateAction<number>) => {
        setCurrentIndex(index);
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push({ ...testimonials[index], originalIndex: index });
        }
        return visible;
    };

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-br from-[#162C54] via-[#1a2f5a] to-[#0f1f42] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#4CA1FF] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1F75FE] rounded-full blur-3xl"></div>
            </div>

            <div className="container max-w-[1240px] mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#4CA1FF] to-[#1F75FE] rounded-2xl mb-6 shadow-lg shadow-[#4CA1FF]/20">
                        <Quote className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4CA1FF] to-[#1F75FE] bg-clip-text text-transparent">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-[#B0C4DE] max-w-2xl mx-auto leading-relaxed">
                        Success stories from our valued partners who&apos;ve transformed their businesses with us
                    </p>
                </div>

                {/* Desktop Layout - 3 Cards */}
                <div className="hidden lg:block">
                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        {getVisibleTestimonials().map((testimonial, index) => (
                            <Card
                                key={testimonial.originalIndex}
                                className={`
                                    bg-gradient-to-br from-[#0B1E3D]/80 to-[#162C54]/60 
                                    border border-[#1F75FE]/20 backdrop-blur-sm
                                    hover:border-[#4CA1FF]/40 transition-all duration-1000 ease-linear
                                    hover:shadow-xl hover:shadow-[#4CA1FF]/10
                                    transform hover:-translate-y-2
                                    min-h-[400px]
                                    ${index === 1 ? 'border-[#4CA1FF]/40 shadow-lg shadow-[#4CA1FF]/20' : ''}
                                `}
                            >
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#4CA1FF] to-[#1F75FE] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                                            {testimonial.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex mb-2">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-[#FFD700] fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <blockquote className="text-[#E6F3FF] mb-6 text-base leading-relaxed relative">
                                        <span className="relative italic">{testimonial.testimonial}</span>
                                    </blockquote>

                                    <div className="border-t border-[#1F75FE]/20 pt-4">
                                        <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                                        <p className="text-[#4CA1FF] text-sm font-medium">{testimonial.role}</p>
                                        <p className="text-[#B0C4DE] text-sm">{testimonial.company}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Mobile/Tablet Layout - Single Card Carousel */}
                <div className="lg:hidden">
                    <div className="relative mb-8">
                        <Card className="bg-gradient-to-br from-[#0B1E3D]/80 to-[#162C54]/60 border border-[#4CA1FF]/40 backdrop-blur-sm shadow-xl shadow-[#4CA1FF]/20">
                            <CardContent className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#4CA1FF] to-[#1F75FE] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                        {testimonials[currentIndex].avatar}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex mb-2">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <blockquote className="text-[#E6F3FF] mb-6 text-lg leading-relaxed relative">
                                    <span className="relative italic">{testimonials[currentIndex].testimonial}</span>
                                </blockquote>

                                <div className="border-t border-[#1F75FE]/20 pt-4">
                                    <p className="font-semibold text-white text-xl">{testimonials[currentIndex].name}</p>
                                    <p className="text-[#4CA1FF] text-base font-medium">{testimonials[currentIndex].role}</p>
                                    <p className="text-[#B0C4DE] text-base">{testimonials[currentIndex].company}</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#4CA1FF]/10 backdrop-blur-sm border border-[#4CA1FF]/30 rounded-full flex items-center justify-center text-[#4CA1FF] hover:bg-[#4CA1FF]/20 transition-all duration-300 hover:scale-110"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#4CA1FF]/10 backdrop-blur-sm border border-[#4CA1FF]/30 rounded-full flex items-center justify-center text-[#4CA1FF] hover:bg-[#4CA1FF]/20 transition-all duration-300 hover:scale-110"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center space-x-3 mb-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`
                                w-3 h-3 rounded-full transition-all duration-300
                                ${index === currentIndex
                                    ? 'bg-[#4CA1FF] shadow-lg shadow-[#4CA1FF]/50'
                                    : 'bg-[#4CA1FF]/30 hover:bg-[#4CA1FF]/60'
                                }
                            `}
                        />
                    ))}
                </div>

                {/* Navigation Controls for Desktop */}
                <div className="hidden lg:flex justify-center items-center space-x-4">
                    <button
                        onClick={prevTestimonial}
                        className="w-12 h-12 bg-[#4CA1FF]/10 backdrop-blur-sm border border-[#4CA1FF]/30 rounded-full flex items-center justify-center text-[#4CA1FF] hover:bg-[#4CA1FF]/20 transition-all duration-300 hover:scale-110"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex items-center space-x-2 px-4">
                        <span className="text-[#B0C4DE] text-sm">
                            {currentIndex + 1} / {testimonials.length}
                        </span>
                    </div>

                    <button
                        onClick={nextTestimonial}
                        className="w-12 h-12 bg-[#4CA1FF]/10 backdrop-blur-sm border border-[#4CA1FF]/30 rounded-full flex items-center justify-center text-[#4CA1FF] hover:bg-[#4CA1FF]/20 transition-all duration-300 hover:scale-110"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;