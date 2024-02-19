<template>
    <v-native-dialog :open="open" class="dialog">
        <div class="dialog_wrapper">
                    <img src="../assets/images/logo_tedx_samaru.png" class="ted_img"> 
                    <div class="speaker_corner">
                        <img :src="speaker.img" :alt="speaker.name">
                        <div class="speaker_text">
                            <h4>{{ speaker.name }}</h4>
                            <p>{{ speaker.title }}</p>
                            <div class="links">
                                <p>Follow At:</p>
                                <div class="socials">
                                    <a :href="speaker.link.fb" v-if="speaker.link.fb.length > 0 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="14px"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg> 
                                    </a>
                                    <a :href="speaker.link.in" v-if="speaker.link.in.length > 0 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18px"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg> 
                                    </a>
                                    <a :href="speaker.link.x" v-if="speaker.link.x.length > 0 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18px"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                                    </a>
                                    <a :href="speaker.link.ig" v-if="speaker.link.ig.length > 0 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18px"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                                    </a>
                                </div>
                                
                                 
                            </div>
                        </div>
                    </div>
                    <div class="speaker_speech">
                        <h3>{{ speaker.topic }}</h3>
                        <p>{{ speaker.desc }}</p>
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
    background-color: black;
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
                weight: v.$fw6;
                size: 20px;
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
            size: clamp(1.25rem, 1rem + 1.3333vw, 1.5rem);
            weight: v.$fw6;
        }
        margin-block-end: 0.5rem;
    }

    p {
        font-size: 1.0625rem;
        font-weight: v.$fw5;
    }
}

.speaker_speech {
    text-align: left;
    margin-block-start: 2.5rem;

    h3 {
        font: {
            size: 28px;
            weight: v.$fw7;
        }            
        margin-block-end: 0.75rem;
        letter-spacing: -1px;

    }
}
</style>