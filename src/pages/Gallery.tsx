import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import macaronsImage from "@/assets/macarons-display.jpg";
import croissantsImage from "@/assets/croissants.jpg";
import baklavaImage from "@/assets/baklava.jpg";
import coffeeImage from "@/assets/coffee.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import macaronRose from "@/assets/macaron-rose.jpg";
import macaronPistachio from "@/assets/macaron-pistachio.jpg";
import macaronLavender from "@/assets/macaron-lavender.jpg";
import heroImage from "@/assets/hero-bakery.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { src: heroImage, alt: "Shamam's bakery interior with macarons display", category: "Interior" },
  { src: macaronsImage, alt: "Colorful French macarons", category: "Macarons" },
  { src: macaronRose, alt: "Rose flavored macaron", category: "Macarons" },
  { src: macaronPistachio, alt: "Pistachio macaron", category: "Macarons" },
  { src: macaronLavender, alt: "Lavender macaron", category: "Macarons" },
  { src: croissantsImage, alt: "Fresh buttery croissants", category: "Pastries" },
  { src: baklavaImage, alt: "Traditional Armenian baklava", category: "Pastries" },
  { src: coffeeImage, alt: "Specialty latte art", category: "Coffee" },
  { src: cafeInterior, alt: "Cozy café atmosphere", category: "Interior" },
];

const categories = ["All", "Macarons", "Pastries", "Coffee", "Interior"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Gallery
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our world of handcrafted sweets, cozy moments, and happy customers.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-card border-b border-border/50 sticky top-16 md:top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="inline-block bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs font-body font-medium mb-2">
                          {image.category}
                        </span>
                        <p className="font-body text-card text-sm">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] animate-scale-in">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-lg">
                <p className="font-body text-card text-center">{selectedImage.alt}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-card hover:bg-card/40 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
