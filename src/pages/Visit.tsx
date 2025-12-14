import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Clock, Car, Bus, Navigation } from "lucide-react";

const Visit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">Այցելեք մեզ</h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">Մենք սիրով հրավիրում ենք Ձեզ մեր հարմարավետ անկյունը Վանաձորում։ Բերեք երեխաներին՝ վայելելու քաղցրավենիքները և տնային ջերմությունը։</p>
          </div>
        </section>

        {/* Map & Info Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-hover h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.073752556857!2d44.48669967609373!3d40.804787831620164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041f27c06dc2f97%3A0x8b44fad96f6cd6e8!2sMyasnikyan%20St%2019%2C%20Vanadzor%2C%20Armenia!5e0!3m2!1sen!2s!4v1702573856747!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shamam's Macarons location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {/* Address */}
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-foreground mb-2">Հասցե</h3>
                      <p className="font-body text-muted-foreground">Մյասնիկյան 19<br />Վանաձոր, Հայաստան</p>
                      <a href="https://maps.google.com/?q=Myasnikyan+19,+Vanadzor,+Armenia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-body font-medium mt-3 hover:underline">
                        <Navigation className="w-4 h-4" /> Ցուցադրել երթուղին
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-foreground mb-2">Հեռախոս</h3>
                      <a href="tel:+37493788083" className="font-body text-lg text-primary hover:underline">+374 93 788 083</a>
                      <p className="font-body text-sm text-muted-foreground mt-1">Զանգահարեք պատվերների, ռեզերվացիաների կամ հարցումների համար</p>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl text-foreground mb-4">Բացման ժամեր</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between font-body">
                          <span className="text-muted-foreground">Երկուշաբթի - Ուրբաթ</span>
                          <span className="text-foreground font-medium">9:00 - 20:00</span>
                        </div>
                        <div className="flex justify-between font-body">
                          <span className="text-muted-foreground">Շաբաթ</span>
                          <span className="text-foreground font-medium">10:00 - 21:00</span>
                        </div>
                        <div className="flex justify-between font-body">
                          <span className="text-muted-foreground">Կիրակի</span>
                          <span className="text-foreground font-medium">10:00 - 19:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* How to Get Here */}
                <div className="bg-gradient-to-r from-highlight/20 to-secondary/20 rounded-2xl p-6 border border-highlight/30">
                  <h3 className="font-display text-2xl text-foreground mb-4">Ինչպես հասնել</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Bus className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-body font-medium text-foreground">Ավտոբուսով</p>
                        <p className="font-body text-sm text-muted-foreground">Օգտագործեք 3, 7 կամ 12 երթուղիները՝ կանգառով «Կենտրոնական հրապարակ»։ Մեզանից ընդամենը 2 րոպե քայլ է այն վայրից։</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Car className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-body font-medium text-foreground">Ավտոմեքենայով</p>
                        <p className="font-body text-sm text-muted-foreground">Կայանատեղի առկա է Մյասնիկյան փողոցում։ Պարզապես փնտրեք վարդագույն մարկիզը։</p>
                      </div>
                    </div>
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

export default Visit;
