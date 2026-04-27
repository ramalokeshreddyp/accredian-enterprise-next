"use client";

import { motion } from "framer-motion";
import { Search, FileEdit, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Skill Gap Analysis",
    description:
      "We conduct a thorough diagnostic of your workforce — assessing current competencies against future business needs using our proprietary assessment engine and 1:1 stakeholder interviews.",
    color: "from-blue-500 to-blue-600",
    features: ["Workforce Diagnostics", "Competency Benchmarking", "Stakeholder Interviews"],
  },
  {
    number: "02",
    icon: FileEdit,
    title: "Customized Training Plan",
    description:
      "Based on your unique needs, we co-create a bespoke learning journey — selecting the right mix of content, delivery formats, timelines, and expert facilitators.",
    color: "from-indigo-500 to-indigo-600",
    features: ["Bespoke Curriculum Design", "Expert Facilitator Selection", "Flexible Scheduling"],
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Continuous Support & Evolution",
    description:
      "We stay with you beyond program launch — tracking outcomes, refining content, gathering learner feedback, and ensuring the program evolves with your organization.",
    color: "from-purple-500 to-purple-600",
    features: ["Real-time Analytics", "Feedback Loops", "Quarterly Reviews"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 bg-blue-50 px-4 py-1.5 rounded-full">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
            How It Works
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            A structured, collaborative partnership model that ensures your
            learning investment delivers maximum impact.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[calc(66%-2rem)] h-0.5 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 relative z-10`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-border flex items-center justify-center shadow-sm z-20">
                      <span className="text-xs font-extrabold text-primary">{step.number}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full">
                    <h3 className="text-lg font-bold text-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-1.5">
                      {step.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted justify-center">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.color}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
