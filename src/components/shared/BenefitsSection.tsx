import { CheckCircle } from 'lucide-react';
import React from 'react';

const BenefitsSection = () => {
    return (
        <section id="benefits" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4CA1FF]">Why Choose NeuralBind?</h2>
                    <p className="text-lg text-[#B0C4DE]">Experience the difference with our comprehensive approach</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Competitive Pricing",
                            description: "High-quality solutions at affordable rates without compromising on excellence.",
                        },
                        {
                            title: "After-Sales Support",
                            description: "Dedicated ongoing support to ensure your success long after project completion.",
                        },
                        {
                            title: "High-Quality Development",
                            description: "Industry best practices and cutting-edge technologies in every project.",
                        },
                        {
                            title: "Free Post-Maintenance",
                            description: "Initial maintenance period included to ensure smooth operation and optimization.",
                        },
                    ].map((benefit, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                            <p className="text-[#B0C4DE]">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;