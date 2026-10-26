import { motion } from "framer-motion";
import { Building2, FileCheck2, Scale, Users2, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { firm } from "../data/siteData.js";

const stats = [
  {
    icon: Building2,
    number: "500+",
    label: "Active Clients",
    desc: "Startups, MSMEs, NGOs & Individuals served across Delhi NCR.",
  },
  {
    icon: FileCheck2,
    number: "99.8%",
    label: "On-Time Compliance",
    desc: "Strictly tracked calendar ensuring zero late filing penalties.",
  },
  {
    icon: Scale,
    number: "100%",
    label: "Confidentiality",
    desc: "Strict data privacy standards for all financial records.",
  },
  {
    icon: Users2,
    number: "10+ Years",
    label: "Combined Experience",
    desc: "Deep domain knowledge in taxation, audit, and registrations.",
  },
];

const sectors = [
  "Startups & Private Limiteds",
  "Sole Proprietorships & LLPs",
  "Retail & Wholesale MSMEs",
  "NGOs & Trusts",
  "Salaried & Freelance Taxpayers",
];

export default function FirmStats() {
  return (
    <section id="firm-overview" className="bg-navy-light/30 py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          title="Our Track Record & Reach"
          subtitle="Built on trust, accuracy, and timely compliance for businesses across Delhi NCR."
        />

        {/* 4-Card Stats Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-slate-300"
              >
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-white shadow-md">
                    <Icon size={24} />
                  </span>
                  <div className="font-display mt-6 text-3xl font-extrabold text-brand">
                    {st.number}
                  </div>
                  <h3 className="font-display mt-1 text-lg font-bold text-slate-900">
                    {st.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Split Card: Client Reach & Location Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-xl lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: Who We Serve */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                Target Sectors
              </span>
              <h3 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
                Who We Work With
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Whether you are launching a new enterprise or maintaining compliance for an established firm, we tailor our accounting services to your exact needs.
              </p>

              {/* Badges List */}
              <div className="mt-6 flex flex-wrap gap-2">
                {sectors.map((sec, idx) => (
                  <span
                    key={idx}
                    className="rounded-xl bg-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-200 border border-white/10"
                  >
                    {sec}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Local Presence Highlight */}
            <div className="lg:col-span-5 rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-white">
                  <MapPin size={20} />
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-white">Local Practice Advantage</h4>
                  <p className="text-xs text-slate-300">Najafgarh, New Delhi</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Conveniently located for in-person meetings across South-West Delhi & NCR, with fully automated digital document submission for distant clients.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}