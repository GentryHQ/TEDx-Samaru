<script setup>
// import MarqueeComp from "../components/MarqueeComp.vue";
import FaqComp from '../components/FaqComp.vue'
import ButtonComp from '../components/ButtonComp.vue'
import SpeakerComp from '../components/SpeakerComp.vue'
</script>


<template>
 <main>
  <div class="hero">
   <div class="container">
    <h1><span>ReInvent</span> your Perspectives, Challenge the Status Quo.</h1>
    <p class="section-subhead">
     It’s not just ideas that change the world, but the audacity to bring them to life.
    </p>
    <div class="desktop">
     <ButtonComp route-name="register">Get Your Tickets</ButtonComp>
    </div>
    <div class="mobile">
     <ButtonComp route-name="register">Get Your Tickets</ButtonComp>
    </div>
   </div>
   <!-- <MarqueeComp :class="marc" /> -->
  </div>

  <div class="community">
   <div class="container">
    <h2 class="section-subhead">Take a glimpse view of <span>Samaru</span> community</h2>
    <p>In everyone of us lies the power to do great things from small places.</p>
    <div class="vidWrapper">
     <!-- https://www.youtube-nocookie.com/embed/20adDr7Felw?si=Wg9whmsmC_gA9Ntx -->
     <iframe
      class="video"
      src="https://www.youtube-nocookie.com/embed/oY_W_uQATng?si=FaVzwcV1mk15d_ex"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
     ></iframe>
    </div>
   </div>
  </div>

  <div class="about container">
   <div class="imgs">
    <img src="../assets/images/collaborate.png" alt="ted-banner" />
   </div>
   <div class="words">
    <h2><span>A collaborative </span> community of changemakers</h2>
    <p>
     A collaborative samaru community that has leaders who align their actions beyond the status
     quo, have amazing foresight, create positive change, and have built on ideas that is helping
     samaru adapt better for the future.
    </p>
    <div style="width: fit-content">
     <router-link :to="{ name: 'about' }" class="nBtn">
      Read more
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

  <div class="speaker">
   <div class="container">
    <h2>Meet our <span>seasoned</span> speakers</h2>
    <p class="announcement"></p>
    <div class="speaker-wrapper">
     <SpeakerComp :isSlider="true" />
     <router-link :to="{ name: 'speakers' }" class="nBtn">
      SEE ALL SPEAKERS
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

  <section class="sponsors">
      <div class="container">
        <div class="sponsors-wrapper">
          <div class="words">
            <h2>Become a
              <span>Sponsor</span>
            </h2>
            <p>As a sponsor, we’re promising reach to thousands of people who are interested in your brand. What better
              way to get your brand in front of people.</p>
            <router-link :to="{ name: 'contact' }" class="nBtn">
              CONTACT US
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.5 18.478L17.4779 6.50002L8.63909 6.50002L8.63909 5.00002L20.0386 5.00002L20.0386 16.3995H18.5386V7.56068L6.56066 19.5386L5.5 18.478Z"
                  fill="#EB0028" />
              </svg>
            </router-link>
          </div>

          <div class="imgs">
            <img src="/images/sponsors/1.png" alt="Sponsors">
            <img src="/images/sponsors/2.png" alt="Sponsors">
          </div>
        </div>
      </div>
    </section>

  <div></div>

  <div class="faq">
   <div class="container">
    <FaqComp />
   </div>
  </div>
  <!-- <div id="newsletter"></div> -->
 </main>
</template>


<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;

.desktop {
 display: block;
}

.mobile {
 display: none;
}

.announcement {
 margin-top: 20px;
}

.hero {
 position: relative;
 min-height: 100vh;
 background-image: url('../assets/images/Background.webp');
 background-position: center center;
 background-repeat: no-repeat;
 background-size: cover;
 padding-block: 80px;
 text-align: center;
 z-index: 1;
 color: v.$White;

 h1 {
  span {
   background-color: v.$primary-500;
   padding: 4px 8px;
   display: inline-block;
  }
 }

 .container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 70dvh;
  margin-block-end: 50px;
 }

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
  @include m.btn(v.$White, v.$black, v.$red, v.$red, v.$White, v.$White, v.$black);
 }
}

.community {
 margin-block: 100px 5rem;
 text-align: center;

 h2 {
  max-inline-size: 560px;
  margin-inline: auto;

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
  background-color: v.$primary-50;
 }
}

.speaker {
 margin-block: 80px;
 text-align: center;

 &-wrapper {
  margin-block-start: 2.5rem;
 }
}

.sponsors {
 margin-block: 5rem;

 &-wrapper {
  display: flex;
  flex-direction: row;
  gap: 32px;

  .words {
   flex-basis: 40%;

   h2 {
    margin-block-end: 1rem;
   }
  }

  .imgs {
   flex-basis: 60%;
   display: grid;
   gap: 24px;
   grid-template-columns: 1fr 1fr 1fr;
   justify-items: stretch;

   img {
    padding: 20px;
    border: 1px solid rgb(199, 199, 199);
    aspect-ratio: 1/1;
    object-fit: contain;
   }
  }
 }

 .nBtn {
  justify-content: start;
 }
}

.faq {
 margin-block: 5rem;
}

.section-subhead {
 margin-bottom: 32px;
}

.about {
 display: flex;
 width: 100%;
 padding: 40px;
 align-items: center;
 flex-direction: row;
 flex-wrap: wrap;

 .imgs {
  flex-basis: 40%;
  min-width: 400px;
  margin: auto;
 }

 .words {
  flex-basis: 60%;
  display: flex;
  padding: 80px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;

  h2 {
   color: #000;
   font-family: Inter;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   letter-spacing: -2.4px;
   margin-bottom: 20px;

   span {
    color: v.$primary-500;
   }
  }

  p {
   color: #000;
   font-family: Inter;
   font-style: normal;
   font-weight: 400;
   line-height: 160%; /* 25.6px */
  }
 }
}

@media screen and (max-width: 1000px) {
 .about {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 30px;

  .words {
   flex-basis: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   align-items: center;
   margin-bottom: 4rem;
   width: 100%;
   padding: 0;

   h2,
   p {
    text-align: center;
   }
  }

  .imgs {
   min-width: auto;
  }
 }
}

@media screen and (max-width: 500px) {
 .sponsors {
  &-wrapper {
   display: flex;
   flex-direction: column;
   gap: 32px;
  }
 }

 .desktop {
  display: none;
 }

 .mobile {
  display: block;
 }
}
</style>