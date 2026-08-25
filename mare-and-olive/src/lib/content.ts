// Central restaurant content. All details are fictional.

export const brand = {
  name: 'MARE & OLIVE',
  tagline: 'A taste of the Mediterranean.',
  city: 'Hamburg',
  address: {
    line1: 'Am Kaiserkai 18',
    line2: '20457 Hamburg',
  },
  phone: '+49 40 7824 1930',
  phoneHref: '+494078241930',
  email: 'hello@mareandolive.de',
  instagram: '@mareandolive.hamburg',
  priceLevel: '€€€',
  cuisine: 'Modern Mediterranean cuisine',
}

export const hours: { day: string; time: string }[] = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday – Thursday', time: '17:30 – 23:00' },
  { day: 'Friday – Saturday', time: '17:30 – 00:00' },
  { day: 'Sunday', time: '17:00 – 22:00' },
]

export type NavLink = { label: string; to: string }

export const navLinks: NavLink[] = [
  { label: 'Menu', to: '/menu' },
  { label: 'Restaurant', to: '/restaurant' },
  { label: 'Our Story', to: '/story' },
  { label: 'Contact', to: '/contact' },
]

export type Dish = {
  name: string
  price: string
  description: string
  dietary?: string[]
}

export const signatureDishes: (Dish & { image: string })[] = [
  {
    name: 'Charred Octopus',
    price: '24',
    description: 'Smoked potato · lemon · parsley · olive oil',
    image: 'octopus',
  },
  {
    name: 'Spaghetti al Limone',
    price: '22',
    description: 'Amalfi lemon · parmesan · basil',
    image: 'pasta',
  },
  {
    name: 'Whole Sea Bass',
    price: '39',
    description: 'Grilled over charcoal · fennel · salsa verde',
    image: 'seabass',
  },
  {
    name: 'Burrata',
    price: '18',
    description: 'Heirloom tomatoes · basil oil · sea salt',
    image: 'burrata',
  },
]

export type MenuCategory = {
  id: string
  title: string
  subtitle?: string
  items: Dish[]
}

export const menu: MenuCategory[] = [
  {
    id: 'antipasti',
    title: 'Antipasti',
    subtitle: 'To begin',
    items: [
      {
        name: 'Burrata Pugliese',
        price: '18',
        description: 'Charred tomatoes · basil · olive oil',
        dietary: ['V'],
      },
      {
        name: 'Tartare di Tonno',
        price: '21',
        description: 'Yellowfin tuna · capers · lemon · chili',
      },
      {
        name: 'Charred Octopus',
        price: '24',
        description: 'Smoked potato · lemon · parsley · olive oil',
      },
      {
        name: 'Grilled Vegetables',
        price: '16',
        description: 'Seasonal vegetables · almond · sherry vinegar',
        dietary: ['V', 'GF'],
      },
      {
        name: 'Marinated Anchovies',
        price: '15',
        description: 'Preserved lemon · chili oil · sourdough',
      },
    ],
  },
  {
    id: 'pasta',
    title: 'Pasta',
    subtitle: 'Handmade, daily',
    items: [
      {
        name: 'Spaghetti al Limone',
        price: '22',
        description: 'Amalfi lemon · parmesan · basil',
        dietary: ['V'],
      },
      {
        name: 'Risotto al Limone',
        price: '24',
        description: 'Amalfi lemon · parmesan · herbs',
        dietary: ['V', 'GF'],
      },
      {
        name: 'Tagliatelle al Nero',
        price: '27',
        description: 'Squid ink · prawns · chili · garlic',
      },
      {
        name: 'Orecchiette',
        price: '23',
        description: 'Lamb ragù · pecorino · rosemary',
      },
    ],
  },
  {
    id: 'pesce',
    title: 'Pesce',
    subtitle: 'From the sea',
    items: [
      {
        name: 'Branzino alla Griglia',
        price: '39',
        description: 'Wild sea bass · fennel · salsa verde',
        dietary: ['GF'],
      },
      {
        name: 'Gamberi alla Brace',
        price: '32',
        description: 'Charcoal-grilled prawns · garlic · chili · lemon',
        dietary: ['GF'],
      },
      {
        name: 'Tonno Scottato',
        price: '34',
        description: 'Seared tuna · olive tapenade · rocket',
        dietary: ['GF'],
      },
    ],
  },
  {
    id: 'carne',
    title: 'Carne',
    subtitle: 'From the fire',
    items: [
      {
        name: 'Pollo al Limone',
        price: '29',
        description: 'Free-range chicken · preserved lemon · olives',
        dietary: ['GF'],
      },
      {
        name: 'Costata alla Griglia',
        price: '46',
        description: 'Grilled ribeye · rosemary · salsa verde',
        dietary: ['GF'],
      },
      {
        name: 'Agnello alla Brace',
        price: '36',
        description: 'Charcoal-grilled lamb · yogurt · mint',
        dietary: ['GF'],
      },
    ],
  },
  {
    id: 'verdure',
    title: 'Verdure',
    subtitle: 'From the garden',
    items: [
      {
        name: 'Melanzane alla Brace',
        price: '17',
        description: 'Grilled aubergine · tahini · pomegranate',
        dietary: ['V', 'GF'],
      },
      {
        name: 'Carciofi Fritti',
        price: '16',
        description: 'Crispy artichokes · lemon aioli',
        dietary: ['V'],
      },
      {
        name: 'Insalata Verde',
        price: '14',
        description: 'Seasonal leaves · herbs · olive oil',
        dietary: ['V', 'GF'],
      },
    ],
  },
  {
    id: 'dolci',
    title: 'Dolci',
    subtitle: 'To finish',
    items: [
      {
        name: 'Tiramisù',
        price: '12',
        description: 'Espresso · mascarpone · cocoa',
        dietary: ['V'],
      },
      {
        name: 'Panna Cotta',
        price: '11',
        description: 'Vanilla · citrus · olive oil',
        dietary: ['V', 'GF'],
      },
      {
        name: 'Affogato',
        price: '9',
        description: 'Vanilla gelato · espresso · amaretti',
        dietary: ['V'],
      },
    ],
  },
  {
    id: 'vini',
    title: 'Vini',
    subtitle: 'Natural & Mediterranean',
    items: [
      {
        name: 'Vermentino, Sardinia',
        price: '48',
        description: 'Bright, saline white — bottle',
      },
      {
        name: 'Assyrtiko, Santorini',
        price: '54',
        description: 'Mineral, citrus-driven white — bottle',
      },
      {
        name: 'Etna Rosso, Sicily',
        price: '58',
        description: 'Light, volcanic red — bottle',
      },
      {
        name: 'Rosé de Provence',
        price: '46',
        description: 'Dry, pale, herbal — bottle',
      },
    ],
  },
]

export const founders = {
  names: 'Luca Moretti & Sofia Conti',
  luca: {
    name: 'Luca Moretti',
    role: 'Chef & Co-Founder',
    origin: 'Naples',
  },
  sofia: {
    name: 'Sofia Conti',
    role: 'Host & Co-Founder',
    origin: 'the Adriatic coast, near Split',
  },
  metCity: 'Barcelona',
  year: 2018,
  story: `Luca grew up in Naples, in a kitchen that never really closed — his grandmother cooked for whoever walked through the door. Sofia was raised on the Adriatic coast near Split, in a family of fishermen and Sunday-lunch cooks. They met years later in Barcelona, working the same summer season two doors apart, and spent the following decade cooking across the Mediterranean before deciding to build something of their own.

In 2018, they opened MARE & OLIVE in a converted waterfront building in Hamburg's HafenCity — a city neither of them expected to love, but did, for its light, its water and its quiet appreciation of good things. The restaurant was built around one idea: that the Mediterranean is not a single cuisine, but a shared philosophy — of fire, of the sea, of unhurried tables.

Today, the kitchen still runs on the same principles. Ingredients are sourced by season, not by convenience. The grill is always lit. And the table, as it should be, is for sharing.`,
}

export const philosophy = {
  eyebrow: 'Our Philosophy',
  headline: 'Sun. Sea. Fire. Olive oil.',
  body: `At MARE & OLIVE, Mediterranean cooking is less about recipes and more about feeling. We cook with the seasons, follow the rhythm of the sea and let exceptional ingredients speak for themselves.`,
}

// The five recurring ideas the homepage journey is built around. Each
// pillar carries its own tone, motif and short line of copy — used by
// the Journey sections on the homepage, in that order.
export type Pillar = {
  key: string
  word: string
  eyebrow: string
  headline: string
  body: string
  tone: 'sea' | 'terracotta' | 'olive' | 'stone' | 'night'
  motif: 'wave' | 'flame' | 'olive-branch' | 'table' | 'candle'
}

export const pillars: Pillar[] = [
  {
    key: 'sea',
    word: 'Sea',
    eyebrow: 'From the coast',
    headline: 'From the coast to the city.',
    body: 'Every menu at MARE & OLIVE starts with what the water gives us that morning — not the other way around.',
    tone: 'sea',
    motif: 'wave',
  },
  {
    key: 'fire',
    word: 'Fire',
    eyebrow: 'Open flame',
    headline: 'Almost everything passes over fire.',
    body: 'A charcoal grill sits at the centre of the kitchen, tended through service by hand. Little is fried; nothing is rushed.',
    tone: 'terracotta',
    motif: 'flame',
  },
  {
    key: 'olive',
    word: 'Olive',
    eyebrow: 'The one ingredient',
    headline: 'Everything starts with good oil.',
    body: 'A single, cold-pressed oil from a small grove outside Split — the one ingredient that touches almost every plate we serve.',
    tone: 'olive',
    motif: 'olive-branch',
  },
  {
    key: 'table',
    word: 'Table',
    eyebrow: 'Made for sharing',
    headline: 'The best meals are never eaten alone.',
    body: 'Plates are built to be passed hand to hand. Nothing on the menu is meant to be eaten in silence, or alone.',
    tone: 'stone',
    motif: 'table',
  },
  {
    key: 'night',
    word: 'Night',
    eyebrow: 'After dark',
    headline: 'Stay for one more glass.',
    body: 'As the room dims, the candles start to matter more than the lighting design. This is the hour the restaurant was built for.',
    tone: 'night',
    motif: 'candle',
  },
]

export const opening = {
  coordinates: 'HAMBURG · 53°32\'N',
}
