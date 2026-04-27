"use client";

import { motion } from "framer-motion";

const clients = [
  "Google", "Microsoft", "Amazon", "Infosys", "Wipro", "TCS",
  "Flipkart", "Swiggy", "Zomato", "HDFC Bank", "ICICI Bank", "Reliance",
  "Myntra", "PhonePe", "Paytm", "Ola", "Byju's", "Nykaa",
];

function LogoBadge({ name }: { name: string }) {
  const colors = [
    "from-blue-500 to-blue-600",
    "from-indigo-500 to-indigo-600",
    "from-purple-500 to-purple-600",
    "from-cyan-500 to-cyan-600",
    "from-teal-500 to-teal-600",
    "from-sky-500 to-sky-600",
  ];
  const color = colors[name.length % colors.length];
  return (
    <div className="flex-shrink-0 group flex items-center gap-3 bg-white border border-border rounded-xl px-5 py-3 hover:border-primary/40 hover:shadow-md transition-all duration-200 mx-3">
      <div
        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
      >
        {name[0]}
      </div>
      <span className="text-sm font-semibold text-muted group-hover:text-dark transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function ClientsSection() {
  const doubled = [...clients, ...clients];

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 bg-blue-50 px-4 py-1.5 rounded-full">
            Our Proven Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            From startups to Fortune 500s — enterprise leaders across every sector
            have made Accredian their L&D partner.
          </p>
        </motion.div>

        {/* Marquee Row 1 */}
        <div className="relative overflow-hidden mb-4">
          <div className="flex animate-marquee">
            {doubled.map((name, i) => (
              <LogoBadge key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>

        {/* Marquee Row 2 — reverse */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-reverse">
            {[...doubled].reverse().map((name, i) => (
              <LogoBadge key={`r-${name}-${i}`} name={name} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted">
            Join{" "}
            <span className="font-bold text-primary">500+ enterprises</span>{" "}
            already partnered with Accredian.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
