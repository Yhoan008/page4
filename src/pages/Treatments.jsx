import { Link } from "react-router-dom";

const items = [
  { title: "Regression Therapy", text: "Revisit past experiences to understand and heal the roots of current patterns." },
  { title: "Anxiety & Stress Relief", text: "Calming techniques that help you regulate your nervous system and regain ease." },
  { title: "Self-esteem & Confidence", text: "Work at the subconscious level to strengthen a kinder inner voice." },
  { title: "Fears & Phobias", text: "Gently desensitise specific triggers and rewrite old responses." },
  { title: "Inner Child Healing", text: "Reconnect with younger parts of yourself that still need care and support." },
  { title: "Sleep & Relaxation", text: "Learn to quieten the mind and build healthier rest habits." },
];

export default function Treatments() {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
      <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase text-center">How I can help</p>
      <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold text-navy text-center">Treatments</h1>
      <div className="mt-14 grid md:grid-cols-3 gap-8">
        {items.map((i) => (
          <div key={i.title} className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-bold text-navy">{i.title}</h3>
            <p className="mt-3 text-slate leading-relaxed">{i.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-14">
        <Link to="/contact" className="inline-flex rounded-full bg-gold px-8 py-4 font-bold text-navy hover:bg-gold-dark transition-colors">
          Book Consultation Session
        </Link>
      </div>
    </section>
  );
}
