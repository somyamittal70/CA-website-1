import { motion } from "framer-motion";
import { Award, Clock, ShieldCheck, Phone } from "lucide-react";
import { firm } from "../data/siteData";

const items = [
  {
    icon: Award,
    title: "Professional expertise",
    text: "Qualified Chartered Accountants handle your work personally.",
  },
  {
    icon: Clock,
    title: "On-time delivery",
    text: "Filing dates are tracked so nothing is missed.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential",
    text: "Your financial data stays private and secure.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Top Header & Intro Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block rounded-full bg-navy-light/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              About {firm.name}
            </span>
            <h2 className="font-display mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl text-slate-900">
              A local CA firm for businesses that want to start right and stay compliant
            </h2>
            <div className="mt-4 h-1 w-16 rounded bg-brand" />
            
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {firm.name} is a Chartered Accountancy firm based in Najafgarh, New
              Delhi. We work with individuals, startups, MSMEs, NGOs and companies
              on taxation, registrations, audit and day-to-day accounting.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Our approach is simple: explain things plainly, file correctly and
              on time, and be easy to reach when you have a question.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={firm.phones[0].href}
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy-dark shadow-sm"
              >
                <Phone size={18} /> Talk to us
              </a>
            </div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-brand/10 blur-xl -z-10" />
              
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-50">
                {/* Replaced <Image> with standard <img> tag */}
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
                  alt="Chartered Accountants working on financial analysis"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Feature Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-navy-light/40 p-6 transition hover:shadow-md hover:border-slate-300"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-sm">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">{it.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{it.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}