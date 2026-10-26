import { motion } from "framer-motion";
import { Calendar, AlertCircle, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading.jsx";

const complianceSchedule = [
  {
    month: "Monthly",
    title: "GST Returns (GSTR-1 & 3B)",
    due: "11th & 20th of every month",
    badge: "GST Compliance",
    desc: "Filing out-sales data & ITC reconciliation to avoid late fees.",
  },
  {
    month: "Quarterly",
    title: "TDS Returns & Advance Tax",
    due: "15th of Jun, Sep, Dec & Mar",
    badge: "Income Tax",
    desc: "Quarterly TDS statement filings and advance tax calculations.",
  },
  {
    month: "Annual",
    title: "Income Tax Return (ITR)",
    due: "July 31st / Oct 31st",
    badge: "Tax Filings",
    desc: "ITR filings for individuals, firms, private limiteds & trusts.",
  },
  {
    month: "Yearly",
    title: "ROC Filings (AOC-4 & MGT-7)",
    due: "Within 30/60 days of AGM",
    badge: "Company Law",
    desc: "Mandatory yearly financial submission with MCA.",
  },
];

export default function ComplianceCalendar() {
  return (
    <section id="compliance-tracker" className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Never Miss a Tax Due Date"
          subtitle="We maintain an automated compliance calendar so your business stays 100% compliant year-round."
        />

        {/* Timeline Container */}
        <div className="mt-14 relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-6 z-0" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {complianceSchedule.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-2xs transition-all duration-300 hover:border-brand/40 hover:bg-white hover:shadow-xl"
              >
                <div>
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 px-3.5 place-items-center rounded-xl bg-navy text-xs font-bold text-white shadow-sm transition-colors group-hover:bg-brand">
                      {item.month}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                      <Calendar size={13} className="text-brand" /> {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display mt-5 text-base font-bold text-slate-900 group-hover:text-navy transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>

                {/* Due Date Box */}
                <div className="mt-6 rounded-xl bg-amber-500/10 p-3 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-900">
                    <AlertCircle size={15} className="text-amber-600 shrink-0" />
                    <span>Due: {item.due}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}