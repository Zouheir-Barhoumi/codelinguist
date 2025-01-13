<template>
  <div
    class="max-w-80 h-80 bg-lighter border border-2 border-darker text-center py-2 hover:shadow-custom hover:scale-102 transition-all duration-300 ease-in-out"
  >
    <!-- Title -->
    <h3 class="text-h3 md:text-2xl 2xl:text-3xl font-bold mb-2">
      {{ project.title }}
    </h3>
    <!-- Image -->
    <div class="w-full bg-tertiary/60 relative">
      <div
        class="w-full h-full bg-cover bg-center absolute top-0 left-0 opacity-15"
        style="background-image: url('/_nuxt/assets/images/curtains.jpg')"
      ></div>
      <img
        :src="project.image"
        class="w-full h-full opacity-60 filter saturate-140"
        alt="Project Image"
      />
    </div>
    <!-- Summary -->
    <div>
      <p class="text-base md:text-lg lg:text-xl text-grey py-2">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
