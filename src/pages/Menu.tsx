import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sparkles } from "lucide-react";
import macaronsImage from "@/assets/macarons-display.jpg";
import croissantsImage from "@/assets/croissants.jpg";
import baklavaImage from "@/assets/baklava.jpg";
import coffeeImage from "@/assets/coffee.jpg";
import macaronRose from "@/assets/macaron-rose.jpg";
import macaronPistachio from "@/assets/macaron-pistachio.jpg";
import macaronLavender from "@/assets/macaron-lavender.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface MenuCategory {
  title: string;
  icon: string;
  color: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    title: "Macarons",
    icon: "🍥",
    color: "bg-primary/10 border-primary/20",
    items: [
      { name: "Rose", description: "Delicate floral notes with raspberry buttercream", price: "500 AMD", image: macaronRose },
      { name: "Pistachio", description: "Rich pistachio ganache with a hint of almond", price: "500 AMD", image: macaronPistachio },
      { name: "Lavender", description: "Soothing lavender infused with honey cream", price: "500 AMD", image: macaronLavender },
      { name: "Lemon", description: "Bright citrus curd with vanilla cream", price: "500 AMD" },
      { name: "Chocolate", description: "Belgian dark chocolate with hazelnut", price: "500 AMD" },
      { name: "Salted Caramel", description: "Buttery caramel with fleur de sel", price: "550 AMD" },
      { name: "Macaron Box (6 pcs)", description: "Chef's selection of seasonal flavors", price: "2,800 AMD", image: macaronsImage },
      { name: "Macaron Box (12 pcs)", description: "Perfect gift with assorted flavors", price: "5,400 AMD" },
    ],
  },
  {
    title: "Croissants",
    icon: "🥐",
    color: "bg-highlight/20 border-highlight/30",
    items: [
      { name: "Classic Butter", description: "Pure French butter, flaky layers", price: "800 AMD", image: croissantsImage },
      { name: "Almond", description: "Filled with almond cream, topped with sliced almonds", price: "1,200 AMD" },
      { name: "Chocolate", description: "Belgian chocolate batons in buttery layers", price: "1,000 AMD" },
      { name: "Ham & Cheese", description: "Savory croissant with premium ham and gruyère", price: "1,500 AMD" },
      { name: "Croissant Sandwich", description: "Eggs, avocado, and seasonal vegetables", price: "1,800 AMD" },
    ],
  },
  {
    title: "Baklava",
    icon: "🍯",
    color: "bg-secondary/20 border-secondary/30",
    items: [
      { name: "Classic Pistachio", description: "Layers of phyllo with honey and pistachios", price: "400 AMD", image: baklavaImage },
      { name: "Walnut Baklava", description: "Traditional walnut filling with rose syrup", price: "350 AMD" },
      { name: "Mixed Nuts", description: "Premium blend of pistachios, walnuts & almonds", price: "450 AMD" },
      { name: "Baklava Box (500g)", description: "Assorted baklava for sharing", price: "4,500 AMD" },
      { name: "Baklava Box (1kg)", description: "Perfect for celebrations", price: "8,500 AMD" },
    ],
  },
  {
    title: "Coffee & Drinks",
    icon: "☕",
    color: "bg-accent/20 border-accent/30",
    items: [
      { name: "Espresso", description: "Single shot of our signature blend", price: "600 AMD", image: coffeeImage },
      { name: "Americano", description: "Espresso with hot water", price: "700 AMD" },
      { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "900 AMD" },
      { name: "Latte", description: "Creamy espresso with silky steamed milk", price: "1,000 AMD" },
      { name: "Mocha", description: "Espresso, chocolate, and steamed milk", price: "1,200 AMD" },
      { name: "Hot Chocolate", description: "Rich Belgian chocolate with cream", price: "1,000 AMD" },
      { name: "Tea Selection", description: "Premium loose leaf teas", price: "600 AMD" },
      { name: "Fresh Lemonade", description: "Homemade with mint", price: "800 AMD" },
    ],
  },
];

const todaysSpecial = {
  name: "Lavender Honey Croissant",
  description: "Our signature butter croissant filled with lavender-infused honey cream, topped with edible flowers and a dusting of powdered sugar. A limited creation that captures the essence of spring.",
  price: "1,400 AMD",
  image: croissantsImage,
};

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Our Menu
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Every item is handcrafted with love, using the finest ingredients. 
              Prices are in Armenian Dram (AMD).
            </p>
          </div>
        </section>

        {/* Today's Special */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <Sparkles className="w-6 h-6 text-highlight" />
                <h2 className="font-display text-3xl text-foreground">Today's Special</h2>
              </div>
              <div className="bg-gradient-to-r from-highlight/20 via-primary/10 to-accent/20 rounded-3xl p-6 md:p-8 border border-highlight/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <span className="inline-block bg-highlight/30 text-foreground px-3 py-1 rounded-full text-sm font-body font-medium mb-4">
                      Limited Time
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                      {todaysSpecial.name}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">
                      {todaysSpecial.description}
                    </p>
                    <p className="font-display text-2xl text-primary">
                      {todaysSpecial.price}
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="rounded-2xl overflow-hidden shadow-hover">
                      <img
                        src={todaysSpecial.image}
                        alt={todaysSpecial.name}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {menuCategories.map((category) => (
                <div key={category.title} className="max-w-5xl mx-auto">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-4xl">{category.icon}</span>
                    <h2 className="font-display text-4xl text-foreground">{category.title}</h2>
                  </div>

                  {/* Menu Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className={`flex gap-4 p-4 rounded-2xl border ${category.color} bg-card/50 hover:bg-card transition-colors duration-300`}
                      >
                        {item.image && (
                          <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-body font-semibold text-foreground">
                              {item.name}
                            </h3>
                            <span className="font-body font-semibold text-primary whitespace-nowrap">
                              {item.price}
                            </span>
                          </div>
                          <p className="font-body text-sm text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
