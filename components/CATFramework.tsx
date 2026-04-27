"use client";

import { motion } from "framer-motion";
import { GraduationCap, ClipboardCheck, Rocket } from "lucide-react";

const pillars = [
  {
    letter: "C",
    icon: GraduationCap,
    title: "Curriculum",
    subtitle: "Co-created with your teams",
    description:
      "We work alongside your L&D and functional heads to design curricula that map directly to your competency frameworks, skill gaps, and strategic priorities.",
    highlights: ["Needs Assessment", "Competency Mapping", "Custom Content Design", "Expert Co-creation"],
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    accent: "border-blue-200",
  },
  {
    letter: "A",
    icon: ClipboardCheck,
    title: "Assessment",
    subtitle: "Data-driven skill validation",
    description:
      "Rigorous pre- and post-program assessments powered by psychometrics and real-world case studies to accurately measure knowledge gain and behavior change.",
    highlights: ["Pre/Post Assessments", "Skill Benchmarking", "360° Feedback", "Capstone Projects"],
    color: "from-indigo-500 to-purple-600",
    bg: "bg-indigo-50",
    accent: "border-indigo-200",
  },
  {
    letter: "T",
    icon: Rocket,
    title: "Training",
    subtitle: "Flexible, impactful delivery",
    description:
      "Blended learning experiences combining live sessions with industry practitioners, self-paced content, peer cohorts, and hands-on project work.",
    highlights: ["Live Expert Sessions", "Self-paced Modules", "Peer Cohorts", "On-the-job Projects"],
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    accent: "border-purple-200",
  },
];

export default function CATFramework() {
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
            Our Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
            The C·A·T Framework
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            A proven, end-to-end methodology that ensures your learning investment
            translates to real, measurable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative bg-white border ${pillar.accent} rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Top accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${pillar.color}`} />

                <div className="p-7">
                  {/* Letter + Icon */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white text-2xl font-extrabold">
                        {pillar.letter}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-dark">{pillar.title}</h3>
                      <p className="text-xs text-muted font-medium">{pillar.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-body leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5">
                    {pillar.highlights.map((h) => (
                      <li key={h} className={`flex items-center gap-3 text-sm`}>
                        <span
                          className={`w-2 h-2 rounded-full bg-gradient-to-br ${pillar.color} flex-shrink-0`}
                        />
                        <span className="font-medium text-body">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
