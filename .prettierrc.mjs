import { fileURLToPath } from "url";

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | TailwindConfig } */
const config = {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  tailwindConfig: fileURLToPath(
    new URL("./tailwind.config.ts", import.meta.url),
  ),
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
