import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InstagramSection } from "@/components/home/InstagramSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <AboutSection />
        <TestimonialsSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
