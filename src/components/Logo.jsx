import { Link } from "react-router-dom";
import { firm } from "../data/siteData";
import logo from "../../assets/logo.png";

// Uses the real logo. On dark backgrounds (light = true) it sits on a white rounded plate so it stays readable.
export default function Logo({ light = false }) {
  return (
    <Link to="/" className="inline-block" aria-label={`${firm.name} home`}>
      <img
        src={logo}
        alt={`${firm.name} ${firm.tagline}`}
        className={`w-auto object-contain ${light ? "h-14 rounded-lg bg-white px-3 py-1.5 sm:h-16" : "h-11 sm:h-16"}`}
      />
    </Link>
  );
}