<script setup>
import FormInput from '../form-inputs/Input.vue'
import { reactive, computed } from 'vue'

const form = reactive({
 firstName: '',
 lastName: '',
 email: '',
 phoneNumber: '',
 referrer: ''
})
defineEmits(['next'])

const disableButton = computed(() => {
 if (form.firstName == '' || form.lastName == '' || form.email == '' || form.phoneNumber == '')
  return true
 return false
})
</script>

<template>
 <div class="details-form">
  <div>
   <!-- <form> -->
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
     :type="'email'"
    ></FormInput>
    <FormInput
     class="form-group"
     :name="'Phone Number'"
     :label="'Phone Number'"
     :placeholder="'Phone Number'"
     v-model="form.phoneNumber"
     :type="'tel'"
    ></FormInput>
    <FormInput
     class="form-group"
     :name="'referrer'"
     :label="'Referrer'"
     :placeholder="'If referred, enter the name of the person who referred you'"
     v-model="form.referrer"
     :type="'text'"
    ></FormInput>

    <button :disabled="disableButton" class="next-btn" @click="$emit('next', form)">Next</button>
   </div>
   <!-- </form> -->
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
 width: 50%;
 @media screen and (max-width: 768px) {
  width: 100%;
 }
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

  &:disabled {
   background-color: rgb(233, 224, 224); // Change to a suitable gray color
   color: gray;
   cursor: not-allowed;
   opacity: 0.5;
   box-shadow: none;
  }
 }
}
</style>