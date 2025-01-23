<template>
  <div v-if="post" class="bg-primary">
    <div class="wrapper">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-gray-600 mb-4">{{ post.date }}</p>
      <div class="prose">
        <img :src="post.image" :alt="post.title" class="mb-4" />
        <p>{{ post.excerpt }}</p>
        <ContentRenderer :value="post" />
      </div>
    </div>
  </div>
  <div v-else class="text-center p-10">
    <p>{{ post }}</p>
    <p class="text-red-500">Post not found!</p>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(`blog-${route.path}`, () => {
  return queryCollection("blog").path(route.path).first();
});
console.log(post);
</script>
