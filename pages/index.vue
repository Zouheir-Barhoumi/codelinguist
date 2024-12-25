<template>
  <div class="bg-primary">
    <!-- Navbar -->
    <nav class="flex justify-between items-center p-4 bg-beige">
      <div>
        <nuxt-link to="/" class="text-2xl font-extrabold text-darker"
          >CodeLinguist</nuxt-link
        >
      </div>
      <button @click="toggleMenu" class="sm:hidden">
        <img src="/assets/images/jam_directions_menu.png" alt="mobile menu" />
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
    <section
      class="relative text-center py-20 sm:h-[75vh] flex items-center justify-center"
    >
      <div class="bg-tertiary absolute inset-0 pointer-events-none"></div>
      <img
        src="/assets/images/modern_bg.jpeg"
        alt="hero"
        class="absolute inset-0 w-full h-full object-cover filter brightness-75 hue-rotate-15 saturate-150 opacity-50"
      />
      <div class="relative z-10">
        <h1 class="lg:text-3xl text-2xl font-bold text-lighter">
          Coding Insights and Learning Resources
        </h1>
        <nuxt-link
          to="/blog"
          class="mt-4 inline-block bg-darker text-light px-4 py-2"
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
          <nuxt-link
            :to="`/blog/${post.slug}`"
            class="text-secondary font-bold underline"
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
    <section class="py-10 px-4">
      <h2 class="text-2xl font-bold text-center">Learning</h2>
      <div class="flex justify-center space-x-4 mt-4">
        <nuxt-link
          to="/learning/quizzes"
          class="w-40 p-4 bg-tertiary text-darker text-center"
          >Quizzes</nuxt-link
        >
        <nuxt-link
          to="/learning/interactive"
          class="w-40 p-4 bg-tertiary text-darker text-center"
          >Interactive</nuxt-link
        >
        <nuxt-link
          to="/learning/lessons"
          class="w-40 p-4 bg-tertiary text-darker text-center"
          >Lessons</nuxt-link
        >
      </div>
    </section>

    <!-- Our Mission Section -->
    <section class="bg-bg-custom-black text-white">
      <div
        class="max-w-4xl mx-auto text-left bg_black_grade h-full py-10 sm:px-20 px-5 my-0"
      >
        <h2 class="text-2xl font-bold text-center pb-10">Our Mission</h2>
        <p class="lh-loose text-justify">{{ missionText }}</p>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="py-4 bg-tertiary text-darker text-center">
      <div class="flex justify-center space-x-4 mt-2">
        <a href="#" class="text-xl"><i class="fab fa-facebook"></i></a>
        <a href="#" class="text-xl"><i class="fab fa-linkedin"></i></a>
        <a href="#" class="text-xl"><i class="fab fa-github"></i></a>
      </div>
      <div class="my-2">
        <nuxt-link to="/">Home</nuxt-link> |
        <nuxt-link to="/blog">Blog</nuxt-link> |
        <nuxt-link to="/projects">Projects</nuxt-link> |
        <nuxt-link to="/learning">Learning</nuxt-link>
      </div>
      <p class="tracking-widest">© 2024 CodeLinguist. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  setup() {
    let isMenuOpen = ref(false);
    const blogPosts = ref([
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
    ]);
    const projects = ref([
      {
        id: 1,
        title: "Angular Project",
        image: "/_nuxt/assets/images/angular-project.jpg",
        description: "Short summary...",
      },
      {
        id: 2,
        title: "Next Gen Project",
        image: "/_nuxt/assets/images/next-gen-project.jpg",
        description: "Short summary...",
      },
    ]);
    const missionText = `At the CodeLinguist, our methods aren't restricted to code writing—We believe that programming mastery isn't all about abstract algorithms or overly complex projects either. Instead we focus on the small, yet, powerful pieces of functionality that are the building blocks of every application. By breaking down concepts to low-level functions we aim to provide practical, reusable skills that can be applied across countless programming scenarios. Our mission is to make coding a manageable, masteful exercise by transforming complex ideas into clear insights—enabling you to learn and build real programming skills with our unique aproach.`;

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    return {
      isMenuOpen,
      blogPosts,
      projects,
      missionText,
      toggleMenu,
    };
  },
};
</script>

<style>
.bg_black_grade {
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(24, 24, 24, 1) 20%,
    rgba(7, 7, 7, 1) 34%,
    rgba(13, 13, 13, 1) 66%,
    rgba(33, 33, 33, 1) 80%,
    rgba(86, 86, 86, 1) 100%
  );
}
.parallax-bg {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>
