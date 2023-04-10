<template>
  <section class="relative h-400px">
    <h1 class="font-serif title-decoration text-4xl mt-10 mb-6">
      Favorite external articles
    </h1>
    <ul>
      <!-- Move to component -->
      <li v-for="article of articles">
        {{ article }}
      </li>
    </ul>

    <!-- Or <a> toward specific articles page -->
    <button class="text-pink-700 border border-pink-700 rounded mx-auto px-4 py-2">See more</button>
  </section>
</template>

<script lang="ts" setup>
const articles = ref([
  "https://dev.to/koladev/8-must-know-sorting-algorithms-5ja",
  "https://www.tonoid.com/score-100-pagespeed-insights-nuxtjs?utm_source=twitter",
  "https://www.joshwcomeau.com/css/stacking-contexts/",
])
</script>
