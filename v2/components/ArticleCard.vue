<template>
  <a :href="url" class="article relative max-w-[300px] mb-12">
    <img :src="mainImage" width="100%" height="100%" :alt="title" class="h-full w-full object-cover contrast-75 transition" />
    <div class="absolute -bottom-10 -right-6 max-w-full flex flex-col align-end">
      <p class="bg-pink-800 text-white text-lg font-serif py-2 px-4 offset-border border-pink-800">{{ title }}</p>
      <p class="py-1 pl-4 flex gap-3 justify-end text-right text-gray-500 text-xs mr-6">
        <span class="text-pink-600">{{ formattedDate }}</span>
        by {{ author }}
      </p>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { JsonLinkMetaData } from '~~/types/JsonLink';

const props = defineProps<{
  link: string,
  date?: Date,
  author?: string,
}>()

const { data } = await useFetch<JsonLinkMetaData>(`https://jsonlink.io/api/extract?url=${props.link}`)
const { title, images: [mainImage], url } = data.value!

const formattedDate = computed(() => props.date?.toLocaleDateString())
</script>

<style scoped>
.offset-border:after {
  top: 0px;
  right: 0px;
  transition: all 150ms;
}
.article:hover .offset-border:after {
  top: 4px;
  right: -4px;
}
.article:hover img {
  transform: scale(1.1);
}
</style>
