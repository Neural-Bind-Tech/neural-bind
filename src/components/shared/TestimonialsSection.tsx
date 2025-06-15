import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-20 bg-[#162C54]">
            <div className="container max-w-[1240px] mx-auto p-2">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4CA1FF]">What Our Clients Say</h2>
                    <p className="text-lg text-[#B0C4DE]">Success stories from our valued partners</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Sarah Johnson",
                            company: "TechStart Inc.",
                            rating: 5,
                            testimonial:
                                "NeuralBind transformed our digital presence completely. Their team's expertise and dedication exceeded our expectations.",
                        },
                        {
                            name: "Michael Chen",
                            company: "Global Solutions Ltd.",
                            rating: 5,
                            testimonial:
                                "Outstanding service and support. They delivered our project on time and within budget. Highly recommended!",
                        },
                        {
                            name: "Emily Rodriguez",
                            company: "Innovation Hub",
                            rating: 5,
                            testimonial:
                                "The custom software solution they built for us has streamlined our operations significantly. Excellent work!",
                        },
                    ].map((testimonial, index) => (
                        <Card key={index} className="bg-[#0B1E3D] border-[#1F75FE]/20">
                            <CardContent className="p-6">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-[#4CA1FF] fill-current" />
                                    ))}
                                </div>
                                <p className="text-[#B0C4DE] mb-4 italic">&quot;{testimonial.testimonial}&quot;</p>
                                <div>
                                    <p className="font-semibold text-white">{testimonial.name}</p>
                                    <p className="text-[#4CA1FF] text-sm">{testimonial.company}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;