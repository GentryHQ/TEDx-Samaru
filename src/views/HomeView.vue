<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import MarqueeComp from "../components/MarqueeComp.vue";
</script>

<template>
  <main>
    <div class="container">
      <h1>TEDx <span>Samaru</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reiciendis tenetur porro.</p>
    </div>

    <MarqueeComp/>
  </main>
</template>


<style lang="scss" scoped>
  @use '../assets/css/variables' as v;

  .container {
    padding-block: 80px;
    text-align: center;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
  }
</style>