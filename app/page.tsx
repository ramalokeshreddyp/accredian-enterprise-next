"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ClientsSection from "@/components/ClientsSection";
import AccredianEdge from "@/components/AccredianEdge";
import CourseSegmentation from "@/components/CourseSegmentation";
import CATFramework from "@/components/CATFramework";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <Navbar onEnquireClick={() => setModalOpen(true)} />
      <HeroSection onEnquireClick={() => setModalOpen(true)} />
      <StatsSection />
      <ClientsSection />
      <AccredianEdge />
      <CourseSegmentation />
      <CATFramework />
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <EnquireModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
