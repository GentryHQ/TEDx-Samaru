<template>
    <div class="speaker">
        <div class="container">
            <h1>Unlocking Potential: Industry Leaders Share Strategies</h1>
            <p> Where ideas collide. Join us for a day of thought-provoking talks that challenge the status quo.</p>
            <ButtonComp class="button" />
        </div>

    </div>


    <div class="container">
        <div class="wrapper">
            <SpeakerComp :isSlider="false"/>
        </div>
    </div>
</template>


<script setup>
import ButtonComp from "../components/ButtonComp.vue";
import SpeakerComp from "../components/SpeakerComp.vue";
</script>

<style lang="scss" scoped>
.speaker {
    padding-block: 5rem;
    text-align: center;

    p {
        max-width: 37.5rem;
        margin-inline: auto;
    }

    .button {
        margin-block-start: 1.25rem;
    }

}

.wrapper {
    margin-block-start: 1.75rem;
    display: grid;
    gap: 1.875rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    align-items: start;
    justify-content: space-between;
}



// Media Query
@media screen and (min-width: 1024px) {
    .wrapper {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>