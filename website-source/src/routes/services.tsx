import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, Car, Clock, MapPin, ShieldCheck, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

import gRajasthan from "@/assets/tour-rajasthan.jpg";
// NEW: add these two image files to src/assets/ (any royal-temple style /
// mountain-valley style photo works as a placeholder until you have real ones)
import gYatraCircuit from "@/assets/tour-yatra-circuit.jpg";
import gNepal from "@/assets/tour-nepal.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Tour Packages — Mansi Tour & Travels" },
      { name: "description", content: "Delhi outstation taxi service to Agra, Jaipur, Rishikesh, Haridwar, Dehradun, Haryana, Rajasthan, Uttarakhand, Punjab, Uttar Pradesh, Madhya Pradesh, Himachal Pradesh, Jammu & Kashmir, plus the Mathura-Vrindavan-Barsana yatra circuit and Nepal tours." },
      { property: "og:title", content: "Services & Tour Packages — Mansi Tour & Travels" },
      { property: "og:description", content: "Airport transfers, Delhi outstation taxis and religious yatra & Nepal tour packages." },
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
  {
    from: "Delhi",
    to: "Special Yatra Circuit",
    img: gYatraCircuit,
    places: ["Mathura", "Vrindavan", "Barsana", "Khatu Shyam Ji", "Salasar Balaji", "Haridwar", "Rishikesh"],
  },
  {
    from: "Delhi",
    to: "Nepal — Kathmandu & Pokhara",
    img: gNepal,
    places: ["Kathmandu", "Pokhara", "Pashupatinath Temple", "Phewa Lake"],
  },
];

// Simple point-to-point outstation routes from Delhi — no dedicated photo,
// shown as a compact route grid rather than a full package card.
const delhiRoutes = [
  "Agra",
  "Jaipur",
  "Rishikesh",
  "Haridwar",
  "Dehradun",
  "Haryana",
  "Rajasthan",
  "Uttarakhand",
  "Punjab",
  "Uttar Pradesh",
  "Madhya Pradesh",
  "Himachal Pradesh",
  "Jammu & Kashmir",
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

      {/* Delhi Outstation Routes */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <p className="font-display text-sm tracking-[0.3em] uppercase text-primary">Outstation Cab Service</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Delhi outstation routes</h2>
        <p className="mt-4 max-w-2xl text-foreground/70">
          Comfortable one-way and round-trip taxis from Delhi to destinations across North India.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {delhiRoutes.map((r) => (
            <a
              key={r}
              href={`https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20book%20a%20cab%20from%20Delhi%20to%20${encodeURIComponent(r)}.`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-2 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-royal"
            >
              <span className="flex items-center gap-2 font-display text-base font-semibold text-primary">
                <Car className="h-4 w-4 text-secondary" /> Delhi → {r}
              </span>
              <ArrowRight className="h-4 w-4 text-foreground/40 transition group-hover:translate-x-1 group-hover:text-primary" />
            </a>
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
                    <a href={`https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(p.from + " to " + p.to)}%20tour.`}
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
            <a href="tel:919876543210"
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
