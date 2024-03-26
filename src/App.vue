<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Button from "./components/ButtonComp.vue";
</script>

<template>
  <header>

    <div class="container">

      <nav>
        <RouterLink aria-label="Home Page" to="/"><img src="./assets/images/logo_tedx_samaru.png" alt="TEDx Samaru Logo"
            class="logo" width="120px" @click="closeMenu"></RouterLink>

        <div class="links" v-if="isMenuOpen || !isSmallScreen">
          <RouterLink to="/" @click="closeMenu">Home</RouterLink>
          <RouterLink :to="{ name: 'speakers' }" @click="closeMenu">Speakers</RouterLink>
          <RouterLink :to="{ name: 'about' }" @click="closeMenu">About</RouterLink>
          <RouterLink :to="{ name: 'sponsors' }" @click="closeMenu">Sponsors</RouterLink>
          <Button class="cta" @click="closeMenu" />
        </div>

        <button class="toggle" @click="toggleMenu">
          <span class="one"></span>
          <span class="two"></span>
          <span class="three"></span>
        </button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      isMenuOpen: false,
      isSmallScreen: false,
    };
  },
  created() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },

  methods: {

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 501;
    },

    closeMenu() {
      this.isMenuOpen = false;
    },
  }
};
</script>




