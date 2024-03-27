<script setup>
import MarqueeComp from "../components/MarqueeComp.vue";
import FaqComp from "../components/FaqComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
import SpeakerComp from "../components/SpeakerComp.vue";

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

    <div class="community">
      <div class="container">
        <h2>Take a glimpse view of <span>Samaru</span> community</h2>
        <div class="vidWrapper">
          <iframe class="video" src="https://www.youtube-nocookie.com/embed/20adDr7Felw?si=Wg9whmsmC_gA9Ntx"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <div class="speaker">
      <div class="container">
        <h2>Meet our <span>seasoned</span> speakers</h2>

        <div class="speaker-wrapper">
          <div class="slider">
            <SpeakerComp />
          </div>

        </div>
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
  color: v.$White;

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

.community {
  margin-block: 100px 5rem;
  text-align: center;

  h2 {
    font-size: 40px;
    max-inline-size: 560px;
    margin-inline: auto;
    font-weight: v.$fw7;

    span {
      font-weight: inherit;
      color: v.$primary-500;
    }
  }

  .video {
    margin-block-start: 2.5rem;
    aspect-ratio: 16/9;
    width: 100%;
    border-radius: 8px;
    @include m.boxShadow(v.$red);
  }

}

.speaker {
  margin-block: 2.5rem;

  &-wrapper {
    
    .slider {
      display: flex;
      gap: 20px;
    }
  }


}
</style>