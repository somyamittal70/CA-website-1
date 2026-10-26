import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Clock, Users, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { firm } from "../data/siteData";

const reasons = [
  {
    title: "Qualified CA Personal Attention",
    text: "Your accounts aren't passed down to junior interns. Chartered Accountants personally oversee and manage your filings.",
  },
  {
    title: "100% Tax & Legal Compliance",
    text: "Zero missed deadlines. We track critical filing dates and compliance schedules proactively so you avoid penalties.",
  },
  {
    title: "Transparent & Fixed Pricing",
    text: "Clear, upfront fee structures with no hidden surprises or sudden charges mid-way through a filing.",
  },
  {
    title: "Plain English, No Tax Jargon",
    text: "We explain complex tax laws and compliance notices plainly so you can make informed decisions with confidence.",
  },
];

const highlights = [
  { icon: ShieldCheck, title: "100% Secure Data", desc: "Bank-level confidentiality" },
  { icon: Clock, title: "On-Time Guarantee", desc: "Tracked filing schedules" },
  { icon: Users, title: "500+ Businesses", desc: "Trusted across Delhi NCR" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Top Header */}
        <SectionHeading
          title={`Why Partner With ${firm.name}?`}
          subtitle="A trusted local accounting firm focused on speed, accuracy, and hassle-free tax management."
        />

        {/* Main Content Grid */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Reasons List */}
          <div className="lg:col-span-7 space-y-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition-all hover:bg-white hover:shadow-md hover:border-slate-300"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  <CheckCircle2 size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-navy transition-colors">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {reason.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Visual Image Container with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-brand/10 blur-xl -z-10" />

              {/* Main Professional Image */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
                  alt="Chartered Accountants analyzing financial documents and tax reports"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                />
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-navy p-5 text-white shadow-xl max-w-xs border border-white/10 hidden sm:block">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white">
                    <ArrowUpRight size={22} />
                  </span>
                  <div>
                    <div className="font-display text-lg font-bold text-white">Najafgarh & NCR</div>
                    <p className="text-xs text-slate-300">Local CA Expertise You Can Visit</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Metric Cards Bar */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-navy-light/40 p-5"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-white shadow-sm">
                  <Icon size={24} />
                </span>
                <div>
                  <h4 className="font-display font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}