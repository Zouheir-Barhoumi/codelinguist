<template>
  <nav
    class="flex justify-between items-center p-4 sm:px-8 md:px-16 2xl:px-32 bg-primary"
  >
    <!-- Logo -->
    <div>
      <nuxt-link to="/">
        <div
          class="glitch text-5xl font-bold text-dark mr-4 lh-5"
          data-glitch="CodeLinguist"
        >
          CodeLinguist
        </div>
      </nuxt-link>
    </div>

    <!-- Desktop Menu -->
    <div class="desktop-menu hidden sm:block w-full h-full bg-opacity-50 z-50">
      <div class="text-dark font-bold">
        <ul
          class="space-x-8 flex flex-row justify-end uppercase tracking-wider"
        >
          <li>
            <nuxt-link
              to="/"
              class="p-3 text-base md:text-lg"
              :class="{ active_page: isActive('/') }"
            >
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/blog"
              class="p-3 text-base md:text-lg"
              :class="{ active_page: isActive('/blog') }"
            >
              Blog
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/projects"
              class="p-3 text-base md:text-lg"
              :class="{ active_page: isActive('/projects') }"
            >
              Projects
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/learning"
              class="p-3 text-base md:text-lg"
              :class="{ active_page: isActive('/learning') }"
            >
              Learning
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/about"
              class="p-3 text-base md:text-lg"
              :class="{ active_page: isActive('/about') }"
            >
              About
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
</script>

<style scoped>
.active_page {
  /* font-weight: bold; */
  background-image: url(/_nuxt/assets/images/box.svg);
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 2px solid #201100;
}

.glitch {
  position: relative;
  z-index: 1;
}

.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.glitch:before {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
    infinite;
  color: #9cff99;
  z-index: -1;
}

.glitch:after {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
    infinite;
  color: #ff9999;
  z-index: -2;
}

@keyframes glitch-color {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-3px, 3px);
  }

  40% {
    transform: translate(-3px, -3px);
  }

  60% {
    transform: translate(3px, 3px);
  }

  80% {
    transform: translate(3px, -3px);
  }

  to {
    transform: translate(0);
  }
}
</style>
