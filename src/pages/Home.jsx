import { Link } from "react-router-dom";
import eliz from "../assets/eliz.jpg";

const checks = [
  "A calm, trauma-informed and deeply respectful approach",
  "Sessions tailored to your pace and your goals",
  "Bilingual support in English and Spanish",
  "In person in London and online worldwide",
];

const testimonials = [
  {
    quote:
      "Working with Eliz helped me understand patterns I had carried for years. I left every session feeling lighter and more in control.",
    author: "Elena R. · London, UK",
  },
  {
    quote:
      "I arrived anxious and sceptical. After a few sessions my sleep improved and my repetitive thoughts finally had space to quiet down.",
    author: "Marco T. · Online from Spain",
  },
  {
    quote:
      "Eliz creates a safe space like no other. The regression work helped me release old beliefs that were holding me back.",
    author: "Sofia L. · London, UK",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pt-14 lg:pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
            Hypnotherapy & Regression Therapy · London
          </p>
          <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
            Meet the real being you are, and the inner power you already have
          </h1>
          <p className="mt-6 text-slate text-lg leading-relaxed">
            I support adults who want to release old patterns, calm their mind and reconnect
            with their own strength — through hypnotherapy, regression therapy and wellness workshops.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-full bg-gold px-8 py-4 font-bold text-navy shadow hover:bg-gold-dark transition-colors">
              Book Consultation Session
            </Link>
            <Link to="/hypnotherapy" className="rounded-full border-2 border-navy/20 px-8 py-4 font-bold text-navy hover:border-navy transition-colors">
              Explore hypnotherapy
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gold"></span>7+ years of experience</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gold"></span>Sessions in English or Spanish</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gold"></span>In person in London · Online worldwide</span>
          </div>
        </div>

        <div className="relative">
          <img src={eliz} alt="Eliz Moreno" className="rounded-3xl w-full h-[520px] object-cover shadow-xl" />
          <div className="absolute -bottom-8 -left-4 lg:-left-10 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
            <p className="text-navy font-semibold leading-snug">"You can feel better, you can improve yourself."</p>
            <p className="text-slate text-sm mt-2">— Eliz Moreno</p>
          </div>
        </div>
      </section>

      {/* TWO WAYS */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase text-center">How I can help</p>
        <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy text-center">Two ways to work together</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-10">
            <div className="w-14 h-14 rounded-2xl bg-cream grid place-items-center">
              <svg width="28" height="28" fill="none" stroke="#1B2541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 4V2M15 10V8M11.5 6.5l-1.4-1.4M18.5 6.5l1.4-1.4M3 21l9-9M14.5 8.5l-3-3" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-navy">Hypnotherapy sessions</h3>
            <p className="mt-3 text-slate leading-relaxed">
              Individual 75-minute sessions to work with the subconscious mind, release limiting
              beliefs and build new, helpful ways of feeling and responding.
            </p>
            <Link to="/hypnotherapy" className="inline-block mt-6 text-navy font-bold border-b-2 border-gold pb-1">See how sessions work</Link>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-10">
            <div className="w-14 h-14 rounded-2xl bg-cream grid place-items-center">
              <svg width="28" height="28" fill="none" stroke="#1B2541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.8 8.6a5 5 0 0 0-8.8-3.1A5 5 0 0 0 3.2 8.6c0 5.4 8.8 10.4 8.8 10.4s8.8-5 8.8-10.4z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-navy">Wellness workshops</h3>
            <p className="mt-3 text-slate leading-relaxed">
              Small-group experiences that blend education and guided practice around emotions,
              self-love, confidence and inner child work.
            </p>
            <Link to="/wellness-workshops" className="inline-block mt-6 text-navy font-bold border-b-2 border-gold pb-1">See upcoming topics</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-20 grid lg:grid-cols-2 gap-14 items-center">
        <img src={eliz} alt="Eliz forming a heart with her hands" className="rounded-3xl w-full h-[480px] object-cover shadow-lg" />
        <div>
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Why people choose Eliz</p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy">A method you won't find everywhere</h2>
          <p className="mt-5 text-slate leading-relaxed">
            My approach combines hypnotherapy and regression therapy in a warm, grounded way.
            We work with the subconscious to understand where patterns began and to create
            lasting, positive change — always at a pace that feels safe for you.
          </p>
          <ul className="mt-8 space-y-4">
            {checks.map((c) => (
              <li key={c} className="flex items-start gap-3 text-slate">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-navy/10 grid place-items-center shrink-0">
                  <svg width="14" height="14" fill="none" stroke="#1B2541" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 7l3 3 5-6" />
                  </svg>
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-20">
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase text-center">Kind words</p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy text-center">Client Experiences</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white rounded-2xl shadow-md p-8">
                <span className="text-5xl leading-none text-gold font-serif">"</span>
                <p className="mt-4 text-slate leading-relaxed">{t.quote}</p>
                <p className="mt-6 text-navy font-bold text-sm">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="bg-navy rounded-3xl px-8 py-16 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Ready to feel calmer and more like yourself?</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Book a consultation session and let's talk about what you'd like to change.</p>
          <Link to="/contact" className="inline-flex mt-8 rounded-full bg-gold px-8 py-4 font-bold text-navy hover:bg-gold-dark transition-colors">
            Book Consultation Session
          </Link>
        </div>
      </section>
    </>
  );
}
