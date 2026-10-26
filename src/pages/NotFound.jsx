import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[50vh] place-items-center px-4 py-20 text-center">
      <div>
        <h1 className="font-display text-5xl font-bold">404</h1>
        <p className="mt-3 text-lg">This page does not exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"><HomeIcon size={18} />Back to home</Link>
      </div>
    </section>
  );
}
