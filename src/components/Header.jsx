import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import spiral from "../assets/spiral.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Eliz" },
  { to: "/hypnotherapy", label: "Hypnotherapy" },
  { to: "/treatments", label: "Treatments" },
  { to: "/wellness-workshops", label: "Workshops" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <span className="w-11 h-11 rounded-xl bg-navy grid place-items-center">
            <img src={spiral} alt="Eliz Moreno emblem" className="w-7 h-7 invert" />
          </span>
          <span className="leading-tight">
            <span className="block font-bold text-navy text-lg">Eliz Moreno</span>
            <span className="block text-[11px] tracking-widest uppercase text-slate">Hypnotherapy</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-navy border-b-2 border-gold pb-1" : "text-slate hover:text-navy"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy shadow-sm hover:bg-gold-dark transition-colors"
        >
          Book Consultation Session
        </Link>

        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l14 14M20 6L6 20" />
            ) : (
              <path d="M4 7h18M4 13h18M4 19h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden px-5 pb-5 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-navy font-medium">
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy"
          >
            Book Consultation Session
          </Link>
        </nav>
      )}
    </header>
  );
}
