
<script setup>
import PaymentSuccessful from '../components/getTicketsPage/PaymentSuccessful.vue'
import FaqComp from '../components/FaqComp.vue'
</script>
<template>
 <div class="get-tickets-section">
  <div class="payment-success">
   <PaymentSuccessful></PaymentSuccessful>
  </div>
 </div>
 <div class="faq">
  <div class="container">
   <FaqComp />
  </div>
 </div>
</template>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;
.faq {
 margin-block: 5rem;
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
}
.container {
 margin-left: auto;
 margin-right: auto;
 @media screen and (max-width: 768px) {
  padding-inline: 0rem;
 }
}
</style>