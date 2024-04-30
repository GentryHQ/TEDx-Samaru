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
                    name: 'David Daniel Bdliya', title: 'TEDx Samaru Organizer', img: '/images/team/4.jpg',
                    topic: 'Founder, Grow with DDB',
                    desc: 'David is the founder of Grow with DDB, and the Co-Founder of Xtricated Media. His mission is to foster sustainable growth and impact in people and businesses by providing strategic solutions and implementing strategic systems.',
                    link: {
                        fb: 'https://www.facebook.com/profile.php?id=100004807059984',
                        x: 'https://twitter.com/dave_ddb?t=zVomOsVFxpisbpDo4Noe6w&s=09',
                        in: 'https://www.linkedin.com/in/ddbdliya',
                        ig: 'https://www.instagram.com/dave_ddb?igsh=MzNlNGNkZWQ4Mg=='
                    }
                },
                {
                    name: 'Daniel Alayande', title: 'TEDx Samaru Co-organizer', img: '/images/team/3.jpg',
                    topic: 'Founder, FarmerTech',
                    desc: 'Daniel is a natural leader with profound passion for leveraging technology to effect positive change. He is a certified Drone pilot and the founder of FarmerTech, an innovative agricultural technology company set to revolutionize modern farming practices through the integration of drone technology and other cutting edge technology ',
                    link: {
                        fb: 'www.facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Princess-Eunice Sagada', title: 'Head, Finance Team', img: '/images/team/2.jpg',
                    topic: 'Former Executive, Enactus ABU',
                    desc: 'Princess is a creative extraordinaire and an experienced Financial Analyst. She has an eye for aesthetic and interior designs/architectural. She is also the former Secretary General of Enactus ABU.',
                    link: {
                        fb: '',
                        x: 'http://x.com/@Eunicesagada',
                        in: 'https://www.linkedin.com/in/princess-eunice-sagada-784412235',
                        ig: 'https://www.instagram.com/ablues_girl?igsh=MXM2czZ3ZjAxYW9yZg=='
                    }
                },
                {
                    name: 'Hadiza Abdulkarim', title: 'Head, Welfare Team', img: '/images/team/1.jpg',
                    topic: 'CEO, PUP Industries',
                    desc: 'Super Diza is a HR Genius. She is the Chief Executive Officer of PUP Industries and a Former Team Lead of Enactus ABU. She is passionate about human interaction as well as character development, leaving no stone unturned.',
                    link: {
                        fb: '',
                        x: 'https://x.com/Hadizabdul?t=Dk4XDBTALEdNRh5s2MD-3Q&s=09',
                        in: 'https://www.linkedin.com/in/hadiza-abdulkarim-754822244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                        ig: 'https://www.instagram.com/abdulkarim_hadiza?igsh=aHk0ZXhocXRmM2lr'
                    }
                },
                {
                    name: 'Stanley Nnamani', title: 'Head, Tech Team', img: '/images/team/6.jpg',
                    topic: 'Former Executive, Enactus ABU',
                    desc: 'Stanley is a Certified Software Developer with expertise in Artificial Intelligence. He was the former project manager of Enactus ABU, and loves bringing ideas to life. He is very passionate about using tech as a tool to solve real-life problems.',
                    link: {
                        fb: '',
                        x: 'https://x.com/StarMinds5',
                        in: 'https://www.linkedin.com/in/stanley-nnamani',
                        ig: 'https://www.instagram.com/star_mindz'
                    }
                },
                {
                    name: 'Mowa Mijinyawa', title: 'Head, Media and Publicity', img: '/images/team/7.jpg',
                    topic: 'Founder, Road Sage',
                    desc: 'Mowa is a Digital Communication and Creative Expert who is very passionate about storytelling. She is the producer and host of The Million and One Podcast and Founder of Road Sage - a platform dedicated to telling the tales of road travel experiences in Nigeria for Natives and Foreigners alike.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Innocent Bayila Solomon', title: 'Head, Design and Branding', img: '/images/team/8.jpg',
                    topic: 'Technical Director, Enactus ABU',
                    desc: 'Innocent is a multidisciplinary digital creator who specializes in graphic designs, print layout and typography. He is a prolific UI/UX designer who believes in the power of clean, minimalist designs  .',
                    link: {
                        fb: 'https://www.facebook.com/nasky.cent?mibextid=LQQJ4d',
                        x: 'https://x.com/bayilasolomon?s=21',
                        in: 'https://www.linkedin.com/in/bayilasolomon/',
                        ig: 'https://www.instagram.com/bayila_solomon?igsh=MXY5Z3huM2oxZmpiNQ%3D%3D&utm_source=qr'
                    }
                },
                {
                    name: 'Monyei Chukwueloka Daniel', title: 'Head, Sponsorship and Partnership', img: '/images/team/9.jpg',
                    topic: 'Legal Scholar',
                    desc: 'Monyei is a seasoned publications manager with a demonstrated history of excellence working in the education management industry. With proficiency in public speaking, and creative writing he heads the sponsorship and partnership unit.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Ibrahim Idris', title: 'Head, Logistic team', img: '/images/team/5.jpg',
                    topic: 'Lead Researcher, Fellow Taxes',
                    desc: 'Ibrahim is a communication strategist who is passionate about human capital development. He is a Programs Manager, Gidan Yanci Fellow, and Lead Researcher at Follow Taxes.',
                    link: {
                        fb: 'facebook.com',
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
        height: 120px;


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