"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Program", "Industry", "Topic", "Level"] as const;
type Tab = (typeof tabs)[number];

const tabContent: Record<Tab, { title: string; items: string[] }[]> = {
  Program: [
    { title: "Executive Programs", items: ["GM Certification", "CXO Strategy", "VP Leadership Track"] },
    { title: "Professional Certifications", items: ["PMP Prep", "Scrum Master", "Six Sigma Green Belt"] },
    { title: "Bootcamps", items: ["Data Science Bootcamp", "Product Bootcamp", "AI/ML Bootcamp"] },
    { title: "Micro-courses", items: ["Design Thinking", "Agile Essentials", "Communication Skills"] },
  ],
  Industry: [
    { title: "Information Technology", items: ["Cloud Computing", "Cybersecurity", "Software Architecture"] },
    { title: "Healthcare & Life Sciences", items: ["Digital Health", "Regulatory Affairs", "Biotech Ops"] },
    { title: "Retail & E-Commerce", items: ["Supply Chain", "Customer Analytics", "D2C Strategy"] },
    { title: "BFSI", items: ["FinTech Fundamentals", "Risk Management", "Digital Banking"] },
  ],
  Topic: [
    { title: "Product Management", items: ["PM Foundations", "Growth Product", "Technical PM"] },
    { title: "Strategy & Consulting", items: ["Business Strategy", "Corporate Finance", "M&A Fundamentals"] },
    { title: "Leadership", items: ["People Management", "Emotional Intelligence", "Executive Presence"] },
    { title: "Emerging Tech", items: ["Generative AI", "Blockchain Basics", "IoT & Edge Computing"] },
  ],
  Level: [
    { title: "Entry Level", items: ["Analyst Toolkit", "Business Fundamentals", "Data Literacy"] },
    { title: "Mid-Senior", items: ["Manager Accelerator", "Cross-functional Leadership", "Advanced Analytics"] },
    { title: "CXO Level", items: ["Board Readiness", "Digital Transformation", "Strategic Vision"] },
    { title: "Team Programs", items: ["Squad Upskilling", "Cohort Learning", "Blended Teams"] },
  ],
};

export default function CourseSegmentation() {
  const [activeTab, setActiveTab] = useState<Tab>("Program");

  return (
    <section id="courses" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 bg-blue-50 px-4 py-1.5 rounded-full">
            Our Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
            Programs for Every Need
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Browse our comprehensive catalog by program type, industry vertical,
            topic domain, or seniority level.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              id={`course-tab-${tab.toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-primary text-white shadow-lg shadow-blue-200"
                  : "bg-white border border-border text-body hover:border-primary hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {tabContent[activeTab].map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group bg-white border border-border rounded-2xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <h3 className="font-bold text-dark text-sm mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs font-semibold text-primary group-hover:underline">
                    View all →
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
