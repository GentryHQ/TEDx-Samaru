<template>
 <div class="countdown">
  <div class="countdown-timer">
   <span>{{ formattedTime.days }}{{"d"}} : </span>
   <span>{{ formattedTime.hours }}{{"h"}} : </span>
   <span>{{ formattedTime.minutes }}{{"m"}} : </span>
   <span>{{ formattedTime.seconds }}{{"s"}} </span>
  </div>
 </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { differenceInSeconds } from 'date-fns'

const props = defineProps({
 targetDate: {
  type: [Date, String],
  required: true
 }
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const formattedTime = computed(() => ({
 days: String(days.value).padStart(2, '0'),
 hours: String(hours.value).padStart(2, '0'),
 minutes: String(minutes.value).padStart(2, '0'),
 seconds: String(seconds.value).padStart(2, '0')
}))

function calculateTimeLeft() {
 const now = new Date()
 const target = new Date(props.targetDate)
 const difference = differenceInSeconds(target, now)

 if (difference > 0) {
  days.value = Math.floor(difference / (60 * 60 * 24))
  hours.value = Math.floor((difference % (60 * 60 * 24)) / (60 * 60))
  minutes.value = Math.floor((difference % (60 * 60)) / 60)
  seconds.value = Math.floor(difference % 60)
 } else {
  days.value = hours.value = minutes.value = seconds.value = 0
 }
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
 font-size: 3rem;
 display: flex;
 backdrop-filter: blur(10px);

 @media screen and (max-width: 768px) {
  font-size: 2rem;
 }
}

.countdown-timer span {
 display: inline-block;
}
</style>
