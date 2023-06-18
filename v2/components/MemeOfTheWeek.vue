<template>
  <section class="relative flex flex-col">
    <h1 class="font-serif title-decoration text-2xl md:text-4xl mb-6">
      Meme of the week
    </h1>
    <Frame :img-src="weeklyMemeUrl" class="mx-auto max-h-50vh h-50vh" />
  </section>
</template>

<script lang="ts" setup>
const weeklyMemeUrl = ref("https://res.cloudinary.com/practicaldev/image/fetch/s--DDDvUQUe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/741b87500f9eip1evmj2.jpg")
</script>
