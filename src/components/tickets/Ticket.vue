<script setup>
import ButtonComp from '../ButtonComp.vue'

const props = defineProps({
 ticket_img_path: String,
 ticket_title: String,
 ticket_price: String,
 ticket_full_price: String,
 ticket_perks: Array
})
</script>
<template>
 <div class="ticket">
  <div class="ticket-header">
   <img class="experience" src="../../assets/images/tickets/1.png" />
   <h3>Standard Ticket</h3>

   <div class="tickets-prices">
    <h1>₦5,000</h1>
    <p>₦8,000</p>
   </div>
  </div>

  <div>
   <ul style="list-style-type: none">
    <li>
     <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.666992" width="24" height="24" rx="12" fill="#D1FADF" />
      <path
       fill-rule="evenodd"
       clip-rule="evenodd"
       d="M17.763 7.39004L10.603 14.3L8.70301 12.27C8.35301 11.94 7.80301 11.92 7.40301 12.2C7.01301 12.49 6.90301 13 7.14301 13.41L9.39301 17.07C9.61301 17.41 9.99301 17.62 10.423 17.62C10.833 17.62 11.223 17.41 11.443 17.07C11.803 16.6 18.673 8.41004 18.673 8.41004C19.573 7.49004 18.483 6.68004 17.763 7.38004V7.39004Z"
       fill="#12B76A"
      />
     </svg>
     Hand Band
    </li>
    <li>
     <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.666992" width="24" height="24" rx="12" fill="#D1FADF" />
      <path
       fill-rule="evenodd"
       clip-rule="evenodd"
       d="M17.763 7.39004L10.603 14.3L8.70301 12.27C8.35301 11.94 7.80301 11.92 7.40301 12.2C7.01301 12.49 6.90301 13 7.14301 13.41L9.39301 17.07C9.61301 17.41 9.99301 17.62 10.423 17.62C10.833 17.62 11.223 17.41 11.443 17.07C11.803 16.6 18.673 8.41004 18.673 8.41004C19.573 7.49004 18.483 6.68004 17.763 7.38004V7.39004Z"
       fill="#12B76A"
      />
     </svg>
     Hand Band
    </li>
    <li>
     <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.666992" width="24" height="24" rx="12" fill="#D1FADF" />
      <path
       fill-rule="evenodd"
       clip-rule="evenodd"
       d="M17.763 7.39004L10.603 14.3L8.70301 12.27C8.35301 11.94 7.80301 11.92 7.40301 12.2C7.01301 12.49 6.90301 13 7.14301 13.41L9.39301 17.07C9.61301 17.41 9.99301 17.62 10.423 17.62C10.833 17.62 11.223 17.41 11.443 17.07C11.803 16.6 18.673 8.41004 18.673 8.41004C19.573 7.49004 18.483 6.68004 17.763 7.38004V7.39004Z"
       fill="#12B76A"
      />
     </svg>
     Hand Band
    </li>
    <li>
     <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.666992" width="24" height="24" rx="12" fill="#D1FADF" />
      <path
       fill-rule="evenodd"
       clip-rule="evenodd"
       d="M17.763 7.39004L10.603 14.3L8.70301 12.27C8.35301 11.94 7.80301 11.92 7.40301 12.2C7.01301 12.49 6.90301 13 7.14301 13.41L9.39301 17.07C9.61301 17.41 9.99301 17.62 10.423 17.62C10.833 17.62 11.223 17.41 11.443 17.07C11.803 16.6 18.673 8.41004 18.673 8.41004C19.573 7.49004 18.483 6.68004 17.763 7.38004V7.39004Z"
       fill="#12B76A"
      />
     </svg>
     Hand Band
    </li>
    <li>
     <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.666992" width="24" height="24" rx="12" fill="#D1FADF" />
      <path
       fill-rule="evenodd"
       clip-rule="evenodd"
       d="M17.763 7.39004L10.603 14.3L8.70301 12.27C8.35301 11.94 7.80301 11.92 7.40301 12.2C7.01301 12.49 6.90301 13 7.14301 13.41L9.39301 17.07C9.61301 17.41 9.99301 17.62 10.423 17.62C10.833 17.62 11.223 17.41 11.443 17.07C11.803 16.6 18.673 8.41004 18.673 8.41004C19.573 7.49004 18.483 6.68004 17.763 7.38004V7.39004Z"
       fill="#12B76A"
      />
     </svg>
     Hand Band
    </li>
   </ul>
  </div>

  <div class="ticket-footer">
   <ButtonComp class="next-btn" @click="handleDownload">Get Ticket</ButtonComp>
  </div>
 </div>
</template>

<style lang="scss" scoped>
@use '../../assets/css/variables' as v;
@use '../../assets/css/mixin' as m;
.ticket {
 background-color: v.$White;
 width: calc(50% - 16px);

 .ticket-header {
  text-align: center;
  h3 {
   font-size: 1.5rem;
   font-weight: bold;
   margin-bottom: 1rem;
  }
 }
 .ticket-footer {
  padding: 2rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  .next-btn {
   width: 100%;
   text-align: center;
  }
 }
}
</style>