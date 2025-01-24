import { defineStore } from "pinia";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    blogPosts: [] as any[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchBlogPosts() {
      this.loading = true;
      this.error = null;
      try {
        // Use Nuxt Content's $content client directly
        // const { $content } = useNuxtApp();
        this.blogPosts = await queryCollection("blog").all();

        // console.log("Fetched posts:", this.blogPosts);
      } catch (err) {
        this.error =
          err instanceof Error ? err.message : "Content fetch failed";
        console.error("Content error:", err);
      } finally {
        this.loading = false;
      }
    },
  },
});
