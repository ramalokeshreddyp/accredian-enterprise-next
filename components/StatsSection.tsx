"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Enterprise Partners", description: "Leading companies trust Accredian" },
  { value: 50000, suffix: "+", label: "Learners Trained", description: "Professionals upskilled globally" },
  { value: 95, suffix: "%", label: "Satisfaction Rate", description: "Consistently high NPS scores" },
  { value: 200, suffix: "+", label: "Course Programs", description: "Across domains and levels" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = target >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}K` : count;

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-primary">
      {display}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 bg-blue-50 px-4 py-1.5 rounded-full">
            Our Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
            Numbers That Tell Our Story
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            A decade of enterprise learning excellence, measured in real outcomes
            for real organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-3">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-bold text-dark text-sm mb-1">{stat.label}</p>
                <p className="text-xs text-muted">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
