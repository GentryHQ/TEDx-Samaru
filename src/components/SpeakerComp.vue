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
                    name: 'Yahaya Buhari Ali (Sir YB)', title: 'Chief Visionary Officer, YBI Group', img: '/images/speakers/1.webp',
                    topic: 'Unveiling Soon',
                    desc: 'Yahaya Buhari Ali is a serial entrepreneur, business and people development consultant, philanthropist, and marketing strategist per excellence. He is the CVO of the famous YBI Group, one of the biggest startup conglomerates in northern Nigeria. \n Yahya had his first degree in Biochemistry from Usman Danfodio University, Sokoto State, a postgraduate diploma in entrepreneurship studies at Kaduna State University, and an MBA in Business Administration from Kensington Business School USA. With a strong background in business development and inspired by the impactful works of the Tony Elumelu Foundation, Yahya is focused on supporting individual entrepreneurs and catalyzing the growth of budding startups in Northern Nigeria. Beyond the boardroom, \n Sir YB as he is fondly called, is known for his kind heart, open-mindedness, and the zeal to help young people become better versions of themselves.',
                },
                {
                    name: 'Hafsat Abdullahi', title: 'Spoken Word Artist', img: '/images/speakers/3.png',
                    topic: 'Unveiling Soon',
                    desc: "Hafsat Abdullahi popularly known as Havfy, a creative force to be reckoned with, has made a name for herself as a spoken word poet, actor, voice actor, writer, and fashion enthusiast. With a global following of over 100,000, her powerful words and performances have resonated with people from all walks of life. \n As a member of the Grammy Recording Academy, Havfy has solidified her position as a respected voice in the industry. Her advocacy for music, women, girls, and the youth has earned her recognition from esteemed organizations like TEDx, World Bank, UNICEF, and the British Council. \n With a career spanning multiple fields, Havfy has collaborated with top brands like CFAO, Glenfiddich, and Sterling Bank. Her passion for storytelling and creative expression has led to her work being featured in various media outlets. \n Known affectionately as 'The Girl in English Class,' Havfy's dedication to her craft and her mission to inspire and empower others has made her a beloved figure in the creative industry.",
                   
                },
                {
                    name: 'Hassana Maina', title: 'Founder, ASVIOL Support Initiative', img: '/images/speakers/12.jpg',
                    topic: 'Unveiling Soon',
                    desc: 'Hassana Maina is a dynamic lawyer, writer, and gender consultant with a robust background in law and a specialization in development. She has over five years of impactful work and volunteer experience in Northern Nigeria, she is a committed self-starter passionate about influencing progressive social change. \n Hassana Maina holds a law degree from Ahmadu Bello University, a masters degree in law with specialism in development and globalisation from SOAS, University of London. She has also obtained certificates from prestigious institutions like Said Business School, University of Oxford and National Institute for Policy and Strategic Studies Kuru, Nigeria. \nHassana Maina is the founder and Executive Director of Anti Sexual Violence Lead Support Initiative (ASVIOL Support Initiative), the special assistant on SDGs to H.E Atiku Abubakar GCON and also sits on the Board of Pubic and Private Development Center (PPDC). Hassana Maina was in 2019 mentioned by the BBC media action as the top 5 women fighting for human rights in northern Nigeria. In 2020 she was the recipient of the future Awards Africa prize for activism amongst other awards and recognition.',
                   
                },
                {
                    name: 'Dr Amina Sambo-Magaji', title: 'Senior Startup Advisor', img: '/images/speakers/7.jpeg',
                    topic: 'Unveiling Soon',
                    desc: 'Dr Amina Sambo-Magaji, PhD, is a veteran technocrat, tech policy developer and senior startup advisor with over 21 years of experience. She is a pioneer figure in the Nigerian startup and innovation ecosystem, who has designed, managed and implemented several programs and projects for over 100,000 founders and business owners across Nigeria. Dr Sambo - Magaji has been pivotal in building Nigeria IT Talent and advocating for the adoption of emerging technologies for solving socioeconomic challenges. She is largely focused on building sustainable systems and creating opportunities for youth (especially women and young girls) in tech to excel. \nDr Sambo - Magaji holds a first-class degree in Computer Science from the Abubakar Tafawa Balewa University (ATBU), a master’s with Distinction and PhD (Artificial Intelligence) from the Robert Gordon University, Scotland. She currently leads the Digital Literacy and Capacity Development Department at NITDA. Dr Sambo - Magaji has published and presented her work in several international conferences and journals. In her academic pursuit, at the Advance Centre of Excellence on Technology Enhanced Learning (NOUN-ACETEL) she is part of the team that pioneered MSc and PhD in AI. \nAdditionally, Dr Sambo - Magaji is a United States Distinguished Humphrey Leadership Fellow. She is a recipient of several national',
                   
                },
                {
                    name: 'Ebuka Mordi', title: 'Filmmaker and Photographer', img: '/images/speakers/9.jpeg',
                    topic: 'Unveiling Soon',
                    desc: "As a self-taught filmmaker and photographer, Mordi has been honing his craft and leaving an indelible mark on the creative world since 2014. With a passion for visual storytelling and a keen eye for capturing compelling moments, he has established himself as a force to be reckoned with in the industry. \nMordi's work has been widely recognized and celebrated, gracing the pages of numerous prestigious blogs and magazine. His talent and dedication has earned him the honor of being a Creative Resident with Adobe, where he has contributed invaluable insights and expertise on the development of Lightroom, a software he deeply cherishes. \nBeyond his artistic pursuits, Ebuka Mordi is a celebrated educator, serving as a top teacher on Skillshare, where he shares his knowledge and inspires aspiring creatives through the comprehensive courses on photography. His commitment to nuturing talents has also led to his role as an Adobe Express Ambassador and an Agora Panalist, platforms where he continues to inspire and empower others. \nWith a portfolio that spans diverse genres and mediums Mordi continues to push boundaries and redefine what it means to be a modern-day creative. His unwavering dedication to his craft, combined with his ability to inspire and educate, has solidified his reputation as a true visionary in the world of filmmaking and photography",
                    
                },
                {
                    name: 'Mo Olumide', title: 'Deputy Director General, NASSI', img: '/images/speakers/10.JPG',
                    topic: 'Unveiling Soon',
                    desc: 'Mo Olumide is an alumna of the Faculty of Law, Obafemi Awolowo University, Ille Ife, Nigeria; the University of San Diego, School of Law programme of the Lagos Business School. She is also a Chartered Arbitrator who has spent the last 20+ years mining the Academia-Industry-Governance nexus to help build multi sector, multicultural, and multinational development networks, teams and projects across Africa in EDUCATION, EMPLOYMENT, ENTERPRISE & E-NNOVATION. \nIn her capacity as Deputy Director-General of the Nigerian Association of Small Scale Industrialists (NASSI), and the Technical Committee member of the Organized Private Sector of Nigeria (OPSN), She is reponsible for a lot of Private and Public Sector interfacing, particularly through the Ministry of Forign Affairs, Federal Ministry of Industry, Trade & Investment; The World Intellectual Property Organisation (WIPO, Nigeria) etc.\n She also serves in a number of committees, working groups and think tanks such as the SIFA-AU-NEPAD Skills Initiatives for Africa under the Federal Ministry of Labour, Employment & Wealth Creation; The National Action Committee on the AFCFTA; and she also serves as Board Chair, for the OPSN-led Textile, Apparel & Garments Sector Skills Council of Nigeria, supported by GIZ/SKYE/SEQUA, and sits as Advisory Board/Governing Council member in a number of organizations in Nigeria, Ghana, Sierra Leone, Liberia and the United States of America',
                    
                },
                {
                    name: 'Professor Sahalu Junaidu Balarabe', title: 'Professor', img: '/images/speakers/2.png',
                    topic: 'Unveiling Soon',
                    desc: "Professor Sahalu Junaidu Balarabe is a distinguished academic and seasoned professional across diverse areas of Computer Science. With many years of local and international experience, he has held various positions at numerous universities including Ahmadu Bello University, University Telekom Malaysia, and King Fahd University. He is a senior member of several professional associations like ACM, IEEE, and CPN. \n Professor Junaidu has published widely and attracted funding for research projects from reputable organisations, supervised numerous students and led significant projects like developing and maintaining over a dozen suites of software applications used in ABU and other universities across Nigeria today. He has received multiple awards, including the Instructional Technology Award and the Vice Chancellor Merit Award. \n He has been a consultant to NITDA, NCC, National Universities Commission, National Mathematical Centre, and the Federal Ministry of Education and has attracted developmental interventions to ABU Zaria worth over a Billion Naira from 2009 to 2016. Professor Junaidu’s contributions to computer science and education have made an unquestionable impact, earning him respect and recognition in his field.",
                },
                {
                    name: 'Idris Aminu Idris', title: 'Cyber Security Expert', img: '/images/speakers/8.jpg',
                    topic: 'Unveiling Soon',
                    desc: "Idris Aminu Idris is a cybersecurity expert passionate about solving complex networking challenges. With a strong foundation in computer science and distributed systems, he graduated from Ahmadu Bello University in 2010. Now a technical Consulting Engineer and High Touch Engineer at Cisco Systems, Idris is the go-to expert for critical technical issues. \nEqually passionate about training the next generation of cybersecurity professionals, Idris has trained over 2000 professionals globally over the past decade. His impact in this field has led him to build security systems in top organizations in the UAE, Africa, the United States, and Europe. He firmly believes that security is the Rolls-Royce of Networking. \nIdris story is one of dedication and continous learning. He has honed his skills through rigorous training and real-world experiences, earning the trust of his clients and peers alike. His journey includes earning an impressive array of certificates as a cybersecurity expert, including four CCIEs and a CCDE. He also holds a Master's in Distributed Systems and Networks from the University of Hertfordshire, UK, and an Executive MBA from the Quantic School of Business and technology in Washington, D.C. This commitment to excellence has made him a valuable asset to Cisco and a respected authority in the industry",
                    
                },
                {
                    name: 'Angela Omeiza', title: 'Solution Architect, J Blood Match', img: '/images/speakers/6.png',
                    topic: 'Unveiling Soon',
                    desc: "Angela Omeiza is a Solicitor, an exceptional media entrepreneur and social impact advocate passionate about steering meaningful dialogues and creating an inclusive environment for everyone. \n Angela boasts a stellar portfolio of orchestrating high-profile summits and events and has been invited as a guest, panelist, and speaker at conferences organized by renowned organizations like the World Bank, the United Nations Development Program (UNDP), and the European Union. Angela is driving a strong narrative of impact through her Jela’s Development Initiatives (JDI) an NGO focused on advocating for access to clean water, voluntary blood donation, mental health care, and youth empowerment through volunteering. \n She's the solution architect of  J Blood Match App which uses Google's API to connect blood donors to recipients using their blood type and live location across the 36 states of Nigeria inclusive of the FCT. Her works in the social impact space won her several accolades.\n She was named among the Guardian Newspaper's 100 most inspiring women in Nigeria in 2018, Amazon of the Year Woman on Fire, 2018, Received the honorary membership (2021) of the Abuja Municipal Rotary Club, a recipient of the Bridge Church Excellence Award, and a proud Mandela Washington Fellow.",
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
        // height: 150px;


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