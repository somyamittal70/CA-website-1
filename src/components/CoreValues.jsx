import { motion } from "framer-motion";
import { iconMap } from "../data/iconMap.js";
import SectionHeading from "./SectionHeading.jsx";
import { values } from "../data/siteData";

export default function CoreValues() {
  // Separate the first primary value for a special bento layout, map the rest below
  const primaryValue = values[0];
  const remainingValues = values.slice(1);

  const PrimaryIcon = iconMap[primaryValue?.icon] || iconMap.Star;

  return (
    <section id="values" className="bg-navy py-16 sm:py-24 text-white relative overflow-hidden">
      
      {/* Background Decorative Accent Glows */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          light
          title="Our Core Values"
          subtitle="The principles behind every file we handle and every client we serve."
        />

        {/* Top Split Area: Featured Value Card + Professional Image */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-center">
          
          {/* Featured First Value (Innovation / Bento Lead Card) */}
          {primaryValue && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 rounded-3xl bg-white/10 p-8 sm:p-10 border border-white/10 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-lg mb-6">
                  <PrimaryIcon size={28} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand block mb-1">
                  Guiding Principle #1
                </span>
                <h3 className="font-display text-2xl font-bold !text-white sm:text-3xl">
                  {primaryValue.title}
                </h3>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  {primaryValue.text}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Forward-thinking compliance</span>
                <span className="font-semibold text-brand">Explore all values ↓</span>
              </div>
            </motion.div>
          )}

          {/* Contextual Professional Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="Chartered accountants collaborating with clients"
                className="w-full h-[320px] sm:h-[380px] object-cover opacity-90 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>

        {/* Remaining Core Values Grid (3-columns) */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {remainingValues.map((v, i) => {
            const Icon = iconMap[v.icon] || iconMap.Star;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group rounded-2xl bg-white/5 border border-white/10 p-6 transition-all hover:bg-white/10 hover:border-white/20"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-md transition-transform group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display text-lg font-bold !text-white">
                    {v.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {v.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}