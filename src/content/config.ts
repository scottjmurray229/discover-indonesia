import { defineCollection, z } from 'astro:content';

// ============================================================
// DESTINATION COLLECTION
// ============================================================
const destinations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    heroVideo: z.string().default(''),
    heroImage: z.string().default(''),
    heroAlt: z.string().optional(),
    tagline: z.string().default(''),
    region: z.enum(['bali', 'java', 'sumatra', 'sulawesi', 'kalimantan', 'nusa-tenggara']),
    bestMonths: z.array(z.string()).default([]),
    budgetRange: z.string().default(''),
    bestTimeToVisit: z.string().default(''),
    lat: z.number().optional(),
    lng: z.number().optional(),
    budgetPerDay: z.object({
      backpacker: z.number().default(0),
      midRange: z.number().default(0),
      luxury: z.number().default(0),
    }).default({}),
    gettingThere: z.string().default(''),
    essentials: z.array(z.object({
      icon: z.string(),
      label: z.string(),
      value: z.string(),
    })).default([]),
    highlights: z.array(z.union([
      z.string(),
      z.object({
        title: z.string(),
        image: z.string().default(''),
        videoSrc: z.string().default(''),
        icon: z.string().default(''),
      }),
    ])).default([]),
    gradientColors: z.string().default('from-emerald-900 via-teal-800 to-cyan-900'),
    relatedDestinations: z.array(z.union([
      z.string(),
      z.object({
        slug: z.string(),
        videoSrc: z.string().default(''),
        hook: z.string().default(''),
      }),
    ])).default([]),
    faqItems: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    affiliatePicks: z.array(z.union([
      z.object({
        name: z.string().optional(),
        provider: z.string().optional(),
        label: z.string().optional(),
        url: z.string().optional(),
        type: z.enum(['hotel', 'restaurant', 'tour', 'activity', 'transport']).optional(),
        price: z.string().optional(),
        priceNote: z.string().optional(),
        personalNote: z.string().optional(),
        affiliateUrl: z.string().optional(),
        badge: z.string().optional(),
      }),
    ])).default([]),
    lastVerified: z.coerce.date().optional(),
    contentStatus: z.enum(['draft', 'review', 'published', 'needs-update']).default('draft'),
    draft: z.boolean().default(true),
    fmContentType: z.string().optional(),
    locale: z.string().default('en'),
    translation_status: z.enum(['ai_draft', 'in_review', 'human_reviewed', 'published']).optional(),
    source_file: z.string().optional(),
  }),
});

// ============================================================
// BLOG COLLECTION
// ============================================================
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    pubDate: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    heroImage: z.string().default(''),
    heroVideo: z.string().default(''),
    author: z.string().default('Scott'),
    tags: z.array(z.string()).default([]),
    category: z.enum(['destination', 'food', 'festival', 'practical', 'budget', 'culture']).optional(),
    relatedDestinations: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    draft: z.boolean().default(true),
    fmContentType: z.string().optional(),
    locale: z.string().default('en'),
    translation_status: z.enum(['ai_draft', 'in_review', 'human_reviewed', 'published']).optional(),
    source_file: z.string().optional(),
  }),
});

// ============================================================
// EXPORT ALL COLLECTIONS
// ============================================================
export const collections = {
  destinations,
  blog,
};
