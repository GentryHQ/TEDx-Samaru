<template>
    <!-- This is not show if the isSlider is false and it's receives a Boolean props -->
    <div v-if="isSlider">
        <SpeakerSlider :speakers="speakers" />
    </div>

    <!-- This shows instead if I don't want to display the slider -->
    <div v-else @click="openDialog(speaker)" v-for="speaker in speakers" :key="speaker.name" class="speaker" tabindex="0">
        <img :src="speaker.img" :alt="speaker.name">
        <div class="sub">
            <h4>{{ speaker.name }}</h4>
            <p>{{ speaker.title }}</p>
        </div>
    </div>
    <DialogComp v-if="selectedSpeaker" :speaker="selectedSpeaker" :open="!!selectedSpeaker"
        @close="selectedSpeaker = null" />
</template>
<script>
import DialogComp from "../components/DialogComp.vue";
import SpeakerSlider from "./SpeakerSlider.vue";

export default {
    props: {
        isSlider: Boolean,
    },

    components: {
        DialogComp,
        SpeakerSlider
    },

    data() {
        return {
            speakers: [
                {
                    name: 'Bello Gbadebo', title: 'CEO Dev Club', img: '/images/speakers/1.jpg',
                    topic: 'The Importance of research',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Adora Nwodo', title: 'Senior Software Engineer', img: '/images/speakers/2.jpg',
                    topic: 'Sucess Key',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: 'www.facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Adora Nwodo', title: 'Senior Software Engineer', img: '/images/speakers/3.jpg',
                    topic: 'This is Life',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: '',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Aniedi Udo-Obong', title: 'Developer Relations Engineer at Postman', img: '/images/speakers/1.jpg',
                    topic: 'Love is an Illusion',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Karen Chukwu', title: 'Founder/Managing Partner (Katwig & Dale)', img: '/images/speakers/1.jpg',
                    topic: 'The Importance of Learning',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Karen Chukwu', title: 'Founder/Managing Partner (Katwig & Dale)', img: '/images/speakers/1.jpg',
                    topic: 'The Importance of Learning',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Karen Chukwu', title: 'Founder/Managing Partner (Katwig & Dale)', img: '/images/speakers/1.jpg',
                    topic: 'The Importance of Learning',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Karen Chukwu', title: 'Founder/Managing Partner (Katwig & Dale)', img: '/images/speakers/1.jpg',
                    topic: 'The Importance of Learning',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Adora Nwodo', title: 'Senior Software Engineer', img: '/images/speakers/3.jpg',
                    topic: 'This is Life',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: '',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
            ],
            selectedSpeaker: null
        };
    },


    methods: {
        openDialog(speaker) {

            if (this.selectedSpeaker === speaker) {
                this.selectedSpeaker = null; // Close the dialog if it's already open for this speaker
            } else {
                this.selectedSpeaker = speaker; // Open the dialog for the selected speaker
            }
        }
    }

};
</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;

.speaker {
    border: 1px solid v.$black;
    box-shadow: 7px 7px v.$red;
    border-radius: v.$br1;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    width: 100%;

    &:hover,
    &:focus {
        box-shadow: 5px 5px v.$White;
    }

    img {
        aspect-ratio: 1/1;
        object-fit: cover;
        height: auto;
        background-color: v.$primary-50;
    }

    .sub {
        background-color: v.$White;
        padding: 1.25rem 1.5rem;
        text-align: left;
        height: 150px;


        h4 {
            color: v.$black;

            font: {
                size: 24px;
                weight: v.$fw6;
            }
        }

        p {
            color: v.$black;
            font-size: 16px;
        }
    }
}
</style>