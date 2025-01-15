<!-- components/BlogCard.vue -->
<template>
  <div
    class="mh-60 md:h-80 w-80 bg-lighter backdrop-blur-md flex flex-col justify-between p-2 font-caveat relative"
    :style="getBorderStyle(post.id)"
  >
    <!-- Background Image -->
    <div
      class="absolute top-0 left-0 h-full w-full bg-cover bg-center opacity-12"
      :style="{ backgroundImage: `url(${post.image})` }"
      alt="blog post image"
    ></div>

    <!-- Header -->
    <div class="h-4 bg-white"></div>

    <!-- Content -->
    <div class="relative z-10 p-4 flex flex-col h-full justify-center">
      <!-- Title (h3) -->
      <h3 class="font-sans text-h3 md:text-2xl 2xl:text-3xl font-bold mb-2">
        {{ post.title }}
      </h3>

      <!-- Excerpt (p) -->
      <p class="text-base md:text-lg lg:text-xl text-grey mb-4 text-justify">
        {{ post.excerpt }}
      </p>

      <!-- Read More Button -->
      <div class="flex justify-end">
        <nuxt-link
          :to="`/blog/${post.slug}`"
          class="font-sans text-darkest bg-tertiary px-4 py-2 rounded-sm cursor-pointer text-base md:text-lg 2xl:text-xl"
        >
          Read more
        </nuxt-link>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="relative z-10 flex justify-between items-center text-dark p-2 mt-4 bg-light text-base"
    >
      <span>{{ post.topics.join(" | ") }}</span>
      <span>{{ post.date }}</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const getBorderStyle = (post) => {
  const randomIndex = Math.floor(Math.random() * 7) + 1;
  return {
    borderImage: `url('/_nuxt/assets/images/borders_square_${randomIndex}.png') 10 fill`,
    borderWidth: "1px",
    borderRepeat: "round",
  };
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
