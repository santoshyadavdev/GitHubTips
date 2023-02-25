import { defineConfig } from "astro/config";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import astroLayouts from "astro-layouts";
import codeTitle from "remark-code-title";

// https://astro.build/config
export default defineConfig({
  site: "https://nofuss.pages.dev",
  base: "/",
  markdown: {
    shikiConfig: {
      theme: "slack-dark",
    },
    remarkPlugins: [
      [
        astroLayouts,
        {
          default: "@layouts/Layout.astro",
          "pages/blog/**/*.mdx": "@layouts/BlogLayout.astro",
        },
      ],
      codeTitle,
    ],
  },
  integrations: [
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
      logger: 0,
    }),
    tailwind(),
    sitemap(),
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
