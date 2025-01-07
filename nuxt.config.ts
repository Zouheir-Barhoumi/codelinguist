// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "true",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap",
        },
      ],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@pinia/nuxt"],
  css: ["@/assets/css/reset.css", "@/assets/css/main.css"],
});
