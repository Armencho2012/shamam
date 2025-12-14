<<<<<<< HEAD
import cafeInterior from "@/assets/image (5).png";
=======
import cafeInterior from "@/assets/cafe-interior.jpg";
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-hover">
              <img
                src={cafeInterior}
<<<<<<< HEAD
                alt="Շամամի Հրուշակարան - մեր բակլավան"
=======
                alt="Shamam's Macarons cozy café interior"
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider">
<<<<<<< HEAD
Մեր Պատմությունը
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
Քաղցր ավանդույթներ ընտանիքում
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
Վանաձորի սրտում գտնվող մեր հրուշակարանը սկսվել է որպես երազանք՝ միավորելու ֆրանսիական պաստառի նրբագեղությունը հայկական հյուրընկալության ջերմության հետ:
              </p>
              <p>
Այն, ինչ սկսվել էր փոքր խոհանոցում տատիկի բաղադրատոմսերով, այժմ վերածվել է սիրելի հրուշակարանի, որտեղ յուրաքանչյուր մակարոն պատրաստվում է սիրով, ամեն կրուասան թխվում է ոսկե կարմրությամբ, և ամեն բաժակ սուրճ մատուցվում է ժպիտով:
              </p>
              <p>
Մենք հավատում ենք, որ լավագույն աղանդերները պատրաստվում են որակյալ բաղադրիչներով, ժամանակի փորձարկված տեխնոլոգիաներով և ամենակարևորը՝ սիրով: Երբ այցելում եք Շամամ, դուք պարզապես հաճախորդ չեք, դուք մեր ընտանիքի անդամ եք:
=======
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              A Family Tradition of Sweetness
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Nestled in the heart of Vanadzor, Shamam's Macarons started as a dream — 
                to bring the elegance of French patisserie together with the warmth of Armenian hospitality.
              </p>
              <p>
                What began in a small kitchen with a grandmother's recipes has blossomed into a beloved 
                neighborhood café where every macaron is a labor of love, every croissant is baked to 
                golden perfection, and every cup of coffee comes with a smile.
              </p>
              <p>
                We believe that the best desserts are made with quality ingredients, time-honored techniques, 
                and most importantly — love. When you visit Shamam's, you're not just a customer; 
                you're part of our family.
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-display text-2xl text-primary">S</span>
              </div>
              <div>
<<<<<<< HEAD
                <p className="font-display text-xl text-foreground">Շամամների ընտանիքը</p>
                <p className="font-body text-sm text-muted-foreground">Հիմնադիրներ և գլխավոր հրուլակներ</p>
=======
                <p className="font-display text-xl text-foreground">The Shamam Family</p>
                <p className="font-body text-sm text-muted-foreground">Founders & Head Bakers</p>
>>>>>>> eea15ff7bf1f985a1a577fad511dbf173539e03c
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
