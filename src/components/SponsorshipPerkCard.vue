<script setup>
defineProps(['iconSrc', 'text'])
</script>
<template>
 <div class="perks-card">
  <div>
   <img class="image-icon" :src="iconSrc" />
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
 height: 130px;
 align-items: center;
 justify-content: center;
}

.image-icon {
    width: 56px;
    height: 56px;
}

@media screen and (max-width: 768px) {
    .image-icon {
    width: 40px;
    height: 35px;
    flex-shrink: 0;
    }
 }
</style>