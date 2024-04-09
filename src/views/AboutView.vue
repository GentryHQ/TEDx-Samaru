<template>
 <main>
  <div class="hero">
   <div class="container">
    <img class="experience" src="../assets/images/about-page/experience.png"/>
    <h1>Where <span> Ideas </span> come to life</h1>
   </div>
  </div>

  <div class="carousel-section">
   <div class="container">
    <div class="carousel-section-wrapper">
     <div class="words">
      <h4>About <span> TEDx </span> Samaru</h4>
      <h2><span> Inspiring </span> leaders who transcend the status quo</h2>

      <p>
       TEDx Samaru is an independently organized TED event that brings together thinkers,
       innovators, and change-makers from our local community and beyond.
      </p>
     </div>

     <AboutSlides :images="['/src/assets/images/about-page/auditorium.png']"> </AboutSlides>
    </div>
   </div>
  </div>

  <div class="statements-section">
   <div class="container">
    <div class="statements-wrapper">
     <div class="our-mission-card">
      <div class="words">
       <h4>Our Mission</h4>

       <h3><span>Inspiring</span> Leaders</h3>
       <p>
        To inspire leaders who transcend the status quo, envision future ideas, champion positive
        change, and cultivate a collaborative community that nurtures ideas for the present and
        drives Samaru towards a brighter future.
       </p>
      </div>
     </div>

     <div class="our-vision-card">
      <div class="words">
       <h4>Our Vision</h4>

       <h3><span>Collaborative</span> Samaru community</h3>
       <p>
        A collaborative Samaru community that has leaders that align their actions beyond the status
        quo, have amazing foresight, create positive change, and have built on ideas that are
        helping Samaru adapt into the future for the better.
       </p>
      </div>
     </div>
    </div>
   </div>
  </div>

  <div class="reinvent-section">
   <div class="container">
    <div class="reinvent-section-wrapper">
     <div>
      <img src="../assets/images/about-page/reinvent-graphics.svg" />
      <p>Paving the way for innovative thinking and progress.</p>

      <ButtonComp class="btn">Register</ButtonComp>
     </div>

     <div class="masked-hall">
      <img src="../assets/images/about-page/masked-hall.png" />
     </div>
    </div>
   </div>
   <div></div>
  </div>

  <div class="why-attend-section">
   <div class="container">
    <h2>Why Attend <span> Tedx</span> Samaru</h2>

    <div class="why-attend-section-wrapper">
     <WhyAttendCard
      :iconSrc="'/src/assets/images/about-page/microphone-icon.svg'"
      title="Inspiring Talks and Performances:"
      description="You'll have the opportunity to hear from a diverse lineup of speakers and performers who will share their unique ideas, stories, and talents. From thought-provoking talks to captivating performances, each presentation is designed to inspire, educate, and entertain. This rich exchange of ideas can spark your creativity and open up new ways of thinking."
      :link="{ name: 'home' }"
      buttonText="Register Now"
     ></WhyAttendCard>

     <WhyAttendCard
      :iconSrc="'/src/assets/images/about-page/stack-icon.svg'"
      title="Personal Growth and Development:"
      description="By attending TEDx Samaru, you'll have the chance to expand your horizons, challenge your assumptions, and broaden your perspective on a wide range of topics. Whether you're interested in technology, entertainment, design, or social issues, you'll find something at TEDx Samaru that will stretch your mind and inspire new ways of thinking."
      :link="{ name: 'home' }"
      buttonText="Register Now"
     ></WhyAttendCard>
    </div>
    <div class="why-attend-section-wrapper">
     <!-- <SpeakerComp :isSlider="false"></SpeakerComp> -->
     <WhyAttendCard
      :iconSrc="'/src/assets/images/about-page/stack-icon.svg'"
      title="Inspiration to Act:"
      description="Many attendees leave TEDx events feeling motivated and empowered to make a difference in their communities or in their personal or professional lives. The stories of innovation, overcoming challenges, and creative thinking can serve as a powerful catalyst for action. The inspiration from TEDx Samaru can be the driving force you need to change your life."
      :link="{ name: 'home' }"
      buttonText="Register Now"
     ></WhyAttendCard>
     <WhyAttendCard
      :iconSrc="'/src/assets/images/about-page/microphone-icon.svg'"
      title="Networking Opportunities:"
      description="Attending TEDx Samaru allows you to connect with like-minded individuals who are also eager to learn and engage with new ideas. The event provides a platform for attendees to meet, discuss their interests and experiences, and potentially collaborate on future projects. This networking can be incredibly valuable for professional and personal growth."
      :link="{ name: 'home' }"
      buttonText="Register Now"
     ></WhyAttendCard>
    </div>
   </div>
  </div>
  <div class="organizing-team">
   <div class="container">
    <h2>Meet The <span> Organizing</span> Team</h2>
    <p>
     TEDx Samaru is organized and run by a dedicated team of volunteers who are passionate about
     ideas and their potential to make a difference.
    </p>
    <div class="organizing-team-wrapper">
     <SpeakerComp :isSlider="false"></SpeakerComp>
    </div>
    <ButtonComp class="btn">Register</ButtonComp>
   </div>
  </div>

  <section class="about-tedx-section">
   <div class="container">
    <div class="about-tedx-section-wrapper">
     <div class="imgs">
      <img src="../assets/images/about-page/ted-banner.png" alt="ted-banner" />
     </div>
     <div class="words">
      <h4>About TEDx</h4>
      <h2><span> Ideas </span> worth sharing</h2>
      <p>
       To inspire leaders who transcend the status quo, envision future ideas, champion positive
       change, and cultivate a collaborative community that nurtures ideas for the present and
       drives Samaru towards a brighter future.
      </p>
      <div style="width: fit-content">
       <router-link :to="{ name: 'home' }" class="nBtn">
        Learn more
        <svg
         width="25"
         height="24"
         viewBox="0 0 25 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          d="M5.5 18.478L17.4779 6.50002L8.63909 6.50002L8.63909 5.00002L20.0386 5.00002L20.0386 16.3995H18.5386V7.56068L6.56066 19.5386L5.5 18.478Z"
          fill="#EB0028"
         />
        </svg>
       </router-link>
      </div>
     </div>
    </div>
   </div>
  </section>

  <div class="faq">
   <div class="container">
    <FaqComp />
   </div>
  </div>
 </main>
</template>

<script setup>
import FaqComp from '../components/FaqComp.vue'
import SpeakerComp from '../components/SpeakerComp.vue'
import AboutSlides from '@/components/AboutSlides.vue'
import WhyAttendCard from '@/components/WhyAttendCard.vue'
import ButtonComp from '../components/ButtonComp.vue'
</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;

.experience {
  margin-bottom: 20px;
}

.hero {
 position: relative;
 min-height: 400px;
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

.carousel-section {
 background-color: v.$White;
 padding-block: 80px;

 .carousel-section-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
 }

 .logos {
  display: flex;
 }

 .btn {
  // This mixin is for button, see in css/mixin.scss
  @include m.btn(v.$White, v.$black, v.$red, v.$red, v.$White, v.$White, v.$black);
 }

 p {
  color: v.$black;
  font-size: 18px;
  font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on, 'ss06' on, 'ss05' on, 'ss04' on, 'ss03' on, 'ss02' on;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
 }
 .words {
  h2 {
   width: 60%;
  }
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
 }

 @media screen and (max-width: 768px) {
  .carousel-section-wrapper {
   flex-direction: column; /* Change to column layout for smaller screens */
  }

  .words {
   h2 {
    width: 100%; /* Make h2 span full width on smaller screens */
   }
   width: 100%; /* Make words container span full width on smaller screens */
  }
 }
}

.statements-section {
 margin-block: 5rem;

 .statements-wrapper {
  display: flex;
  flex-wrap: wrap; /* Change to wrap for smaller screens */
  gap: 32px;

  .words {
   display: flex;
   flex-direction: column;
   gap: 1rem;
   p {
    font-size: 16px;
   }
   h3 {
    font-size: 24px;
   }
   h4 {
    font-size: 20px;
   }
  }

  .our-mission-card,
  .our-vision-card {
   width: calc(50% - 16px);
   padding: 30px;
   border-left: solid;
   border-width: thick;
  }

  .our-vision-card {
   border-left-color: v.$primary-500;
  }

  @media screen and (max-width: 768px) {
   .our-mission-card,
   .our-vision-card {
    width: 100%;
    border-left: none;
    border-top: solid;
    border-width: thick;
    padding: 30px;
    border-color: inherit;
   }
   .our-vision-card {
    border-top-color: v.$primary-500;
   }
  }
 }
}

.reinvent-section {
 background-color: v.$primary-50;
 padding: 5rem;
 text-align: left;

 p {
  margin-block: 20px 48px;
 }
 margin-block: 2.5rem;
 text-align: center;

 h2 {
  span {
   font-weight: inherit;
   color: v.$primary-500;
  }
 }

 .reinvent-section-wrapper {
  margin-block-start: 2.5rem;
  display: flex;
  flex-wrap: nowrap;
  gap: 32px;
  text-align: justify;
 }

 @media screen and (max-width: 768px) {
  padding: 2rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  .masked-hall {
   display: none;
  }
 }
}

.why-attend-section {
 padding: 5rem;
 text-align: center;

 p {
  margin-block: 20px 48px;
  font-size: 16px;
 }

 margin-block: 2.5rem;
 text-align: center;

 h2 {
  span {
   font-weight: inherit;
   color: v.$primary-500;
  }
 }

 .why-attend-section-wrapper {
  margin-block-start: 2.5rem;
  display: flex;
  gap: 30px;
 }
}

@media screen and (max-width: 768px) {
 .why-attend-section {
  padding: 0;
  padding-top: 6rem;
  padding-bottom: 6rem;
  &-wrapper {
   flex-direction: column;
   gap: 20px;
  }
 }
}

.organizing-team {
 background-color: v.$primary-50;
 padding: 5rem;
 text-align: center;
 display: flex;
 flex-direction: column;
 gap: 10px;
 p {
  margin-block: 20px 48px;
 }

 margin-block: 2.5rem;
 text-align: center;

 h2 {
  span {
   font-weight: inherit;
   color: v.$primary-500;
  }
 }

 &-wrapper {
  margin-block-start: 2.5rem;

  display: grid;
  gap: 1.875rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: start;
  justify-content: space-between;
  margin-bottom: 68px;
 }
}
@media screen and (max-width: 768px) {
 .organizing-team {
  padding-top: 6rem;
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  &-wrapper {
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .btn {
   margin-top: 2rem;
  }
 }
}

.about-tedx-section {
 margin-block: 5rem;

 &-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;

  .words {
   margin-block: 20px 48px;
   flex-basis: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   align-content: center;
   margin-bottom: 4rem;
  }
 }

 @media screen and (min-width: 768px) {
  .about-tedx-section {
   padding-top: 6rem;
   padding-bottom: 6rem;
  }
  .about-tedx-section-wrapper {
   flex-direction: row;
  }

  .about-tedx-section-wrapper .imgs {
   flex-basis: 40%;
  }

  .about-tedx-section-wrapper .words {
   flex-basis: 60%;
  }
 }
}

span {
 font-weight: inherit;
 color: v.$primary-500;
}
.faq {
 margin-block: 5rem;
}

.will-you-be-there-section {
 background-color: v.$primary-50;
 padding: 5rem;
 text-align: center;
 display: flex;
 flex-direction: column;
 gap: 10px;
 p {
  margin-block: 20px 48px;
 }

 margin-block: 2.5rem;
 text-align: center;

 h2 {
  span {
   font-weight: inherit;
   color: v.$primary-500;
  }
 }
}
@media screen and (max-width: 768px) {
 .will-you-be-there-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
 }
}
</style>