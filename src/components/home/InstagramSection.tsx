import { Instagram } from "lucide-react";
import macaronsImage from "@/assets/macarons-display.jpg";
import croissantsImage from "@/assets/croissants.jpg";
import baklavaImage from "@/assets/baklava.jpg";
import coffeeImage from "@/assets/coffee.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import macaronRose from "@/assets/macaron-rose.jpg";

const instagramPosts = [
  { image: macaronsImage, alt: "Colorful macarons display" },
  { image: croissantsImage, alt: "Fresh croissants" },
  { image: baklavaImage, alt: "Traditional baklava" },
  { image: coffeeImage, alt: "Specialty latte art" },
  { image: cafeInterior, alt: "Cozy café interior" },
  { image: macaronRose, alt: "Rose macaron" },
];

export const InstagramSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 rounded-full mb-6">
            <Instagram className="w-5 h-5 text-primary" />
            <span className="font-body text-sm font-medium text-foreground">@shamamsmacarons</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Follow Our Sweet Journey
          </h2>
          <p className="font-body text-muted-foreground">
            Tag us in your photos and share your favorite moments at Shamam's
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
