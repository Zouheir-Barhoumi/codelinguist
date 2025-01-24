<template>
  <div>
    <p>this is the about page</p>
    <div v-if="blogStore.loading">Loading...</div>
    <div v-else-if="blogStore.error">Error: {{ blogStore.error }}</div>
    <ul v-else>
      <li v-for="post in blogStore.posts" :key="post._path">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        <p>{{ post.title }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
const blogStore = useBlogStore();

onMounted(async () => {
  await blogStore.fetchBlogPosts();
});
</script>
