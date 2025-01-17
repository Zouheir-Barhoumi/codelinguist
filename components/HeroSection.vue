<template>
  <section
    :class="{ customHeight: setHeight }"
    class="relative text-center py-20 flex items-center justify-center"
  >
    <!-- Background Overlays -->
    <div
      class="top-pane bg-lighter absolute inset-0 pointer-events-none h-[10vh] z-11 opacity-20"
    ></div>
    <div class="bg-tertiary absolute inset-0 pointer-events-none"></div>

    <!-- Background Images -->
    <img
      src="/assets/images/curtains.jpg"
      alt="stylistic colors hero image"
      class="absolute inset-0 w-full h-full object-cover opacity-15"
    />
    <!-- Main Hero Image -->
    <img
      :src="heroImage"
      alt="hero"
      class="absolute inset-0 w-full h-full object-cover filter brightness-75 hue-rotate-15 saturate-150 opacity-50"
    />

    <!-- Content -->
    <div
      class="glass relative z-10 md:space-y-4 bg-lighter bg-opacity-10 p-4 lg:p-8 border-tertiary rounded-md"
    >
      <!-- Heading -->
      <h1
        class="glitch relative text-4xl sm:text-5xl md:text-6xl font-bold text-lighter"
        :data-glitch="`${title}`"
      >
        {{ title }}
      </h1>
      <h2 class="text-base sm:text-h3 md:text-h2 font-bold my-2 text-grey">
        Your Gateway to Expert Coding Insights
      </h2>
      <div>
        <!-- Call-to-Action Button -->
        <slot name="button"></slot>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Coding Insights and Learning Resources",
  },
  heroImage: {
    type: String,
    default: "/_nuxt/assets/images/modern_bg.jpeg",
  },
  setHeight: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.customHeight {
  height: 75vh;
}
.glass {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.glitch {
  display: block;
  background: transparent;
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
  color: orangered;
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
