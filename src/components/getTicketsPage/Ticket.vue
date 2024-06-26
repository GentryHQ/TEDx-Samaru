<script setup>
const props = defineProps({
 ticket: Object
})

defineEmits(['getTicket'])
</script>
<template>
 <div class="ticket" :class="props.ticket.id == 4 ? 'ticket supporters-ticket' : 'ticket'">
  <div class="ticket-header">
   <img class="" :src="'/src/assets/images/tickets/' + props.ticket.ticket_img_name" />

   <div class="ticket-prices">
    <h3>{{ props.ticket.ticket_title }}</h3>
    <h3 class="" v-if="props.ticket.id == 4">Starting From</h3>
    <div>
     <h1>₦{{ props.ticket.ticket_price }}</h1>
     <p class="ticket-full-price" v-if="props.ticket.ticket_full_price">
      ₦{{ props.ticket.ticket_full_price }}
     </p>
    </div>
   </div>
  </div>

  <div>
   <ul class="list" style="list-style-type: none">
    <li class="list-item" v-for="(perk, index) in props.ticket.ticket_perks" :key="index">
     <svg
      v-if="props.ticket.id !== 4"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     >
      <rect x="0.666992" width="24" height="24" rx="12" fill="#D1FADF" />
      <path
       fill-rule="evenodd"
       clip-rule="evenodd"
       d="M17.763 7.39004L10.603 14.3L8.70301 12.27C8.35301 11.94 7.80301 11.92 7.40301 12.2C7.01301 12.49 6.90301 13 7.14301 13.41L9.39301 17.07C9.61301 17.41 9.99301 17.62 10.423 17.62C10.833 17.62 11.223 17.41 11.443 17.07C11.803 16.6 18.673 8.41004 18.673 8.41004C19.573 7.49004 18.483 6.68004 17.763 7.38004V7.39004Z"
       fill="#12B76A"
      />
     </svg>
     <svg
      v-if="props.ticket.id == 4"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     >
      <rect width="24" height="24" rx="12" fill="white" />
      <path
       fill-rule="evenodd"
       clip-rule="evenodd"
       d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
       fill="#1C1C1C"
      />
     </svg>
     {{ perk }}
    </li>
   </ul>
  </div>

  <div class="ticket-footer">
   <button class="next-btn" @click="$emit('getTicket', props.ticket)">Get Ticket</button>
  </div>
 </div>
</template>

<style lang="scss" scoped>
@use '../../assets/css/variables' as v;
@use '../../assets/css/mixin' as m;
.ticket {
 background-color: v.$White;

 border-radius: 0.5rem;

 .ticket-header {
  text-align: center;
  .ticket-prices {
   margin-top: 2rem;
  }
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
 .list > *:not(:last-child) {
  margin-bottom: 1rem; /* 20px */
 }
 .list-item {
  margin-bottom: 0.3rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
 }
 .ticket-full-price {
  color: v.$primary-500;
  text-decoration: line-through;
 }
 .next-btn {
  width: 100%;
  text-align: center;
  @include m.btn(v.$White, v.$black, v.$red, v.$red, v.$White, v.$White, v.$black);
 }
}

.supporters-ticket {
 background-color: v.$black;
 color: white;
}
</style>