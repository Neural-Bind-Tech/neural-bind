import React from 'react';

const AboutUs = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4CA1FF]">Meet NeuralBind</h2>
                    <p className="text-lg text-[#B0C4DE] max-w-3xl mx-auto">
                        Founded by a team of passionate technologists, NeuralBind is dedicated to bridging the gap between
                        innovative ideas and digital reality.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                        {
                            name: "Abdullah Al Noman",
                            role: "CEO",
                            description: "Visionary leader with expertise in business strategy and digital transformation.",
                        },
                        {
                            name: "Sunan Rabbi",
                            role: "CTO",
                            description:
                                "Technical architect with deep knowledge in software development and emerging technologies.",
                        },
                        {
                            name: "Sheikh Md Nayeem Hossain",
                            role: "Managing Director",
                            description:
                                "Operations expert focused on delivering exceptional client experiences and project management.",
                        },
                    ].map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="w-32 h-32 bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">
                                    {member.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                            <p className="text-[#4CA1FF] font-medium mb-3">{member.role}</p>
                            <p className="text-[#B0C4DE]">{member.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-[#4CA1FF]">Our Vision</h3>
                    <p className="text-lg text-[#B0C4DE] max-w-2xl mx-auto">
                        &quot;To build at least one globally impactful product with 100 million monthly active users.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;