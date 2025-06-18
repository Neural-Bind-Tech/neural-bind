import Navbar from "@/components/shared/Home/Navbar"
import Home from "@/components/shared/Home/Home"
import TaglineSection from "@/components/shared/Home/TaglineSection"
import MissionStatement from "@/components/shared/Home/MissionStatement"
import ServiceSection from "@/components/shared/Home/ServiceSection"
import BenefitsSection from "@/components/shared/Home/BenefitsSection"
import TestimonialsSection from "@/components/shared/Home/TestimonialsSection"
import AboutUs from "@/components/shared/Home/AboutUs"
import ContactForm from "@/components/shared/Home/ContactForm"
import Footer from "@/components/shared/Home/Footer"

export default function NeuralBindLanding() {
  return (
    <div className="min-h-screen bg-[#0B1E3D] text-white ">

      {/* Navbar */}
      <Navbar />

      {/* Home */}
      <Home />

      {/* Mission Statement */}
      <MissionStatement />

      {/* At glance */}
      <TaglineSection />

      {/* Services Section */}
      <ServiceSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* About Us Section */}
      <AboutUs />

      {/* Contact Form */}
      <ContactForm />


      {/* Footer */}
      <Footer />

    </div>
  )
}
