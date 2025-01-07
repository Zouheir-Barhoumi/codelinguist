<template>
  <section class="py-10 relative" :class="bgColor">
    <div
      class="wrapper border border-2 border-dark bg-primary pb-20 flex flex-col items-center"
    >
      <h2
        class="inline-block bg-light text-h1 font-bold mt-1 mb-8 border-b-4 border-l-2 border-r-3 border-dark align-center px-8 py-2 tracking-wider capitalize"
      >
        {{ title }}
      </h2>
      <div class="flex flex-wrap justify-center gap-6 max-w-5xl">
        <slot name="content"></slot>
      </div>
    </div>
    <slot name="pagination"></slot>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "bg-light",
  },
});
</script>
