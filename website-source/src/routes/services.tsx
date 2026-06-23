import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, Car, Clock, MapPin, ShieldCheck, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

import gJaipur from "@/assets/tour-jaipur.jpg";
import gDelhi from "@/assets/tour-delhi.jpg";
import gVrindavan from "@/assets/tour-vrindavan.jpg";
import gAyodhya from "@/assets/tour-ayodhya.jpg";
import gHaridwar from "@/assets/tour-haridwar.jpg";
import gGujarat from "@/assets/tour-gujarat.jpg";
import gRajasthan from "@/assets/tour-rajasthan.jpg";
import gHimachal from "@/assets/tour-himachal.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Tour Packages — Mansi Tour & Travels" },
      { name: "description", content: "Explore tour packages: Agra → Jaipur, Delhi, Mathura, Vrindavan, Ayodhya, Haridwar, Gujarat, Rajasthan, Himachal & more." },
      { property: "og:title", content: "Services & Tour Packages — Mansi Tour & Travels" },
      { property: "og:description", content: "Airport transfers, outstation taxis and popular religious & family tour packages across India." },
      { property: "og:image", content: gRajasthan },
      { name: "twitter:image", content: gRajasthan },
    ],
  }),
  component: Services,
});

const core = [
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    points: ["24/7 Availability", "Professional Drivers", "On-Time Pickup", "Luggage Assistance"],
  },
  {
    icon: Plane,
    title: "Airport Transfer Services",
    points: ["Domestic Transfers", "International Transfers", "Corporate Transfers", "Premium Vehicles"],
  },
];

const packages = [
  { from: "Agra", to: "Jaipur", img: gJaipur, places: ["Hawa Mahal", "Amer Fort", "Jal Mahal", "City Palace"] },
  { from: "Agra", to: "Delhi", img: gDelhi, places: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple"] },
  { from: "Agra", to: "Mathura & Vrindavan", img: gVrindavan, places: ["Krishna Janmabhoomi", "Prem Mandir", "Banke Bihari Temple"] },
  { from: "Agra", to: "Ayodhya", img: gAyodhya, places: ["Ram Mandir", "Hanuman Garhi", "Saryu Ghat"] },
  { from: "Agra", to: "Haridwar & Rishikesh", img: gHaridwar, places: ["Har Ki Pauri", "Ganga Aarti", "Laxman Jhula"] },
  { from: "Tour", to: "Gujarat Package", img: gGujarat, places: ["Statue of Unity", "Ahmedabad", "Somnath Temple", "Dwarka"] },
  { from: "Tour", to: "Rajasthan Package", img: gRajasthan, places: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"] },
  { from: "Tour", to: "Himachal Package", img: gHimachal, places: ["Shimla", "Manali", "Kufri", "Solang Valley"] },
];

function Services() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero band */}
      <section className="bg-gradient-royal text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="divider-ornate mx-auto max-w-md font-display text-sm tracking-[0.3em] uppercase text-secondary">
            <Sparkles className="h-4 w-4" /> Services & Tour Packages
          </p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-tight sm:text-6xl">
            Curated journeys across <span className="text-gradient-gold">Bharat</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/85">
            From quick airport transfers to multi-day religious yatras and family
            holidays — choose a package or let us craft one for you.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-display text-sm tracking-[0.3em] uppercase text-primary">Core Services</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Everyday travel, done right</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {core.map((c) => (
            <div key={c.title} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground">
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">{c.title}</h3>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-foreground/80">
                    <ShieldCheck className="h-4 w-4 text-secondary" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Tour Packages */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-display text-sm tracking-[0.3em] uppercase text-primary">Popular Tour Packages</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Yatras & Holiday Packages</h2>
            <div className="divider-ornate mx-auto mt-6 max-w-xs"><Sparkles className="h-4 w-4" /></div>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => (
              <article key={`${p.from}-${p.to}`}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-royal">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={`${p.from} to ${p.to}`} width={800} height={600} loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute left-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-foreground">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-display text-2xl font-bold text-primary">
                    {p.from} <span className="text-secondary">→</span> {p.to}
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.places.map((pl) => (
                      <li key={pl} className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/75">
                        {pl}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <a href={`https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(p.from + " to " + p.to)}%20tour.`}
                      target="_blank" rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-royal px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-royal transition hover:opacity-95">
                      <MessageCircle className="h-4 w-4" /> Book
                    </a>
                    <Link to="/" hash="contact"
                      className="inline-flex items-center justify-center gap-1 rounded-full border border-primary px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">
                      Inquire <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-royal p-10 text-center text-primary-foreground shadow-royal sm:p-14">
          <h3 className="font-display text-3xl font-bold sm:text-4xl">Need a custom itinerary?</h3>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
            Tell us your dates and destinations — we'll craft a tour with the right vehicle, hotels and timing.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a href="tel:+919999999999"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 font-semibold text-gold-foreground shadow-gold transition hover:opacity-90">
              <Clock className="h-4 w-4" /> Call 24/7
            </a>
            <Link to="/" hash="contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-secondary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-secondary hover:text-gold-foreground">
              <MapPin className="h-4 w-4" /> Send Inquiry
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
