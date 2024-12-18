// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://felipe-buencamino.onrender.com",
  output: "static",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "load",
  },
  integrations: [react(), tailwind(), sitemap(), icon()],
});
