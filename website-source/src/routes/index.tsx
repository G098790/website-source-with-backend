import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone, MessageCircle, MapPin, Mail, Plane, Car, Route as RouteIcon,
  MountainSnow, Sparkles, Users, Clock, ShieldCheck, Star, Send,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { submitInquiry } from "@/lib/inquiries";

import hero from "@/assets/hero-taj.jpg";
import gJaipur from "@/assets/tour-jaipur.jpg";
import gDelhi from "@/assets/tour-delhi.jpg";
import gVrindavan from "@/assets/tour-vrindavan.jpg";
import gAyodhya from "@/assets/tour-ayodhya.jpg";
import gHaridwar from "@/assets/tour-haridwar.jpg";
import gGujarat from "@/assets/tour-gujarat.jpg";
import gRajasthan from "@/assets/tour-rajasthan.jpg";
import gHimachal from "@/assets/tour-himachal.jpg";
import gVehicle from "@/assets/vehicle-suv.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mansi Tour & Travels — Airport Transfers & Tour Packages in India" },
      { name: "description", content: "Book airport pickup, outstation taxi, religious yatras and custom tour packages with Mansi Tour & Travels. 24/7 service across India." },
      { property: "og:title", content: "Mansi Tour & Travels" },
      { property: "og:description", content: "Trusted travel & taxi partner — Agra to Jaipur, Delhi, Vrindavan, Ayodhya, Haridwar and more." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Plane, title: "Airport Pickup & Drop", desc: "24/7 timely airport pickup and drop with luggage assistance." },
  { icon: Plane, title: "Airport Transfers", desc: "Domestic, international and corporate airport transfer service." },
  { icon: Car, title: "Outstation Taxi", desc: "Comfortable outstation rides across cities & states of India." },
  { icon: RouteIcon, title: "One-Way Taxi", desc: "Pay only for the one-way trip — no return fare burden." },
  { icon: RouteIcon, title: "Round Trip Booking", desc: "Same cab, same driver — for the full round trip." },
  { icon: MapPin, title: "Local Sightseeing", desc: "Explore Agra and nearby attractions with a dedicated driver." },
  { icon: Sparkles, title: "Religious Tours", desc: "Mathura, Vrindavan, Ayodhya, Haridwar & more divine yatras." },
  { icon: Users, title: "Family Tour Packages", desc: "Customized family packages for an unforgettable holiday." },
];

const gallery = [
  { src: gVehicle, alt: "Premium taxi vehicle" },
  { src: gJaipur, alt: "Hawa Mahal, Jaipur" },
  { src: gAyodhya, alt: "Ram Mandir, Ayodhya" },
  { src: gVrindavan, alt: "Prem Mandir, Vrindavan" },
  { src: gHaridwar, alt: "Ganga Aarti, Haridwar" },
  { src: gGujarat, alt: "Statue of Unity, Gujarat" },
  { src: gRajasthan, alt: "Udaipur City Palace" },
  { src: gHimachal, alt: "Manali, Himachal" },
];

const reviews = [
  { name: "Rohit Sharma", rating: 5, text: "Excellent driver and clean cab from Agra to Jaipur. Highly recommend Mansi Tours!" },
  { name: "Anita Verma", rating: 5, text: "Booked a family tour to Mathura-Vrindavan. Smooth, safe and very affordable." },
  { name: "Sanjay Mehta", rating: 5, text: "Airport pickup was on time at 3 AM. Professional service, thank you!" },
  { name: "Priya Singh", rating: 5, text: "Our Ayodhya yatra was perfectly arranged. The driver was very respectful." },
  { name: "Vikas Gupta", rating: 4, text: "Great Rajasthan tour package. Loved Udaipur and Jodhpur. Will book again." },
  { name: "Meena Joshi", rating: 5, text: "Haridwar & Rishikesh trip was divine. Punctual, polite and well-priced." },
];

const routes = [
  { from: "Delhi", to: "Agra", km: "230 km", time: "4 hrs" },
  { from: "Delhi", to: "Jaipur", km: "280 km", time: "5 hrs" },
  { from: "Delhi", to: "Rishikesh", km: "245 km", time: "5 hrs" },
  { from: "Delhi", to: "Haridwar", km: "220 km", time: "4.5 hrs" },
  { from: "Delhi", to: "Dehradun", km: "255 km", time: "5.5 hrs" },
  { from: "Delhi", to: "Haryana", km: "120 km", time: "2 hrs" },
  { from: "Delhi", to: "Rajasthan", km: "300 km", time: "6 hrs" },
  { from: "Delhi", to: "Uttarakhand", km: "270 km", time: "5.5 hrs" },
  { from: "Delhi", to: "Punjab", km: "360 km", time: "6 hrs" },
  { from: "Delhi", to: "Uttar Pradesh", km: "250 km", time: "5 hrs" },
  { from: "Delhi", to: "Madhya Pradesh", km: "600 km", time: "10 hrs" },
  { from: "Delhi", to: "Himachal Pradesh", km: "360 km", time: "7 hrs" },
  { from: "Delhi", to: "Jammu & Kashmir", km: "800 km", time: "13 hrs" },
  { from: "Delhi", to: "Mathura", km: "180 km", time: "3.5 hrs" },
  { from: "Delhi", to: "Vrindavan", km: "185 km", time: "3.5 hrs" },
  { from: "Delhi", to: "Barsana", km: "165 km", time: "3 hrs" },
  { from: "Delhi", to: "Khatu Shyam Ji", km: "270 km", time: "5 hrs" },
  { from: "Delhi", to: "Salasar Balaji", km: "340 km", time: "6.5 hrs" },
  { from: "Delhi", to: "Kathmandu (Nepal)", km: "1150 km", time: "18 hrs" },
  { from: "Delhi", to: "Pokhara (Nepal)", km: "1280 km", time: "20 hrs" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Taj Mahal at sunrise with luxury car" width={1920} height={1024}
          className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero-overlay)]" />
        <div className="mx-auto max-w-7xl px-6 py-28 text-primary-foreground sm:py-36">
          <div className="max-w-3xl">
            <p className="divider-ornate font-display text-sm tracking-[0.35em] uppercase text-secondary">
              <Sparkles className="h-4 w-4" /> Yatra • Aastha • Aaram
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold leading-tight sm:text-7xl">
              Discover India with <span className="text-gradient-gold">Mansi Tour & Travels</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/90">
              Airport transfers, outstation taxis, religious yatras and customized
              family tour packages — driven by trust, comfort and timeless Indian hospitality.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-semibold text-gold-foreground shadow-gold transition hover:opacity-90">
                <Phone className="h-5 w-5" /> Call Now: +91 98765 43210
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/70 bg-primary/40 px-7 py-3.5 font-semibold text-primary-foreground backdrop-blur transition hover:bg-secondary hover:text-gold-foreground">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-primary-foreground/85">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-secondary" /> 24/7 Service</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-secondary" /> Verified Drivers</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-secondary" /> 500+ Happy Travellers</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-display text-sm tracking-[0.3em] uppercase text-primary">About Us</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Travelling India, the <span className="text-primary">Mansi</span> way
            </h2>
            <p className="mt-6 text-foreground/80">
              Mansi Tour & Travels is a trusted travel and transportation company providing
              airport transfers, outstation taxi services, local sightseeing, religious tours,
              family tours, and customized travel packages across India.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { t: "Our Experience", d: "Years of curating safe, comfortable journeys across North & West India." },
                { t: "Our Mission", d: "Make travel effortless with reliable taxis and devotion-led yatras." },
                { t: "Our Vision", d: "To be India's most trusted family-friendly travel brand." },
                { t: "Why Choose Us", d: "Verified drivers, transparent pricing, 24/7 support and clean vehicles." },
              ].map((b) => (
                <div key={b.t} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="font-display text-lg font-semibold text-primary">{b.t}</div>
                  <p className="mt-1 text-sm text-foreground/75">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-gold opacity-30 blur-2xl" />
            <img src={gVehicle} alt="Mansi Tours premium taxi" width={800} height={600} loading="lazy"
              className="rounded-3xl shadow-royal" />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-royal">
              <div className="font-display text-3xl font-bold text-secondary">10+ Yrs</div>
              <div className="text-xs uppercase tracking-widest">on Indian roads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-display text-sm tracking-[0.3em] uppercase text-primary">Our Services</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Travel Services We Offer</h2>
            <div className="divider-ornate mx-auto mt-6 max-w-xs"><Sparkles className="h-4 w-4" /></div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-royal">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-royal text-secondary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-primary/80">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary">Gallery</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Glimpses of our Journeys</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((g, i) => (
            <div key={i}
              className={`group relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
              <img src={g.src} alt={g.alt} width={800} height={600} loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-3 font-display text-secondary opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {g.alt}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Routes */}
      <section id="routes" className="bg-gradient-royal py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-display text-sm tracking-[0.3em] uppercase text-secondary">Popular Routes</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Where will you go today?</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {routes.map((r) => (
              <div key={`${r.from}-${r.to}`}
                className="rounded-xl border border-secondary/30 bg-primary/40 p-5 backdrop-blur transition hover:border-secondary hover:bg-primary/60">
                <div className="font-display text-xl font-semibold">
                  {r.from} <span className="text-secondary">→</span> {r.to}
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-primary-foreground/80">
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-secondary" /> {r.km}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-secondary" /> {r.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary">Reviews</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Loved by our travellers</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-1 text-secondary">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-foreground/80">“{r.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold font-display font-bold text-gold-foreground">
                  {r.name.charAt(0)}
                </div>
                <div className="font-semibold text-primary">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact + Inquiry + Map */}
      <section id="contact" className="bg-muted/50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm tracking-[0.3em] uppercase text-primary">Get in touch</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Book your journey</h2>
            <p className="mt-4 text-foreground/75">
              Share your travel details and our team will get back to you with the
              best fare and a clean, comfortable vehicle.
            </p>
            <div className="mt-8 space-y-4 text-foreground">
              <a href="tel:+919876543210" className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> +91 98765 43210</a>
              <a href="https://wa.me/919876543210" className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-primary" /> WhatsApp: +91 98765 43210</a>
              <a href="mailto:info@mansitours.in" className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /> info@mansitours.in</a>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Taj Ganj, Agra, Uttar Pradesh, India</div>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Mansi Tours Office Location"
                src="https://www.google.com/maps?q=Taj+Mahal+Agra&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}

function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const result = await submitInquiry({
        data: {
          name: String(values.name ?? ""),
          phone: String(values.phone ?? ""),
          email: String(values.email ?? ""),
          date: String(values.date ?? ""),
          pickup: String(values.pickup ?? ""),
          destination: String(values.destination ?? ""),
          service: String(values.service ?? ""),
          travelers: Number(values.travelers),
          message: String(values.message ?? ""),
        },
      });
      form.reset();
      setStatus("success");
      setMessage(`Thank you! Your inquiry reference is ${result.reference}. We'll contact you shortly.`);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("We couldn't send your inquiry. Please try again or call us directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-royal">
      <h3 className="font-display text-2xl font-bold text-primary">Inquiry Form</h3>
      <p className="mt-1 text-sm text-foreground/70">Fill the form and we'll call you back.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" placeholder="Your name" required />
        <Field label="Mobile Number" name="phone" placeholder="+91" type="tel" required />
        <Field label="Email Address" name="email" placeholder="you@example.com" type="email" />
        <Field label="Travel Date" name="date" type="date" />
        <Field label="Pickup Location" name="pickup" placeholder="e.g. Agra" required />
        <Field label="Destination" name="destination" placeholder="e.g. Jaipur" required />
        <Field label="Service Type" name="service" placeholder="Airport / Outstation / Tour" required />
        <Field label="No. of Travelers" name="travelers" type="number" placeholder="2" min="1" required />
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-medium text-foreground">Message</span>
        <textarea name="message" rows={4} maxLength={2000}
          className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          placeholder="Tell us about your trip..." />
      </label>
      {message && (
        <p role="status" className={`mt-4 text-sm ${status === "success" ? "text-green-700" : "text-destructive"}`}>
          {message}
        </p>
      )}
      <button type="submit" disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-royal py-3.5 font-semibold text-primary-foreground shadow-royal transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60">
        <Send className="h-4 w-4" /> {status === "sending" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, required = false, min }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; min?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        name={name} type={type} placeholder={placeholder} required={required} min={min}
        className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </label>
  );
}
