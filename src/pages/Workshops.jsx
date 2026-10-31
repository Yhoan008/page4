import { Link } from "react-router-dom";
import eliz from "../assets/eliz.jpg";

const pillars = [
  { title: "Small groups", text: "Intimate spaces of up to 10 people, where everyone is seen and heard." },
  { title: "Online or in person", text: "Join from London or from anywhere in the world." },
  { title: "Thoughtful guidance", text: "Every workshop is held with presence, structure and care." },
];

const workshops = [
  { title: "Meet the Little Child Within You", text: "A guided journey to listen, honour and comfort the younger parts of yourself." },
  { title: "Calm Your Mind, Understand Your Emotions", text: "Learn simple inner tools to regulate stress and read your emotional signals." },
  { title: "Self-confidence: Reconnecting with You", text: "Rebuild a warm, genuine relationship with who you are and what you bring." },
  { title: "Love, Me & the Relationships I Choose", text: "Explore how you love, what you need, and the bonds that truly nourish you." },
  { title: "Honour the Love of Someone Who Passed", text: "A gentle space to remember, say goodbye and keep love close — without pain ruling." },
];

export default function Workshops() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pt-14 lg:pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight">Wellness workshops for real inner growth</h1>
          <p className="mt-6 text-slate text-lg leading-relaxed">
            Small-group experiences that blend education, guided practice and reflection —
            a different way to grow, together.
          </p>
          <Link to="/contact" className="inline-flex mt-8 rounded-full bg-gold px-8 py-4 font-bold text-navy hover:bg-gold-dark transition-colors">
            Ask about a workshop
          </Link>
        </div>
        <img src={eliz} alt="Eliz Moreno workshops" className="rounded-3xl w-full h-[480px] object-cover shadow-xl" />
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-3 gap-8 pb-20">
        {pillars.map((p) => (
          <div key={p.title} className="bg-white rounded-2xl shadow-md p-8 flex gap-5 items-start">
            <span className="w-3 h-3 rounded-full bg-gold mt-2 shrink-0"></span>
            <div>
              <h3 className="font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-slate text-sm leading-relaxed">{p.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-10">
        <h2 className="text-3xl font-extrabold text-navy">Upcoming workshops</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {workshops.map((w, i) => (
            <div key={w.title} className={`bg-white rounded-2xl shadow-md p-8 ${i === workshops.length - 1 ? "md:col-span-2" : ""}`}>
              <span className="text-gold font-bold text-sm">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-bold text-navy">{w.title}</h3>
              <p className="mt-3 text-slate leading-relaxed">{w.text}</p>
              <Link to="/contact" className="inline-block mt-6 text-navy font-bold border-b-2 border-gold pb-1">Reserve a place</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
