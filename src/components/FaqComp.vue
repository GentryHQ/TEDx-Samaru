<template>
 <div class="wrapper-faq" id="faq">
  <h2>Let's <span>answer</span> some of your burning questions</h2>
  <p class="txt">Everything you need to know about TEDxSamaru Event</p>

  <div class="faq-container">
   <div
    class="faq"
    v-for="(faq, index) in faqs"
    :key="faq.index"
    @click="toggleFaq(index)"
    :class="{ active: faq.open }"
   >
    <div class="faq_parent">
     <div class="faq_question">
      <span>{{ index + 1 }}.</span>
      <h4>{{ faq.question }}</h4>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px">
       <path
        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
       />
      </svg>
     </div>
     <transition name="fade">
      <div v-if="faq.open" class="faq_answer">
       <p v-html="faq.answer.replaceAll('\n', '<br><br>')"></p>
      </div>
     </transition>
    </div>
   </div>
  </div>
  <div class="faq_footer">
   <div class="img">
    <img class="first-icon" src="../assets/images/Avatar2.png" alt="Avatar2" />
    <img class="middle-icon" src="../assets/images/Avatar1.png" alt="Avatar1" />
    <img class="last-icon" src="../assets/images/Avatar3.png" alt="Avatar3" />
   </div>

   <h5>Still have questions?</h5>
   <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
   <router-link :to="{ name: 'contact' }" class="btn">GET IN TOUCH</router-link>
  </div>
 </div>
</template>

<script>
export default {
 data() {
  return {
   faqs: [
    {
     question: 'What is TEDxSamaru?',
     answer:
      'TEDx Samaru is an independently organized event that brings together brilliant thought leaders to share powerful ideas around an annual theme. The aim of TEDx Samaru is to challenge conventional thinking and this is done in three phases.\n The pre event phase which consist of webinars, engaging online activities, talent scouting, and online competitions to keep our community educated, informed and entertained leading up to the event day \n The event day: This is a day where industry and thought leaders transfer knowledge and experience through engaging conversations, entertaining performances and immersive experiences while attendees strategically network and enjoy the joy of community \n Post event: TEDx Samaru is not a one time hit as it aims to be an immersive and change oriented community with its members meeting monthly to discuss and implement change oriented solutions to drive narratives that break new grounds',
     open: false
    },
    {
     question: "When will ticket sales for TEDxSamaru 2024 'ReInvent' end?",
     answer:
      'Ticket sales close on Saturday, July 27th. Don’t miss out—get your tickets now!',
     open: false
    },
    {
     question: 'Who are the speakers?',
     answer:
      'Our speakers are trailblazers, visionaries and local heroes who have dared to reinvent across diverse fields like technology, business, science, art, and social impact. From award-winning innovators to activists reshaping norms, they take the iconic red circle to share their bold journeys of reinvention.',
     open: false
    },
    {
     question: 'How can I attend?',
     answer:
      'Tickets for the main TedX Samaru event go on sale annually. However, we offer a variety of other experiences year-round like webinars, workshops and community meetups. Do sign up for our newsletter to stay updated.',
     open: false
    },
    {
     question: 'How can I get involved or sponsor?',
     answer:
      'There are a couple of ways to join the revolution. You can do that by partnering with us or being a sponsor. Do well to visit our sponsorship page to explore the various options and benefits of partnering with us.',
     open: false
    },
    {
     question: 'When and where will TEDxSamaru take place?',
     answer:
      'TEDxSamaru will take place on the 10th of August 10th, at the Centre of Excellence, Ahmadu Bello University, Zaria.',
     open: false
    }
   ]
  }
 },

 methods: {
  toggleFaq(index) {
   this.faqs[index].open = !this.faqs[index].open
  }
 }
}
</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;

.fade-enter-active,
.fade-leave-active {
 transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.wrapper-faq {
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-bottom: 20px;

 h2 {
  text-align: center;
  max-inline-size: 35.5rem;
  margin-inline: auto;
  padding-block-end: 1.25rem;
  color: #000;
  font-feature-settings: 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on, 'ss06' on, 'ss05' on;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
 }

 .txt {
  text-align: center;
 }
}

.faq-container {
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 width: 100%;
 margin-bottom: 48px;
}

.faq {
 max-inline-size: 48rem;
 margin-inline: auto;
 width: 100%;

 &.active {
  svg {
   transform: rotate(0deg);
  }
 }

 &_parent {
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  margin-block-start: 3rem;
 }

 &_question {
  border-radius: v.$br1;
  margin-block-start: 10px;
 }

 &_answer {
  border-radius: v.$br1;
  margin-block-start: 10px;
  color: #475467;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
 }

 &_question {
  display: grid;
  grid-template-columns: 5fr 90fr 5fr;
  gap: 0.625rem;
  background-color: v.$White;
  padding: 20px;
  cursor: pointer;

  svg {
   fill: red;
   transform: rotate(-180deg);
   transition: transform 0.4s ease;
  }

  h4,
  span {
   color: v.$black;
   font-size: 20px;
   font-weight: v.$fw5;
   text-align: left;
  }
 }

 &_answer {
  padding: 20px;
  text-align: left;
  transition: all 0.5s ease;
 }
}

.faq_footer {
 margin-block-start: 3rem;
 background-color: v.$black;
 padding: 2.625rem;
 display: flex;
 flex-direction: column;
 align-items: center;
 color: v.$White;
 // border-radius: 24px;
 width: 90%;

 h5 {
  font-size: 1.25rem;
  font-weight: v.$fw5;
  margin-block-end: 0.5rem;
  text-align: center;
 }

 p {
  font-size: 1.125rem;
  margin-block-end: 1.25rem;
  margin-bottom: 40px;
  text-align: center;
 }

 .img {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 120px;
  height: 56px;
  align-items: center;

  .first-icon {
   position: absolute;
   flex-direction: column;
   justify-content: center;
   flex-shrink: 0;
   right: 1px;
  }
  .middle-icon {
   position: absolute;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   flex-shrink: 0;
   z-index: 3;
   width: 60px;
   height: 60px;
  }
  .last-icon {
   display: flex;
   position: absolute;
   flex-direction: column;
   justify-content: center;
   flex-shrink: 0;
   left: 3px;
  }
 }

 .btn {
  background-color: v.$White;
  color: v.$red;
  padding: 20px 32px;
  text-decoration-line: underline;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  text-underline-offset: 3px;
  // text-decoration-skip-ink: none;
  font-weight: 700;
  line-height: 24px;
 }

 .btn:hover {
  color: v.$White;
  background-color: v.$red;
 }
}

@media screen and (max-width: 768px) {
 .wrapper-faq > h2 {
  font-size: 24px;
 }

 .faq_footer {
  border-radius: 16px;
  .btn {
   font-size: 16px;
  }
 }

 .faq_question {
  h4 {
   font-size: 18px;
  }
 }
 .faq_answer {
  p {
   font-size: 16px;
  }
 }
}
</style>