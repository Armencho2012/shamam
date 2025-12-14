import { Link } from "react-router-dom";
import { Coffee, Instagram, Facebook, MapPin, Phone, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-primary" />
              </div>
<<<<<<< HEAD
              <span className="font-display text-3xl text-card">Շամամ</span>
            </Link>
            <p className="font-body text-card/70 leading-relaxed">
              Յուրաքանչյուր հրուշակորաք պատրաստվում է սիրով։ Միացեք մեզ Վանաձորի սրտում քաղցր ու ջերմ պահի համար։
=======
              <span className="font-display text-3xl text-card">Shamam's</span>
            </Link>
            <p className="font-body text-card/70 leading-relaxed">
              Every dessert is made with love. Join us for a sweet moment of comfort in the heart of Vanadzor.
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
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
<<<<<<< HEAD
            <h3 className="font-display text-2xl">Արագ հղումներ</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/menu" className="text-card/70 hover:text-primary transition-colors">
                  Մեր մենյուն
=======
            <h3 className="font-display text-2xl">Quick Links</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/menu" className="text-card/70 hover:text-primary transition-colors">
                  Our Menu
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-card/70 hover:text-primary transition-colors">
<<<<<<< HEAD
                  Պատկերասրահ
=======
                  Gallery
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
                </Link>
              </li>
              <li>
                <Link to="/visit" className="text-card/70 hover:text-primary transition-colors">
<<<<<<< HEAD
                  Այցելեք մեզ
=======
                  Visit Us
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-card/70 hover:text-primary transition-colors">
<<<<<<< HEAD
                  Կապ
=======
                  Contact
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
<<<<<<< HEAD
            <h3 className="font-display text-2xl">Կապվել մեզ հետ</h3>
            <ul className="space-y-3 font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-card/70">Մյասնիկյան 19, Վանաձոր, Հայաստան</span>
=======
            <h3 className="font-display text-2xl">Contact Us</h3>
            <ul className="space-y-3 font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-card/70">Myasnikyan 19, Vanadzor, Armenia</span>
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
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
<<<<<<< HEAD
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
=======
            <h3 className="font-display text-2xl">Opening Hours</h3>
            <ul className="space-y-2 font-body text-card/70">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
                <span>10:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-card/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
<<<<<<< HEAD
              <p className="font-body text-card/50 text-sm flex items-center gap-1">
              Սիրով պատրաստված՝ <Heart className="w-4 h-4 text-primary fill-primary" /> Վանաձորում
            </p>
            <p className="font-body text-card/50 text-sm">
              © {new Date().getFullYear()} Shamam's Macarons. Բոլոր իրավունքները պաշտպանված են.
=======
            <p className="font-body text-card/50 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Vanadzor
            </p>
            <p className="font-body text-card/50 text-sm">
              © {new Date().getFullYear()} Shamam's Macarons. All rights reserved.
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
