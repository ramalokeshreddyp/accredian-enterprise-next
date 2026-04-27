"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

interface FormData {
  fullName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  domain: string;
  numberOfCandidates: number;
  deliveryMode: string;
  location: string;
}

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const domains = ["IT & Technology", "Finance & BFSI", "Healthcare", "Retail & E-Commerce", "Manufacturing", "HR & People Ops", "Consulting", "Education", "Other"];
const deliveryModes = ["Online (Live + Async)", "Offline (In-Person)", "Hybrid (Blended)"];

export default function EnquireModal({ isOpen, onClose }: EnquireModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-5 border-b border-border">
                <div>
                  <h2 className="text-xl font-extrabold text-dark">
                    Enquire About Enterprise Training
                  </h2>
                  <p className="text-xs text-muted mt-0.5">
                    Our team will reach out within 1 business day.
                  </p>
                </div>
                <button
                  id="modal-close-btn"
                  onClick={handleClose}
                  className="w-9 h-9 rounded-xl bg-surface hover:bg-border flex items-center justify-center text-muted hover:text-dark transition-colors flex-shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                        <CheckCircle2 size={32} className="text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">
                        Enquiry Submitted!
                      </h3>
                      <p className="text-body text-sm max-w-xs leading-relaxed mb-6">
                        Thank you for reaching out. Our enterprise team will
                        contact you within 1 business day to discuss your requirements.
                      </p>
                      <button
                        onClick={handleClose}
                        className="bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary-dark transition-colors text-sm"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="modal-full-name"
                            {...register("fullName", { required: "Full name is required" })}
                            placeholder="e.g. Priya Sharma"
                            className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary ${errors.fullName ? "border-red-400 bg-red-50" : "border-border bg-surface"}`}
                          />
                          {errors.fullName && (
                            <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
                          )}
                        </div>

                        {/* Work Email */}
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-1.5">
                            Work Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="modal-work-email"
                            type="email"
                            {...register("workEmail", {
                              required: "Work email is required",
                              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                            })}
                            placeholder="you@company.com"
                            className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary ${errors.workEmail ? "border-red-400 bg-red-50" : "border-border bg-surface"}`}
                          />
                          {errors.workEmail && (
                            <p className="text-xs text-red-500 mt-1">{errors.workEmail.message}</p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="flex gap-2">
                            <span className="border border-border bg-surface rounded-xl px-3 py-3 text-sm text-muted flex-shrink-0">
                              +91
                            </span>
                            <input
                              id="modal-phone"
                              type="tel"
                              {...register("phone", { required: "Phone is required" })}
                              placeholder="98765 43210"
                              className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary ${errors.phone ? "border-red-400 bg-red-50" : "border-border bg-surface"}`}
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                          )}
                        </div>

                        {/* Company Name */}
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-1.5">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="modal-company-name"
                            {...register("companyName", { required: "Company name is required" })}
                            placeholder="e.g. Infosys Ltd."
                            className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary ${errors.companyName ? "border-red-400 bg-red-50" : "border-border bg-surface"}`}
                          />
                          {errors.companyName && (
                            <p className="text-xs text-red-500 mt-1">{errors.companyName.message}</p>
                          )}
                        </div>

                        {/* Domain */}
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-1.5">
                            Industry Domain <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="modal-domain"
                            {...register("domain", { required: "Please select a domain" })}
                            className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary appearance-none ${errors.domain ? "border-red-400 bg-red-50" : "border-border bg-surface"}`}
                          >
                            <option value="">Select domain...</option>
                            {domains.map((d) => <option key={d}>{d}</option>)}
                          </select>
                          {errors.domain && (
                            <p className="text-xs text-red-500 mt-1">{errors.domain.message}</p>
                          )}
                        </div>

                        {/* Number of Candidates */}
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-1.5">
                            No. of Candidates <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="modal-candidates"
                            type="number"
                            min={1}
                            {...register("numberOfCandidates", {
                              required: "Required",
                              min: { value: 1, message: "Minimum 1" },
                            })}
                            placeholder="e.g. 250"
                            className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary ${errors.numberOfCandidates ? "border-red-400 bg-red-50" : "border-border bg-surface"}`}
                          />
                          {errors.numberOfCandidates && (
                            <p className="text-xs text-red-500 mt-1">{errors.numberOfCandidates.message}</p>
                          )}
                        </div>

                        {/* Delivery Mode */}
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-1.5">
                            Mode of Delivery <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="modal-delivery-mode"
                            {...register("deliveryMode", { required: "Please select a mode" })}
                            className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary appearance-none ${errors.deliveryMode ? "border-red-400 bg-red-50" : "border-border bg-surface"}`}
                          >
                            <option value="">Select mode...</option>
                            {deliveryModes.map((d) => <option key={d}>{d}</option>)}
                          </select>
                          {errors.deliveryMode && (
                            <p className="text-xs text-red-500 mt-1">{errors.deliveryMode.message}</p>
                          )}
                        </div>

                        {/* Location */}
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-1.5">
                            Location
                          </label>
                          <input
                            id="modal-location"
                            {...register("location")}
                            placeholder="e.g. Bangalore, India"
                            className="w-full border border-border bg-surface rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          />
                        </div>
                      </div>

                      <button
                        id="modal-submit-btn"
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Enquiry"
                        )}
                      </button>

                      <p className="text-center text-xs text-muted">
                        By submitting, you agree to our{" "}
                        <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                        We never spam.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
