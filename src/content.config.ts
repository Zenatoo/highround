import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES, LOCALES } from './i18n/config';

const status = z.enum(['complete', 'in-progress', 'soon']);
const color = z.enum(['amber', 'violet', 'teal', 'red', 'blue', 'green', 'pink']);

const games = defineCollection({
  loader: file('content/games.yaml'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      short: z.string().max(4),
      year: z.number().int(),
      status,
      color,
      // Portrait box art (2:3). Credited like banners.
      cover: z
        .object({ image: image(), credit: z.string().min(1), source: z.url() })
        .optional(),
    }),
});

const maps = defineCollection({
  loader: file('content/maps.yaml'),
  schema: ({ image }) =>
    z.object({
      game: z.string(),
      name: z.string(),
      order: z.number().int(),
      status,
      color,
      // Same rule as screenshots: a banner always shows its source.
      banner: z
        .object({ image: image(), credit: z.string().min(1), source: z.url() })
        .optional(),
    }),
});

// Guide ids mirror their path: "<lang>/<game>/<map>/<slug>" (see src/lib/content.ts).
const guides = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './content/guides' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(CATEGORIES),
      order: z.number().int().default(0),
      draft: z.boolean().default(false),
      verified: z
        .object({
          date: z.coerce.date(),
          gameVersion: z.string(),
        })
        .optional(),
      difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
      players: z.enum(['solo', 'coop', 'both']).optional(),
      videos: z
        .array(
          z.object({
            url: z.url(),
            title: z.string(),
            creator: z.string(),
            lang: z.enum(LOCALES),
            // Downloaded at build time and served by HighRound: the page never contacts YouTube.
            thumbnail: image().optional(),
          }),
        )
        .default([]),
    }),
});

export const collections = { games, maps, guides };
