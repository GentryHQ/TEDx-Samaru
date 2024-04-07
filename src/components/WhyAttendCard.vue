<template>
 <div class="why-attend-card">
  <div class="why-attend-card-icon">
   <img :src="iconSrc" alt="icon" />
  </div>
  <h4>{{ title }}</h4>
  <p>{{ description }}</p>
  <router-link :to="link" class="nBtn">
   {{ buttonText }}
   <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
     d="M5.5 18.478L17.4779 6.50002L8.63909 6.50002L8.63909 5.00002L20.0386 5.00002L20.0386 16.3995H18.5386V7.56068L6.56066 19.5386L5.5 18.478Z"
     fill="#EB0028"
    />
   </svg>
  </router-link>
 </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
 iconSrc: String,
 title: String,
 description: String,
 link: Object,
 buttonText: String
})
</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;

.why-attend-card {
 margin: 0;
 padding: 2rem;
 text-align: start;
 background-color: v.$primary-50;
 display: flex;
 flex-direction: column;
 gap: 1rem;
 h4 {
  font-weight: 500;
  font-size: 24px;
 }
 p {
  font-size: 16px;
 }

 .why-attend-card-icon {
  padding: 1rem;
  background-color: v.$primary-100;
  width: fit-content;
  border-radius: 200px;
 }
}
</style>
