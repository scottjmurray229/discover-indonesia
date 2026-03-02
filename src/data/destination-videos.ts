/**
 * Shared video map for destination cards.
 * Maps destination slugs to video file paths (preview preferred, hero as fallback).
 * Used by: src/pages/index.astro, src/pages/destinations/index.astro
 */
export const destinationVideoMap: Record<string, string> = {
  // Videos added via pipeline after recording trips
  bali: '',
  jakarta: '',
  yogyakarta: '',
  ubud: '',
  lombok: '',
  komodo: '',
  'raja-ampat': '',
  bandung: '',
  surabaya: '',
  malang: '',
  flores: '',
  'gili-islands': '',
  'nusa-penida': '',
  'lake-toba': '',
  medan: '',
};
