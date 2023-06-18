<template>
  <header class="pt-8 pb-2 bg-pink-100 flex justify-center clipped">
    <div class="relative">
      <img src="~/assets/img/moi.jpg" height="350px" class="h-350px"/>
      <div class="flex gap-x-1 my-2 justify-center absolute right-1/4 top-1/2 rotate-18 text-black">
        <a href="https://twitter.com/Kapcash" class="hover:text-pink-800">
          <IconTwitter height="18" width="18" fill="currentColor" />
        </a>
        <a href="https://github.com/Kapcash" class="hover:text-pink-800">
          <IconGithub height="18" width="18" fill="currentColor" />
        </a>
        <a href="https://www.linkedin.com/in/florent-catiau-tristant/" class="hover:text-pink-800">
          <IconLinkedIn height="18" width="18" fill="currentColor" />
        </a>
      </div>
    </div>
    <div class="flex flex-col">
      <h1 class="text-4xl mt-3 mb-1 font-bold">Hi! I'm <span class="text-pink-700">Florent</span>! 👋</h1>
      <span>
        <span class="tag">vue</span>
        <span class="tag">nuxt</span>
        <span class="tag">nestjs</span>
      </span>
      <p class="leading-relaxed my-3">
        I'm a French developer based in Barcelona, Spain<br />
        Welcome to my personal page where you can get an overview of who I am!<br />
        I contribute to open-source libraries in my free time.
      </p>
      <div class="mt-8 flex flex-col gap-y-4 w-max">
        <a class=" px-6 py-2 border border-pink-700 text-pink-700 rounded hover:border-pink-500 hover:text-pink-500" href="resume/">
          See my resume
        </a>
        <BuyMeABeer />
      </div>
    </div>
  </header>
</template>

<script setup>
import IconTwitter from '~/assets/svg/social-networks/twitter.svg'
import IconGithub from '~/assets/svg/social-networks/github.svg'
import IconLinkedIn from '~/assets/svg/social-networks/linkedin.svg'
</script>

<style scoped>
.clipped {
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
}
</style>
