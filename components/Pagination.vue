<template>
  <!-- Pagination Controls -->
  <div
    class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 flex justify-between items-center gap-4"
  >
    <!-- Previous Button -->
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="font-mono px-4 py-3 text-darkest font-bold disabled:text-warning disabled:font-normal disabled:cursor-not-allowed text-base md:text-lg hover:bg-darkest hover:text-light transition-colors duration-200 disabled:hover:bg-transparent"
    >
      Prev
    </button>

    <!-- Page Indicator -->
    <span class="text-grey text-sm md:text-base">
      Page {{ currentPage }} of {{ totalPages }}
    </span>

    <!-- Next Button -->
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="font-mono px-4 py-3 text-darkest font-bold disabled:text-warning disabled:font-normal disabled:cursor-not-allowed text-base md:text-lg hover:bg-darkest hover:text-light transition-colors duration-200 disabled:hover:bg-transparent"
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
