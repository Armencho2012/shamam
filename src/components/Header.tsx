import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
<<<<<<< HEAD
  { name: "Գլխավոր", path: "/" },
  { name: "Մենյուն", path: "/menu" },
  { name: "Պատկերասրահ", path: "/gallery" },
  { name: "Այցելեք մեզ", path: "/visit" },
  { name: "Կապ", path: "/contact" },
=======
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "Visit Us", path: "/visit" },
  { name: "Contact", path: "/contact" },
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Coffee className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display text-2xl md:text-3xl text-foreground">
<<<<<<< HEAD
              Շամամ
=======
              Shamam's
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="default" asChild>
<<<<<<< HEAD
              <Link to="/contact">Պատվիրել հիմա</Link>
=======
              <Link to="/contact">Order Now</Link>
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
<<<<<<< HEAD
            aria-label="Մենյուն բացել/փակել"
=======
            aria-label="Toggle menu"
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-body font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
<<<<<<< HEAD
                  Պատվիրել հիմա
=======
                  Order Now
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
