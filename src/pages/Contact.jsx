import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-5 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-14">
      <div>
        <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Contact</p>
        <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-navy">Let's start your journey</h1>
        <p className="mt-6 text-slate text-lg leading-relaxed">
          Book a consultation session or send me a message. I usually reply within 24 hours.
        </p>
        <ul className="mt-8 space-y-3 text-slate">
          <li>hello@elizmoreno.com</li>
          <li>London, United Kingdom · Online worldwide</li>
          <li>Sessions in English or Spanish</li>
        </ul>
      </div>
      <form
        className="bg-white rounded-2xl shadow-md p-10 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! Your message has been sent.");
        }}
      >
        <input required placeholder="Your name" className="w-full rounded-xl border border-slate/20 px-4 py-3 focus:outline-none focus:border-gold" />
        <input required type="email" placeholder="Your email" className="w-full rounded-xl border border-slate/20 px-4 py-3 focus:outline-none focus:border-gold" />
        <textarea rows="5" placeholder="How can I help you?" className="w-full rounded-xl border border-slate/20 px-4 py-3 focus:outline-none focus:border-gold"></textarea>
        <button className="w-full rounded-full bg-gold px-8 py-4 font-bold text-navy hover:bg-gold-dark transition-colors">
          Send message
        </button>
      </form>
    </section>
  );
}
