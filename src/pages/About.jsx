import { Link } from "react-router-dom";
import eliz from "../assets/eliz.jpg";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">
      <img src={eliz} alt="About Eliz Moreno" className="rounded-3xl w-full h-[520px] object-cover shadow-xl" />
      <div>
        <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">About Eliz</p>
        <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-navy">Hypnotherapist, guide & lifelong student of the mind</h1>
        <p className="mt-6 text-slate text-lg leading-relaxed">
          I'm Eliz Moreno — a hypnotherapy and regression therapy practitioner based in London,
          working with English and Spanish speakers worldwide for over 7 years.
        </p>
        <p className="mt-4 text-slate leading-relaxed">
          My journey began with a fascination for how the stories we carry from the past shape
          the way we live today. I now help people rewrite those stories with kindness — one
          safe, meaningful session at a time.
        </p>
        <Link to="/contact" className="inline-flex mt-8 rounded-full bg-gold px-8 py-4 font-bold text-navy hover:bg-gold-dark transition-colors">
          Book Consultation Session
        </Link>
      </div>
    </section>
  );
}
