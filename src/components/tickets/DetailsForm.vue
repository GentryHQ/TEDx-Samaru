<script setup>
import FormInput from '../../components/form-inputs/Input.vue'
import { reactive } from 'vue'

const form = reactive({
 firstName: '',
 lastName: '',
 email: '',
 phoneNumber: ''
})
defineEmits(['next'])
</script>

<template>
 <div class="details-form">
  <h2>Personal Information</h2>
  <p>Tell us a bit about yourself</p>
  <div>
   <form action="https://formspree.io/f/xkndyqzl" method="POST">
    <div class="contact-form">
     <div class="input-group">
      <FormInput
       class="form-group"
       :name="'First Name'"
       :label="'First Name'"
       :placeholder="'First Name'"
       v-model="form.firstName"
      ></FormInput>
      <FormInput
       class="form-group"
       :name="'Last Name'"
       :label="'Last Name'"
       :placeholder="'Last Name'"
       v-model="form.lastName"
      ></FormInput>
     </div>

     <FormInput
      class="form-group"
      :name="'Email'"
      :label="'Email'"
      :placeholder="'Email'"
      v-model="form.email"
      type="email"
     ></FormInput>
     <FormInput
      class="form-group"
      :name="'Phone Number'"
      :label="'Phone Number'"
      :placeholder="'Phone Number'"
      v-model="form.phoneNumber"
      type="tel"
     ></FormInput>

     <button class="next-btn" @click="$emit('next', form)">Next</button>
    </div>
   </form>
  </div>
 </div>
</template>

<style lang="scss" scoped>
@use '../../assets/css/variables' as v;
@use '../../assets/css/mixin' as m;

.details-form {
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
  width: 100%;
 }

 .form-group {
  width: 100%;
 }
 .next-btn {
  width: 100%;
  text-align: center;
  @include m.btn(v.$White, v.$black, v.$red, v.$red, v.$White, v.$White, v.$black);
 }
}
</style>