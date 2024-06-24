<script setup>
const props = defineProps({
 ticket: Object,
 ticket_img_path: String,
 ticket_title: String,
 ticket_price: String,
 ticket_full_price: String,
 ticket_perks: Array
})

defineEmits(['getTicket'])
</script>
<template>
 <div class="ticket" :class="props.ticket.id == 4 ? 'ticket supporters-ticket' : 'ticket'">
  <div class="ticket-header">
   <img class="" :src="'/src/assets/images/tickets/' + props.ticket.ticket_img_name" />
   <h3>{{ props.ticket.ticket_title }}</h3>

   <div class="tickets-prices">
    <h3 class="" v-if="props.ticket.id == 4">Starting From</h3>
    <h1>₦{{ props.ticket.ticket_price }}</h1>
    <p class="ticket-full-price" v-if="props.ticket.ticket_full_price">
     ₦{{ props.ticket.ticket_full_price }}
    </p>
   </div>
  </div>

  <div>
   <ul style="list-style-type: none">
    <li class="list-item" v-for="(perk, index) in props.ticket.ticket_perks" :key="index">
     <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.666992" width="24" height="24" rx="12" fill="#D1FADF" />
      <path
       fill-rule="evenodd"
       clip-rule="evenodd"
       d="M17.763 7.39004L10.603 14.3L8.70301 12.27C8.35301 11.94 7.80301 11.92 7.40301 12.2C7.01301 12.49 6.90301 13 7.14301 13.41L9.39301 17.07C9.61301 17.41 9.99301 17.62 10.423 17.62C10.833 17.62 11.223 17.41 11.443 17.07C11.803 16.6 18.673 8.41004 18.673 8.41004C19.573 7.49004 18.483 6.68004 17.763 7.38004V7.39004Z"
       fill="#12B76A"
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
 .list-item {
  margin-bottom: 0.3rem;
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