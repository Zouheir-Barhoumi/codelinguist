<template>
  <div>
    <!-- THIS page contains links to the following pages: interactive, lessons, and quizzes -->
    <h1>Learning</h1>
    <div class="flex justify-center space-x-4 mt-4">
      <nuxt-link
        to="/learning/interactive"
        class="w-40 p-4 bg-tertiary text-darker text-center"
        >Interactive</nuxt-link
      >
      <nuxt-link
        to="/learning/lessons"
        class="w-40 p-4 bg-tertiary text-darker text-center"
        >Lessons</nuxt-link
      >
      <nuxt-link
        to="/learning/quizzes"
        class="w-40 p-4 bg-tertiary text-darker text-center"
        >Quizzes</nuxt-link
      >
    </div>
  </div>
</template>
