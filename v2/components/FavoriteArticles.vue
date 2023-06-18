<template>
  <section class="py-8">
    <h1 class="font-serif title-decoration text-4xl mb-8">
      Favorite external articles
    </h1>

    <div class="flex flex-wrap gap-8 justify-between">
      <ArticleCard v-for="article of articles" :link="article.link" :author="article.author" :date="article.date"></ArticleCard>
    </div>

    <!-- Or <a> toward specific articles page -->
    <button class="block text-pink-700 border border-pink-700 hover:border-pink-500 hover:text-pink-500 rounded mx-auto px-4 py-2">See more</button>
  </section>
</template>

<script lang="ts" setup>
import { articles } from '~~/assets/articles'
</script>
