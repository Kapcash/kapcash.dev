<template>
  <div class="relative frame-container" :class="{ zoom }">
    <div class="frame" :class="zoom ? 'cursor-zoom-out' : 'cursor-zoom-in'" @click="zoom = !zoom">
      <img :src="imgSrc" class="object-contain max-h-full">
    </div>
    <span class="absolute text-gray-500 text-[0.6em] -bottom-6 right-0">Frame css by <a class="text-blue-500 hover:text-blue-600" href="https://codepen.io/Kaiyuan/pen/DjBRbV" target="_blank">@Kaiyuan</a></span>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: { type: String, required: true }
})

const zoom = ref(false)
</script>

<style scoped>
.frame-container {
  min-height: 300px;
  transition: transform 100ms ease-in-out;
}
.frame-container.zoom {
  transform: scale(1.8);
}

/* Source: https://codepen.io/Kaiyuan/pen/DjBRbV */
.frame {
  display: inline-block;
	padding: 20px;
	border-width: 20px;
	border-style: solid;
  height: 100%;
	border-color: #2F2D2D #434040 #4F4C4C #434040;
	background: #f5f5f5;
	background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#E5E4DF), to(#CDCDC6));
	background-image: -webkit-linear-gradient(#E5E4DF, #CDCDC6);
	background-image: -moz-linear-gradient(#E5E4DF, #CDCDC6);
	background-image: -o-linear-gradient(#E5E4DF, #CDCDC6);
	background-image: linear-gradient(#E5E4DF, #CDCDC6);
	box-shadow: inset 0 2px 5px rgba(0,0,0,.6),0 5px 2px rgba(0,0,0,.1), 0 10px 20px rgba(0,0,0,.8);
	position: relative;
	overflow: hidden;
}
.frame::before {
	content: "";
	position: absolute;
	top: -175px;
	right: -20%;
	width: 400px;
	height: 400px;
	transform: rotateZ(-40deg);
	-webkit-transform: rotateZ(-40deg);
	-moz-transform: rotateZ(-40deg);
	-o-transform: rotateZ(-40deg);
	background-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(255,255,255,.4)), to(rgba(255,255,255,0)));
	background-image: -webkit-linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,0));
	background-image: -moz-linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,0));
	background-image: -o-linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,0));
	background-image: linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,0));
}
.frame::after {
  /* content: '@Kaiyuan (https://codepen.io/Kaiyuan/pen/DjBRbV)'; */
  font-size: 0.5em;
  color: gray;
  text-align: right;
  position: absolute;
  bottom: -2rem;
  right: 0;
}
.frame img {
	border-width: 2px;
	border-style: solid;
	border-color: #BBBAB4 #C7C7BF #E5E4DF #C7C7BF;
	box-shadow:  0 -1px 1px rgba(0,0,0,.1), 0 1px 1px 1px rgba(255,255,255,.7);
}
</style>
