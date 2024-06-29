<template>
 <div>
  <div class="hero">
   <div class="container">
    <img class="experience" src="../assets/images/about-page/experience.png" />
    <h1>Get Your Ticket Now</h1>
    <CountdownClock :targetDate="newYearDate"></CountdownClock>
    <p>
     Join us at TEDx Samaru for a day of inspiration and connection. Please fill out the form below
     to secure your ticket
    </p>
   </div>
  </div>
  <div class="get-tickets-section">
   <div class="container">
    <div class="wrapper">
     <div v-show="current_step == 1">
      <div class="descriptions">
       <h2>Personal Information</h2>
       <p>Tell us a bit about yourself</p>
      </div>

      <DetailsForm
       @next="
        (e) => {
         customerDetails = e
         current_step++
        }
       "
      ></DetailsForm>
     </div>

     <div class="tickets" v-show="current_step == 2">
      <div class="descriptions">
       <h2>Select Your Ticket Type</h2>
       <p>Choose the type of ticket that best suits you:</p>
      </div>
      <div class="tickets-wrapper">
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
     </div>

     <div class="payment-success" v-show="current_step == 3">
      <PaymentSuccessful :purchasedTicket="ticketToGet"></PaymentSuccessful>
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
    <div class="confirmation-text">
     <h4>Confirm and Purchase.</h4>

     <p>Review your details before completing your purchase:</p>
    </div>

    <div class="list">
     <div class="list-item">
      <h4 class="list-item-title">Full Name</h4>
      <p>{{ customerDetails.firstName + customerDetails.lastName }}</p>
     </div>
     <div class="list-item">
      <h4 class="list-item-title">Email</h4>
      <p>{{ customerDetails.email }}</p>
     </div>
     <div class="list-item">
      <h4 class="list-item-title">Phone Number</h4>
      <p>{{ customerDetails.phoneNumber }}</p>
     </div>
    </div>
   </div>
   <template #actions>
    <button class="cancel-btn" @click="showModal = false">Cancel</button>
    <button class="confirm-btn" @click="makePayment()">
     <!-- @click="
      () => {
       showModal = false
       showPaymentSuccessModal = true
      }
     " -->
     Confirm and Purchase
    </button>
   </template>
  </Modal>
  <Modal :show="showPaymentFailedModal" @update:show="showPaymentFailedModal = $event">
   <div class="modal-content">
    <div class="success-modal-header-text">
     <h3>Something Went Wrong</h3>
    </div>

    <div class="confirmation-text">
     <h4>Please Check Your Details And Try Again</h4>
    </div>
   </div>
   <template #actions>
    <button
     class="outlined-btn"
     @click="
      () => {
       showModal = false
       showPaymentFailedModal = false
       current_step--
      }
     "
    >
     OK
    </button>
   </template>
  </Modal>
  <Modal :show="showPaymentRedirectModal" @update:show="showPaymentRedirectModal = $event">
   <div class="modal-content">
    <div class="success-modal-header-text">
     <h3>Redirecting You to FlutterWave</h3>
    </div>

    <div class="confirmation-text">
     <h4>Click the button below if you're not auto redirected</h4>
    </div>
   </div>
   <template #actions>
    <a :href="paymentUrl" target="_blank">
     <button
      class="outlined-btn"
      @click="
       () => {
        showPaymentFailedModal = false
       }
      "
     >
      Redirect
     </button>
    </a>
   </template>
  </Modal>
  <Modal :show="showPaymentSuccessModal" @update:show="showPaymentSuccessModal = $event">
   <div class="modal-content">
    <div class="success-modal-header-text">
     <h3>
      <span>
       <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         d="M21 10.0801V11.0001C20.9988 13.1565 20.3005 15.2548 19.0093 16.9819C17.7182 18.7091 15.9033 19.9726 13.8354 20.584C11.7674 21.1954 9.55726 21.122 7.53447 20.3747C5.51168 19.6274 3.78465 18.2462 2.61096 16.4372C1.43727 14.6281 0.879791 12.4882 1.02168 10.3364C1.16356 8.18467 1.99721 6.13643 3.39828 4.49718C4.79935 2.85793 6.69279 1.71549 8.79619 1.24025C10.8996 0.765018 13.1003 0.982445 15.07 1.86011M21 3.00011L11 13.0101L8.00001 10.0101"
         stroke="#039855"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round"
        />
       </svg>
      </span>
      Congratulations, You are in!
     </h3>
    </div>

    <img :src="'/src/assets/images/tickets/' + ticketToGet.ticket_img_name" />
    <div class="confirmation-text">
     <h4>Thank You!</h4>

     <p>
      Thank you for purchasing your ticket to TEDx Samaru! You will receive a confirmation email
      with your e-ticket shortly. We look forward to seeing you at the event.
     </p>
    </div>
   </div>
   <template #actions>
    <button
     class="outlined-btn"
     @click="
      () => {
       showPaymentSuccessModal = false
       current_step++
      }
     "
    >
     Cancel
    </button>
   </template>
  </Modal>

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
import PaymentSuccessful from '../components/getTicketsPage/PaymentSuccessful.vue'

const current_step = ref(1)
let ticketToGet = reactive({})
let customerDetails = reactive({})
let showModal = ref(false)
let showPaymentSuccessModal = ref(false)
let showPaymentFailedModal = ref(false)
let showPaymentRedirectModal = ref(false)
let paymentUrl = ref('')

const newYearDate = ref(new Date('2024-08-12T00:00:00'))
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
  ],
  payment_event_id: '71a42d5a-2801-4002-9ec3-760d2d384c35'
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
  ],
  payment_event_id: '83a4fe11-f8a5-4ca4-83ff-385862ffc7b6'
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
  ],
  payment_event_id: '6e6415fd-5942-47f0-9fd5-b5431b462e2a'
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
  ],
  payment_event_id: '129564f9-a2e9-4f34-8f13-56efc3c9b634'
 }
])

const makePayment = async () => {
 //  console.log(customerDetails)

 let formData = {
  currency: 'NGN',
  email: customerDetails.email,
  amount: ticketToGet.ticket_price,
  customer_name: customerDetails.firstName + customerDetails.lastName,
  event: ticketToGet.payment_event_id,
  tx_ref: uuidv4()
 }

 try {
  const response = await fetch('https://tedxsamaru.pythonanywhere.com/api/payments/initialize', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json'
   },
   body: JSON.stringify(formData)
  })

  const result = await response.json()
  console.log('result', result)
  if (!response.ok) {
   showPaymentFailedModal.value = true
  }
  if (response.ok) {
   showModal.value = false
   paymentUrl.value = result.payment_link
   showPaymentRedirectModal.value = true
  }
  //   let response = result
 } catch (error) {
  console.log('error', error)

  //   let error = error.message
 } finally {
  //    let loading = false
 }
}
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

.success-modal-header-text {
 h3 {
  font-weight: bold;
 }
}
</style>