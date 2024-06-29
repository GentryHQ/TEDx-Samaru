<template>
 <router-link :to="{ name: routeName, hash: hash }" :class="buttonType">
  <slot>Register Now</slot>
 </router-link>
</template>

<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
 buttonType: {
  type: String,
  default: 'btn'
 },
 routeName: {
  type: String,
  default: 'register'
 },
 hash: {
  type: String,
  default: ''
 }
})
</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;

.btn {
 @include m.btn(v.$White, v.$black, v.$red, v.$red, v.$White, v.$White, v.$black);
}

.plain {
 @include m.btn(v.$none, v.$red, v.$none, v.$none, v.$primary-800, v.$White, v.$none);
 text-decoration: underline;
 font-size: 16px;
 font-weight: 700;
 line-height: 120%;
 letter-spacing: -0.32px;
 text-underline-offset: 5px;
}

.plain-red {
 @include m.btn(v.$red, v.$White, v.$primary-800, v.$none, v.$White, v.$none, v.$none);
 font-size: 16px;
}

.links {
 display: flex;
 gap: 12px;
 align-items: center;

 .cta {
  margin-inline-start: 8px;
 }
}

@media (max-width: 768px) {
 .btn,
 .plain,
 .plain-red {
  font-size: 16px;
 }
}
</style>