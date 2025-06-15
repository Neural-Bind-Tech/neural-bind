/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "@/components/shared/Navbar"
import Home from "@/components/shared/Home"
import TaglineSection from "@/components/shared/TaglineSection"
import MissionStatement from "@/components/shared/MissionStatement"
import ServiceSection from "@/components/shared/ServiceSection"
import BenefitsSection from "@/components/shared/BenefitsSection"
import TestimonialsSection from "@/components/shared/TestimonialsSection"
import AboutUs from "@/components/shared/AboutUs"
import ContactForm from "@/components/shared/ContactForm"
import Footer from "@/components/shared/Footer"

export default function NeuralBindLanding() {
  return (
    <div className="min-h-screen bg-[#0B1E3D] text-white ">

      {/* Navbar */}
      <Navbar />





      {/* Home */}
      <Home />

      {/* Tagline Section */}

      {/* Mission Statement */}
      <MissionStatement />

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
