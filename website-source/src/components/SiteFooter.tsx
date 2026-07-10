import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-royal text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
              <span className="font-display text-xl font-bold">M</span>
            </div>
            <div>
              <div className="font-display text-lg font-bold">Mansi Tour & Travels</div>
              <div className="text-[11px] tracking-[0.2em] text-secondary uppercase">Yatra • Aastha • Aaram</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80">
            Trusted travel & taxi partner across India — airport transfers, outstation taxis,
            religious yatras and customized family tour packages.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-secondary">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Services & Tour Packages</Link></li>
            <li><a href="/#routes" className="hover:text-secondary">Popular Routes</a></li>
            <li><a href="/#reviews" className="hover:text-secondary">Customer Reviews</a></li>
            <li><a href="/#contact" className="hover:text-secondary">Inquiry & Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-secondary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-secondary" />+91 93549 17842</li>
            <li className="flex gap-2"><MessageCircle className="h-4 w-4 text-secondary" /> WhatsApp: +91 93549 17842</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-secondary" /> mansitourandtravel@gmail.com</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-secondary" /> H.No. X-156/2 Gali no. 11 Bhrampuri Near By Shiv Mandir Third pusta Delhi -110053</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-secondary">Follow Us</h4>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full border border-secondary/40 p-2 hover:bg-secondary hover:text-gold-foreground"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-secondary/40 p-2 hover:bg-secondary hover:text-gold-foreground"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-secondary/40 p-2 hover:bg-secondary hover:text-gold-foreground"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary/20 py-5 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} Mansi Tour & Travels. All rights reserved.
      </div>
    </footer>
  );
}
