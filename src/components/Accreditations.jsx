import { motion } from "framer-motion";
import { Award, ShieldCheck, FileCheck, Lock, CheckCircle2, Shield } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const certs = [
  {
    icon: Award,
    title: "ICAI Registered Practice",
    subtitle: "Institute of Chartered Accountants of India",
    desc: "Governed by strict professional ethics, auditing guidelines, and regulatory practice standards.",
    tag: "Verified CA Firm",
  },
  {
    icon: ShieldCheck,
    title: "GST Registered Practitioner",
    subtitle: "GSTN Portal Compliance",
    desc: "Authorized to file returns, represent clients in notices, and execute GST audits directly.",
    tag: "Tax Authority Approved",
  },
  {
    icon: FileCheck,
    title: "MSME & Udyam Facilitator",
    subtitle: "Ministry of MSME Recognized",
    desc: "Helping small businesses claim government schemes, priority lending, and subsidy benefits.",
    tag: "Business Registration",
  },
  {
    icon: Lock,
    title: "Data Confidentiality Standard",
    subtitle: "Secure Financial Records",
    desc: "Encrypted digital document vaults ensuring 100% data privacy for all taxpayer records.",
    tag: "Encrypted & Confidential",
  },
];

const standards = [
  "ICAI Code of Ethics Compliant",
  "Zero-Penalty Tracking System",
  "Secure Cloud Document Sharing",
  "Transparent Standard Operating Procedures",
];

export default function Accreditations() {
  return (
    <section id="accreditations" className="bg-navy-light/30 py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Professional Credentials & Compliance Standards"
          subtitle="Adhering to strict professional ethics and official government standards to protect your business."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          
          {/* Left Side Highlight Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 rounded-3xl bg-navy p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[380px]"
          >
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand/20 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white shadow-md mb-6">
                <Shield size={26} />
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                100% Verified & Compliant CA Practice
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Every return, audit, and tax document processed by our firm complies strictly with regulatory bodies and statutory legal guidelines.
              </p>
            </div>

            <div className="relative z-10 mt-8 space-y-2 border-t border-white/10 pt-6">
              {standards.map((std, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>{std}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side 2-Column List Cards */}
          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
            {certs.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs transition-all hover:border-brand/40 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-white transition-colors group-hover:bg-brand">
                        <Icon size={20} />
                      </span>
                      <span className="rounded-full bg-navy-light/80 px-2.5 py-1 text-[11px] font-semibold text-navy">
                        {cert.tag}
                      </span>
                    </div>

                    <h4 className="font-display mt-4 text-base font-bold text-slate-900 group-hover:text-navy transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-semibold text-brand mt-0.5">
                      {cert.subtitle}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {cert.desc}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-slate-100 pt-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                      <CheckCircle2 size={13} className="text-brand" /> Verified Practice Standard
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}