<template>

  <!-- some options that maybe useful
  :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  :slidesPerView="'auto'"
  :scrollbar="{
      hide: true,
    }"
  -->

  <div class="speaker-slider">
    <swiper ref="swiper" :slidesPerView="1" :spaceBetween="20" :rewind="true" :freeMode="true" :mousewheel="true"
      :centeredSlides="false" 
      :pagination="{
      clickable: true,
    }" :navigation="true" 
    :autoplay="{
      disableOnInteraction: false,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }" :modules="modules">
      <swiper-slide v-for="(speaker, index) in speakers" :key="index" class="swiper-slide">
        <div class="speaker">
          <img :src="speaker.img" :alt="speaker.name">
          <div class="sub">
            <h4>{{ speaker.name }}</h4>
            <p>{{ speaker.title }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    speakers: Array,
  },

  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation, Mousewheel, FreeMode],
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;

.swiper-pagination {
  padding-block: 40px;
}

.swiper-slide {
  padding: 0px 10px 50px 0px;
}

.speaker {
  border: 1px solid v.$black;
  box-shadow: 7px 7px v.$red;
  border-radius: v.$br1;
  overflow: hidden;
  // transition: all 0.5s ease-in-out;
  width: 100%;
  height: auto !important;

  &:hover,
  &:focus {
    box-shadow: 5px 5px v.$primary-600;
  }

  img {
    aspect-ratio: 1/1;
    object-fit: cover;
    height: auto;
    background-color: v.$primary-50;
  }

  .sub {
    background-color: v.$White;
    padding: 1.25rem 1.5rem;
    text-align: left;


    h4 {
      color: v.$black;

      font: {
        size: 24px;
        weight: v.$fw6;
      }
    }

    p {
      color: v.$black;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 650px) {
    .swiper-slide {
      padding: 0px 10px 70px 0px;
      margin-inline-start: 0px;
    }
  }
}
</style>