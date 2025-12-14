import macaronsImage from "@/assets/image (1).png";
import croissantsImage from "@/assets/image (2).png";
import baklavaImage from "@/assets/image (3).png";
import coffeeImage from "@/assets/image (4).png";

const featuredProducts = [
  {
    name: "Ազնվական Մակարոններ",
    description: "Նուրբ ֆրանսիական մակարոններ տարբեր հոտավետ համերով — վարդ, պիստակ, մանուշակ և կիտրոն։",
    image: macaronsImage,
    color: "bg-primary/20",
  },
  {
    name: "Կարագային Կրուասաններ",
    description: "Փխրուն, ոսկեգույն կատարելություն, թխված ամեն առավոտ՝ ֆրանսիական կարագով։",
    image: croissantsImage,
    color: "bg-highlight/30",
  },
  {
    name: "Ավանդական Բաղլավա",
    description: "Փխրուն շերտեր, մեղր և փիստակ — մեր ընտանեկան բաղադրատոմսը սերնդեսերունդ։",
    image: baklavaImage,
    color: "bg-secondary/50",
  },
  {
    name: "Հատուկ Սուրճ",
    description: "Արվեստով պատրաստված էսպրեսսո և լատտե արվեստ՝ տեղական սերմերից։",
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
            Մեր Հատուկ Տեսականին
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Պատրաստված Սիրով
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Շամամի յուրաքանչյուր քաղցրավենիք պատրաստվում է ձեռքով՝ օգտագործելով լավագույն բաղադրիչները և մեծ սեր։
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
