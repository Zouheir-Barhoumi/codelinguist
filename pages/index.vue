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
          class="mt-4 inline-block bg-dark text-white px-8 py-3 2xl:py-4 rounded-md text-md sm:text-lg md:text-xl tracking-wider uppercase hover:bg-opacity-90 transition duration-300 ease-in-out"
        >
          Start Reading
        </nuxt-link>
      </template>
    </HeroSection>

    <!-- Divider -->
    <div class="h-0.5 bg-darkest h1"></div>

    <!-- Blog Section -->
    <ContentSection title="Blog">
      <template #content>
        <div v-for="post in bpi" :key="post.id">
          <!-- Blog Cards -->
          <BlogCard :post="post" />
        </div>
      </template>
      <template #pagination>
        <!-- Pagination Controls -->
        <Pagination
          v-if="btp > 1"
          :currentPage="bcp"
          :totalPages="btp"
          @prevPage="bpp"
          @nextPage="bnp"
        />
      </template>
    </ContentSection>

    <!-- Divider -->
    <div class="h-0.5 bg-darkest h1"></div>

    <!-- Projects Section -->
    <ContentSection title="Projects" :bgColor="'bg-lighter'">
      <template #content>
        <div v-for="project in ppi" :key="project.id">
          <nuxt-link :to="`/projects/${project.slug}`">
            <!-- Project Cards -->
            <ProjectCard :project="project" />
          </nuxt-link>
        </div>
      </template>
      <template #pagination>
        <!-- Pagination Controls -->
        <Pagination
          v-if="ptp > 1"
          :currentPage="pcp"
          :totalPages="ptp"
          @prevPage="ppp"
          @nextPage="pnp"
        />
      </template>
    </ContentSection>

    <!-- Divider -->
    <div class="h-0.5 bg-darkest h1"></div>

    <!-- Learning Section -->
    <ContentSection title="Learning" :bgColor="'bg-light'">
      <template #content>
        <div v-for="resource in lpi" :key="resource.id">
          <nuxt-link>
            <LearningCard :resource="resource" />
          </nuxt-link>
        </div>
      </template>
    </ContentSection>
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
const blogStore = useBlogStore();
const projectStore = useProjectStore();
const learningStore = useLearningStore();

// Pagination for blog posts
const {
  currentPage: bcp,
  totalPages: btp,
  pageItems: bpi,
  nextPage: bnp,
  prevPage: bpp,
} = usePagination(blogStore.blogPosts, 3);

// Pagination for projects
const {
  currentPage: pcp,
  totalPages: ptp,
  pageItems: ppi,
  nextPage: pnp,
  prevPage: ppp,
} = usePagination(projectStore.projects, 3);

// Pagination for learning resources
const {
  currentPage: lcp,
  totalPages: ltp,
  pageItems: lpi,
  nextPage: lnp,
  prevPage: lpp,
} = usePagination(learningStore.resources, 5);

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
.bg-lighter-s {
  background-image: repeating-conic-gradient(#f6e6d5 0% 25%, #f9f4ef 0% 50%);
  background-position: 0 0, 32px 32px;
  background-size: 64px 64px;
  background-color: #f9f4ef;
}
</style>
