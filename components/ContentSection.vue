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
      <div :class="dynamicClass">
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
  layoutType: {
    type: String,
    default: "flex",
  },
});

const dynamicClass = computed(() => {
  return props.layoutType === "grid"
    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6"
    : "flex flex-wrap justify-center gap-6 max-w-5xl";
});
</script>
