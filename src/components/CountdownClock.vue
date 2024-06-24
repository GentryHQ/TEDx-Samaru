<template>
 <div class="countdown">
  <div class="countdown-timer">
   <span>{{ days }}d : </span>
   <span>{{ hours }}h : </span>
   <span>{{ minutes }} : m</span>
   <span>{{ seconds }} : s</span>
  </div>
 </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
 targetDate: {
  type: Date,
  required: true
 }
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

function calculateTimeLeft() {
 const now = new Date()
 const difference = (props.targetDate - now) / 1000

 days.value = Math.floor(difference / (60 * 60 * 24))
 hours.value = Math.floor((difference % (60 * 60 * 24)) / (60 * 60))
 minutes.value = Math.floor((difference % (60 * 60)) / 60)
 seconds.value = Math.floor(difference % 60)
}

let interval
onMounted(() => {
 calculateTimeLeft()
 interval = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
 clearInterval(interval)
})

watch(
 () => props.targetDate,
 () => {
  calculateTimeLeft()
  if (interval) clearInterval(interval)
  interval = setInterval(calculateTimeLeft, 1000)
 }
)
</script>

<style scoped lang="scss">
.countdown {
 display: flex;
 justify-content: center;
 align-items: center;
 background: transparent;
}

.countdown-timer {
 background: rgb(255 255 255 / 24%);
 padding: 20px;
 border-radius: 10px;
 color: #fff;
 font-family: 'Arial', sans-serif;
 font-size: 24px;
 display: flex;
 backdrop-filter: blur(10px);
}

.countdown-timer span {
 display: inline-block;
}
</style>
