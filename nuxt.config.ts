// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@pinia/nuxt", "@nuxt/content"],
  css: ["@/assets/css/reset.css", "@/assets/css/main.css"],
});
