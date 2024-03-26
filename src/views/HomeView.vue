<script setup>
import MarqueeComp from "../components/MarqueeComp.vue";
import FaqComp from "../components/FaqComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
</script>

<template>
  <main>
    <div class="hero">
      <div class="container">
        <h1>ReInvent <span> Your Perspectives and Methodologies </span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reiciendis tenetur porro.</p>
        <ButtonComp class="btn">Register</ButtonComp>
      </div>
    </div>

    <MarqueeComp />

    <div class="partners">
      <div class="container">
        <h2>We're proud to be partnered with:</h2>
        <div class="logos">
          <img src="../assets/images/sponsor_logo1.png" alt="Logo">
          <img src="../assets/images/sponsor_logo1.png" alt="Logo">
          <img src="../assets/images/sponsor_logo1.png" alt="Logo">
          <img src="../assets/images/sponsor_logo1.png" alt="Logo">
          <img src="../assets/images/sponsor_logo1.png" alt="Logo">
        </div>
        <router-link :to="{ name: 'sponsors' }" class="btn">
          See All Sponsor
        </router-link>
      </div>
    </div>


    <div class="container">
      <FaqComp />
    </div>
  </main>
</template>


<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;

.hero {
  position: relative;
  min-height: 900px;
  background-image: url('../assets/images/Background.webp');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-block: 80px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    inset: 0;
    z-index: -1;
  }

  .btn {
    margin-block-start: 1.25rem;
  }
}

.partners {
  background-color: v.$White;
  padding-block: 80px;

  .logos {
    display: flex;
  }

  .btn {

    // This mixin is for button, see in css/mixin.scss
    @include m.btn(v.$White,
      v.$black,
      v.$red,
      v.$red,
      v.$White,
      v.$White )
  }
}
</style>