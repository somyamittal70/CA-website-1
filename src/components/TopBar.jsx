import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";
import { firm } from "../data/siteData";

export default function TopBar() {
  return (
    <div className="hidden bg-navy-dark text-sm text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        <div className="flex items-center gap-6">
          <Link to={firm.phones[0].href} className="flex items-center gap-2 hover:text-brand"><Phone size={14} />{firm.phones[0].label}</Link>
          <Link to={`mailto:${firm.email}`} className="flex items-center gap-2 hover:text-brand"><Mail size={14} />{firm.email}</Link>
        </div>
        <p className="flex items-center gap-2"><Clock size={14} className="text-brand" />{firm.hours}</p>
      </div>
    </div>
  );
}
