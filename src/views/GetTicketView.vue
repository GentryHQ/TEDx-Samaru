<template>
 <div>
  <div class="hero">
   <div class="container">
    <img class="experience" src="../assets/images/about-page/experience.png" />
    <h1>Get Your Ticket Now</h1>
    <p>
     Join us at TEDx Samaru for a day of inspiration and connection. Please fill out the form below
     to secure your ticket
    </p>
   </div>
  </div>
  <div class="get-tickets-section">
   <div class="container">
    <div class="wrapper">
     <DetailsForm
      v-show="current_step == 1"
      @next="
       (e) => {
        customerDetails = e
        current_step++
       }
      "
     ></DetailsForm>
     <div class="tickets-wrapper" v-show="current_step == 2">
      <Ticket
       v-for="ticket in tickets"
       :key="ticket.id"
       :ticket="ticket"
       @get-ticket="
        (e) => {
         ticketToGet = e
         showModal = true
        }
       "
      ></Ticket>
     </div>
     <div class="step-container">
      <span :class="current_step == 1 ? 'current-step-indicator' : 'step-indicator'"> </span>
      <span :class="current_step == 2 ? 'current-step-indicator' : 'step-indicator'"> </span>
      <span :class="current_step == 3 ? 'current-step-indicator' : 'step-indicator'"> </span>
     </div>
    </div>
   </div>
  </div>
  <Modal :show="showModal" @update:show="showModal = $event">
   <div class="modal-content">
    <img :src="'/src/assets/images/tickets/' + ticketToGet.ticket_img_name" />
    <p>Confirm and Purchase.</p>

    <p>Review your details before completing your purchase:</p>

    <div class="list">
     <div class="list-item">
      <p class="list-item-title">Full Name</p>
      <p>{{ customerDetails.firstName + customerDetails.lastName }}</p>
     </div>
     <div class="list-item">
      <p class="list-item-title">Email</p>
      <p>{{ customerDetails.email }}</p>
     </div>
     <div class="list-item">
      <p class="list-item-title">Phone Number</p>
      <p>{{ customerDetails.phoneNumber }}</p>
     </div>
    </div>
   </div>
   <template #actions>
    <button class="cancel-btn" @click="showModal = false">Cancel</button>
    <button class="confirm-btn" @click="confirmAction">Confirm and Purchase</button>
   </template>
  </Modal>
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
     <ButtonComp @click="handleDownload" route-name="sponsors"
      >DOWNLOAD SPONSORSHIP DETAILS</ButtonComp
     >
    </div>
   </div>
  </div>
  <div class="why-sponsor-tedx-section">
   <div class="container">
    <h2>Why <span> Sponsor TEDx</span> Samaru?</h2>
    <p>
     As a sponsor, your brand would be strategically positioned to meet a percentage of your target
     audience - a healthy mixture of people who are familiar with your product and an introduction
     to a fresh market. A one way ticket to get your brand in the eyes of your desired consumers.
    </p>
    <div class="why-sponsor-tedx-section-wrapper">
     <div class="card">
      <div class="words">
       <h2>Increase brand awareness</h2>
       <p>
        TEDx Samaru is positioned to engage thousands of people online and offline which include key
        buyers from leading industry brands/ adjacent markets and a wide range of potential
        customers
       </p>
       <p>Partnering with us will position you right before your target audience.</p>
      </div>
     </div>
     <div class="card thought-leader-card">
      <div class="words">
       <h2>Be seen as a thought leader</h2>
       <p>
        Our various sponsorship packages elevate your brand by associating it with the TEDx Samaru
        community thereby increasing your buyer persona
       </p>
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
import { reactive, ref } from 'vue'

import ButtonComp from '../components/ButtonComp.vue'
import Ticket from '../components/tickets/Ticket.vue'
import DetailsForm from '../components/tickets/DetailsForm.vue'
import SponsorshipPerkCard from '../components/SponsorshipPerkCard.vue'
import FaqComp from '../components/FaqComp.vue'
import Modal from '../components/Modal.vue'

const downloadUrl =
 'https://drive.google.com/file/d/1opNM-JC01wNtnQCNyWccZL6qVAcj2m9Q/view?usp=drivesdk'

const handleDownload = () => {
 const link = document.createElement('a')
 link.href = downloadUrl
 link.setAttribute('download', '')
 link.click()
}

const current_step = ref(1)
const ticketToGet = reactive({})
const customerDetails = reactive({})
const showModal = ref(false)

const tickets = reactive([
 {
  id: 1,
  ticket_img_name: 'ticket-1.png',
  ticket_title: 'Standard Ticket',
  ticket_price: 5000,
  ticket_full_price: 8000,
  ticket_perks: [
   'Hand Band',
   'Jotter',
   'Pen',
   'Standard Level Refreshment',
   'Networking opportunities'
  ]
 },
 {
  id: 2,
  ticket_img_name: 'ticket-2.png',
  ticket_title: 'Premium Ticket',
  ticket_price: 8000,
  ticket_full_price: 10000,
  ticket_perks: [
   'Everything in Standard plus:',
   'Digital Certificate of Attendance.',
   'Premium Level Refreshment.',
   'Entrance into raffle draw sponsored by one of our sponsors.',
   'Paper Bag.',
   'Premium Seating Space.'
  ]
 },
 {
  id: 3,
  ticket_img_name: 'ticket-3.png',
  ticket_title: 'Executive Plan',
  ticket_price: 12000,
  ticket_full_price: 15000,
  ticket_perks: [
   'Everything in Premium plus:',
   'Executive Level Refreshment.',
   'Calligraphed Certificate.',
   'Tote Bag',
   'Executive Seating Space.',
   'Event Brochure.'
  ]
 },
 {
  id: 4,
  ticket_img_name: 'ticket-4.png',
  ticket_title: 'Supporters',
  ticket_price: 30000,
  ticket_perks: [
   'Everything in Executive Ticket plus:',
   'Special shout out.',
   'Part of post event publication.',
   'Exclusive access to the VIP lounge',
   'Personalize note.',
   'A merch.',
   'Brand logo on our banner.',
   'A Pop Up Booth.'
  ]
 }
])
</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;

span {
 font-weight: inherit;
 color: v.$primary-500;
}
.step-container {
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 50%;
 margin-left: auto;
 margin-right: auto;

 .current-step-indicator {
  border: solid;
  border-radius: 2rem;
  color: v.$primary-500;
  width: 30%;
 }
 .step-indicator {
  border: solid;
  border-radius: 2rem;
  color: v.$primary-100;
  width: 30%;
 }
 .step-indicator-1 {
  border: solid;
  border-radius: 2rem;
  color: v.$primary-500;
  width: 30%;
 }
 .step-indicator-2 {
  border: solid;
  border-radius: 2rem;
  color: v.$primary-500;
  width: 30%;
 }
 .step-indicator-3 {
  border: solid;
  border-radius: 2rem;
  color: v.$primary-500;
  width: 30%;
 }
}
.faq {
 margin-block: 5rem;
}

.contact-details-form {
 display: flex;
 flex-direction: column;
 margin-left: auto;
 margin-right: auto;

 .contact-form > *:not(:last-child) {
  margin-bottom: 1.25rem; /* 20px */
 }
 .input-group {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
 }
}

.wrapper {
 margin-block: 20px 48px;
 padding: 3rem;
 display: flex;
 flex-direction: column;
 gap: 2rem;
}
.hero {
 position: relative;
 min-height: 400px;
 background-image: url('../assets/images/sponsors-page/event-hall.png');
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
 .container {
  margin-left: auto;
  margin-right: auto;
 }
}
.confirm-btn {
 width: 100%;
 text-align: center;
 @include m.btn(v.$White, v.$black, v.$red, v.$red, v.$White, v.$White, v.$black);
}
.cancel-btn {
 text-align: center;
}

.get-tickets-section {
 background-color: v.$primary-50;
 padding: 5rem;
 text-align: start;
 .tickets-wrapper {
  display: flex;

  align-items: start;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(2, 1fr);
 }

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