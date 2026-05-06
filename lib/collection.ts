export type CarModel = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  role: string;
  image: string | null;
  accentColors: string[];
  description: string;
  intentionNéoplastique: string;
  précisionMécanique: string[];
  cible?: string;
};

export const collection: CarModel[] = [
  {
    id: "250sl",
    number: "01",
    name: "250 SL",
    subtitle: '"Tension Horizontale"',
    role: "L'Équilibre",
    image: "/images/Mercedes-benz250_sl.png",
    accentColors: ["#FFD100"],
    description:
      "Toit plat transformé en damier asymétrique, chromes vintage sublimés.",
    intentionNéoplastique:
      "L'artiste utilise la ligne de caisse très droite de la 250 SL comme axe horizontal principal. Le toit plat devient un damier asymétrique, construisant des blocs de couleurs qui subliment l'architecture naturelle du véhicule.",
    précisionMécanique: [
      "Architecture : Toit Pagode rigoureux",
      "Matériaux : Pare-chocs chromés vintage purs",
      "Encadrement : Pare-brise structuré noir",
    ],
  },
  {
    id: "r107",
    number: "02",
    name: "SL R107",
    subtitle: '"Rythme Primaire"',
    role: "La Vitalité",
    image: "/images/mercedes_benz_r107.png",
    accentColors: ["#E60000", "#003DA5", "#FFD100"],
    description:
      "Long capot plat utilisé comme surface d'expression maximale.",
    intentionNéoplastique:
      "Le long capot avant plat offre une surface d'expression absolue. L'artiste déconstruit la masse imposante de ce cabriolet en une multitude de petits plans rectangulaires, lui donnant un dynamisme pop-art inattendu.",
    précisionMécanique: [
      "Détail exclusif : Enjoliveurs intégrant l'étoile Mercedes au centre d'une roue chromatique",
      "Moteur : V8 Robuste des années 70-80",
    ],
  },
  {
    id: "280",
    number: "03",
    name: "280 CABRIOLET",
    subtitle: '"Volume Abstrait"',
    role: "Le Prestige",
    image: "/images/mercedes_benz_280.png",
    accentColors: ["#003DA5"],
    description:
      "Luxe à ciel ouvert. Calandre chromée agissant comme pilier central.",
    intentionNéoplastique:
      "Une sculpture à ciel ouvert. L'absence de toit invite le regard à plonger dans l'habitacle, contrastant avec l'imposante grille extérieure. L'artiste utilise la calandre comme point de rupture symétrique.",
    précisionMécanique: [
      "Calandre : Majestueuse verticale chromée",
      "Intérieur : Cuir luxueux avec coutures géométriques exclusives",
      "Style : Grand tourisme à ciel ouvert",
    ],
  },
  {
    id: "300",
    number: "04",
    name: "300",
    subtitle: '"Lignes de Fuite"',
    role: "La Cinétique",
    image: "/images/mercedes_benz_300.png",
    accentColors: ["#FFFFFF", "#003DA5"],
    description:
      "Bandes horizontales créant une illusion de vitesse immobile.",
    intentionNéoplastique:
      "Un détournement de la grille statique de Mondrian. En privilégiant l'étirement sur l'axe horizontal, l'artiste crée une puissante illusion d'optique de \"vitesse immobile\". La sculpture cinétique à son paroxysme.",
    précisionMécanique: [
      "Châssis : Allongé Grand Tourisme",
      "Aérodynamisme : Profil effilé",
      "Confort : Apogée de la croisière de luxe",
    ],
  },
  {
    id: "w110",
    number: "05",
    name: "W110",
    subtitle: '"Radicalité Organique"',
    role: "La Contradiction",
    image: "/images/mercedes_benz_w110.png",
    accentColors: ["#E60000", "#003DA5", "#FFD100"],
    description:
      "La grille stricte affronte les courbes organiques et phares ronds vintage.",
    intentionNéoplastique:
      "L'application la plus provocatrice de la collection. L'artiste force la rencontre paradoxale entre la courbe (interdite par le mouvement De Stijl) et l'angle droit mathématique, créant un choc visuel hypnotique.",
    précisionMécanique: [
      "Phares : Ronds organiques vintage",
      "Ailes : Galbées anachroniques",
      "Résilience : L'ingénierie historique face à l'art",
    ],
  },
];
