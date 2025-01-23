<template>
  <nav
    class="flex justify-between items-center p-4 sm:px-8 md:px-16 2xl:px-32 bg-primary"
  >
    <!-- Logo -->
    <div>
      <nuxt-link to="/">
        <div
          class="-translate-y-0.6 font-ibm text-3xl font-bold text-dark lg:mr-4 sm:mr-2"
        >
          CodeLinguist
        </div>
      </nuxt-link>
    </div>

    <!-- Desktop Menu -->
    <div class="desktop-menu hidden sm:block w-full h-full bg-opacity-50 z-50">
      <div class="text-dark font-ibm">
        <ul
          class="space-x-8 flex flex-row justify-end uppercase tracking-wider"
        >
          <li v-for="item in menuItems" :key="item.link">
            <nuxt-link
              :to="item.link"
              class="lg:px-2 text-base sm:text-h6 2xl:text-lg"
              :class="{ active_page: isActive(item.link) }"
            >
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="sm:hidden">
      <img src="/assets/images/jam_directions_menu.png" alt="mobile menu" />
    </button>

    <!-- Mobile Menu -->
    <div
      :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
      class="mobile-menu absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
    >
      <div class="bg-primary text-light p-4 h-full">
        <button @click="toggleMenu" class="absolute top-5 right-5 w-8 h-8">
          <img src="/assets/images/oi_x.svg" alt="close menu" />
        </button>
        <ul class="space-y-4 text-center h-full flex flex-col justify-center">
          <nuxt-link class="w-1/1.7 mx-auto" to="/">
            <li class="bg-darkest p-4 font-bold text-base md:text-lg font-bold">
              HOME
            </li>
          </nuxt-link>
          <nuxt-link class="w-1/1.7 mx-auto" to="/blog">
            <li class="bg-darkest p-4 font-bold text-base md:text-lg font-bold">
              BLOG
            </li>
          </nuxt-link>
          <nuxt-link class="w-1/1.7 mx-auto" to="/projects">
            <li class="bg-darkest p-4 font-bold text-base md:text-lg font-bold">
              PROJECTS
            </li>
          </nuxt-link>
          <nuxt-link class="w-1/1.7 mx-auto" to="/learning">
            <li class="bg-darkest p-4 font-bold text-base md:text-lg font-bold">
              LEARNING
            </li>
          </nuxt-link>
          <nuxt-link class="w-1/1.7 mx-auto" to="/about">
            <li class="bg-darkest p-4 font-bold text-base md:text-lg font-bold">
              ABOUT
            </li>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
let isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const isActive = (route) => useRoute().path === route;

// menu items data
const menuItems = [
  { label: "Home", link: "/" },
  { label: "Blog", link: "/blog" },
  { label: "Projects", link: "/projects" },
  { label: "Learning", link: "/learning" },
  { label: "About", link: "/about" },
];
</script>

<style scoped>
.active_page {
  /* font-weight: bold; */
  background-image: url(/_nuxt/assets/images/box.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* border-bottom: 2px solid #201100; */
}
</style>
