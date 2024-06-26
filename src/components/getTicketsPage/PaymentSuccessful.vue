<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { differenceInSeconds } from 'date-fns'

defineProps({
 purchasedTicket: Object
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const formattedTime = computed(() => ({
 days: String(days.value).padStart(2, '0'),
 hours: String(hours.value).padStart(2, '0'),
 minutes: String(minutes.value).padStart(2, '0'),
 seconds: String(seconds.value).padStart(2, '0')
}))

function calculateTimeLeft() {
 const now = new Date()
 const target = new Date('2024-08-12T00:00:00')
 const difference = differenceInSeconds(target, now)

 if (difference > 0) {
  days.value = Math.floor(difference / (60 * 60 * 24))
  hours.value = Math.floor((difference % (60 * 60 * 24)) / (60 * 60))
  minutes.value = Math.floor((difference % (60 * 60)) / 60)
  seconds.value = Math.floor(difference % 60)
 } else {
  days.value = hours.value = minutes.value = seconds.value = 0
 }
}

let interval
onMounted(() => {
 calculateTimeLeft()
 interval = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
 clearInterval(interval)
})

watch(
 () => new Date('2024-08-12T00:00:00'),
 () => {
  calculateTimeLeft()
  if (interval) clearInterval(interval)
  interval = setInterval(calculateTimeLeft, 1000)
 }
)
</script>

<template>
 <div class="payment-success-step-wrapper">
  <div class="ticket-image-section">
   <div class="congratulations-text">
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

   <div class="content-wrapper">
    <img :src="'/src/assets/images/tickets/' + purchasedTicket.ticket_img_name" />
    <h3>Thank You!</h3>
    <p>
     Thank you for purchasing your ticket to TEDx Samaru! You will receive a confirmation email with
     your e-ticket shortly. We look forward to seeing you at the event.
    </p>

    <button
     class="outlined-btn"
     @click="
      () => {
       showPaymentSuccessModal = false
       current_step++
      }
     "
    >
     Okay
    </button>
   </div>
  </div>
  <div class="event-details-section-wrapper">
   <div class="container">
    <div>
     <h2>ReInvent Your Perspectives</h2>
     <p>Centre of excellence Ahmadu Bello University, Zaria.</p>
    </div>
    <div class="event-details-roster">
     <div>
      <h3>August 10th, 2024</h3>
      <p>Friday, 10:00pm WAT</p>
     </div>
     <p>
      <img src="../../assets/images/avatar-roster.png" />
      <span> 500+ </span> going
     </p>
    </div>

    <div class="days-countdown">
     <div class="wrapper">
      <div class="item-block">
       <h4 class="item-title">Days</h4>
       <h3 class="item-content">{{ formattedTime.days }}</h3>
      </div>
      <div class="item-block">
       <h4>Hours</h4>
       <h3>{{ formattedTime.hours }}</h3>
      </div>
      <div class="item-block">
       <h4>Minutes</h4>
       <h3>{{ formattedTime.minutes }}</h3>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>



<style lang="scss" scoped>
@use '../../assets/css/variables' as v;
@use '../../assets/css/mixin' as m;

.payment-success-step-wrapper {
 .congratulations-text {
  h3 {
   font-weight: bold;
   font-size: 2rem;
  }
  margin-bottom: 2rem;
 }

 .content-wrapper > *:not(:last-child) {
  margin-bottom: 1.25rem;
 }
 .event-details-roster > *:not(:last-child) {
  margin-bottom: 1.25rem;
 }
 .content-wrapper {
  h3 {
   font-size: 2rem;
   font-weight: bold;
  }
 }
 display: flex;
 flex-direction: row;

 @media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
 }
 .ticket-image-section {
  padding: 4rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 768px) {
   width: 100%;
   padding: 2rem;
  }
 }
 .event-details-section-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 400px;
  width: 50%;
  color: white;
  background-image: url('../../assets/images/sponsors-page/event-hall.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: end;
  .event-details-roster {
   display: flex;
   justify-content: space-between;
   padding-top: 1rem;
   padding-bottom: 1rem;
   flex-direction: row;
   @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
   }
  }
  .container {
   padding: 2rem;
   background: rgb(255 255 255 / 14%);
   backdrop-filter: blur(10px);
   @media screen and (max-width: 768px) {
    margin-inline: 0px;
   }
  }
  @media screen and (max-width: 768px) {
   width: 100%;
   backdrop-filter: blur(5px);
  }
 }

 .days-countdown {
  .wrapper {
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   justify-content: space-between;
   background: rgb(255 255 255 / 24%);
   color: #fff;
   border-radius: 10px;
   backdrop-filter: blur(10px);
   padding: 2rem;
   .item-block {
    width: 33.3333%;
    h4 {
     font-size: 1rem;
     font-weight: 300;
    }
    h3 {
     font-size: 2rem;
     font-weight: 300;
    }
    display: flex;
    flex-direction: column;
    background: rgb(255 255 255 / 24%);
    color: #fff;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    padding: 20px;
    margin-right: 1rem;
   }

   @media screen and (max-width: 768px) {
    padding: 0rem;
   }
  }
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
</style>