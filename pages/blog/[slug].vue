<template>
  <div v-if="post" class="bg-primary">
    <div class="wrapper">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-gray-600 mb-4">{{ post.date }}</p>
      <div class="prose">
        <img :src="post.image" :alt="post.title" class="mb-4" />
        <p>{{ post.content }}</p>
      </div>
    </div>
  </div>
  <div v-else class="text-center p-10">
    <p class="text-red-500">Post not found!</p>
  </div>
</template>

<script setup>
const blogStore = useBlogStore();

// Access the current route
const route = useRoute();
const slug = route.params.slug;

// Find the blog post by slug
const post = blogStore.blogPosts.find((post) => post.slug === slug) || null;

if (!post || !post.content) {
  console.error(`No blog post found for slug: ${slug}`);
}
</script>
