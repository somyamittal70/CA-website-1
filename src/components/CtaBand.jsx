import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { firm } from "../data/siteData";

export default function CtaBand() {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:text-left lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-bold !text-white sm:text-3xl">
            Need help with tax or compliance?
          </h2>
          <p className="mt-2 text-white/90">
            Call us or send a message and we will get back to you.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to={firm.phones[0].href}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-navy hover:bg-navy-light"
          >
            <Phone size={18} />
            {firm.phones[0].label}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-dark"
          >
            Contact us <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
