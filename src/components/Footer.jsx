import { Link } from "react-router-dom";
import spiral from "../assets/spiral.png";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 mt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center">
              <img src={spiral} alt="emblem" className="w-7 h-7 invert" />
            </span>
            <span className="font-bold text-lg text-white">Eliz Moreno</span>
          </Link>
          <p className="mt-5 text-white/70 leading-relaxed">
            "You can feel better, you can improve yourself."
            <br />
            Hypnotherapy & regression therapy in London and online worldwide.
          </p>
          <div className="flex gap-4 mt-6">
            {["Instagram", "TikTok", "YouTube", "Facebook"].map((s) => (
              <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/10 grid place-items-center text-xs hover:bg-gold hover:text-navy transition-colors">
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Explore</h3>
          <ul className="mt-5 space-y-3">
            {[
              ["/", "Home"],
              ["/about", "About Eliz"],
              ["/hypnotherapy", "Hypnotherapy"],
              ["/treatments", "Treatments"],
              ["/wellness-workshops", "Workshops"],
              ["/resources", "Resources"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Get in touch</h3>
          <ul className="mt-5 space-y-3 text-white/80">
            <li>hello@elizmoreno.com</li>
            <li><Link to="/contact" className="hover:text-gold">Send a message via my form</Link></li>
            <li>London, United Kingdom · Online worldwide</li>
          </ul>
          <Link
            to="/contact"
            className="inline-flex mt-7 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy hover:bg-gold-dark transition-colors"
          >
            Book Consultation Session
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Eliz Moreno. All rights reserved.
      </div>
    </footer>
  );
}
