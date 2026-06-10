/**
 * services.ts — what the business does.
 *
 * EDIT HERE. Keep ~1 broad catch-all marked `hubOnly: true` (no per-city combo pages).
 * Flag urgent services `emergency: true`. Slugs are kebab-case join keys — keep them stable.
 */
import type { ImageMetadata } from 'astro';

import pestControlImg from '../assets/services/pest-control.jpg';
import antControlImg from '../assets/services/ant-control.jpg';
import cockroachControlImg from '../assets/services/cockroach-control.jpg';
import coquiFrogImg from '../assets/services/coqui-frog-control.jpg';
import termiteImg from '../assets/services/termite-treatment.jpg';

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceSection {
  h: string;
  body: string;
}

export interface Service {
  slug: string;
  name: string; // Full service name, e.g. "Coqui Frog Control"
  short: string; // Short label for nav, cards, breadcrumbs
  blurb: string; // One-line summary
  description: string; // Intro paragraph (hub + city combo pages)
  sections: ServiceSection[]; // Deeper authority sections, rendered on the hub page
  points: string[]; // What's included / bullet points
  faqs: Faq[]; // Service-level FAQs (rendered + FAQ schema on the hub)
  image: ImageMetadata;
  imageAlt: string;
  hubOnly?: boolean; // do not generate per-city combo pages
  emergency?: boolean; // flagged as emergency/urgent (affects copy)
}

export const SERVICES: Service[] = [
  {
    slug: 'pest-control',
    name: 'Pest Control',
    short: 'Pest Control',
    blurb: 'Recurring and one-time pest control for Big Island homes and businesses.',
    description:
      "From centipedes and cane spiders to ants, roaches, and rodents, the Big Island throws more pests at a home than just about anywhere in the country. Our warm, wet, year-round climate means bugs never get a winter break — and lava-rock lots, catchment tanks, and dense vegetation give them everywhere to hide. Kona Pest Pros protects West Hawaii homes with recurring and one-time treatments tuned to our island. We treat the inside, the perimeter, and the yard, and we come back if the bugs do.",
    sections: [
      {
        h: 'Built for Big Island pests',
        body: 'Mainland pest plans do not account for what we deal with here: venomous Hawaiian centipedes, fast-moving cane spiders, B-52 cockroaches that fly, little fire ants that sting, coqui frogs that scream all night, and roof rats that move in from the cane and kiawe. We know where each one nests on a Kona lot and treat accordingly — baseboards and entry points inside, the foundation and eaves outside, and the yard, rock walls, and green waste where they breed.',
      },
      {
        h: 'Recurring protection that actually keeps up',
        body: "Because our pests never quit, one-and-done rarely holds. Our recurring plans (quarterly or bi-monthly) keep a treated barrier around your home year-round, which is what it takes in this climate. Between visits, if something gets through, we re-treat at no extra charge — that's the deal.",
      },
      {
        h: 'Licensed, insured, and local',
        body: 'We are a licensed and insured Hawaii pest control company staffed by people who live here and know the Kona side inside out. We use the least-aggressive effective treatment, explain what we are applying, and respect catchment systems, keiki, and pets.',
      },
    ],
    points: [
      'Interior, perimeter, and yard treatment',
      'Recurring (quarterly / bi-monthly) or one-time service',
      'Free re-treatment between scheduled visits',
      'Centipede, spider, ant, roach, and rodent control',
      'Catchment-, keiki-, and pet-conscious applications',
      'Licensed & insured — proudly serving West Hawaii',
    ],
    faqs: [
      {
        q: 'How often should I get pest control on the Big Island?',
        a: 'Because our climate is warm and wet all year, most homes do best on a quarterly or bi-monthly recurring plan. One-time treatments knock down an active problem, but a maintained barrier is what keeps centipedes, ants, and roaches from coming back.',
      },
      {
        q: 'Is your treatment safe around catchment water, kids, and pets?',
        a: "Yes. We use products labeled for residential use and apply them carefully around catchment systems, gardens, keiki, and pets. We'll tell you exactly what we're using and any short re-entry time before we start.",
      },
      {
        q: 'Do you treat the yard or just inside the house?',
        a: 'Both. On a Big Island lot, the yard, rock walls, and green-waste piles are where a lot of pests breed, so we treat the perimeter and key outdoor harborage along with the interior.',
      },
    ],
    image: pestControlImg,
    imageAlt: 'Kona Pest Pros technician treating a Big Island home',
    hubOnly: true,
  },
  {
    slug: 'ant-control',
    name: 'Ant & Little Fire Ant Control',
    short: 'Ant Control',
    blurb: 'Stop trailing ants — and stinging little fire ants — before they take over.',
    description:
      "Ants are the #1 call we get on the Kona side, and not all ants are equal. Common household ants trail across counters and into pet food, but the one that really matters here is the little fire ant (LFA) — a tiny, slow-moving, pale-orange invader whose sting leaves painful welts and that can blind pets and overrun a yard. LFA has spread across the Big Island and needs a specific, persistent baiting approach, not a quick spray. We identify which ant you have and treat it the right way.",
    sections: [
      {
        h: 'Little fire ants need the right approach',
        body: "Little fire ants nest in trees, leaf litter, potted plants, and the ground, so a single spray never reaches the whole colony — and the wrong product just splits it. Control takes targeted gel and granular baits applied on a schedule the ants will carry back to the queens, repeated over several treatments. We follow the proven Hawaii baiting protocols and tell you honestly that LFA is a marathon, not one visit.",
      },
      {
        h: 'Household and tropical ants',
        body: 'For the trailing ants most homes fight — including tiny sugar ants and the bigger tropical species — we find the trails and entry points, treat with non-repellent products the workers share colony-wide, and seal up the obvious highways. We also knock down the outdoor nests feeding the indoor problem.',
      },
    ],
    points: [
      'Free identification — little fire ant vs. household ant',
      'Hawaii-protocol LFA baiting (gel + granular, repeated)',
      'Non-repellent treatments that reach the whole colony',
      'Trail and entry-point treatment and exclusion tips',
      'Yard, potted-plant, and tree-nest treatment',
    ],
    faqs: [
      {
        q: 'How do I know if I have little fire ants?',
        a: "Little fire ants are tiny (about as long as a sesame seed), pale orange, and move slowly. A classic test: smear a little peanut butter on a chopstick, leave it near a plant for an hour, and see if slow orange ants climb on. If you get stung with a welt that itches for days, that's another sign. We'll confirm the ID for you.",
      },
      {
        q: 'Can you get rid of little fire ants in one visit?',
        a: 'No honest company can. LFA nests in trees and the ground across a property, so control requires repeated baiting over weeks to months. We set realistic expectations and stick with it — beware anyone promising a one-spray cure.',
      },
      {
        q: 'Are little fire ants dangerous to my pets?',
        a: 'They can be. Repeated stings around the eyes are a known cause of cloudy corneas and blindness in dogs, cats, and other pets on the Big Island. Getting an LFA infestation under control protects your animals as much as your family.',
      },
    ],
    image: antControlImg,
    imageAlt: 'Little fire ants on a leaf being baited in a Kona yard',
  },
  {
    slug: 'cockroach-control',
    name: 'Cockroach Control',
    short: 'Roach Control',
    blurb: 'From flying B-52 roaches to German roaches in the kitchen — we clear them out.',
    description:
      "Hawaii has roaches the rest of the country only has nightmares about. The big American cockroaches — the 'B-52s' that fly toward you on the lanai at night — breed in catchment tanks, drains, green waste, and rock walls, while German cockroaches infest kitchens and multiply fast. We treat the source, not just the ones you see, with targeted baits, crack-and-crevice treatment, and advice on the moisture and harborage that draw them in.",
    sections: [
      {
        h: 'Big roaches vs. little roaches',
        body: 'The giant American/Australian cockroaches mostly live and breed outdoors — in catchment tanks, drains, sewer lines, mulch, and rock walls — and wander inside. We treat those outdoor harborage points and seal entries. German cockroaches are a different fight: they live indoors, hide in kitchen and bathroom voids, and explode in number, so they need precise gel baiting and sanitation, never a heavy spray that scatters them.',
      },
      {
        h: 'Treat the source and keep it out',
        body: 'We bait and treat where roaches actually nest and travel, then help you cut off what attracts them — fixing drain screens, reducing moisture, sealing gaps around pipes and vents, and managing green waste. In our climate, ongoing perimeter service is usually what keeps the big ones from strolling back in.',
      },
    ],
    points: [
      'American ("B-52") and German cockroach control',
      'Targeted gel baiting and crack-and-crevice treatment',
      'Catchment tank, drain, and outdoor harborage treatment',
      'Entry sealing and moisture/sanitation guidance',
      'Recurring perimeter service to keep them out',
    ],
    faqs: [
      {
        q: 'Why are the cockroaches here so big and why do they fly?',
        a: "Those are American and Australian cockroaches, which thrive in Hawaii's warm, humid climate and breed outdoors in catchment tanks, drains, and vegetation. They glide rather than truly fly, usually toward light. They're mostly an outdoor pest that wanders in, so we focus treatment on the outdoor sources and entry points.",
      },
      {
        q: 'I see roaches in my kitchen at night — German roaches?',
        a: 'Small light-brown roaches that stay indoors and cluster in the kitchen or bathroom are likely German cockroaches, which multiply quickly. They need gel baiting and sanitation, not a broad spray (which scatters them and makes it worse). Call us early — they are much easier to control before the population booms.',
      },
      {
        q: 'Will treating my catchment tank area help?',
        a: 'Often, yes. Catchment tanks and their overflow are prime breeding sites for the big roaches. We treat around them appropriately and recommend screening and maintenance so they stop producing roaches.',
      },
    ],
    image: cockroachControlImg,
    imageAlt: 'Cockroach control treatment around a Big Island home and catchment area',
  },
  {
    slug: 'coqui-frog-control',
    name: 'Coqui Frog Control',
    short: 'Coqui Frogs',
    blurb: "Reclaim your nights from the coqui's 90-decibel scream.",
    description:
      "If you've lain awake to a piercing CO-KEE, CO-KEE all night, you've met the coqui frog — a tiny invasive tree frog with a call as loud as a lawnmower. Coqui have spread across the Big Island and tank both your sleep and your property value. There's no overnight fix, but there is a proven approach: habitat reduction plus citric acid treatment of the vegetation where they hide and breed. We knock the population down and help you keep it down.",
    sections: [
      {
        h: 'Why coqui are so hard — and what works',
        body: "Coqui frogs have no native predators here, lay eggs without a tadpole stage (so they breed in damp leaf litter, not ponds), and hide high in dense vegetation by day. That's why they explode in number and why a quick spray does nothing. The accepted control is citric acid solution applied thoroughly to infested vegetation, ground cover, and green waste, combined with cutting back the dense, damp habitat they love. It takes repeated, thorough treatment.",
      },
      {
        h: 'Habitat reduction is half the battle',
        body: "We treat the frogs and coach you on the habitat side: thinning dense plantings, clearing leaf litter and green-waste piles, and managing the damp, shady spots near the house where coqui concentrate. New frogs also hitchhike in on plants and mulch, so we'll show you what to check so you don't re-import them.",
      },
    ],
    points: [
      'Citric acid treatment of infested vegetation and ground cover',
      'Habitat reduction plan (thinning, leaf-litter and green-waste cleanup)',
      'Repeated treatments to drive the population down',
      'Guidance to avoid re-introducing frogs on plants/mulch',
      'Focused treatment around bedrooms and lanai for sleep relief',
    ],
    faqs: [
      {
        q: 'Can you get rid of coqui frogs completely?',
        a: "Total eradication on a vegetated lot is very hard, but we can dramatically reduce the population and give you your nights back. It takes repeated citric acid treatment plus habitat work, and staying on top of new frogs that move in from neighboring property.",
      },
      {
        q: 'Is citric acid safe for my plants and pets?',
        a: 'Citric acid is the standard, accepted treatment for coqui in Hawaii. At the proper concentration it may lightly burn some tender foliage, but it breaks down quickly and is far gentler than the alternatives. We apply it carefully around pets, gardens, and catchment.',
      },
      {
        q: 'My neighbor has coqui — will treating my yard even help?',
        a: "Yes, though frogs can re-invade from next door. We focus on knocking down the population on your property — especially near bedrooms and the lanai — and reducing the habitat that lets them thrive. Best results come when neighbors treat together, and we're happy to talk to them.",
      },
    ],
    image: coquiFrogImg,
    imageAlt: 'Coqui frog on a leaf in dense Big Island vegetation at night',
  },
  {
    slug: 'termite-treatment',
    name: 'Termite Treatment',
    short: 'Termites',
    blurb: 'Drywood and Formosan termites do real damage here — we find them and treat them.',
    description:
      "Termites are one of the most destructive — and expensive — pests in Hawaii. The Big Island deals with both drywood termites, which live inside the wood of your home and announce themselves with little piles of pellets, and the aggressive Formosan subterranean termite, which builds mud tubes from the soil and can chew through structural timber fast. We inspect, identify which termite you have, and treat it the right way: localized treatment or tent fumigation for drywood, and soil/baiting systems for subterranean.",
    sections: [
      {
        h: 'Drywood vs. Formosan — different termites, different fixes',
        body: 'Drywood termites live entirely inside dry wood (framing, trim, furniture) and leave behind tiny six-sided fecal pellets that look like sand or sawdust. Depending on how widespread they are, we treat locally (drill-and-inject) or recommend tent fumigation for a whole-structure clear-out. Formosan subterranean termites nest in the soil and reach the house through mud tubes; they are fast and destructive and call for soil treatment and/or in-ground baiting systems.',
      },
      {
        h: 'Inspection first, then the right treatment',
        body: 'We start with a real inspection — looking for pellets, mud tubes, hollow-sounding wood, discarded wings, and active galleries — so the treatment matches the actual termite and the extent of the damage. We explain your options and what each involves, including coordinating tent fumigation when that is the right call.',
      },
    ],
    points: [
      'Inspection and identification (drywood vs. Formosan subterranean)',
      'Localized drill-and-inject treatment for spot drywood activity',
      'Whole-structure tent fumigation coordination when needed',
      'Soil treatment and in-ground baiting for subterranean termites',
      'Honest assessment of damage and treatment options',
    ],
    faqs: [
      {
        q: 'I found little piles of "sawdust" pellets — is that termites?',
        a: 'Most likely drywood termites. Those tiny six-sided pellets (frass) are what drywood termites push out of their galleries, and finding them usually means an active infestation in the wood above. Save a sample and call us for an inspection.',
      },
      {
        q: 'Do I really need to tent my whole house?',
        a: 'Not always. Tent fumigation is the answer when drywood termites are widespread through a structure, but isolated activity can often be handled with localized treatment. We inspect first and recommend the least-invasive option that will actually solve the problem.',
      },
      {
        q: 'What is the difference between drywood and Formosan termites?',
        a: 'Drywood termites live inside the wood itself and need no soil contact, leaving pellets behind. Formosan subterranean termites nest in the soil and travel up through mud tubes; they form huge colonies and cause damage faster, so they are treated through the soil and with baiting systems rather than fumigation.',
      },
    ],
    image: termiteImg,
    imageAlt: 'Termite inspection of wood framing on a Big Island home',
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const MATRIX_SERVICES: Service[] = SERVICES.filter((s) => !s.hubOnly);
