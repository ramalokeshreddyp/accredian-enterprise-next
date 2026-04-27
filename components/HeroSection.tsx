"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onEnquireClick: () => void;
}

const benefits = [
  "Tailored Learning Solutions",
  "Industry-Led Expert Faculty",
  "Measurable Business Impact",
  "Dedicated L&D Partnership",
];

export default function HeroSection({ onEnquireClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-primary text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <Sparkles size={14} />
            Trusted by 500+ Leading Enterprises
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-tight mb-6">
            Next-Gen Expertise
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">
              For Your Enterprise
            </span>
          </h1>

          <p className="text-lg text-body leading-relaxed mb-8 max-w-xl">
            Cultivate high-performance teams through expert learning. We partner
            with leading enterprises to build customized upskilling programs
            that drive measurable business outcomes.
          </p>

          {/* Benefits */}
          <ul className="space-y-3 mb-10">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-body">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              id="hero-enquire-btn"
              onClick={onEnquireClick}
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-sm"
            >
              Enquire Now
              <ArrowRight size={18} />
            </button>
            <a
              href="#courses"
              className="flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3.5 rounded-xl text-sm hover:bg-primary hover:text-white transition-all duration-200"
            >
              Explore Programs
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 mt-10 pt-8 border-t border-border">
            {[
              { value: "500+", label: "Enterprises" },
              { value: "50K+", label: "Learners" },
              { value: "95%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-xs text-muted font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-lg">
            {/* Main card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">Accredian Enterprise</p>
                  <p className="text-xs text-muted">Learning & Development Platform</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { label: "Product Management", progress: 92, color: "bg-blue-500" },
                  { label: "Data Analytics", progress: 87, color: "bg-indigo-500" },
                  { label: "Leadership & Strategy", progress: 79, color: "bg-purple-500" },
                  { label: "Emerging Technologies", progress: 95, color: "bg-cyan-500" },
                ].map((course) => (
                  <div key={course.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-body">{course.label}</span>
                      <span className="text-muted">{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${course.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: "200+", lbl: "Courses" },
                  { val: "50+", lbl: "Experts" },
                  { val: "4.8★", lbl: "Rating" },
                ].map((item) => (
                  <div key={item.lbl} className="bg-surface rounded-xl p-3 text-center">
                    <p className="text-lg font-extrabold text-primary">{item.val}</p>
                    <p className="text-xs text-muted">{item.lbl}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ✓ ISO Certified
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white border border-border text-dark text-xs font-semibold px-4 py-2 rounded-xl shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              🏆 #1 Enterprise L&D
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
