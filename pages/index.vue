<template>
  <div class="bg-primary">
    <!-- Navbar -->
    <Navigation> </Navigation>

    <!-- Hero Section -->

    <HeroSection
      title="Coding Insights and Learning Resources"
      :setHeight="true"
    >
      <template #button>
        <!-- Call-to-Action Button -->
        <nuxt-link
          to="/blog"
          class="font-ibm mt-4 inline-block bg-dark text-white px-8 py-3 2xl:py-4 rounded-md text-md sm:text-lg md:text-xl tracking-wider uppercase"
        >
          Read
        </nuxt-link>
      </template>
    </HeroSection>

    <!-- Divider -->
    <div class="h-0.5 bg-darkest h1"></div>

    <!-- Blog Section -->
    <ContentSection title="Blog">
      <template #content>
        <div v-for="post in pageItems" :key="post.id">
          <!-- Blog Cards -->
          <BlogCard :post="post" />
        </div>
      </template>
      <template #pagination>
        <!-- Pagination Controls -->
        <Pagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          @prevPage="prevPage"
          @nextPage="nextPage"
        />
      </template>
    </ContentSection>

    <!-- Divider -->
    <div class="h-0.5 bg-darkest h1"></div>

    <!-- Projects Section -->
    <ContentSection title="Projects" :bgColor="'bg-lighter'">
      <template #content>
        <div v-for="project in projects" :key="project.id" class="w-80 p-4">
          <img
            :src="project.image"
            alt="project"
            class="w-full h-40 object-cover"
          />
          <h3 class="text-h3 mt-2 font-bold">{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </template>
      <template #pagination>
        <!-- Pagination Controls -->
      </template>
    </ContentSection>

    <!-- Divider -->
    <div class="h-0.5 bg-darkest h1"></div>

    <!-- Learning Section -->
    <section class="py-10 px-4">
      <h2 class="text-h2 font-bold text-center">Learning</h2>
      <div class="flex justify-center space-x-4 mt-4">
        <nuxt-link
          to="/learning/quizzes"
          class="w-40 p-4 bg-tertiary text-darkest text-center"
          >Quizzes</nuxt-link
        >
        <nuxt-link
          to="/learning/interactive"
          class="w-40 p-4 bg-tertiary text-darkest text-center"
          >Interactive</nuxt-link
        >
        <nuxt-link
          to="/learning/lessons"
          class="w-40 p-4 bg-tertiary text-darkest text-center"
          >Lessons</nuxt-link
        >
      </div>
    </section>

    <!-- Our Mission Section -->
    <section class="bg-bg-custom-black text-white">
      <div
        class="max-w-4xl mx-auto text-left bg_black_grade h-full py-10 sm:px-20 px-5 my-0"
      >
        <h2 class="text-h2 font-bold text-center pb-10">Our Mission</h2>
        <p class="lh-loose text-justify">{{ missionText }}</p>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="py-4 bg-tertiary text-darkest text-center">
      <div class="flex justify-center space-x-4 mt-2">
        <a href="#" class=""><i class="fab fa-facebook"></i></a>
        <a href="#" class=""><i class="fab fa-linkedin"></i></a>
        <a href="#" class=""><i class="fab fa-github"></i></a>
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

<script setup>
const route = useRoute();

const blogPosts = ref([
  {
    id: 1,
    title: "Blog Post 1",
    excerpt:
      "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.",
    image: "/_nuxt/assets/images/blog-post-1.jpg",
    slug: "blog-post-1",
    topics: ["topic1", "topic2"],
    date: "2025-01-01",
  },
  {
    id: 2,
    title: "Blog Post 2",
    excerpt:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right",
    image: "/_nuxt/assets/images/blog-post-1.jpg",
    slug: "blog-post-2",
    topics: ["topic1", "topic2"],
    date: "2025-01-01",
  },
  {
    id: 3,
    title: "Sample Blog Post 3",
    excerpt:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am",
    image: "/_nuxt/assets/images/blog-post-1.jpg",
    slug: "blog-post-3",
    topics: ["topic5", "topic6"],
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
]);

// Pagination
const { currentPage, totalPages, pageItems, nextPage, prevPage } =
  usePagination(blogPosts.value, 3);

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
const missionText = `At the CodeLinguist, our strategy isn't strictly about code writing—We don't believe in programming mastery through abstract algorithms or overly complex projects either. Instead we focus on the small, yet, powerful pieces of functionality that are the building blocks of every application. By breaking down concepts to low-level functions we aim to provide practical, reusable skills that can be applied across countless programming scenarios. Our mission is to make the coding process a manageable, masteful exercise by transforming complex ideas into clear insights—enabling you to learn and build real programming skills and a unique aproach.`;

const getBorderStyle = (post) => {
  const randomIndex = Math.floor(Math.random() * 7) + 1;
  return {
    borderImage: `url('/_nuxt/assets/images/borders_square_${randomIndex}.png') 10 fill`,
    borderWidth: "1px",
    // borderStyle: "solid",
    // borderRepeat: "round",
  };
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
</style>
