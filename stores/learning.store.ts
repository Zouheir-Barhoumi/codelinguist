import { defineStore } from "pinia";

export const useLearningStore = defineStore("learning", {
  state: () => ({
    resources: [
      {
        id: 1,
        title: "TypeScript Basics",
        description: "This is a description of the TypeScript Basics.",
        details: "This is the details of the TypeScript Basics.",
        image: "/_nuxt/assets/images/default-learning.jpg",
        slug: "ts-basics",
        topics: ["Nuxt", "TS"],
        tags: ["Quizzes", "Interactive"],
        date: "2025-01-01",
      },
      {
        id: 2,
        title: "React Basics",
        description: "This is a description of the React Basics.",
        details: "This is the details of the React Basics.",
        image: "/_nuxt/assets/images/default-learning.jpg",
        slug: "react-basics",
        topics: ["Vue", "React"],
        tags: ["Lessons"],
        date: "2025-01-01",
      },
      {
        id: 3,
        title: "Nuxt Basics",
        description: "This is a description of the Nuxt Basics.",
        details: "This is the details of the Nuxt Basics.",
        image: "/_nuxt/assets/images/default-learning.jpg",
        slug: "nuxt-basics",
        topics: ["Nuxt", "TS"],
        tags: ["Quizzes", "Interactive"],
        date: "2025-01-01",
      },
      {
        id: 4,
        title: "Vue Basics",
        description: "This is a description of the Vue Basics.",
        details: "This is the details of the Vue Basics.",
        image: "/_nuxt/assets/images/default-learning.jpg",
        slug: "vue-basics",
        topics: ["Vue", "React"],
        tags: ["Lessons"],
        date: "2025-01-01",
      },
    ],
  }),
  getters: {
    getResources: (state) => state.resources,
    getResourceById: (state) => (id: number) => {
      return state.resources.find((resource) => resource.id === id);
    },
  },
});
