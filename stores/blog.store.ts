import { defineStore } from "pinia";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    blogPosts: [
      {
        id: 1,
        title: "Blog Post 1",
        excerpt:
          "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.",
        image: "/_nuxt/assets/images/blog-post-1.jpg",
        slug: "blog-post-1",
        topics: ["Nuxt", "TS"],
        date: "2025-01-01",
      },
      {
        id: 2,
        title: "Blog Post 2",
        excerpt:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right",
        image: "/_nuxt/assets/images/blog-post-1.jpg",
        slug: "blog-post-2",
        topics: ["Vue", "React"],
        date: "2025-01-01",
      },
      {
        id: 3,
        title: "Sample Blog Post 3",
        excerpt:
          "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am",
        image: "/_nuxt/assets/images/blog-post-1.jpg",
        slug: "blog-post-3",
        topics: ["JavaScript", "Node.js"],
        date: "22/10/2024",
      },
      {
        id: 3,
        title: "Sample Blog Post 4",
        excerpt:
          "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am",
        image: "/_nuxt/assets/images/blog-post-1.jpg",
        slug: "blog-post-4",
        topics: ["topic5", "topic6"],
        date: "22/10/2024",
      },
      {
        id: 4,
        title: "Sample Blog Post 5",
        excerpt:
          "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am",
        image: "/_nuxt/assets/images/blog-post-1.jpg",
        slug: "blog-post-5",
        topics: ["topic5", "topic6"],
        date: "22/10/2024",
      },
    ],
  }),
  getters: {
    getBlogPosts: (state) => state.blogPosts, // Getter to retrieve all blog posts
    getBlogPostById: (state) => (id: number) => {
      return state.blogPosts.find((post) => post.id === id);
    },
  },
});
