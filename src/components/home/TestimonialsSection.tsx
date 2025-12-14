import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anna M.",
    role: "Տեղացի",
    content: "Մակարոնները այստեղ ինձ հիշեցնում են Փարիզի իմ ուղևորությունը։ Աչքահաց, իսկ սեփականատերերը շատ ջերմ են։ Սա դարձավ իմ սիրելի վայրը յուրաքանչյուր տոնակատարության համար։",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Սուրճի սիրահար",
    content: "Լավագույն սուրճը Վանաձորում։ Բարիստաները հմուտ են, իսկ թխվածքներն իդեալական են բաժակին։ Ամեն այցելությունը տպավորում է տնականություն։",
    rating: 5,
  },
  {
    name: "Mariam S.",
    role: "Կանոնավոր հաճախորդ",
    content: "Բաղլավան ինձ ետ է տանում տատիկիս խոհանոց։ Այն իսկական է, քաղցր, բայց չափավոր և պատրաստվում է մեծ հոգատարությամբ։ Պատվիրում եմ տուփեր բոլոր տոների համար։",
    rating: 5,
  },
  {
    name: "Arsen T.",
    role: "Առաջին այցող",
    content: "Ես եկա կրուասանների պատճառով և մնացի մթնոլորտի պատճառով։ Շատ հարմարավետ ու ընդունող տեղ է։ Գործակատարները հիշում են ձեր անունը մի այցից հետո։",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 gradient-hero bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Հյուրերի կարծիքները
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Մեր հյուրերի քաղցր խոսքերը
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

              {/* Content */}
              <p className="font-body text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-highlight fill-highlight"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-lg text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
