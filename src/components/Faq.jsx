import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { firm } from "../data/siteData";

const faqs = [
  {
    question: "What documents do I need to start GST registration?",
    answer:
      "For GST registration, you generally need PAN card, Aadhaar card, proof of business address (like electricity bill or rent agreement), bank account details, and passport-size photographs of the proprietor/partners/directors.",
  },
  {
    question: "Can I get my Income Tax Return (ITR) filed on the same day?",
    answer:
      "Yes! If all your financial documents (Form 16, bank statements, investment proofs) are complete, our Chartered Accountants can process and file your ITR within a few hours.",
  },
  {
    question: "Do you handle accounting for small businesses and startups?",
    answer:
      "Absolutely. We offer complete day-to-day bookkeeping, monthly GST filings, TDS compliance, and year-end financial statement preparation tailored specifically for MSMEs and startups.",
  },
  {
    question: "How do you charge for your services? Are there hidden fees?",
    answer:
      "We follow a completely transparent, fixed-pricing model. You will receive a clear fee quotation upfront before we commence any work—no hidden costs or surprise mid-way fees.",
  },
  {
    question: "What happens if I receive a notice from the Income Tax or GST Department?",
    answer:
      "Don't worry. Our experienced CAs will carefully review the notice, draft an official legal response, and represent your case with the tax authorities to resolve the issue swiftly.",
  },
  {
    question: "Do I need to visit your office in person to file my returns?",
    answer:
      "While you are always welcome to visit our office in Najafgarh, New Delhi, all processes can also be completed 100% digitally via WhatsApp, email, or telephone for your convenience.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Clear answers to common questions about tax filings, registrations, and accounting services."
        />

        {/* Main Content Layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Interactive Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-colors hover:border-slate-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none sm:p-6"
                  >
                    <span className="font-display text-base font-bold text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-300 ${
                        isOpen ? "bg-brand text-white rotate-180" : "bg-navy-light text-navy"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-6 pt-0 text-sm leading-relaxed text-slate-600 border-t border-slate-200/60 sm:px-6">
                          <p className="mt-3">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Support Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 sticky top-8"
          >
            <div className="rounded-3xl border border-slate-200 bg-navy p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-brand/20 blur-2xl pointer-events-none" />
              
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white shadow-md mb-6">
                <HelpCircle size={24} />
              </span>

              <h3 className="font-display text-xl font-bold text-white">
                Have a specific question?
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                If your question isn't listed here, feel free to speak with our Chartered Accountants directly.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6 space-y-3">
                <a
                  href={firm.phones[0].href}
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <PhoneCall size={18} className="text-brand shrink-0" />
                  <span>{firm.phones[0].label}</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}