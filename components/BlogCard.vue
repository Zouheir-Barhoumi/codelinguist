<!-- components/BlogCard.vue -->
<template>
  <div
    class="mh-60 h-80 m:h-80 w-80 border border-solid border-2 bg-lighter backdrop-blur-md hover:shadow-2xl flex flex-col justify-between relative hover:scale-105 transition-transform duration-300 ease-in-out p-2"
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
      <h3 class="text-lg font-bold mb-2">{{ post.title }}</h3>
      <p class="text-sm text-grey mb-4 text-justify">
        {{ post.excerpt }}
      </p>
      <div class="flex justify-end">
        <nuxt-link
          :to="`/blog/${post.id}`"
          class="text-darkest bg-tertiary px-4 py-2 rounded-sm cursor-pointer"
        >
          Read more
        </nuxt-link>
      </div>
    </div>
    <!-- Footer -->
    <div
      class="relative z-10 flex justify-between items-center text-sm text-dark p-2 mt-4 bg-light"
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
