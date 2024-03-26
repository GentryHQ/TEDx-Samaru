<template>
    <div class="container">
        <h1>Seasoned speakers sharing industry expertise</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse impedit quisquam nisi iusto dolores unde.</p>
        <ButtonComp class="button"/>
    </div>

    <MarqueeComp />

    <div class="container">
        <div class="wrapper">
            <SpeakerComp/>
        </div>
    </div>
</template>


<script>
import MarqueeComp from "../components/MarqueeComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
import SpeakerComp from "../components/SpeakerComp.vue";

    export default {
        components: {
            MarqueeComp,
            ButtonComp,
            SpeakerComp,
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        margin-block-start: 1.75rem;
        display: grid;
        gap: 1.875rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        align-items: start;
        justify-content: space-between;
    }

    .container {
        padding-block: 5rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;



        p {
            max-width: 37.5rem;
        }

        .button {
            margin-block-start: 1.25rem;
        }
    }

    // Media Query
    @media screen and (min-width: 1024px) {
    .wrapper {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>