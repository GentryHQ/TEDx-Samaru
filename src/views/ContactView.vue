<template>
 <div>
  <div class="form">
   <div class="container">
    <div class="contact-section">
     <div class="wrapper">
      <h2>Contact Us</h2>
      <p>Our friendly team would love to hear from you.</p>
      <div>
       <form>
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
        </div>
        <div class="form-group">
         <label for="message">Message:</label>
         <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Write your message here"
          v-model="form.message"
         ></textarea>
        </div>
        <div class="form-group">
         <input type="checkbox" id="privacy" name="privacy" v-model="form.agreedToPolicy" />
         <label for="privacy">I agree to the Privacy Policy</label>
        </div>
        <div>
         <ButtonComp class="submit-btn">Send Message</ButtonComp>
        </div>
       </form>
      </div>
     </div>
     <img class="image" src="/src/assets/images/contact-Image.png" />
    </div>
   </div>
  </div>
  <div class="faq">
   <div class="container">
    <FaqComp />
   </div>
  </div>
 </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import FormInput from '../components/form-inputs/Input.vue'
import ButtonComp from '../components/ButtonComp.vue'
import FaqComp from '../components/FaqComp.vue'

const form = reactive({
 firstName: '',
 lastName: '',
 email: '',
 phoneNumber: '',
 message: '',
 agreedToPolicy: false
})
</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;

.faq {
 margin-block: 5rem;
}
.submit-btn {
 width: 100%;
 text-align: center;
}
.contact-form {
 display: flex;
 flex-direction: column;
 .input-group {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
 }
}
textarea {
 width: 100%;
 padding: 10px;
 border: 1px solid #ccc;
 border-radius: 3px;
 resize: vertical;
}
input[type='checkbox'] {
 margin-right: 5px;
}
.form-group {
 margin-bottom: 15px;
 width: 100%;
}

label {
 margin-bottom: 0.5rem;
}
.text-input {
 padding: 1rem;
 border-radius: 0.5rem;
}

.contact-section {
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 .wrapper {
  margin-block: 20px 48px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
 }

 .image {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s ease-in-out;
    border-radius: 8px;
    overflow: hidden;
}

.image:hover {
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.18), 0 12px 22px rgba(0, 0, 0, 0.12);
}


 @media screen and (max-width: 768px) {
  .wrapper {
   padding: 0rem;
  }
  .input-group {
   flex-direction: column;
  }
  img {
   display: none;
  }
 }
}
</style>