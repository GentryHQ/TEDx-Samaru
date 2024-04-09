<script setup>
defineProps(['iconSrc', 'text'])
</script>
<template>
 <div class="perks-card">
  <div>
   <img :src="iconSrc" />
  </div>
  <p>{{ text }}</p>
 </div>
</template>
<style scoped>
.perks-card {
 border: 1px;
 border: solid;
 border-color: red;
 padding: 2rem;
 display: flex;
 gap: 1rem;
}
</style>