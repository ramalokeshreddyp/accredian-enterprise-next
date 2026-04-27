"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqTabs = ["General", "Courses", "Delivery", "Pricing"] as const;
type FAQTab = (typeof faqTabs)[number];

const faqs: Record<FAQTab, { q: string; a: string }[]> = {
  General: [
    {
      q: "What is Accredian Enterprise?",
      a: "Accredian Enterprise is a dedicated B2B learning & development platform that partners with organizations to build, deliver, and measure customized upskilling programs for their workforce.",
    },
    {
      q: "How is Accredian Enterprise different from public courses?",
      a: "Unlike generic MOOC platforms, every program we deliver is co-designed with your organization, incorporating your competency frameworks, industry context, use cases, and learning culture.",
    },
    {
      q: "What size organizations do you work with?",
      a: "We work with organizations of all sizes — from high-growth startups with 50+ employees to Fortune 500 companies with global workforces. Our programs scale accordingly.",
    },
  ],
  Courses: [
    {
      q: "What domains do your programs cover?",
      a: "Our catalog spans Product Management, Data Science & Analytics, Leadership, Strategy, Emerging Tech (AI/ML, Blockchain), BFSI, Healthcare, Retail, and more — 200+ programs in total.",
    },
    {
      q: "Can we customize the curriculum for our industry?",
      a: "Absolutely. All programs can be tailored at the curriculum level — swapping case studies, adding proprietary content, and aligning with your specific tools, technologies, and business context.",
    },
    {
      q: "Do learners receive formal certifications?",
      a: "Yes. Learners who complete programs receive co-branded certificates from Accredian, and select programs carry additional certifications from partner universities or industry bodies.",
    },
  ],
  Delivery: [
    {
      q: "What delivery formats do you support?",
      a: "We support three modes: fully Online (live + async), Offline (in-person workshops), and Hybrid (blended). The format is chosen based on your workforce distribution and preferences.",
    },
    {
      q: "How long are typical programs?",
      a: "Program length varies from intensive 2-day workshops to 6-month certification programs. We design the right duration based on learning objectives and workforce bandwidth.",
    },
    {
      q: "What technology platform is used for delivery?",
      a: "Our LMS integrates seamlessly with most enterprise HR stacks including Workday, SAP SuccessFactors, and LTI-compliant platforms. We also provide our own platform if preferred.",
    },
  ],
  Pricing: [
    {
      q: "How is pricing structured?",
      a: "Pricing is customized based on cohort size, program length, delivery format, and content complexity. We offer per-seat, cohort, and enterprise license models.",
    },
    {
      q: "Do you offer volume discounts?",
      a: "Yes. Organizations training 200+ learners annually benefit from significant volume-based pricing. We also offer multi-year partnership rates.",
    },
    {
      q: "Is there a free pilot or demo available?",
      a: "We offer a complimentary 2-hour taster session and needs assessment for qualified enterprise prospects. Contact our team via the Enquire form to schedule one.",
    },
  ],
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${open ? "border-primary/40 shadow-md" : "border-border"}`}>
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-surface transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-dark text-sm pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 bg-white">
              <p className="text-sm text-body leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<FAQTab>("General");

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 bg-blue-50 px-4 py-1.5 rounded-full">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body">
            Everything you need to know about partnering with Accredian Enterprise.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {faqTabs.map((tab) => (
            <button
              key={tab}
              id={`faq-tab-${tab.toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface border border-border text-body hover:border-primary hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {faqs[activeTab].map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
