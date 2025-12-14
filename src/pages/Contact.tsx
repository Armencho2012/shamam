import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Send us a message or order your favorite sweets. We'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-body font-medium text-foreground mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="What should we call you?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={255}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-body font-medium text-foreground mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={1000}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Tell us about your order, question, or just say hello..."
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                  Other Ways to Reach Us
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50 shadow-card">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">
                        Call Us
                      </h3>
                      <a
                        href="tel:+37493788083"
                        className="font-body text-primary hover:underline"
                      >
                        +374 93 788 083
                      </a>
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        Available during opening hours
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50 shadow-card">
                    <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">
                        Email Us
                      </h3>
                      <a
                        href="mailto:hello@shamams.am"
                        className="font-body text-primary hover:underline"
                      >
                        hello@shamams.am
                      </a>
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Visit */}
                  <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50 shadow-card">
                    <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">
                        Visit Us
                      </h3>
                      <p className="font-body text-muted-foreground">
                        Myasnikyan 19, Vanadzor
                      </p>
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        Mon-Fri 9-8, Sat 10-9, Sun 10-7
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <h3 className="font-body font-semibold text-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full font-body text-foreground hover:from-primary/30 hover:to-accent/30 transition-all"
                    >
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-muted rounded-full font-body text-foreground hover:bg-muted/80 transition-all"
                    >
                      <Facebook className="w-5 h-5" />
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
