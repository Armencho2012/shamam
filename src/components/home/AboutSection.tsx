import cafeInterior from "@/assets/baklava.jpg";

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
                alt="Շամամի Հրուշակարան - մեր բակլավան"
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
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-display text-2xl text-primary">S</span>
              </div>
              <div>
                <p className="font-display text-xl text-foreground">Շամամների ընտանիքը</p>
                <p className="font-body text-sm text-muted-foreground">Հիմնադիրներ և գլխավոր հրուլակներ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
