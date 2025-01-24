import { defineStore } from "pinia";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    blogPosts: [] as any[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    /**
     * Fetches all blog posts from the API.
     *
     * @throws {Error} if the API request fails
     */
    async fetchBlogPosts() {
      this.loading = true;
      this.error = null;
      try {
        const { data } = await useAsyncData("blogPosts-" + "/blog", () => {
          return queryCollection("blog").all();
        });
        this.blogPosts = data.value || [];
        console.log("data: ", data);
      } catch (err) {
        if (err instanceof Error) {
          this.error = err.message;
        } else {
          this.error = String(err);
        }
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    getBlogPosts: (state) => state.blogPosts,
    getBlogPostById: (state) => (id: number) => {
      return state.blogPosts.find((post) => post.id === id);
    },
  },
});
