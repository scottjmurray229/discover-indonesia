// packing-list.ts — Indonesia-specific packing config
// Merges with packing-base.ts universal items at runtime

import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

// ─────────────────────────────────────────────────────────────────────────────
// INDONESIA DESTINATION ESSENTIALS (unique to this country)
// ─────────────────────────────────────────────────────────────────────────────
export const INDONESIA_ESSENTIALS: PackingItem[] = [
  {
    id: 'id-sunscreen',
    name: 'Reef-Safe Mineral Sunscreen',
    category: 'destination',
    description: 'Komodo, Raja Ampat, and Nusa Penida marine parks require reef-safe sunscreen. Chemical sunscreen damages coral — zinc oxide only at dive sites.',
    essential: true,
    climate: ['tropical', 'coastal'],
    amazonSearchFallback: 'reef+safe+mineral+sunscreen+zinc+oxide',
    affiliatePrice: '$12–22',
    localAlternative: 'Available in Bali malls and dive shops but expensive — bring from home',
  },
  {
    id: 'id-drybag',
    name: 'Waterproof Dry Bag (20L)',
    category: 'destination',
    description: 'Island hopping in Komodo and Raja Ampat means open boat transfers. One rogue wave and your electronics are gone without this.',
    essential: true,
    climate: ['tropical', 'coastal'],
    amazonSearchFallback: 'dry+bag+20l+waterproof+island+hopping',
    affiliatePrice: '$18–35',
    localAlternative: 'Available at outdoor shops in Labuan Bajo and Lombok — quality varies',
  },
  {
    id: 'id-sarong',
    name: 'Sarong or Lightweight Scarf',
    category: 'destination',
    description: 'Required for Balinese Hindu temples (Besakih, Tirta Empul, Uluwatu). Provided at gates but having your own means you can enter spontaneously. Doubles as beach cover-up.',
    essential: true,
    climate: ['tropical'],
    amazonSearchFallback: 'sarong+lightweight+beach+cover',
    affiliatePrice: '$8–20',
    localAlternative: 'Buy one in Ubud market for Rp50,000–100,000 — much cheaper than home',
  },
  {
    id: 'id-repellent',
    name: 'DEET Insect Repellent',
    category: 'destination',
    description: 'Dengue is endemic in Indonesia, especially in urban and coastal areas. DEET 30% on exposed skin at dusk and dawn. The jungle areas (Kalimantan, Sumatra) require it 24/7.',
    essential: true,
    climate: ['tropical'],
    amazonSearchFallback: 'deet+30+percent+insect+repellent',
    affiliatePrice: '$8–12',
    localAlternative: 'Autan (DEET) widely available in Indonesia pharmacies (Apotek) — cheap',
  },
  {
    id: 'id-stomach',
    name: 'Oral Rehydration Salts + Imodium',
    category: 'destination',
    description: 'Street food is excellent and safe in Indonesia — but your gut may protest in the first 3–4 days. ORS to replace electrolytes, Imodium for when you have transport to catch.',
    essential: true,
    amazonSearchFallback: 'oral+rehydration+salts+travel',
    affiliatePrice: '$6–10',
    localAlternative: 'Oralit (ORS) and Imodium available at every Indonesian Apotek (pharmacy)',
  },
  {
    id: 'id-phrases',
    name: 'Bahasa Indonesia Phrase Card / App',
    category: 'destination',
    description: '"Terima kasih" (thank you), "Berapa harganya?" (how much?), "Tidak pedas" (not spicy) — basic Indonesian opens doors and unlocks smiles outside tourist areas.',
    essential: false,
    localAlternative: 'Google Translate works everywhere — download Indonesian offline pack',
  },
  {
    id: 'vpn-subscription',
    name: 'VPN Subscription',
    category: 'electronics',
    description: 'Secure your data on public WiFi — essential for hotel, airport, and cafe networks abroad.',
    essential: false,
    affiliateUrl: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=142311&url_id=902',
    affiliatePrice: '~$3/month',
    affiliatePartner: 'NordVPN',
  },
  {
    id: 'action-camera',
    name: 'Waterproof Action Camera',
    category: 'gear',
    description: 'Capture snorkeling, diving, and beach adventures hands-free.',
    essential: false,
    affiliateUrl: 'https://www.insta360.com/sal/go-ultra?utm_source=AffiliateCenter&utm_medium=copylink&utm_term=INRSG7H5RTR',
    affiliatePrice: '~$299',
    affiliatePartner: 'Insta360',
  },
  {
    id: 'phone-gimbal',
    name: 'Phone Gimbal for Travel Vlogging',
    category: 'electronics',
    description: 'Stabilized video from your phone — no editing needed.',
    essential: false,
    affiliateUrl: 'https://www.insta360.com/sal/flow-2-pro?utm_source=AffiliateCenter&utm_medium=copylink&utm_term=INRSG7H5RTR',
    affiliatePrice: '~$149',
    affiliatePartner: 'Insta360',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GEAR WE RECOMMEND — Indonesia (4-6 curated items for GearRecommendations component)
// ─────────────────────────────────────────────────────────────────────────────
export const INDONESIA_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  {
    id: 'gr-id-sunscreen',
    name: 'Reef-Safe Mineral Sunscreen',
    reason: 'Raja Ampat and Komodo marine parks strictly enforce reef-safe sunscreen. Zinc oxide protects the coral that makes these places extraordinary.',
    amazonSearchFallback: 'reef+safe+mineral+sunscreen',
    affiliatePrice: '~$14',
  },
  {
    id: 'gr-id-drybag',
    name: 'Dry Bag (20L)',
    reason: 'Island hopping in Komodo means open boat transfers. One wave and your camera is gone. This is the single most important gear item for Indonesia.',
    amazonSearchFallback: 'dry+bag+20l+waterproof',
    affiliatePrice: '~$22',
  },
  {
    id: 'gr-id-towel',
    name: 'Quick-Dry Travel Towel',
    reason: 'Bali villas and beach resorts provide towels. Gili Islands guesthouses, temple visits, and Komodo boat tours often don\'t. Dries in 20 minutes in the tropical sun.',
    amazonSearchFallback: 'quick+dry+microfiber+travel+towel',
    affiliatePrice: '~$18',
  },
  {
    id: 'gr-id-phoneholder',
    name: 'Waterproof Phone Pouch',
    reason: 'Nusa Penida snorkeling, Bali rice paddy walks in the rain, Komodo boat spray. Your phone sees water daily in Indonesia.',
    amazonSearchFallback: 'waterproof+phone+pouch+lanyard',
    affiliatePrice: '~$12',
  },
  {
    id: 'gr-id-adapter',
    name: 'Universal Travel Adapter',
    reason: 'Indonesia uses Type C and F plugs (European round 2-pin). US/UK/Australian plugs don\'t fit without an adapter. Get a universal with USB-A and USB-C ports.',
    amazonSearchFallback: 'universal+travel+adapter+type+c+f',
    affiliatePrice: '~$25',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// INDONESIA SITE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export const INDONESIA_CONFIG: PackingConfig = {
  sitePrefix: 'did',
  destination: 'Indonesia',
  climate: ['tropical', 'coastal'],
  currency: 'IDR',
  plugType: 'Type C/F',
  plugVoltage: '230V',
  affiliateTag: 'discoverphili-20',
  seasons: [
    { value: 'dry', label: 'Dry Season' },
    { value: 'rainy', label: 'Wet / Rainy Season' },
    { value: 'shoulder', label: 'Shoulder Season' },
  ],
  activities: [
    { value: 'snorkeling', label: 'Snorkeling', icon: '🤿' },
    { value: 'diving', label: 'Diving', icon: '🐟' },
    { value: 'hiking', label: 'Hiking', icon: '🥾' },
    { value: 'surfing', label: 'Surfing', icon: '🏄' },
    { value: 'temples', label: 'Temples', icon: '🛕' },
    { value: 'photography', label: 'Photography', icon: '📸' },
    { value: 'nightlife', label: 'Nightlife', icon: '🍹' },
  ],
  destinationEssentials: INDONESIA_ESSENTIALS,
  gearRecommendations: INDONESIA_GEAR_RECOMMENDATIONS,
};

// ─────────────────────────────────────────────────────────────────────────────
// FAQ ITEMS for packing-list.astro
// ─────────────────────────────────────────────────────────────────────────────
// Universal alias — copied to all sites, import SITE_CONFIG in PackingList.astro
export const SITE_CONFIG = INDONESIA_CONFIG;

export const INDONESIA_PACKING_FAQS = [
  {
    question: 'What should I pack for Indonesia?',
    answer: 'The essentials are reef-safe sunscreen (required at Komodo and Raja Ampat marine parks), a sarong for temple visits, insect repellent (DEET for dengue protection), a waterproof dry bag for island hopping, and stomach medication for the first adjustment days. Our interactive checklist covers 60+ items across 7 categories, customized for Indonesia\'s tropical climate.',
  },
  {
    question: 'Do I need bug spray in Indonesia?',
    answer: 'Yes — DEET-based insect repellent is essential. Dengue fever is endemic in Indonesia, with peaks in urban and coastal areas during the wet season (November–March). Use at least 20–30% DEET on exposed skin, especially at dusk and dawn. Autan (DEET) is available at every Indonesian pharmacy (Apotek) for a fraction of home prices.',
  },
  {
    question: 'What power adapter do I need for Indonesia?',
    answer: 'Indonesia uses Type C and Type F plugs (European round 2-pin) at 230V/50Hz. US travelers need an adapter — US flat-pin plugs don\'t fit Indonesian sockets. Most modern phones, laptops, and cameras handle 110–240V automatically (check the label). Older single-voltage devices need a voltage converter.',
  },
  {
    question: 'Do I need a sarong in Indonesia?',
    answer: 'Yes, for Bali. Sarongs are required at all Balinese Hindu temples — including Tanah Lot, Uluwatu, Tirta Empul, and Besakih. They\'re provided at most temple gates, but having your own means you can enter spontaneously. Buy one in Ubud market for Rp50,000–100,000 ($3–6) — it doubles as a beach wrap.',
  },
  {
    question: 'Can I buy toiletries in Indonesia?',
    answer: 'Yes — Bali has everything. Kuta, Seminyak, and Ubud have pharmacies, convenience stores, and supermarkets. Bring your own reef-safe sunscreen (expensive in Bali), DEET insect repellent, and prescription medications. Everything else — shampoo, toothpaste, deodorant, flip-flops — buy locally at a fraction of home prices.',
  },
  {
    question: 'What should I NOT bring to Indonesia?',
    answer: 'Skip heavy cotton clothing (stays wet for hours in humidity), valuable jewelry (theft risk in crowds), and large amounts of cash in one place (use ATMs and split your cash). Also leave the full-size hair dryer — every hotel and guesthouse has one. And don\'t pack too many formal clothes — Indonesia is casual except for temple visits.',
  },
];
