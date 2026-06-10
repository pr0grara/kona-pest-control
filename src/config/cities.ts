/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'kailua-kona',
    name: 'Kailua-Kona',
    state: 'HI',
    intro:
      "Kailua-Kona is the heart of West Hawaii, and the pests here follow the town from the warm, dry coast up into the green hillside neighborhoods. Down along Alii Drive and the Kailua Bay waterfront, the warm nights bring out the big American cockroaches — the famous flying 'B-52s' — that breed in catchment tanks, drains, and the dense landscaping around condos and vacation rentals. Venomous Hawaiian centipedes turn up in garages, bathrooms, and rock walls, and little fire ants have been spreading through Kona yards and potted plants. Up toward Keauhou, Kahaluu, and the cooler slopes, things get lusher and the ant and coqui pressure climbs. We work these neighborhoods — from oceanfront rentals to kuleana lots mauka — and we treat the inside, the perimeter, and the yard so the bugs that own the night don't own your house.",
    neighborhoods: ['Downtown / Alii Drive', 'Keauhou', 'Kahaluu', 'Holualoa side (lower)', 'Old Kona Airport area'],
    landmarks: ['Alii Drive', 'Kailua Pier', 'Hulihee Palace', 'Kailua Bay', 'Kona Brewing Co.'],
    issues: [
      {
        title: 'Flying "B-52" cockroaches',
        body: 'Big American cockroaches breed in catchment tanks, drains, and landscaping along the warm coast and glide inside at night. We treat the outdoor sources and seal the entry points, not just the ones you see.',
      },
      {
        title: 'Venomous Hawaiian centipedes',
        body: "Kona's rock walls, garages, and damp bathrooms are prime centipede territory, and their sting is no joke. We treat harborage points and the perimeter to keep them out of living spaces.",
      },
      {
        title: 'Little fire ants spreading through yards',
        body: 'LFA has been turning up in Kona yards, potted plants, and trees, with stings that welt and threaten pets. It takes repeated baiting on the Hawaii protocol — we identify it and treat it right.',
      },
    ],
    nearby: ['holualoa', 'kealakekua', 'waikoloa'],
    faqs: [
      {
        q: 'Do you treat vacation rentals and condos in Kona?',
        a: 'Yes — we work with a lot of owners and managers along Alii Drive and around Keauhou. Recurring service keeps roaches and centipedes out between guests, and we can coordinate access for units you do not live in.',
      },
      {
        q: 'Why do I keep finding centipedes in my Kona house?',
        a: 'Centipedes love the cool, damp harborage in rock walls, garages, and bathrooms, and they hunt other bugs indoors. Reducing their prey, treating the perimeter and entry points, and cutting back damp outdoor harborage is how we keep them out.',
      },
      {
        q: 'How fast can you come out?',
        a: 'Kailua-Kona is our home base, so we can usually get to you quickly. Call and we will give you a real window — and if something gets through between recurring visits, the re-treat is free.',
      },
    ],
  },
  {
    slug: 'holualoa',
    name: 'Holualoa',
    state: 'HI',
    intro:
      "Holualoa sits in the green coffee belt on the slopes of Hualalai just above Kailua-Kona, and the cooler, wetter, more vegetated setting changes the pest picture. The dense coffee, fruit trees, and rock walls here are exactly what coqui frogs, little fire ants, and cane spiders love, and the leaf litter and damp ground cover give them everywhere to breed. Little fire ants are a real concern in this farm-and-garden country — they nest in trees and potted plants and can overrun a lot — and the upslope neighborhoods hear plenty of coqui at night. Centipedes work the rock walls and gardens, and the big roaches move up from town. We treat Holualoa homes and gardens with an island-wise approach: knock down the population, then reduce the dense, damp habitat that keeps feeding it.",
    neighborhoods: ['Holualoa Village', 'Upper Holualoa', 'Coffee belt lots', 'Hienaloli', 'Kona Heights side'],
    landmarks: ['Holualoa Village art galleries', 'Kona coffee farms', 'Hualalai slopes', 'Mamalahoa Highway'],
    issues: [
      {
        title: 'Coqui frogs in dense vegetation',
        body: "Holualoa's lush coffee and garden lots are ideal coqui habitat, and the nighttime chorus can be brutal. We treat infested vegetation with citric acid and help thin the damp habitat the frogs depend on.",
      },
      {
        title: 'Little fire ants in trees and plants',
        body: 'In this farm-and-garden country LFA nests in coffee, fruit trees, and potted plants. Control means repeated gel and granular baiting on the Hawaii protocol, not a one-time spray.',
      },
      {
        title: 'Centipedes and cane spiders in rock walls',
        body: 'The rock walls, leaf litter, and outbuildings around Holualoa lots harbor centipedes and big cane spiders. We treat the harborage and perimeter to keep them out of the house.',
      },
    ],
    nearby: ['kailua-kona', 'kealakekua', 'captain-cook'],
    faqs: [
      {
        q: 'Can you actually reduce the coqui frogs on my Holualoa property?',
        a: 'Yes — we can knock the population way down with repeated citric acid treatment of the vegetation plus habitat thinning, especially around bedrooms and the lanai. Total eradication on a lush lot is very hard, but most clients get their nights back.',
      },
      {
        q: 'I have a coffee farm — can you treat little fire ants without hurting the trees?',
        a: "Yes. We use targeted baits placed where the ants forage and nest, which the workers carry back to the colony. It's designed to control LFA over repeated treatments while being practical around productive trees.",
      },
      {
        q: 'Do you service the upper Holualoa and coffee-belt lots?',
        a: 'We do — we cover Holualoa Village and the upslope coffee-belt neighborhoods, and we know how the cooler, wetter conditions up there change which pests show up.',
      },
    ],
  },
  {
    slug: 'kealakekua',
    name: 'Kealakekua',
    state: 'HI',
    intro:
      "Kealakekua and the surrounding South Kona coffee belt are green, lush, and humid — beautiful country, and a paradise for pests. The coffee farms, fruit trees, and thick vegetation that make this area special also give coqui frogs, little fire ants, centipedes, and roaches endless habitat. Coqui have a strong foothold in the damp uplands here, little fire ants ride in on plants and nest in the trees, and the rock walls and green-waste piles common on these lots harbor centipedes and cane spiders. Homes near the working coffee farms can also see coffee-related pests. We treat Kealakekua properties with the repeated, thorough approach this environment demands — there's no one-spray fix in country this lush, and we'll tell you so honestly.",
    neighborhoods: ['Kealakekua town', 'Captain Cook side', 'Coffee belt lots', 'Napoopoo Road area', 'Mamalahoa corridor'],
    landmarks: ['Kealakekua Bay', 'Captain Cook Monument', 'Kona coffee farms', 'Mamalahoa Highway'],
    issues: [
      {
        title: 'Coqui frogs in the humid uplands',
        body: 'The damp South Kona vegetation is full of coqui. We treat infested foliage and ground cover with citric acid and reduce the habitat, focusing on the areas closest to where you sleep.',
      },
      {
        title: 'Little fire ants on garden and farm lots',
        body: 'LFA spreads easily through this plant-heavy area, nesting in trees and potted plants. We follow the proven Hawaii baiting protocol over repeated visits to bring it down.',
      },
      {
        title: 'Roaches and centipedes in lush yards',
        body: 'Thick vegetation, rock walls, and green-waste piles feed big roaches and centipedes that then move toward the house. We treat the outdoor harborage along with the interior and perimeter.',
      },
    ],
    nearby: ['captain-cook', 'holualoa', 'kailua-kona'],
    faqs: [
      {
        q: 'Is pest control even possible with this much vegetation?',
        a: "Yes, but it takes a realistic, repeated approach rather than a single visit. In lush South Kona we combine targeted treatment with habitat advice (thinning, clearing leaf litter and green waste) so the results actually hold.",
      },
      {
        q: 'Do you treat for coqui near Kealakekua Bay and Napoopoo?',
        a: 'We cover Kealakekua and the surrounding South Kona neighborhoods. Coqui treatment is citric acid applied thoroughly to the vegetation they hide in, repeated to drive the numbers down.',
      },
      {
        q: 'Can you help before I move into a lush lot here?',
        a: 'Definitely — a pre-move inspection and treatment is a smart move on a vegetated South Kona property. We can assess coqui, LFA, and termite risk and set up a plan before the bugs become your problem.',
      },
    ],
  },
  {
    slug: 'captain-cook',
    name: 'Captain Cook',
    state: 'HI',
    intro:
      "Captain Cook sits in the heart of the South Kona coffee belt, stretching from the highway down toward Honaunau and the coast. It's some of the lushest, most productive land on the island — and that means serious pest pressure. Coqui frogs are well established in the damp vegetation here, little fire ants spread through the coffee and gardens, and the warm, humid conditions keep centipedes, cane spiders, and roaches active year-round. Older homes and the wood-heavy construction common in the area also make termites a real concern, both drywood and the destructive Formosan subterranean kind. We've treated South Kona properties for years and know that out here it takes a persistent, honest approach — repeated treatment plus habitat work — to actually keep the upper hand.",
    neighborhoods: ['Captain Cook town', 'Honaunau', 'Kealakekua side', 'Coffee belt lots', 'Napoopoo / coast side'],
    landmarks: ['Puuhonua o Honaunau (City of Refuge)', 'Kona coffee farms', 'Manago area', 'Mamalahoa Highway'],
    issues: [
      {
        title: 'Established coqui frog populations',
        body: 'The damp, vegetated South Kona lots around Captain Cook and Honaunau hold strong coqui populations. We treat with citric acid and habitat reduction, repeated, to bring the nighttime noise down.',
      },
      {
        title: 'Termites in older and wood-heavy homes',
        body: 'Drywood and Formosan termites do real damage in this area. We inspect for pellets and mud tubes, identify which termite it is, and treat locally or coordinate tent fumigation as needed.',
      },
      {
        title: 'Little fire ants and centipedes',
        body: 'LFA rides in on plants and nests in trees, while centipedes work the rock walls and gardens. Both need targeted, repeated treatment rather than a one-time spray.',
      },
    ],
    nearby: ['kealakekua', 'holualoa', 'kailua-kona'],
    faqs: [
      {
        q: 'How do I know if my Captain Cook home has termites?',
        a: 'Look for small piles of six-sided pellets (drywood frass), mud tubes on the foundation (subterranean), discarded wings, or hollow-sounding wood. Finding any of these is worth an inspection — we identify the termite and recommend the least-invasive effective treatment.',
      },
      {
        q: 'Are the coqui frogs worse down toward Honaunau?',
        a: 'The damp, vegetated lower coffee belt and coast-side lots tend to hold heavy coqui. We treat throughout the Captain Cook and Honaunau area, concentrating on the vegetation closest to the house.',
      },
      {
        q: 'Do you offer recurring service this far down South Kona?',
        a: 'Yes — Captain Cook and Honaunau are within our regular West Hawaii route. Recurring service is usually the smart call out here given how fast the lush environment brings pests back.',
      },
    ],
  },
  {
    slug: 'waikoloa',
    name: 'Waikoloa',
    state: 'HI',
    intro:
      "Waikoloa is a different world from the green Kona coffee belt — dry, sunny South Kohala, with lava fields, kiawe, and resort landscaping instead of rainforest. That dry climate changes the pest lineup. Coqui are far less of an issue up here, but the irrigated resort and village landscaping creates lush oases that draw ants, centipedes, and big roaches, while the surrounding kiawe and lava harbor roof rats, mice, and mongoose. The dry leeward Kohala zone is also where you're most likely to run into scorpions on the island. Between Waikoloa Village and the resort corridor, we treat homes, condos, and vacation rentals for the pests that thrive in this hot, irrigated landscape — and we know the difference between a Waikoloa lot and a Kona one.",
    neighborhoods: ['Waikoloa Village', 'Resort corridor', 'Paniolo Greens side', 'Lava-field lots', 'Highway 19 corridor'],
    landmarks: ['Waikoloa Beach Resort', "Kings' & Queens' Shops", 'Anaehoomalu Bay (A-Bay)', 'Kiawe lava fields'],
    issues: [
      {
        title: 'Rodents and mongoose from the kiawe and lava',
        body: 'Roof rats, mice, and mongoose move from the surrounding kiawe and lava into homes and landscaping, especially where there is irrigation and food. We treat, exclude, and set control to keep them out.',
      },
      {
        title: 'Ants and roaches in irrigated landscaping',
        body: "Waikoloa's irrigated village and resort plantings are green islands in a dry zone, which concentrates ants, centipedes, and big roaches. We treat the landscaping and perimeter that feed the indoor problem.",
      },
      {
        title: 'Scorpions in the dry leeward zone',
        body: 'The hot, dry Kohala side is where scorpions are most likely on the island, turning up in garages, shoes, and rock walls. We treat harborage and entry points to reduce the risk.',
      },
    ],
    nearby: ['kamuela', 'kailua-kona', 'holualoa'],
    faqs: [
      {
        q: 'Is pest control different in dry Waikoloa than in Kona?',
        a: "Yes. Up here coqui and heavy vegetation pests matter less, while rodents, mongoose, scorpions, and the pests drawn to irrigated landscaping matter more. We tailor the treatment to the dry South Kohala environment rather than running a generic Kona plan.",
      },
      {
        q: 'Do you handle vacation rentals and condos in the resort area?',
        a: 'We do — we service homes, condos, and rentals from Waikoloa Village to the resort corridor, and can coordinate access and recurring service for units you do not occupy.',
      },
      {
        q: 'I found a scorpion in my garage — should I worry?',
        a: "The lesser brown scorpion found in the dry Kohala zone has a sting more like a bee than anything dangerous, but it's unsettling. We treat the garage, rock walls, and entry points where they harbor and get inside.",
      },
    ],
  },
  {
    slug: 'kamuela',
    name: 'Kamuela (Waimea)',
    state: 'HI',
    intro:
      "Kamuela — Waimea — sits upcountry in cool, green Kohala ranch country, and its higher elevation and cooler air shift the pest picture again. The big tropical roaches and coqui that dominate hot, lush Kona are less of a factor up here; instead Waimea homes deal with the pests of cooler ranch country: rodents moving in from pastures and barns, paper wasps and yellowjackets (which actually thrive in Hawaii's cooler uplands), ants, and termites in the area's older wood-frame and ranch homes. The wetter Kohala side keeps things damp enough for centipedes and the occasional ant invasion indoors when the weather turns. We treat Waimea homes, ranches, and upcountry properties with an approach built for this cooler, ranch-country environment — not a one-size Kona plan.",
    neighborhoods: ['Waimea town', 'Parker Ranch side', 'Kamuela Vista', 'Puu Opelu', 'Mana Road area'],
    landmarks: ['Parker Ranch', 'Waimea town center', 'Mauna Kea slopes', 'Kohala Mountain Road'],
    issues: [
      {
        title: 'Yellowjackets and paper wasps',
        body: "Hawaii's cooler uplands like Waimea are where Western yellowjackets and paper wasps really establish, building nests in eaves, walls, and the ground. We locate and treat nests safely so they do not threaten your family.",
      },
      {
        title: 'Rodents from pasture and ranch land',
        body: 'Roof rats and mice move from surrounding pastures, barns, and green waste into upcountry homes, especially as it cools. We treat, exclude, and set control around the structure.',
      },
      {
        title: 'Termites in older ranch-country homes',
        body: 'Waimea has plenty of older wood-frame and ranch homes where drywood and subterranean termites do quiet damage. We inspect for pellets and mud tubes and treat the right way for the termite found.',
      },
    ],
    nearby: ['waikoloa', 'kailua-kona', 'holualoa'],
    faqs: [
      {
        q: 'Why do I have wasps in Waimea but never did in Kona?',
        a: "Yellowjackets and paper wasps do best in Hawaii's cooler, higher-elevation areas like Waimea, so they are far more common upcountry than on the hot Kona coast. We find and treat the nests rather than just knocking down the wasps you see.",
      },
      {
        q: 'Do you treat ranches and barns, not just houses?',
        a: 'Yes — we handle upcountry homes, ranch buildings, and outbuildings around Waimea and the Parker Ranch area, where rodents and wasps are usually the main concern.',
      },
      {
        q: 'Is it true there are fewer pests up here?',
        a: 'The cool air does keep the big tropical roaches and coqui down compared to Kona, but Waimea trades them for rodents, wasps, and termites. The pests are different, not gone — so the treatment plan is different too.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
