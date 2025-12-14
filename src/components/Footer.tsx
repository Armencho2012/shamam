import { Link } from "react-router-dom";
import { Coffee, Instagram, Facebook, MapPin, Phone, Mail, Heart } from "lucide-react";
// Use the favicon from `public/` as the site logo for consistency
const faviconPath = "/favicon.jpg";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={faviconPath} alt="Shamam logo" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-display text-3xl text-card">Շամամ</span>
            </Link>
            <p className="font-body text-card/70 leading-relaxed">
              Յուրաքանչյուր հրուշակեղեն պատրաստվում է սիրով։ Միացեք մեզ Վանաձորի սրտում քաղցր ու տաք պահի համար։
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/shamams_macarons/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/shamamsmacaroons"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl">Արագ հղումներ</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/menu" className="text-card/70 hover:text-primary transition-colors">
                  Մեր մենյուն
                </Link>
              </li>
              <li>
                <Link to="/visit" className="text-card/70 hover:text-primary transition-colors">
                  Այցելեք մեզ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-card/70 hover:text-primary transition-colors">
                  Կապ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl">Կապվել մեզ հետ</h3>
            <ul className="space-y-3 font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-card/70">Մյասնիկյան 19, Վանաձոր, Հայաստան</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+37493788083" className="text-card/70 hover:text-primary transition-colors">
                  +374 93 788 083
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:hello@shamams.am" className="text-card/70 hover:text-primary transition-colors">
                  hello@shamams.am
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl">Բացման ժամեր</h3>
            <ul className="space-y-2 font-body text-card/70">
              <li className="flex justify-between">
                <span>Երկուշաբթի - Ուրբաթ</span>
                <span>9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Շաբաթ</span>
                <span>10:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Կիրակի</span>
                <span>10:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-card/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-card/50 text-sm flex items-center gap-1">
              Սիրով պատրաստված՝ <Heart className="w-4 h-4 text-primary fill-primary" /> Վանաձորում
            </p>
            <p className="font-body text-card/50 text-sm">© {new Date().getFullYear()} Շամամ. Բոլոր իրավունքները պաշտպանված են.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
