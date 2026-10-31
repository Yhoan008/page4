import { Link } from "react-router-dom";

const cards = [
  { title: "When repetitive thoughts won't let go", text: "Why overthinking happens and gentle ways to create distance from the noise." },
  { title: "Understanding what your emotions need", text: "Emotions are messengers — learn to listen without being overwhelmed." },
  { title: "Guided audio practices", text: "Short hypnotherapy-style audios you can listen to before sleep or at quiet moments." },
];

export default function Resources() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-5 pt-16 lg:pt-24 pb-12 text-center">
        <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Blog & free resources</p>
        <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-navy">A calmer space for your inner growth</h1>
        <p className="mt-6 text-slate text-lg">Writings and practices to support you between sessions.</p>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-3 gap-8 pb-20">
        {cards.map((c) => (
          <div key={c.title} className="bg-white rounded-2xl shadow-md p-8 relative">
            <span className="absolute top-6 right-6 rounded-full bg-gold/20 text-gold-dark text-[10px] font-bold tracking-widest px-3 py-1">COMING SOON</span>
            <h3 className="mt-4 text-xl font-bold text-navy pr-24">{c.title}</h3>
            <p className="mt-3 text-slate leading-relaxed">{c.text}</p>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-5 text-center pb-10">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-navy">Would you prefer personal support?</h2>
        <Link to="/contact" className="inline-flex mt-8 rounded-full bg-gold px-8 py-4 font-bold text-navy hover:bg-gold-dark transition-colors">
          Book Consultation Session
        </Link>
      </section>
    </>
  );
}
