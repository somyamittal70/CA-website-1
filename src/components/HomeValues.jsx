import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Lightbulb, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { values } from "../data/siteData";
import { iconMap } from "../data/iconMap.js";

const homeHighlights = [
  {
    icon: Lightbulb,
    title: "Modern & Transparent",
    desc: "Plain language and clear digital processes without confusion.",
  },
  {
    icon: Target,
    title: "Deadline Focused",
    desc: "Strictly tracked schedules so you never miss a tax due date.",
  },
  {
    icon: ShieldCheck,
    title: "100% Data Security",
    desc: "Your business financial data remains private and confidential.",
  },
  {
    icon: Users,
    title: "Direct CA Guidance",
    desc: "Qualified CAs handle your filings personally.",
  },
];

export default function HomeValues() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Top Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy-light/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
            Our Commitment
          </span>
          <h2 className="font-display mt-3 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            Principles Behind Every Return We File
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            We believe accountancy should give you clarity and confidence. Our work is grounded in accuracy, integrity, and proactive support.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="mt-12 grid gap-6 md:grid-cols-12">
          
          {/* Main Hero Card (Large Feature) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 rounded-3xl bg-navy p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">
                <CheckCircle2 size={14} /> Zero Hidden Fees
              </span>
              <h3 className="font-display mt-4 text-2xl font-bold text-white sm:text-3xl">
                Accountancy built around your trust and peace of mind
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                From day-to-day bookkeeping to complex statutory audits, we combine deep Indian tax law expertise with automated filing calendars so you never face penalties.
              </p>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 size={16} className="text-brand shrink-0" />
                <span>100% Tax & Legal Compliance</span>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-brand-dark"
              >
                <span>Learn more</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Side Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 relative overflow-hidden rounded-3xl border border-slate-200 shadow-lg min-h-[260px]"
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              alt="Financial reporting and analysis"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Direct CA Access</p>
              <h4 className="font-display text-lg font-bold text-white mt-1">Qualified CAs manage your files personally</h4>
            </div>
          </motion.div>

          {/* Bottom 4 Feature Cards */}
          {homeHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.05 }}
                className="md:col-span-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-slate-300"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon size={22} />
                </span>
                <h4 className="font-display mt-4 text-base font-bold text-slate-900">{item.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Core Pillars Badges */}
        {values && values.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-2">Core Pillars:</span>
            {values.map((v) => {
              const Icon = iconMap[v.icon] || iconMap.Star;
              return (
                <span
                  key={v.title}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 border border-slate-200 shadow-2xs"
                >
                  <Icon size={14} className="text-brand shrink-0" />
                  <span>{v.title}</span>
                </span>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}