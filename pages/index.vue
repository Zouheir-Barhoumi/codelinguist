<template>
  <div class="bg-primary">
    <!-- Hero Section -->

    <HeroSection
      title="Learn, Build, and Grow with CodeLinguist"
      :setHeight="true"
    >
      <template #button>
        <!-- Call-to-Action Button -->
        <div class="flex flex-row gap-2 mt-6 justify-center flex-wrap">
          <nuxt-link
            to="/blog"
            class="inline-block bg-dark text-white px-8 py-2.5 2xl:py-4 rounded-md text-md md:text-xl tracking-wider uppercase hover:bg-opacity-60 transition duration-300 ease-in-out"
          >
            Start Reading
          </nuxt-link>
          <nuxt-link
            to="/"
            class="inline-block bg-transparent text-light px-8 py-2.5 2xl:py-4 rounded-md text-md md:text-xl tracking-wider uppercase hover:bg-light hover:text-darkest transition-all duration-300 ease-in-out border-2 border-light"
          >
            Subscribe
          </nuxt-link>
        </div>
      </template>
    </HeroSection>

    <!-- Divider -->
    <div class="h-0.5 bg-darkest"></div>

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
    <div class="h-0.5 bg-darkest"></div>

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
    <div class="h-0.5 bg-darkest"></div>

    <!-- Learning Section -->
    <ContentSection title="Learning" :bgColor="'bg-light'" layoutType="grid">
      <template #content>
        <div
          v-for="resource in lpi"
          :key="resource.id"
          class="bg-secondary w-fit"
        >
          <nuxt-link>
            <LearningCard :resource="resource" />
          </nuxt-link>
        </div>
      </template>
    </ContentSection>

    <!-- Our Mission Section -->
    <section class="bg-bg-custom-black text-white py-10">
      <div
        class="max-w-4xl mx-auto text-left bg_black_grade h-full py-10 sm:px-20 px-5 my-0 border-2 border-light shadow-custom"
      >
        <h2
          class="text-h1 2xl:text-5xl font-bold mb-10 w-fit mx-auto tracking-wider"
        >
          Our Mission
        </h2>
        <p class="text-base 2xl:text-2xl md:lh-loose text-justify">
          {{ missionText }}
        </p>
      </div>
    </section>

    <!-- Footer Section -->
    <footer
      class="py-4 bg-tertiary text-darkest text-center text-base md:text-2xl lg:text-3xl"
    >
      <div class="flex justify-center space-x-4 mt-2">
        <router-link to="#" class=""
          ><i class="fab fa-facebook"></i
        ></router-link>
        <router-link to="#" class=""
          ><i class="fab fa-linkedin"></i
        ></router-link>
        <router-link to="#" class=""><i class="fab fa-github"></i></router-link>
      </div>
      <div class="my-2 border-t-2 border-darkest pt-4 w-fit mx-auto">
        <nuxt-link class="px-4 md:px-5 lg:px-6" to="/">Home</nuxt-link> |
        <nuxt-link class="px-4 md:px-5 lg:px-6" to="/blog">Blog</nuxt-link> |
        <nuxt-link class="px-4 md:px-5 lg:px-6" to="/projects"
          >Projects</nuxt-link
        >
        |
        <nuxt-link class="px-4 md:px-5 lg:px-6" to="/learning"
          >Learning</nuxt-link
        >
      </div>
      <p
        class="mt-4 md:mt-6 tracking-widest text-base border-t-2 border-darkest p-4 w-fit mx-auto"
      >
        © 2024 CodeLinguist. All rights reserved.
      </p>
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

const missionText = `At The CodeLinguist, we believe coding mastery isn’t about memorizing abstract algorithms or slogging through overly complex projects. It’s about understanding the small, powerful building blocks that form the foundation of every great application. We break down programming concepts into their most practical, reusable components, equipping you with skills that transcend languages and frameworks. Our mission is to transform coding from a daunting challenge into a manageable, even enjoyable, journey. By turning complex ideas into clear, actionable insights, we empower you to think creatively, solve real-world problems, and build a unique approach to programming—one that’s as practical as it is profound.`;

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
