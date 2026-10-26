import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { iconMap } from "../data/iconMap.js";
import SectionHeading from "./SectionHeading.jsx";
import { services } from "../data/siteData";

export default function Services({ limit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories dynamically from services data
  const categories = [
    "All",
    ...Array.from(new Set(services.map((s) => s.category).filter(Boolean))),
  ];

  // Filter services by active tab
  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  // Apply limit if specified (e.g., for home page view)
  const list = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <section id="services" className="bg-navy-light py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          title="Our Services"
          subtitle="Everything your business or family needs for tax, registration and compliance."
        />

        {/* Category Filter Tabs */}
        {!limit && categories.length > 1 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-navy text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Services Cards Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence>
            {list.map((s, i) => {
              const Icon = iconMap[s.icon] || iconMap.Briefcase;

              return (
                <motion.div
                  layout
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.05, duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border-t-4 border-brand bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  <div>
                    {/* Service Card Image Header */}
                    {s.image && (
                      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                        <img
                          src={s.image}
                          alt={s.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        
                        {/* Category Tag Overlay */}
                        {s.category && (
                          <span className="absolute top-3 right-3 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                            {s.category}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Body Content */}
                    <div className="p-6 pt-7">
                      <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-navy">
                        {s.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {s.text}
                      </p>

                      {/* Optional Features List */}
                      {s.features && s.features.length > 0 && (
                        <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                          {s.features.slice(0, 3).map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                              <CheckCircle2 size={14} className="text-brand shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-slate-100 pt-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark transition-all group-hover:gap-2.5 group-hover:text-brand"
                      >
                        <span>Enquire now</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Button for Limited Views */}
        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-navy-dark hover:shadow-lg hover:scale-105"
            >
              <span>View all {services.length} services</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}