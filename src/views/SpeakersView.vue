<template>
    <div class="speaker">
        <div class="container">
            <h1>Unlocking Potential: Industry Leaders Share Strategies</h1>
            <p> Where ideas collide. Join us for a day of thought-provoking talks that challenge the status quo.</p>

            <div class="img_box">
                <div class="first box">
                    <img src="/images/ted-speaker.png" alt="Ted speaker on stage speaking to people">
                </div>
                <div class="second box">
                    <img src="/images/tedxMark.png" alt="Tedx write up">
                </div>
                <div class="third box">
                    <img src="/images/tedx speaker.jpeg"
                        alt="Ted speaker facing the audience on stage speaking to people">
                </div>
            </div>
        </div>
    </div>

    <div class="info">
        <div class="container">
            <div class="col1 col">
                <h5>🥂One Day of Awesomeness</h5>
                <h3><span>10th of AUGUST</span></h3>
                <p>We will be making history, once again, with you</p>
                <ButtonComp />
            </div>

            <div class="col2 col">
                <img src="/images/venue.png"
                    alt="Venue for TedxSamaru, Centre of excellence Ahmadu Bello University, Zaria">
                <h5>We will be at the <span>Centre of excellence Ahmadu Bello University, Zaria.</span></h5>
            </div>
        </div>
    </div>

    <div class="wrapper">
        <h2>Our Speakers for this event</h2>
        <p>Meet our Amazing Speakers!</p>
        <div class="container">
            <SpeakerComp :isSlider="false" />
        </div>
        <ButtonComp />
    </div>

    <!-- <div class="faqComp">
        <div class="container">
            <FaqComp />
        </div>
    </div> -->
    
</template>


<script setup>
// import FaqComp from "@/components/FaqComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
import SpeakerComp from "../components/SpeakerComp.vue";
</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;

.speaker {
    h1 {
        max-inline-size: 940px;
        text-align: center;
        margin-inline: auto;
    }

    padding-block: 5rem;
    text-align: center;

    .img_box {
        // margin-block-start: 40px;
        display: flex;
        justify-content: space-between;
        gap: 32px;

        .box {
            // height: 400px;

            img {
                object-fit: cover;
                aspect-ratio: 1/1;
                // width: 100%;
                height: 400px;
                @include m.boxShadow(v.$primary-500);
            }
        }

        .first {
            clip-path: polygon(0 0, 100% 36%, 100% 100%, 0% 100%);
            @include m.boxShadow(v.$primary-500);
        }

        .second {
            clip-path: polygon(0 36%, 100% 36%, 100% 100%, 0% 100%);
        }

        .third {
            clip-path: polygon(0 36%, 100% 0, 100% 100%, 0% 100%);
        }
    }

    p {
        max-width: 37.5rem;
        margin-inline: auto;
    }

}

.info {
    margin-block: 5rem;

    .container {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        gap: 32px;
    }

    .col {
        flex-basis: 50%;
        border-radius: 1.5rem;
        padding: 2.5rem;

        h5 {
            font-size: clamp(0.875rem, 0.6989rem + 0.7512vw, 1.375rem);
        }
    }

    .col1 {
        background-color: v.$black;
        color: v.$White;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 1rem;

        h3 {
            font-size: clamp(1.5rem, 1.2799rem + 0.939vw, 2.125rem);
            font-weight: v.$fw7;

            span {
                display: block;
                font-size: clamp(1rem, 0.8239rem + 0.7512vw, 1.5rem);
            }
        }

        a {
            margin-block-start: 1rem;
        }
    }

    .col2 {
        background-color: v.$primary-50;

        h5 {
            margin-block-start: 1rem;
            font-size: clamp(0.875rem, 0.6989rem + 0.7512vw, 1.375rem);

            span {
                display: block;
                padding-block-start: 16px;
                font-size: clamp(1rem, 0.7359rem + 1.1268vw, 1.75rem);
                font-weight: v.$fw5;
            }
        }
    }
}

.wrapper {
    text-align: center;
    margin-block: 5rem;

    h2 {
        padding-block-end: 1.25rem;
    }

    p {
        padding-block-end: 1.25rem;
    }

    .container {
        margin-block-start: 1.75rem;
        display: grid;
        gap: 1.875rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        align-items: start;
        justify-content: space-between;
        margin-bottom: 68px;
    }

    a {
        margin-block-start: 2.5rem;
    }
}

.location-info-section {
 padding-block: 5rem;
 text-align: justify;
}

.faqComp {
    margin-block: 5rem;
}

// Media Query
@media screen and (min-width: 1024px) {
 .wrapper {
  grid-template-columns: repeat(4, 1fr);
 }
}

@media screen and (max-width: 768px) {
    .info {

        .container {
            flex-direction: column;
        }

        .col {
            padding: 1.875rem 1.25rem;
        }
    }
}
</style>