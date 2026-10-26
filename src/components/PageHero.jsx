import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { firm } from "../data/siteData";

// Shared hero used by every page (same layout as the home page hero).
export default function PageHero({
  image,
  eyebrow,
  title,
  text,
  primary = { label: "Book a consultation", to: "/contact" },
  secondary = {
    label: firm.phones[0].label,
    to: firm.phones[0].href,
    icon: Phone,
  },
  cardTitle,
  points = [],
  cardLink,
}) {
  const SecondaryIcon = secondary.icon;
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      {/* Background banner */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Navy overlay keeps all text readable: solid on mobile, fading left to right on desktop */}
      <div className="absolute inset-0 bg-navy-dark/20 lg:bg-gradient-to-r lg:from-navy-dark/35 lg:via-navy-dark/30 lg:to-navy-dark/10" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 inline-block rounded-full bg-navy-dark/70 px-4 py-1.5 text-sm font-semibold text-brand backdrop-blur">
            {eyebrow}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight !text-white drop-shadow-md sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/95">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={primary.to}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark"
            >
              {primary.label} <ArrowRight size={18} />
            </Link>
            <Link
              to={secondary.to}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/60 bg-navy-dark/40 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              {SecondaryIcon && <SecondaryIcon size={18} />} {secondary.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
