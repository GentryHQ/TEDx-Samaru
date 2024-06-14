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
                    name: 'Yahya Buhari Ali (Sir YB)', title: 'Chief Visionary Officer, YBI Group', img: '/images/speakers/1.webp',
                    topic: 'Unveiling Soon',
                    desc: 'Yahya Buhari Ali is a serial entrepreneur, business and people development consultant, philanthropist, and marketing strategist per excellence. He is the CVO of the famous YBI Group, one of the biggest startup conglomerates in northern Nigeria. Yahya had his first degree in Biochemistry from Usman Danfodio University, Sokoto State, a postgraduate diploma in entrepreneurship studies at Kaduna State University, and an MBA in Business Administration from Kensington Business School USA. With a strong background in business development and inspired by the impactful works of the Tony Elumelu Foundation, Yahya is focused on supporting individual entrepreneurs and catalyzing the growth of budding startups in Northern Nigeria. Beyond the boardroom, Sir YB as he is fondly called, is known for his kind heart, open-mindedness, and the zeal to help young people become better versions of themselves.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Fii Stephen Michael', title: 'Growth Marketing Expert', img: '/images/speakers/5.jpg',
                    topic: 'Unveiling Soon',
                    desc: "Meet Fii Stephen Michael, a trailblazer in the digital marketing landscape. With a passion for empowering organizations to maximize digital tools, Fii has built an impressive profile as a Growth Marketing and Digital Marketing Professional. With numerous certifications from Facebook, LinkedIn, Hubspot, Google, and British Project Management, Fii has honed his skills in digital marketing, leadership, web development, and project management. He has trained over 1500 individuals in digital marketing and has directly impacted over 2000 people through initiatives like the Digital Business Bootcamp and the Growth Accelerator Platform. Fii's achievements have earned him recognition, including the YALI Star of Business award and scholarships from Facebook, Udacity, and Harvard Business School. His commitment to creating decent work and economic growth aligns with the United Nations' 8th sustainable development goal. Fii's story is one of dedication and excellence. He has helped brands across Africa build digital assets and strategies, driving peak profitability. With over six years of experience, Fii continues to inspire and empower individuals and businesses to leverage digital tools for success.",
                    link: {
                        fb: 'www.facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Professor Sahalu Junaidu Balarabe', title: 'Public Speaker', img: '/images/speakers/5.jpg',
                    topic: 'Unveiling Soon',
                    desc: "Professor Sahalu Junaidu Balarabe is a distinguished academic and seasoned professional across diverse areas of Computer Science. With many years of local and international experience, he has held various positions at numerous universities including Ahmadu Bello University, Universiti Telekom Malaysia, and King Fahd University. He is a senior member of several professional associations like ACM, IEEE, and CPN.Professor Junaidu has published widely and attracted funding for research projects from reputable organisations, supervised numerous students and led significant projects like developing and maintaining over a dozen suites of software applications used in ABU and other universities across Nigeria today. He has received multiple awards, including the Instructional Technology Award and the Vice Chancellor Merit Award. He has been a consultant to NITDA, NCC, National Universities Commission, National Mathematical Centre, and the Federal Ministry of Education and has attracted developmental interventions to ABU Zaria worth over a Billion Naira from 2009 to 2016. Professor Junaidu’s contributions to computer science and education have made an unquestionable impact, earning him respect and recognition in his field.",
                    link: {
                        fb: '',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Unveiling Soon', title: 'Social Entrepreneur', img: '/images/speakers/5.jpg',
                    topic: 'Unveiling Soon',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Unveiling Soon', title: 'Founder/Managing Partner', img: '/images/speakers/5.jpg',
                    topic: 'Unveiling Soon',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Unveiling Soon', title: 'Global Advocate', img: '/images/speakers/5.jpg',
                    topic: 'Unveiling Soon',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Unveiling Soon', title: 'Spoken Word Poet', img: '/images/speakers/5.jpg',
                    topic: 'Unveiling Soon',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Unveiling Soon', title: 'SDG Activist', img: '/images/speakers/5.jpg',
                    topic: 'Unveiling Soon',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: 'facebook.com',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Unveiling Soon', title: 'Author, Novelist', img: '/images/speakers/5.jpg',
                    topic: 'Unveiling Soon',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: '',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Unveiling Soon', title: 'Life Coach', img: '/images/speakers/5.jpg',
                    topic: 'Unveiling Soon',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: '',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Unveiling Soon', title: 'Business Leader', img: '/images/speakers/5.jpg',
                    topic: 'Unveiling Soon',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto.',
                    link: {
                        fb: '',
                        x: 'x.com',
                        in: 'linkedin.com',
                        ig: ''
                    }
                },
                {
                    name: 'Unveiling Soon', title: 'Health Expert', img: '/images/speakers/5.jpg',
                    topic: 'Unveiling Soon',
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