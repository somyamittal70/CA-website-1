import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo.jsx";
import TopBar from "./TopBar.jsx";
import { navLinks, firm } from "../data/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <TopBar />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `border-b-2 py-1 font-semibold transition hover:text-brand ${isActive ? "border-brand text-navy" : "border-transparent text-slate-600"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to={firm.phones[0].href}
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 font-semibold text-white transition hover:bg-brand-dark"
          >
            <Phone size={16} /> Call Now
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-navy lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 font-semibold hover:bg-brand-light hover:text-brand-dark ${isActive ? "bg-brand-light text-brand-dark" : "text-slate-700"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to={firm.phones[0].href}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white"
              >
                <Phone size={16} /> Call Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
