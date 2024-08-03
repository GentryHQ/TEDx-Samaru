<template>
 <div>
  <div class="hero">
   <div class="container">
    <img class="experience" src="../assets/images/about-page/experience.png" />
    <h1 class="register-title">Sold Out</h1>
    <CountdownClock :targetDate="newYearDate"></CountdownClock>
    <p class="ticket-p">
     Countdown to the Event.
     Join us at TEDx Samaru for a day of inspiration and connection.
    </p>
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
import { v4 as uuidv4 } from 'uuid'

import Ticket from '../components/getTicketsPage/Ticket.vue'
import DetailsForm from '../components/getTicketsPage/DetailsForm.vue'
import FaqComp from '../components/FaqComp.vue'
import Modal from '../components/Modal.vue'
import CountdownClock from '../components/CountdownClock.vue'

const current_step = ref(1)
let ticketToGet = reactive({})
let customerDetails = reactive({})
let showModal = ref(false)

let showPaymentFailedModal = ref(false)
let showPaymentRedirectModal = ref(false)
let paymentUrl = ref('')

const newYearDate = ref(new Date('2024-08-10T00:00:00'))
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
  width: 45%;
 }
 .step-indicator {
  border: solid;
  border-radius: 2rem;
  color: v.$primary-100;
  width: 45%;
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

.modal-content {
 .confirmation-text {
  p {
   font-size: 1rem;
  }
  h4 {
   font-weight: bold;
  }
 }
 .list {
  .list-item {
   .list-item-title {
    font-size: 1rem;
    font-weight: 400;
   }
   p {
    font-size: 1.25rem;
    font-weight: 500;
   }
  }
 }
 .modal-content > *:not(:last-child) {
  margin-bottom: 1.25rem; /* 20px */
 }
 .list > *:not(:last-child) {
  margin-bottom: 1.25rem; /* 20px */
 }
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

.ticket-p {
 width: 90%;
 text-align: center;
 margin: auto;
 margin-top: 20px;
}

.wrapper {
 margin-block: 20px 48px;
 padding: 3rem;
 display: flex;
 flex-direction: column;
 gap: 2rem;
 @media screen and (max-width: 768px) {
  padding: 1rem;
  padding-left: 0%;
  padding-right: 0%;
 }
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
  @media screen and (max-width: 768px) {
   padding-inline: 0rem;
  }
 }
}
.confirm-btn {
 width: 100%;
 text-align: center;
 @include m.btn(v.$White, v.$black, v.$red, v.$red, v.$White, v.$White, v.$black);
}
.cancel-btn {
 text-align: center;
 font-style: normal;
 border: 1px solid gray;
 border-radius: 0.5rem;
 width: 30%;
 text-transform: uppercase;
 background-color: #f6f6f6;
 transition: all 0.5s ease-in-out;
 &:hover,
 &:focus {
  background-color: #fafafa;
  color: black;
 }
}
.outlined-btn {
 text-align: center;
 font-style: normal;
 border: 1px solid gray;
 border-radius: 0.5rem;
 width: 100%;
 text-transform: uppercase;
 background-color: #f6f6f6;
 transition: all 0.5s ease-in-out;
 &:hover,
 &:focus {
  background-color: #fafafa;
  color: black;
 }
 @include m.btn(v.$White, v.$black, v.$red, v.$red, v.$White, v.$White, v.$black);
}

.get-tickets-section {
 background-color: v.$primary-50;
 padding: 5rem;
 text-align: start;

 @media screen and (max-width: 768px) {
  padding: 1rem;
  padding-left: 0%;
  padding-right: 0%;
 }

 .descriptions {
  text-align: center;
  margin-bottom: 40px;
  h2 {
   font-size: x-large;
  }
 }
 .tickets-wrapper {
  margin-block-start: 1.75rem;
  display: grid;
  gap: 1.875rem;
  align-items: center;
  justify-content: center;

  grid-template-columns: repeat(2, 500px);
  @media screen and (max-width: 768px) {
   display: flex;
   flex-direction: column;
  }
 }

 p {
  margin-block: 20px 48px;
 }
}
.register-title {
 margin-top: 20px;
 color: v.$red
}

.success-modal-header-text {
 h3 {
  font-weight: bold;
 }
}
</style>