<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Button from "./components/Button.vue";
</script>

<template>
  <header>

    <div class="container">

      <nav>
        <RouterLink aria-label="Home Page" to="/"><img src="./assets/images/logo_tedx_samaru.png" alt="TEDx Samaru Logo" class="logo" width="120px"></RouterLink>

        <div class="links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink :to="{ name: 'speakers' }">Speakers</RouterLink>
          <RouterLink :to="{ name: 'sponsors' }">Sponsors</RouterLink>
          <Button class="cta"/>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>




