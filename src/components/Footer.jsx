import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo.jsx";
import { firm, navLinks, services } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">
            Tax, audit, registration and compliance services for individuals and
            businesses in Delhi NCR.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-display text-base font-bold !text-white">
            Quick links
          </h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-display text-base font-bold !text-white">
            Popular services
          </h3>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <Link to="/services" className="hover:text-brand">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-display text-base font-bold !text-white">
            Reach us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
              {firm.address}
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand" />
              <Link to={firm.phones[0].href} className="hover:text-brand">
                {firm.phones[0].label}
              </Link>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand" />
              <Link
                to={`mailto:${firm.email}`}
                className="break-all hover:text-brand"
              >
                {firm.email}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm">
        © {new Date().getFullYear()} {firm.name}, Chartered Accountants. All
        rights reserved.
      </div>
    </footer>
  );
}
