import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const reviews = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Director, TechNova Solutions",
    tag: "GST & Business Registration",
    text: "They streamlined our entire GST registration and monthly filing process. Clear communication, no jargon, and complete peace of mind.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Founder, Bloom Organics",
    tag: "Taxation & Audit",
    text: "As a small business, tax compliance felt overwhelming until we partnered with them. Honest advice, zero hidden charges, and super reliable turnarounds.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Amit Gupta",
    role: "Individual Taxpayer",
    tag: "ITR Filing & Wealth Advice",
    text: "Filing income tax returns used to take days of back-and-forth. Here, everything was processed and submitted smoothly within hours.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "99.8%", label: "On-Time Filings" },
  { value: "100%", label: "Data Security" },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const featured = reviews[activeIndex];

  return (
    <section id="testimonials" className="bg-slate-50/70 py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by businesses, startups, and individuals across Delhi NCR for reliable tax & financial services."
        />

        {/* Asymmetric Showcase Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Big Featured Review Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-3xl bg-navy p-8 text-white shadow-xl sm:p-12 overflow-hidden"
              >
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand/20 blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-brand border border-white/10 backdrop-blur">
                    {featured.tag}
                  </span>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(featured.rating)].map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <Quote size={40} className="mt-6 text-brand/40" />

                <p className="mt-2 font-display text-lg sm:text-xl font-medium leading-relaxed text-slate-100">
                  "{featured.text}"
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={featured.avatar}
                      alt={featured.name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-brand"
                    />
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        {featured.name}
                      </h4>
                      <p className="text-xs text-slate-300">{featured.role}</p>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-brand hover:text-white"
                      aria-label="Previous review"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-brand hover:text-white"
                      aria-label="Next review"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Stacked Interactive Review Cards */}
          <div className="lg:col-span-5 space-y-4">
            {reviews.map((rev, i) => {
              const isSelected = i === activeIndex;
              return (
                <div
                  key={rev.name}
                  onClick={() => setActiveIndex(i)}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
                    isSelected
                      ? "border-brand bg-white shadow-md scale-102"
                      : "border-slate-200 bg-white/60 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <h5 className="font-display text-sm font-bold text-slate-900">
                          {rev.name}
                        </h5>
                        <p className="text-xs text-slate-500">{rev.role}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand">
                      {rev.tag.split("&")[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {stats.map((st, i) => (
              <div key={i} className={`text-center ${i > 0 ? "pt-4 sm:pt-0" : ""}`}>
                <div className="font-display text-3xl font-extrabold text-navy">
                  {st.value}
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-600 flex items-center justify-center gap-1">
                  <CheckCircle2 size={14} className="text-brand shrink-0" />
                  <span>{st.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}