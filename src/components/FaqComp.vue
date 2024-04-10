<template>
    <div class="wrapper-faq" id="faq">
        <h2>Lets <span>answer</span> some of your burning questions</h2>
        <p class="txt">Everything you need to know about TEDxSamaru Event</p>

        <div class="faq-container">
        <div class="faq" v-for="(faq, index) in faqs" :key="faq.index" @click="toggleFaq(index)"
            :class="{ active: faq.open }">
            <div class="faq_parent">
                <div class="faq_question">
                    <span>{{ index + 1 }}.</span>
                    <h4>{{ faq.question }}</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px">
                        <path
                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                </div>
                <transition name="fade">
                    <div v-if="faq.open" class="faq_answer">
                        <p>{{ faq.answer }}</p>
                    </div>
                </transition>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            faqs: [
                { question: 'What is TEDxSamaru?', answer: "TEDxSamaru is an independently organized event in the spirit of TED Talks. Our mission is to bring ideas worth spreading from the north of Nigeria to the global stage. Through inspiring talks, performances, and immersive experiences, we spark conversations that challenge conventional thinking.", open: false },
                { question: 'Who are the speakers?', answer: "Our speakers are trailblazers, visionaries and local heroes who have dared to reinvent across diverse fields like technology, business, science, art, and social impact. From award-winning innovators to activists reshaping norms, they take the iconic red circle to share their bold journeys of reinvention.", open: false },
                { question: 'How can I attend?', answer: "Tickets for the main TedX Samaru event go on sale annually. However, we offer a variety of other experiences year-round like webinars, workshops and community meetups. Sign up for our newsletter to stay updated.", open: false },
                { question: 'How can I get involved or sponsor?', answer: "There are multiple ways to join our reinvention revolution as a partner, volunteer or sponsor. Visit our Sponsorship page to explore the various opportunities and benefits of associating with our movement.", open: false },
                { question: 'When and where will TEDxSamaru take place?', answer: "To be announced soon", open: false },
            ]
        }
    },

    methods: {
        toggleFaq(index) {
            this.faqs[index].open = !this.faqs[index].open;
        },
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
            transition: transform .4s ease;

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
        transition: all .5s ease;
    }
}

@media screen and (max-width: 768px) {
    .wrapper-faq > h2 {
        font-size: 24px;
    }
}
</style>