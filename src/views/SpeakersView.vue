<template>
 <div class="speaker">
  <div class="container">
   <h1>Unlocking Potential: Industry Leaders Share Strategies</h1>
   <p>
    Where ideas collide. Join us for a day of thought-provoking talks that challenge the status quo.
   </p>

   <div class="images">
    <img class="small-screen-image" src="../assets/images/speakers-page/stage-1.png" />
    <span class="large-screen-images-wrapper">
     <img src="../assets/images/speakers-page/stage-1.png" />
     <img src="../assets/images/speakers-page/stage-2.png" />
     <img src="../assets/images/speakers-page/stage-3.png" />
    </span>
   </div>
  </div>
 </div>
 <div class="location-info-section">
  <div class="container">
   <div class="location-info-wrapper">
    <div class="event-date-card">
     <h3>🥂One Day of Awesomeness</h3>
     <h2>AUGUST</h2>
     <h1>10TH, 2024</h1>
     <p>We will be making history, once again, with you</p>

     <ButtonComp class="button" />
    </div>
    <div class="event-venue-card">
     <img src="../assets/images/speakers-page/auditorium.png" />
     <h3>We will be at the</h3>

     <p>Centre of excellence Ahmadu Bello University, Zaria.</p>
    </div>
   </div>
  </div>
 </div>

 <div class="speakers">
  <div class="container">
   <h2>Our Speakers for this event</h2>
   <div class="wrapper">
    <SpeakerComp :isSlider="false" />
   </div>
   <ButtonComp class="button" />
  </div>
 </div>

 <div class="faq">
  <div class="container">
   <div class="">
    <FaqComp />
   </div>
  </div>
 </div>
</template>


<script setup>
import FaqComp from '../components/FaqComp.vue'

import ButtonComp from '../components/ButtonComp.vue'
import SpeakerComp from '../components/SpeakerComp.vue'
</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;
.speaker {
 padding-block: 5rem;
 text-align: center;

 p {
  max-width: 37.5rem;
  margin-inline: auto;
 }

 .button {
  margin-block-start: 1.25rem;
 }
 .images {
  display: flex;
  flex-direction: row;
  gap: 5rem;
  justify-content: center;
  margin-top: 2rem;
  .large-screen-images-wrapper {
   display: flex;
   gap: 2rem;
  }
  .small-screen-image {
   display: none;
  }

  @media screen and (max-width: 768px) {
   .large-screen-images-wrapper {
    display: none;
   }
  }
 }
}
.speakers {
 text-align: center;
 .wrapper {
  margin-block-start: 1.75rem;
  display: grid;
  gap: 1.875rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: start;
  justify-content: space-between;
 }
}

.location-info-section {
 padding-block: 5rem;
 text-align: justify;

 .location-info-wrapper {
  display: flex;
  flex-direction: row;
  gap: 5rem;
  justify-content: center;
  margin-top: 2rem;

  .event-date-card {
   background-color: v.$black;
   color: v.$White;
   margin-block: 20px 48px;
   padding: 2rem;
  }
  .event-venue-card {
   background-color: v.$primary-50;
   margin-block: 20px 48px;
   padding: 2rem;
  }
 }

 p {
  max-width: 37.5rem;
  margin-inline: auto;
 }

 .button {
  margin-block-start: 1.25rem;
 }
 @media screen and (max-width: 768px) {
  .location-info-wrapper {
   flex-direction: column;
  }
 }
}

.faq {
 margin-block: 5rem;
}

// Media Query
@media screen and (min-width: 1024px) {
 .wrapper {
  grid-template-columns: repeat(4, 1fr);
 }
}
</style>