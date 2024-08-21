<template>
 <div>
  <div class="hero">
   <div class="words">
    <h1>Become a Sponsor at <span> TEDx Samaru </span></h1>
    <p>
     Join a family of bold thinkers and revolutionary brands who are igniting change and
     reinvention.
    </p>
    <ButtonComp @click="handleDownload" class="btn" route-name="contact">Get Started</ButtonComp>
   </div>
  </div>
  <div class="sponsor-text-section">
   <div class="container">
    <p>
     Welcome to TEDx Samaru, where innovation meets inspiration, and reinvention is not just a
     concept but a way of life. We invite you to join us on this transformative journey as we
     redefine the boundaries of human potential and push the limits of conventional thinking.
    </p>
    <p>
     Our Partners and Sponsors are a community of forward thinkers and top brands who are ready to
     reinvent the status quo and are defying all odds to make a difference on the grand stage.
    </p>
   </div>
  </div>

  <div class="become-a-sponsor-section">
   <div class="container">
    <h2>Become A <span> Sponsor </span> Today</h2>
    <p>
     Ready to take your brand to the next level? Become a sponsor of TEDx Samaru and join us in
     igniting innovation and inspiring change.
    </p>
    <div class="perks-card-wrapper">
     <SponsorshipPerkCard
      :text="'Stage Recognition'"
      :icon-src="'/images/sponsors-page/perk-cards-icons/Icon1.png'"
     ></SponsorshipPerkCard>
     <SponsorshipPerkCard
      :text="'Partner Ticket'"
      :icon-src="'/images/sponsors-page/perk-cards-icons/Icon2.png'"
     ></SponsorshipPerkCard>
     <SponsorshipPerkCard
      :text="'Logo placement on conference Website and Landing Pages'"
      :icon-src="'/images/sponsors-page/perk-cards-icons/Icon3.png'"
     ></SponsorshipPerkCard>
     <SponsorshipPerkCard
      :text="'Logo placement on digital materials '"
      :icon-src="'/images/sponsors-page/perk-cards-icons/Icon4.png'"
     ></SponsorshipPerkCard>
     <SponsorshipPerkCard
      :text="'Booth Space'"
      :icon-src="'/images/sponsors-page/perk-cards-icons/Icon5.png'"
     ></SponsorshipPerkCard>
     <SponsorshipPerkCard
      :text="'Logo placement on speaker videos'"
      :icon-src="'/images/sponsors-page/perk-cards-icons/Icon6.png'"
     ></SponsorshipPerkCard>
     <SponsorshipPerkCard
      :text="'Promotional materials in conference souvenir'"
      :icon-src="'/images/sponsors-page/perk-cards-icons/Icon7.png'"
     ></SponsorshipPerkCard>
     <SponsorshipPerkCard
      :text="'Customized Breakout session'"
      :icon-src="'/images/sponsors-page/perk-cards-icons/Icon8.png'"
     ></SponsorshipPerkCard>
     <SponsorshipPerkCard
      :text="'Activation & Lots more'"
      :icon-src="'/images/sponsors-page/perk-cards-icons/Icon9.png'"
     ></SponsorshipPerkCard>
    </div>

    <div class="btn">
     <ButtonComp @click="handleDownload" route-name="sponsors">DOWNLOAD SPONSORSHIP DETAILS</ButtonComp>
    </div>
   </div>
  </div>
  <div class="why-sponsor-tedx-section">
   <div class="container">
    <h2>Why <span> Sponsor TEDx</span> Samaru?</h2>
    <p>
        As a sponsor, your brand would be strategically positioned to meet a percentage of your target audience - a healthy mixture of people who are familiar with your product and an introduction to a fresh market. A one way ticket to get your brand in the eyes of your desired consumers.
    </p>
    <div class="why-sponsor-tedx-section-wrapper">
     <div class="card">
      <div class="words">
       <h2>Increase brand awareness</h2>
       <p>
        TEDx Samaru is positioned to engage thousands of people online and offline which include key buyers from leading industry brands/ adjacent markets and a wide range of potential customers
       </p>
       <p>Partnering with us will position you right before your target audience.</p>
      </div>
     </div>
     <div class="card thought-leader-card">
      <div class="words">
       <h2>Be seen as a thought leader</h2>
       <p>Our various sponsorship packages elevate your brand by associating it with the TEDx Samaru community thereby increasing your buyer persona</p>
      </div>
     </div>
    </div>
    <div class="end-note-wrapper">
     <div class="why-sponsor-tedx-section-end-note">
      <p>
       We are here to build a meaningful experience for you, and we can help your company achieve
       your marketing goals through experiential in-person and virtual events.
      </p>
      <h3><span>SOUND LIKE AN INCREDIBLE OPPORTUNITY FOR YOUR BRAND?</span></h3>
     </div>
    </div>

    <div class="btn">
     <ButtonComp route-name="contact">BECOME A SPONSOR</ButtonComp>
    </div>
   </div>
  </div>
  <div class="sponsor-imgs">
    <img src="/images/sponsors/1.png" alt="Sponsors">
    <img src="/images/sponsors/2.png" alt="Sponsors">
  </div>

  <div class="endNote">
   <div class="container">
    <h2>The Reinvention journey has begun. Will you be a pioneer on this path?</h2>
   </div>
  </div>
  <div class="faq">
   <div class="container">
    <FaqComp />
   </div>
  </div>
 </div>
</template>

<script setup>
import ButtonComp from '../components/ButtonComp.vue'
import SponsorshipPerkCard from '../components/SponsorshipPerkCard.vue'
import FaqComp from '../components/FaqComp.vue'

const downloadUrl = 'https://drive.google.com/file/d/1opNM-JC01wNtnQCNyWccZL6qVAcj2m9Q/view?usp=drivesdk';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.setAttribute('download', '');
  link.click();
};
</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;

.sponsor-imgs {
   flex-basis: 100%;
   display: grid;
   grid-template-columns: 1fr 1fr;
   justify-items: center;
   align-items: center;
   margin-bottom: 40px;

 img {
    padding: 20px;
    border: 1px solid rgb(199, 199, 199);
    aspect-ratio: 1/1;
    object-fit: contain;
    width: 30%
  }
}

span {
 font-weight: inherit;
 color: v.$primary-500;
}
.faq {
 margin-block: 5rem;
}
.hero {
 position: relative;
 min-height: 100vh;
 background-image: url('../assets/images/sponsors-page/event-hall.png');
 background-position: center center;
 background-repeat: no-repeat;
 background-size: cover;
 text-align: start;
 display: flex;
 flex-direction: row;
 justify-content: start;
 align-items: center;
 padding: 5rem;
 z-index: 1;
 color: v.$White;
 .words {
  width: 50%;
 }
 @media screen and (max-width: 768px) {
  padding: 2rem;

  .words {
   width: 100%;
  }
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

.sponsor-text-section {
 background-color: v.$primary-50;
 padding: 5rem;
 text-align: start;

 p {
  margin-block: 20px 48px;
 }
 @media screen and (max-width: 768px) {
  padding: 2rem;
 }
}
.endNote {
 background-color: v.$primary-900;
 padding: 9rem;
 text-align: center;
 color: v.$White;

 p {
  margin-block: 20px 48px;
 }
 @media screen and (max-width: 768px) {
  padding: 9rem 0rem;
 }
}
.become-a-sponsor-section {
 padding: 5rem;
 text-align: start;
 .btn {
  margin-top: 2rem;
  text-align: center;
 }

 p {
  margin-block: 20px 48px;
 }
 .perks-card-wrapper {
  margin-block-start: 1.75rem;
  display: grid;
  gap: 1.875rem;
  align-items: start;

  grid-template-columns: repeat(3, 1fr);
 }
 @media screen and (max-width: 768px) {
  .perks-card-wrapper {
   display: flex;
   flex-direction: column;
  }
 }

 @media screen and (max-width: 768px) {
  padding: 1rem;
 }
}
.why-sponsor-tedx-section {
 @media screen and (max-width: 768px) {
  padding: 2rem 0rem;
 }

 .btn {
  margin-top: 2rem;
  text-align: center;
 }
 padding: 5rem;
 text-align: start;
 p {
  margin-block: 20px 48px;
 }
 .end-note-wrapper {
  padding: 3rem;
  @media screen and (max-width: 768px) {
   padding: 0rem;
   text-align: start;
  }
 }
 .why-sponsor-tedx-section-end-note {
  h3 {
   text-align: center;
   font-weight: bold;
  }
  padding: 2rem;
  border-bottom: solid;
  border-width: 0.5rem;
  border-bottom-color: v.$black;
  @media screen and (max-width: 768px) {
   padding: 2rem 0rem;
   text-align: start;
   border-width: 1rem;
  }
 }
 .words {
  h2 {
   color: v.$primary-500;
  }
 }
 &-wrapper {
  display: flex;
  padding: 5rem;
  flex-wrap: nowrap;
  gap: 32px;
  text-align: center;
  .card {
   width: calc(50% - 16px);
   padding: 30px;
   border-left: solid;
   border-width: 0.5rem;
   border-left-color: v.$black;
  }

  @media screen and (max-width: 768px) {
   flex-direction: column;
   padding: 0rem;
   .card {
    width: 100%;
    border-left: solid;
    border-width: thick;
    padding: 1rem;
    border-color: inherit;
    text-align: start;
   }
   .thought-leader-card {
    border-left-color: v.$primary-500;
   }
   .card {
    border-top-color: v.$black;
   }
  }
 }
 @media screen and (max-width: 768px) {
  padding: 2rem 0rem;
  text-align: start;
 }
}
</style>