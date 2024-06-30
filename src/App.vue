<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Button from './components/ButtonComp.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
 <header>
  <div class="container">
   <nav>
    <RouterLink aria-label="Home Page" to="/"
     ><img
      src="./assets/images/navlogo.png"
      alt="TEDx Samaru Logo"
      class="logo"
      width="120px"
      @click="closeMenu"
    /></RouterLink>

    <div class="links" v-if="isMenuOpen || !isSmallScreen">
     <RouterLink to="/" @click="closeMenu">Home</RouterLink>
     <RouterLink :to="{ name: 'speakers' }" @click="closeMenu">Speakers</RouterLink>
     <RouterLink :to="{ name: 'about' }" @click="closeMenu">About</RouterLink>
     <RouterLink :to="{ name: 'sponsors' }" @click="closeMenu">Sponsors</RouterLink>
     <RouterLink :to="{ name: 'contact' }" @click="closeMenu">Contact</RouterLink>
     <Button button-type="plain" class="cta" @click="closeMenu" />
    </div>

    <button class="toggle" :class="{ open: isMenuOpen }" @click="toggleMenu">
     <span class="one" id="one"></span>
     <span class="two" id="two"></span>
     <span class="three" id="three"></span>
    </button>
   </nav>
  </div>
 </header>

 <RouterView />
 <FooterComp />
</template>

<script>
export default {
 data() {
  return {
   windowWidth: window.innerWidth,
   isMenuOpen: false,
   isSmallScreen: false
  }
 },
 created() {
  this.checkScreenSize()
  window.addEventListener('resize', this.checkScreenSize)
 },
 beforeUnmount() {
  window.removeEventListener('resize', this.checkScreenSize)
 },

 methods: {
  toggleMenu() {
   this.isMenuOpen = !this.isMenuOpen
  },

  checkScreenSize() {
   this.isSmallScreen = window.innerWidth < 501
  },

  closeMenu() {
   this.isMenuOpen = false
  }
 }
}
</script>

<style>
.toggle {
 display: flex;
 flex-direction: column;
 width: 30px;
 height: 24px;
 gap: 4px;
 align-items: center;
 padding: 5px;
 border: none;
 background-color: transparent;

 #one,
 #two,
 #three {
  width: 100%;
  height: 2px;
  background-color: black;
  transition: all 0.3s ease-in-out;
 }
}

.toggle.open .one {
 transform: rotate(45deg) translate(0px, 8px);
}

.toggle.open .two {
 opacity: 0;
}

.toggle.open .three {
 transform: rotate(-45deg) translate(0px, -9px);
}

@media (min-width: 501px) {
 .toggle {
  display: none;
 }
}
</style>




