<template>
    <div class="wrapper">
        <div class="faq" v-for="(faq, index) in faqs" :key="faq.index" @click="toggleFaq(index)" :class="{active: faq.open}">
            <div class="faq_parent">
                <div class="faq_question">
                    <span>{{ index +1 }}.</span>
                    <h4>{{ faq.question }}</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px" ><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                </div>
                <transition name="fade" >
                    <div v-if="faq.open" class="faq_answer">
                        <p>{{ faq.answer }}</p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                faqs: [
                    {question: 'What is TEDx hihiujiuouiooio iokojkoioikljkjio ujknkjiujiouoiojojo', answer: "It is an event", open: false},
                    {question: 'Where is TEDx', answer: "It a p. event", open: false},
                    {question: 'What is TEDx', answer: "It is an event", open: false},
                    {question: 'What is TEDx', answer: "It is an event", open: false},
                    {question: 'What is TEDx', answer: "It is an event", open: false},
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

    .faq {

        &.active {


            svg {
                transform: rotate(0deg);
            }
        }

        &_answer, &_question {
            border-radius: v.$br1;
            margin-block-start: 10px;
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

            h4, span {
                color: v.$black;
                font-size: 20px;
                font-weight: v.$fw5;
                text-align: left;
            }

            
        }

        &_answer {
            background-color: v.$red;
            padding: 20px;
            text-align: left;
            transition: all .5s ease;
        }
    }
</style>