<template>
  <div>
    <template>
      <div>
        <h1>Blog Posts</h1>
        <div v-if="blogStore.loading">Loading...</div>
        <div v-else-if="blogStore.error">Error: {{ blogStore.error }}</div>
        <ul v-else>
          <li v-for="post in blogStore.blogPosts" :key="post.slug">
            <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
            <p>{{ post.excerpt }}</p>
            <ContentRenderer :value="post" />
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script setup>
// const route = useRoute();
// const { data: posts } = await useAsyncData(`blog-${route.path}`, () =>
//   queryCollection("blog").all()
// );
// /** This is using the store */
const blogStore = useBlogStore();

// For SSR/SSG compatibility
useAsyncData("blog-posts", async () => {
  await blogStore.fetchBlogPosts();
});
/** This is without using the store */
// const route = useRoute();
// const { data: posts, refresh } = await useAsyncData(
//   `blog-${route.path}`,
//   () => queryCollection("blog").all(),
//   {
//     watch: [route],
//   }
// );

// // Refresh data when route changes
// watch(route, () => {
//   refresh();
// });
</script>
