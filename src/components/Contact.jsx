import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe, Send } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { firm } from "../data/siteData";

const field =
  "w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30";
const iconBox =
  "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-white";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const send = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`;
    window.location.href = `mailto:${firm.email}?subject=${encodeURIComponent("Enquiry from website")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          title="Contact Us"
          subtitle="Call, email or visit our office."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="flex gap-4 rounded-2xl bg-navy-light p-5">
              <span className={iconBox}>
                <MapPin size={22} />
              </span>
              <div>
                <h3 className="font-display text-base font-bold">Address</h3>
                <p>{firm.address}</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl bg-navy-light p-5">
              <span className={iconBox}>
                <Clock size={22} />
              </span>
              <div>
                <h3 className="font-display text-base font-bold">Hours</h3>
                <p>{firm.hours}</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl bg-navy-light p-5">
              <span className={iconBox}>
                <Phone size={22} />
              </span>
              <div>
                <h3 className="font-display text-base font-bold">Phone</h3>
                <div className="flex flex-wrap gap-x-4">
                  {firm.phones.map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      className="font-semibold text-brand-dark hover:underline"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl bg-navy-light p-5">
              <span className={iconBox}>
                <Mail size={22} />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-bold">
                  Email and web
                </h3>
                <Link
                  to={`mailto:${firm.email}`}
                  className="block break-all font-semibold text-brand-dark hover:underline"
                >
                  {firm.email}
                </Link>
                <Link
                  to={firm.websiteUrl}
                  target="_blank"
                  className="mt-1 inline-flex items-center gap-1 font-semibold text-brand-dark hover:underline"
                >
                  <Globe size={14} />
                  {firm.website}
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={send}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-3xl border border-slate-200 p-6 shadow-lg sm:p-8"
          >
            <h3 className="font-display text-xl font-bold">
              Send us a message
            </h3>
            <input
              className={field}
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={change}
              aria-label="Your name"
            />
            <input
              className={field}
              name="phone"
              type="tel"
              placeholder="Phone number"
              required
              value={form.phone}
              onChange={change}
              aria-label="Phone number"
            />
            <textarea
              className={field}
              name="message"
              rows="5"
              placeholder="How can we help?"
              required
              value={form.message}
              onChange={change}
              aria-label="Message"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-white transition hover:bg-brand-dark"
            >
              <Send size={18} /> Send message
            </button>
          </motion.form>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">
          <iframe
            title="Office location"
            loading="lazy"
            className="h-72 w-full sm:h-96"
            src={`https://www.google.com/maps?q=${encodeURIComponent("CA M Kaushik & Co, Shyam Vihar Phase 1, Najafgarh, New Delhi 110043")}&output=embed`}
          />
        </div>
      </div>
    </section>
  );
}
