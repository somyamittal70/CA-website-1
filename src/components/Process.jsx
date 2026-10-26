import { motion } from "framer-motion";
import { MessageSquare, FileCheck, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    text: "Reach out via phone or website. We discuss your business, tax requirements, and filing deadlines.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Document Collection",
    text: "Send your invoices, financial records, or registration details securely via email or WhatsApp.",
  },
  {
    number: "03",
    icon: ShieldAlert,
    title: "Review & Filing",
    text: "Our Chartered Accountants personally verify every line item, calculate tax liability, and prepare returns.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Completion & Support",
    text: "You receive official filing acknowledgments and ongoing support for any follow-up questions.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-navy-light/40 py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          title="How We Work"
          subtitle="A simple, transparent 4-step process to get your taxes and compliance handled without stress."
        />

        {/* Process Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-lg"
              >
                <div>
                  {/* Step Top Bar: Icon + Step Number */}
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-white shadow-md transition-colors group-hover:bg-brand">
                      <Icon size={24} />
                    </span>
                    <span className="font-display text-3xl font-extrabold text-slate-200 group-hover:text-brand/30 transition-colors">
                      {st.number}
                    </span>
                  </div>

                  {/* Step Title & Text */}
                  <h3 className="font-display mt-6 text-lg font-bold text-slate-900 group-hover:text-navy transition-colors">
                    {st.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {st.text}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-slate-100 text-xs font-semibold text-brand">
                  <span>Step {st.number}</span>
                  {i < steps.length - 1 && (
                    <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Banner with Visual Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-xl lg:p-10 relative"
        >
          <div className="grid items-center gap-8 lg:grid-cols-12">
            
            <div className="lg:col-span-8">
              <span className="inline-block rounded-full bg-brand/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                Hassle-Free Compliance
              </span>
              <h3 className="font-display mt-3 text-xl font-bold text-white sm:text-2xl">
                Ready to delegate your accounting & tax filings?
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-xl">
                Get started today in less than 5 minutes. No lengthy paperwork or upfront commitments required.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-brand-dark"
              >
                <span>Get Started Now</span>
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}