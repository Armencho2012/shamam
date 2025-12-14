<<<<<<< HEAD
import macaronsImage from "@/assets/image (1).png";
import croissantsImage from "@/assets/image (2).png";
import baklavaImage from "@/assets/image (3).png";
import coffeeImage from "@/assets/image (4).png";

const featuredProducts = [
  {
    name: "Ազնվական Մակարոններ",
    description: "Նուրբ ֆրանսիական մակարոններ տարբեր հոտավետ համերով — վարդ, պիստակ, մանուշակ և կիտրոն։",
=======
import macaronsImage from "@/assets/macarons-display.jpg";
import croissantsImage from "@/assets/croissants.jpg";
import baklavaImage from "@/assets/baklava.jpg";
import coffeeImage from "@/assets/coffee.jpg";

const featuredProducts = [
  {
    name: "Signature Macarons",
    description: "Delicate French macarons in rainbow flavors — rose, pistachio, lavender, and lemon.",
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
    image: macaronsImage,
    color: "bg-primary/20",
  },
  {
<<<<<<< HEAD
    name: "Կարագային Կրուասաններ",
    description: "Փխրուն, ոսկեգույն կատարելություն, թխված թանկարժեք ֆրանսիական կարագով ամեն առավոտ։",
=======
    name: "Buttery Croissants",
    description: "Flaky, golden perfection baked fresh every morning with premium French butter.",
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
    image: croissantsImage,
    color: "bg-highlight/30",
  },
  {
<<<<<<< HEAD
    name: "Ավանդական Բակլավա",
    description: "Մատաղ փխրուն շերտեր, մեղր և պիստակ — մեր ընտանեկան բաղադրատոմսը սերնդեսերունդ։",
=======
    name: "Traditional Baklava",
    description: "Layers of crispy phyllo, honey, and pistachios — our family recipe passed down generations.",
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
    image: baklavaImage,
    color: "bg-secondary/50",
  },
  {
<<<<<<< HEAD
    name: "Հատուկ Սուրճ",
    description: "Արվեստագետի ձեռքով պատրաստված էսպրեսսո և լատտե արվեստ տեղական տորֆով հատիկներից։",
=======
    name: "Specialty Coffee",
    description: "Artisan espresso and latte art crafted with locally roasted beans.",
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
    image: coffeeImage,
    color: "bg-accent/30",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
<<<<<<< HEAD
            Մեր Հատուկ Տեսականին
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Պատրաստված Սիրով
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Շամամի յուրաքանչյուր քաղցրավենիք պատրաստվում է ձեռքով՝ օգտագործելով լավագույն բաղադրիչները և մեծ սեր։
=======
            Our Specialties
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Made with Love
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Every treat at Shamam's is handcrafted with the finest ingredients and a whole lot of heart.
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className={`relative h-56 overflow-hidden ${product.color}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
