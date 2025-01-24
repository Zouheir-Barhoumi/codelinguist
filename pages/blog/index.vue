<template>
  <div>
    <HeroSection> </HeroSection>
    <template>
      <div>
        <h1>Blog Posts</h1>
        <ul>
          <li v-for="post in posts" :key="post._path">
            <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
            <p>{{ post.slug }}</p>
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
const route = useRoute();
const { data: posts, refresh } = await useAsyncData(
  `blog-${route.path}`,
  () => queryCollection("blog").all(),
  {
    watch: [route],
  }
);

// Refresh data when route changes
watch(route, () => {
  refresh();
});
</script>
