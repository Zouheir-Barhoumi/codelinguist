<template>
  <div class="bg-beige">
    <!-- Navbar -->
    <nav class="flex justify-between items-center p-4 bg-beige">
      <div class="text-lg font-bold">CodeLinguist</div>
      <button @click="toggleMenu" class="sm:hidden">
        <i class="fas fa-bars"></i>
      </button>
      <div
        :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
        class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
      >
        <div class="bg-black text-white p-4">
          <button @click="toggleMenu" class="absolute top-4 right-4 text-xl">
            &times;
          </button>
          <ul class="space-y-4">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
            <li><nuxt-link to="/projects">Projects</nuxt-link></li>
            <li><nuxt-link to="/learning">Learning</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative text-center py-20">
      <img
        src="/modern_bg.jpeg"
        alt="hero"
        class="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div class="relative z-10">
        <h1 class="text-4xl font-bold">
          Coding Insights and Learning Resources
        </h1>
        <nuxt-link
          to="/blog"
          class="mt-4 inline-block bg-black text-white px-4 py-2"
          >Read</nuxt-link
        >
      </div>
    </section>

    <!-- Blog Section -->
    <section class="py-10">
      <h2 class="text-2xl font-bold text-center">Blog</h2>
      <div class="flex flex-wrap justify-center mt-4">
        <div
          v-for="post in blogPosts"
          :key="post.id"
          class="w-80 p-4 border m-2"
        >
          <h3 class="font-bold">{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <nuxt-link :to="`/blog/${post.slug}`" class="text-orange-500"
            >Read More</nuxt-link
          >
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-10 bg-gray-100">
      <h2 class="text-2xl font-bold text-center">Projects</h2>
      <div class="flex flex-wrap justify-center mt-4">
        <div v-for="project in projects" :key="project.id" class="w-80 p-4">
          <img
            :src="project.image"
            alt="project"
            class="w-full h-40 object-cover"
          />
          <h3 class="mt-2 font-bold">{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>

    <!-- Learning Section -->
    <section class="py-10">
      <h2 class="text-2xl font-bold text-center">Learning</h2>
      <div class="flex justify-center space-x-4 mt-4">
        <nuxt-link
          to="/learning/quizzes"
          class="w-40 p-4 bg-orange-500 text-white text-center"
          >Quizzes</nuxt-link
        >
        <nuxt-link
          to="/learning/interactive"
          class="w-40 p-4 bg-orange-500 text-white text-center"
          >Interactive</nuxt-link
        >
        <nuxt-link
          to="/learning/lessons"
          class="w-40 p-4 bg-orange-500 text-white text-center"
          >Lessons</nuxt-link
        >
      </div>
    </section>

    <!-- Our Mission Section -->
    <section class="py-10 bg-black text-white">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl font-bold">Our Mission</h2>
        <p>{{ missionText }}</p>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="py-4 bg-gray-900 text-white text-center">
      <p>© 2024 CodeLinguist. All rights reserved.</p>
      <div class="flex justify-center space-x-4 mt-2">
        <a href="#" class="text-xl"><i class="fab fa-facebook"></i></a>
        <a href="#" class="text-xl"><i class="fab fa-linkedin"></i></a>
        <a href="#" class="text-xl"><i class="fab fa-github"></i></a>
      </div>
      <div class="mt-2">
        <nuxt-link to="/">Home</nuxt-link> |
        <nuxt-link to="/blog">Blog</nuxt-link> |
        <nuxt-link to="/projects">Projects</nuxt-link> |
        <nuxt-link to="/learning">Learning</nuxt-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      blogPosts: [
        {
          id: 1,
          title: "Blog Post 1",
          excerpt: "Short description...",
          slug: "blog-post-1",
        },
        {
          id: 2,
          title: "Blog Post 2",
          excerpt: "Short description...",
          slug: "blog-post-2",
        },
      ],
      projects: [
        {
          id: 1,
          title: "Angular Project",
          image: "/angular-project.png",
          description: "Short summary...",
        },
        {
          id: 2,
          title: "Next Gen Project",
          image: "/next-gen-project.png",
          description: "Short summary...",
        },
      ],
      missionText: `At CodeLinguist, we're not just writing code—we believe that mastering programming isn't about focusing on abstract algorithms or overly complex projects. Instead, we focus on the small, powerful pieces of functionality that are the building blocks of every application. By breaking down low-level functions, we aim to provide practical, reusable skills that can be applied across countless programming scenarios. Our mission is to make coding accessible by transforming complex concepts into clear insights—enabling you to learn and build real programming skills, one piece at a time.`,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
/* @import "https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.css"; */
</style>
