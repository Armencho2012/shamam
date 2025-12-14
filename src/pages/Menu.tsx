import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sparkles } from "lucide-react";
<<<<<<< HEAD
import macaronsImage from "@/assets/image (1).png";
import croissantsImage from "@/assets/image (2).png";
import baklavaImage from "@/assets/image (3).png";
import coffeeImage from "@/assets/image (4).png";
import macaronRose from "@/assets/image (6).png";
import macaronPistachio from "@/assets/image (7).png";
import macaronLavender from "@/assets/image (8).png";
=======
import macaronsImage from "@/assets/macarons-display.jpg";
import croissantsImage from "@/assets/croissants.jpg";
import baklavaImage from "@/assets/baklava.jpg";
import coffeeImage from "@/assets/coffee.jpg";
import macaronRose from "@/assets/macaron-rose.jpg";
import macaronPistachio from "@/assets/macaron-pistachio.jpg";
import macaronLavender from "@/assets/macaron-lavender.jpg";
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c

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
<<<<<<< HEAD
    title: "Մակարոններ",
    icon: "🍥",
    color: "bg-primary/10 border-primary/20",
    items: [
      { name: "Վարդ", description: "Թեթև ծաղկային նոտաներ՝ ազնվաբուս աստառային պանրով", price: "500 AMD", image: macaronRose },
      { name: "Փիստաչի", description: "Բաղադրիչ փիստաչի գանին՝ ձիթապտղի համով", price: "500 AMD", image: macaronPistachio },
      { name: "Լավանդա", description: "Լավանդայի մեղմ համ՝ մեղրով պատճենավոր կրեմ", price: "500 AMD", image: macaronLavender },
      { name: "Լիմոն", description: "Կիպ կիտրոնային կարդ՝ վանիլային կրեմով", price: "500 AMD" },
      { name: "Շոկոլադ", description: "Բելգիական մուգ շոկոլադ՝ ընկուզեղենի նշմարներով", price: "500 AMD" },
      { name: "Աղով Կարամել", description: "Կարագային կարամել՝ ծովատաղի աղով", price: "550 AMD" },
      { name: "Մակարոնների տուփ (6 հատ)", description: "Խոհարարի ընտրանիը՝ եղանակային համերով", price: "2,800 AMD", image: macaronsImage },
      { name: "Մակարոնների տուփ (12 հատ)", description: "Իդեալական նվեր՝ քանակավոր համերով", price: "5,400 AMD" },
    ],
  },
  {
    title: "Կրուասաններ",
    icon: "🥐",
    color: "bg-highlight/20 border-highlight/30",
    items: [
      { name: "Կլասիկ կարագով", description: "Ամենագերային ֆրանսիական կարագ, փխրուն շերտեր", price: "800 AMD", image: croissantsImage },
      { name: "Նուշով", description: "Լցված նուշի կրեմով, վերևը՝ նուշի կտրտածքով", price: "1,200 AMD" },
      { name: "Շոկոլադով", description: "Բելգիական շոկոլադային շերտեր", price: "1,000 AMD" },
      { name: "Խոզի մսով և պանրով", description: "Համեղ կրուասան պրեմիում խոզի մսով և գրույեր պանրով", price: "1,500 AMD" },
      { name: "Կրուասան-սենդվիչ", description: "Ձու, аваկադո և եղանակային բանջարեղեն", price: "1,800 AMD" },
    ],
  },
  {
    title: "Բաղլավա",
    icon: "🍯",
    color: "bg-secondary/20 border-secondary/30",
    items: [
      { name: "Դասական փիստաչի", description: "Փխրուն շերտեր՝ մեղրով և փիստակով", price: "400 AMD", image: baklavaImage },
      { name: "Փխրուն ընկույզով", description: "Ավանդական ընկույզի շերտով՝ վարդի շաքարով", price: "350 AMD" },
      { name: "Խառը ընկուզեղեն", description: "Փիստաչի, ընկուզեղեն և նուշի պրեմիում համախումբ", price: "450 AMD" },
      { name: "Բաղլավայի տուփ (500գ)", description: "Խառը բաղլավա՝ բաժանելու համար", price: "4,500 AMD" },
      { name: "Բաղլավայի տուփ (1կգ)", description: "Իդեալական տոնակատարությունների համար", price: "8,500 AMD" },
    ],
  },
  {
    title: "Սուրճ և Խմիչքներ",
    icon: "☕",
    color: "bg-accent/20 border-accent/30",
    items: [
      { name: "Էսպրեսսո", description: "Մեկ մատաղ մեր ստորագրական խառնուրդից", price: "600 AMD", image: coffeeImage },
      { name: "Ամերիկանո", description: "Էսպրեսսո՝ տաք ջրով", price: "700 AMD" },
      { name: "Կապուչինո", description: "Էսպրեսսո՝ մածնով և կրեմով", price: "900 AMD" },
      { name: "Լաթտե", description: "Կրեմային էսպրեսսո՝ մածնով", price: "1,000 AMD" },
      { name: "Մոչա", description: "Էսպրեսսո, շոկոլադ և տաք մածուն", price: "1,200 AMD" },
      { name: "Թիկս տաք շոկոլադ", description: "Բելգիական շոկոլադ՝ կրեմով", price: "1,000 AMD" },
      { name: "Թեյերի ընտրանի", description: "Պրեմիում թերթաթիկ թեյեր", price: "600 AMD" },
      { name: "Թարմ լիմոնադ", description: "Տնական, մաղալով", price: "800 AMD" },
    ],
  },
    ],
  },
];

const todaysSpecial = {
  name: "Լավանդա-Մեղրով կրուասան",
  description: "Մեր յուրահատուկ կարագային կրուասանը լեցուն է լավանդայով համեմված մեղրով կրեմով, զարդարված ածելուկ ծաղիկներով և փոշու շաքարով։ Սահմանափակ առաջարկ՝ գարնան սեզոնի համար։",
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
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">Մեր մենյուն</h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">Յուրաքանչյուր արտադրանք պատրաստվում է ձեռքով՝ լավագույն բաղադրիչներից, սիրով։ Ցուցված գները նշված են ՀՀ դրամով (AMD):</p>
          </div>
        </section>

        {/* Today's Special */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-8">
                <Sparkles className="w-6 h-6 text-highlight" />
                <h2 className="font-display text-3xl text-foreground">Այսօրվա առաջարկը</h2>
              </div>
              <div className="bg-gradient-to-r from-highlight/20 via-primary/10 to-accent/20 rounded-3xl p-6 md:p-8 border border-highlight/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <span className="inline-block bg-highlight/30 text-foreground px-3 py-1 rounded-full text-sm font-body font-medium mb-4">Սահմանափակ ժամանակով</span>
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
