import type { MetadataRoute } from "next";
import { games } from "./lib/games";

const BASE_URL = "https://1pppgames.pk";

// Bump this when page content actually changes, rather than regenerating "now" on every crawl.
const lastModified = new Date("2026-08-26");

export default function sitemap(): MetadataRoute.Sitemap {

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/games`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/apk`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const gameRoutes: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${BASE_URL}/games/${game.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...gameRoutes];
}
