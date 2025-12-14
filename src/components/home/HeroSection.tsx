import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import heroImage from "@/assets/image (1).png";
=======
import heroImage from "@/assets/hero-bakery.jpg";
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Shamam's Macarons bakery interior with colorful macarons display"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm px-4 py-2 rounded-full border border-card/30 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
<<<<<<< HEAD
            <span className="font-body text-sm text-card/90">Բարի գալուստ Վանաձորի ամենաքաղցր անկյունը</span>
=======
            <span className="font-body text-sm text-card/90">Welcome to Vanadzor's sweetest spot</span>
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-card leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
<<<<<<< HEAD
            Յուրաքանչյուր կծելը տան ջերմություն է
=======
            Every bite feels like home
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-card/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
<<<<<<< HEAD
Ձեռագիր մակարոններ, ավանդական բակլավա, կարագային կրուասաններ և հատուկ սուրճ — պատրաստված սիրով մեր ընտանեկան հրուշակարանում։
=======
            Handcrafted macarons, traditional baklava, buttery croissants, and specialty coffee — 
            made with love in our cozy family bakery.
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
<<<<<<< HEAD
              <Link to="/menu">Տեսնել Մենյուն</Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/visit">Այցելեք Մեզ</Link>
=======
              <Link to="/menu">View Our Menu</Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/visit">Visit Us Today</Link>
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-card/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-card/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
