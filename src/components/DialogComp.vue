<template>
    <v-native-dialog :open="open" class="dialog">
        <div class="dialog_wrapper">
                    <img src="../assets/images/logo_tedx_samaru.png" class="ted_img"> 
                    <div class="speaker_corner">
                        <img :src="speaker.img" :alt="speaker.name">
                        <div class="speaker_text">
                            <h4>{{ speaker.name }}</h4>
                            <p>{{ speaker.title }}</p>
                        </div>
                    </div>
                    <div class="speaker_speech">
                        <h3>Topic- {{ speaker.topic }}</h3>
                        <p v-html="speaker.desc.replaceAll('\n', '<br><br>')"></p>
                    </div>

                </div>

        <button @click="$emit('close')">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>
    </v-native-dialog>
</template>

<script setup>
    import { VNativeDialog } from "vue-native-dialog";
    import { ref } from "vue";
    const open = ref(false);
</script>

<script>
export default {
    props: {
        speaker: {
            type: Object,
            required: true
        }
    },
    emits: ['close']
};
</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;

.ted_img {
    background-color: v.$black;
    padding: 40px;
    border-radius: v.$br2;
}
.dialog {
    max-inline-size: 600px;
    margin: auto;
    border-radius: v.$br2;
    background-color: v.$White;
    padding: 1.875rem;
}

::backdrop {
    background-color: rgba(48, 0, 0, 0.669);
}

button {
    background-color: v.$red;
    border-radius: 100%;
    border: 1px solid v.$White;
    padding: 8px 14px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    transition: all 0.5s ease-in-out;

    &:hover {
        background-color: v.$White;
        border: 1px solid v.$red;

        svg {
            fill: v.$red;
        }
    }

    svg {
        fill: v.$White;
    }
}

.speaker_corner {
    margin-block-start: 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: center;

    .links {
        margin-block-start: 0.875rem;
        p {
            margin-block-end: 0.5rem;
            font: {
                weight: v.$fw5;
                size: 18px;
            }
        }
        svg {
            display: block;
        }

        a {
            border: 1px solid v.$black;
            display: block;
            padding: 10px 14px;
            border-radius: 1000px;
            transition: all .5s ease-in-out;

            &:hover {
                border-color: v.$red;
                fill: v.$red;
            }
        }
    }
    .socials {
        display: flex;
        gap: 0.5rem;
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;

        img {
            max-width: 300px;
        }
    }

    img {
        border-radius: v.$br2;
        aspect-ratio: 1/1;
        object-fit: cover;
        box-shadow: 3px 3px v.$red;
        border: 1px solid v.$black;
    }
}

.speaker_text {
    text-align: left;

    h4 {
        font: {
            size: clamp(1.125rem, 1rem + 1.3333vw, 1.375rem);
            weight: v.$fw7;
        }
        margin-block-end: 0.5rem;
    }

    p {
        font-size: 1rem;
        font-weight: v.$fw4;
    }
}

.speaker_speech {
    text-align: left;
    margin-block-start: 2.5rem;

    h3 {
        font: {
            size: 24px;
            weight: v.$fw7;
        }            
        margin-block-end: 0.75rem;
        letter-spacing: -1px;

    }

    p {
        font-size: 18px;
    }
}
</style>