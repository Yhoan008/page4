import { Link } from "react-router-dom";
import eliz from "../assets/eliz.jpg";

const features = [
  {
    title: "75 minutes",
    text: "Each session gives us enough time to settle, work and integrate at a comfortable pace.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1B2541" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "English or Spanish",
    text: "Sessions are fully bilingual, so you can express yourself in the language of your heart.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1B2541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5h12M9 3v2m-4 13l4-9 4 9M5.5 15h7M13 9h7l-3.5 8M13 13h7" />
      </svg>
    ),
  },
  {
    title: "Flexible sessions",
    text: "In person in London or online from wherever you are in the world.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1B2541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
];

const benefits = [
  "Reduce anxiety, stress and overthinking",
  "Release old emotional patterns and beliefs",
  "Sleep more deeply and restfully",
  "Build self-confidence and self-worth",
  "Overcome fears, phobias and blocks",
  "Feel calmer, clearer and more in control",
];

export default function Hypnotherapy() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pt-14 lg:pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight">Hypnotherapy in London and online</h1>
          <p className="mt-6 text-slate text-lg leading-relaxed">
            Hypnotherapy works with the subconscious mind — the place where our habits,
            beliefs and emotional reactions live. Together we can gently retrain old
            responses so you can feel more grounded, lighter and free.
          </p>
          <Link to="/contact" className="inline-flex mt-8 rounded-full bg-gold px-8 py-4 font-bold text-navy hover:bg-gold-dark transition-colors">
            Book Consultation Session
          </Link>
        </div>
        <img src={eliz} alt="Eliz Moreno hypnotherapy" className="rounded-3xl w-full h-[480px] object-cover shadow-xl" />
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="bg-white rounded-2xl shadow-md p-8">
            <div className="w-14 h-14 rounded-2xl bg-cream grid place-items-center">{f.icon}</div>
            <h3 className="mt-6 text-xl font-bold text-navy">{f.title}</h3>
            <p className="mt-3 text-slate leading-relaxed">{f.text}</p>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="text-3xl font-extrabold text-navy">What can change</h2>
          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-slate">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-navy/10 grid place-items-center shrink-0">
                  <svg width="14" height="14" fill="none" stroke="#1B2541" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7l3 3 5-6" /></svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-navy rounded-3xl p-10 text-white">
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Recommended journey</p>
          <h3 className="mt-4 text-3xl font-extrabold">The six-session programme</h3>
          <p className="mt-5 text-white/70 leading-relaxed">
            Six focused sessions designed to take you from understanding your patterns to
            releasing them — a complete, gentle path to meaningful and lasting change.
          </p>
          <Link to="/contact" className="inline-flex mt-8 rounded-full bg-gold px-8 py-4 font-bold text-navy hover:bg-gold-dark transition-colors">
            Discuss the programme
          </Link>
        </div>
      </section>
    </>
  );
}
