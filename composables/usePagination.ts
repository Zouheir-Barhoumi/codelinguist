import { ref, computed } from "vue";
export function usePagination(totalItems: any[], postsPerPage: number) {
  const currentPage = ref(1);
  const totalPages = computed(() =>
    Math.ceil(totalItems.length / postsPerPage)
  );
  const pageItems = computed(() => {
    const startPage = (currentPage.value - 1) * postsPerPage;
    const endPage = startPage + postsPerPage;
    return totalItems.slice(startPage, endPage);
  });

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  return { currentPage, totalPages, pageItems, nextPage, prevPage };
}
