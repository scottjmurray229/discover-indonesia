// Shared destination coordinates — single source of truth
// Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  'bali': { lat: -8.3405, lng: 115.0920, label: 'Bali' },
  'jakarta': { lat: -6.2088, lng: 106.8456, label: 'Jakarta' },
  'yogyakarta': { lat: -7.7956, lng: 110.3695, label: 'Yogyakarta' },
  'ubud': { lat: -8.5069, lng: 115.2625, label: 'Ubud' },
  'lombok': { lat: -8.6500, lng: 116.3240, label: 'Lombok' },
  'komodo': { lat: -8.5500, lng: 119.4800, label: 'Komodo' },
  'raja-ampat': { lat: -0.2340, lng: 130.5260, label: 'Raja Ampat' },
  'bandung': { lat: -6.9175, lng: 107.6191, label: 'Bandung' },
  'surabaya': { lat: -7.2575, lng: 112.7521, label: 'Surabaya' },
  'malang': { lat: -7.9797, lng: 112.6304, label: 'Malang' },
  'flores': { lat: -8.6700, lng: 121.0800, label: 'Flores' },
  'gili-islands': { lat: -8.3500, lng: 116.0400, label: 'Gili Islands' },
  'nusa-penida': { lat: -8.7278, lng: 115.5444, label: 'Nusa Penida' },
  'lake-toba': { lat: 2.6845, lng: 98.8756, label: 'Lake Toba' },
  'medan': { lat: 3.5952, lng: 98.6722, label: 'Medan' },
};

// Map center for Indonesia
export const MAP_CENTER = { lat: -2.5, lng: 118.0 };
export const MAP_ZOOM = 5;
