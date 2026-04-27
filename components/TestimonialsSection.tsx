"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    title: "VP of Learning & Development",
    company: "Infosys",
    quote:
      "Accredian transformed how we think about enterprise learning. Their product management program took 300 of our PMs from good to exceptional in just 3 months. The measurable impact on our product velocity was immediate.",
    rating: 5,
    initials: "PS",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Rajesh Menon",
    title: "Chief People Officer",
    company: "Flipkart",
    quote:
      "We've worked with many L&D vendors, but Accredian stands apart. Their obsession with business outcomes — not just completion rates — is refreshing. Our leadership cohort saw a 40% improvement in 360 feedback scores.",
    rating: 5,
    initials: "RM",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    name: "Ananya Gupta",
    title: "Head of Talent",
    company: "HDFC Bank",
    quote:
      "The CAT framework gave us exactly what we needed: a structured, measurable, and deeply relevant program for our 500+ analysts. Accredian's responsiveness and quality of facilitators is world-class.",
    rating: 5,
    initials: "AG",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Vikram Nair",
    title: "CTO",
    company: "Swiggy",
    quote:
      "We needed to rapidly upskill our engineering leadership as we scaled. Accredian delivered a bespoke program in 6 weeks that our leaders still reference as a career-defining experience.",
    rating: 5,
    initials: "VN",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Sonal Patel",
    title: "Director, HR",
    company: "Wipro",
    quote:
      "The data literacy program Accredian designed for our non-technical teams was brilliant — practical, engaging, and immediately applicable. We saw a 3x increase in data-informed decision making within a quarter.",
    rating: 5,
    initials: "SP",
    color: "from-teal-500 to-teal-600",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 bg-white px-4 py-1.5 rounded-full shadow-sm border border-border">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
            What Our Partners Say
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Don't just take our word for it — hear from the leaders who've
            transformed their organizations with Accredian.
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-border rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <Quote size={36} className="text-blue-100 mb-4" />
              <p className="text-lg md:text-xl text-dark font-medium leading-relaxed mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-dark">{t.name}</p>
                    <p className="text-sm text-muted">
                      {t.title} · {t.company}
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    id="testimonial-prev-btn"
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === current ? "w-6 bg-primary" : "w-2 bg-border"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    id="testimonial-next-btn"
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
