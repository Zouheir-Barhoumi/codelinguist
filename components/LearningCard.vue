<template>
  <div
    class="max-w-75 w-60 max-h-70 bg-lighter border-2 border-darker text-center pt-2"
  >
    <!-- Title -->
    <h3 class="text-h3 md:text-2xl 2xl:text-3xl font-bold mb-2">
      {{ resource.title }}
    </h3>
    <!-- Image -->
    <div class="w-full bg-tertiary/60 relative overflow-hidden">
      <div
        class="w-70 h-70 bg-cover bg-center absolute top-0 left-0 opacity-18"
        style="background-image: url('/_nuxt/assets/images/curtains.jpg')"
      ></div>
      <img
        :src="resource.image"
        class="w-full h-full opacity-40 filter contrast-120"
        alt="Resource Image"
      />
    </div>
    <!-- Summary -->
    <div>
      <p class="text-base md:text-lg lg:text-xl text-grey py-2">
        {{ resource.tags }}
      </p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  resource: {
    type: Object,
    required: true,
  },
});
</script>
