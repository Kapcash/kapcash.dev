<template>
  <section class="relative bg-pink-800 h-600px">
    <StackedLayersBg class="absolute top-0 left-0 right-0 w-full" />
    <div class="flex flex-col md:flex-row p-16 px-32 h-full items-center">
      <div class="flex-1">3d Earth</div>
      <div class="flex-1">
        <div class="p-16 bg-pink-600 border-pink-600 offset-border text-center rounded-sm">
          <span class="text-3xl font-serif italic underline text-white">{{ selectedThematic }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import StackedLayersBg from '~/assets/svg/stacked-layers-bg.svg'

const thematics = ['Programming', 'Music', 'Video games', 'Sport', '']
const selectedThematic = ref(thematics[0])
</script>
