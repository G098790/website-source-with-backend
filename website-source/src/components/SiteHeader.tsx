import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP = "9354917842";
const PHONE = "+919354917842";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-royal text-secondary shadow-royal">
            <span className="font-display text-xl font-bold">M</span>
          </div>

          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-primary">
              Mansi Tour & Travels
            </div>

            <div className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              Yatra • Aastha • Aaram
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-foreground hover:text-primary [&.active]:text-primary"
          >
            Home
          </Link>

          <Link
            to="/blog"
            className="text-sm font-medium text-foreground hover:text-primary [&.active]:text-primary"
          >
            Blog
          </Link>

          <Link
            to="/services"
            className="text-sm font-medium text-foreground hover:text-primary [&.active]:text-primary"
          >
            Services & Tours
          </Link>

          <a
            href="/#routes"
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            Routes
          </a>

          <a
            href="/#contact"
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-royal transition hover:bg-primary/90 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-gold-foreground shadow-gold transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
