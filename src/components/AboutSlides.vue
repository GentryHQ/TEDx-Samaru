<template>
 <swiper
  :spaceBetween="30"
  :effect="'fade'"
  :navigation="true"
  :pagination="{
   clickable: true
  }"
  :modules="modules"
  class="mySwiper"
 >
  <swiper-slide v-for="(image_src, index) in images" :key="index">
   <img :src="image_src" :alt="'carousel-image-' + index" width="200px" height="300px" />
  </swiper-slide>
 </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

export default {
 components: {
  Swiper,
  SwiperSlide
 },
 props: {
  images: {
   type: Array,
   required: true
  }
 },
 setup() {
  return {
   modules: [EffectFade, Navigation, Pagination]
  }
 }
}
</script>
<style scoped>
.swiper {
 width: 100%;
 height: 100%;
}

.swiper-slide {
 background-position: center;
 background-size: cover;
}

.swiper-slide img {
 display: block;
 width: 100%;
}
</style>