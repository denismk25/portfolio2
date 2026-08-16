// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Drives canonical URLs, sitemap.xml and Open Graph tags.
// Defaults to the free Vercel domain; set SITE_URL in Vercel's env vars when
// you move to a custom domain, and nothing else needs touching.
const site = process.env.SITE_URL ?? "https://deniskagotho.vercel.app";

export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
