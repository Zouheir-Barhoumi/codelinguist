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
import { useRoute } from "vue-router";

// Mocked blog posts (replace with a real API or CMS query)
const blogPosts = [
  {
    slug: "sample-blog-post",
    title: "Sample Blog Post",
    date: "2023-01-01",
    image: "/images/blog-post-1.jpg",
    content:
      "This is a sample blog post. It can contain any content you want, such as text, images, or even interactive elements.",
  },
  {
    slug: "another-sample-blog-post",
    title: "Another Sample Blog Post",
    date: "2023-01-02",
    image: "/images/blog-post-2.jpg",
    content:
      "This is another sample blog post. It can contain any content you want, such as text, images, or even interactive elements.",
  },
];

// Access the current route
const route = useRoute();
const slug = route.params.slug;

// Find the blog post by slug
const post = blogPosts.find((post) => post.slug === slug);

if (!post.content.length > 1) {
  console.error(`No blog post found for slug: ${slug}`);
}
</script>
