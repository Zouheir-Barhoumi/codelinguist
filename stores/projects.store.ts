import { defineStore } from "pinia";

export const useProjectStore = defineStore("projects", {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "Project 1",
        description: "This is a description of project lorem ipsum dolor.",
        details:
          "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.",
        image: "/_nuxt/assets/images/angular-project.jpg",
        slug: "project-1",
        topics: ["Nuxt", "TS"],
        date: "2025-01-01",
      },
      {
        id: 2,
        title: "Project 2",
        description: "This is a short summary description of the project.",
        details:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right",
        image: "/_nuxt/assets/images/next-gen-project.jpg",
        slug: "project-2",
        topics: ["Vue", "React"],
        date: "2025-01-01",
      },
      {
        id: 3,
        title: "Project 3",
        description: "This is a description of project lorem ipsum dolor.",
        details:
          "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.",
        image: "/_nuxt/assets/images/angular-project.jpg",
        slug: "project-3",
        topics: ["Nuxt", "TS"],
        date: "2025-01-01",
      },
      {
        id: 4,
        title: "Project 4",
        description: "This is a short summary description of the project.",
        details:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right",
        image: "/_nuxt/assets/images/next-gen-project.jpg",
        slug: "project-4",
        topics: ["Vue", "React"],
        date: "2025-01-01",
      },
    ],
  }),
  getters: {
    getProjects: (state) => state.projects,
    getPorjectById: (state) => (id: number) => {
      return state.projects.find((project) => project.id === id);
    },
  },
});
