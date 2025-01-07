<template>
  <!-- Pagination Controls -->
  <div
    class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 flex justify-between items-center"
  >
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="px-4 py-2 text-darkest font-bold disabled:text-warning disabled:font-normal disabled:cursor-not-allowed"
    >
      Prev
    </button>
    <span class="text-grey"> Page {{ currentPage }} of {{ totalPages }} </span>
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 text-darkest font-bold disabled:text-warning disabled:font-normal disabled:cursor-not-allowed"
    >
      Next
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["prevPage", "nextPage"]);
const prevPage = () => {
  emit("prevPage");
};
const nextPage = () => {
  emit("nextPage");
};
</script>
