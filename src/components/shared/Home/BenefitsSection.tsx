import { CheckCircle, Users, Calendar, Megaphone, Star } from 'lucide-react';


const services = [
    {
        icon: Users,
        title: "Creating your Google and Facebook profiles",
        subtitle: "Professional Digital Presence",
        features: [
            "Organized presence with name, picture, chamber location, and schedule",
            "So that patients can find you easily — clearly and beautifully",
            "Patients can know what treatments you provide and where to find you"
        ],
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Calendar,
        title: "Easy and smart appointment booking system",
        subtitle: "Streamlined Scheduling",
        features: [
            "Option to book appointments directly from Facebook / WhatsApp / Website",
            "Automatic reminders — so patients don't forget",
            "A mobile-based system for patient, date, time — everything"
        ],
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Megaphone,
        title: "Delivering your story and knowledge to people through content",
        subtitle: "Content Marketing Excellence",
        features: [
            "Regular health tips and awareness articles on Facebook",
            "Tasteful pictures and designs",
            "Your short videos, statuses, or career highlights if needed",
            "So that people know, understand, and trust you"
        ],
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: Star,
        title: "Building your online reputation and review management",
        subtitle: "Trust & Credibility Building",
        features: [
            "Arrangement for bringing reviews on Google and Facebook",
            "How to handle negative comments — we show you",
            "You are busy, but your name should remain in people's minds — through good experiences"
        ],
        color: "from-orange-500 to-red-500"
    }
];

const BenefitsSection = () => {

    return (
        <section id="benefits" className="py-24 bg-gradient-to-br from-[#102548] via-[#1C3A66] to-[#102548]
 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
                        <Star className="w-4 h-4" />
                        Our Services
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
                        What we will do for you
                        <span className="block text-3xl md:text-5xl mt-2 text-blue-400">— exactly like you</span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive digital solutions tailored specifically for healthcare professionals
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 transition-all duration-500 hover:scale-[1.02] hover:border-slate-600/50 shadow-2xl shadow-blue-500/10`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className="w-8 h-8 text-white" />
                                </div>

                                <div className="relative z-10">
                                    <p className="text-sm font-medium text-blue-400 mb-2 tracking-wide uppercase">
                                        {service.subtitle}
                                    </p>
                                    <h3 className="text-2xl font-bold mb-6 text-white leading-tight group-hover:text-blue-100 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <div className="space-y-4">
                                        {service.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                                <CheckCircle className="w-5 h-5 text-green-400 mr-4 mt-1 group-hover/item:text-green-300 transition-colors duration-200" />
                                                <span className="text-slate-300 leading-relaxed group-hover/item:text-slate-100 transition-colors duration-200">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
