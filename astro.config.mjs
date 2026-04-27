// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.felipebuencamino.com",
  output: "static",

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "load",
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Fira Code",
      cssVariable: "--font-fira-code",
      weights: [400, 500, 600, 700],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Sen",
      cssVariable: "--font-sen",
    },
  ],

  integrations: [react(), sitemap(), icon(), partytown()],

  server: {
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; block-all-mixed-content; upgrade-insecure-requests;",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
