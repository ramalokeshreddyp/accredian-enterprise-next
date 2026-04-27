"use client";

import { motion } from "framer-motion";
import { Target, BookOpen, BarChart3, Users } from "lucide-react";

const edges = [
  {
    icon: Target,
    title: "Strategic Training",
    description:
      "Precision-engineered learning roadmaps aligned with your business objectives and competitive landscape.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: BookOpen,
    title: "Domain Expertise",
    description:
      "Programs designed by practitioners from Google, McKinsey, Deloitte, and top-tier academic institutions.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: Users,
    title: "Personalized Learning",
    description:
      "AI-driven adaptive paths that meet every learner where they are — accelerating growth at every level.",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description:
      "Real-time dashboards and analytics to track skill development, engagement, and business impact metrics.",
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
];

export default function AccredianEdge() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 bg-blue-50 px-4 py-1.5 rounded-full">
            The Accredian Edge
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
            Why Enterprises Choose Us
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We go beyond content delivery — we build learning ecosystems that
            transform how your organization thinks, leads, and competes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {edges.map((edge, i) => {
            const Icon = edge.icon;
            return (
              <motion.div
                key={edge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative bg-white border ${edge.border} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 ${edge.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                />
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edge.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold text-dark mb-3">
                    {edge.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {edge.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
