<template>
  <div class="marquee">
    <div class="marquee__group">
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
    </div>
    <div class="marquee__group" aria-hidden="true">
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
    </div>
  </div>

  <div class="marquee marquee2">
    <div class="marquee__group">
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
    </div>
    <div class="marquee__group" aria-hidden="true">
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
      <span>LIMITED TICKETS AVAILABLE 🔥 REGISTER NOW 🔥</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;

$gap: 1.25rem;

.marquee {
  display: flex;
  position: relative;
  z-index: 8;
  overflow: hidden;
  height: 50px;
  user-select: none;
  gap: $gap;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: v.$red;
  transform: skewY(-2deg);
  //  transform: rotate(-5deg) translateY(-30px) translateX(50px);
}

.marquee2 {
  background-color: v.$White;
  transform: skewY(9deg);

  .marquee__group span {
    color: v.$red;
  }
}


.marquee__group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $gap;
  min-width: 100%;
  animation: scroll 25s linear infinite reverse;
}

.marquee__group span {
  color: white;
  font-size: 20px;
  font-weight: v.$fw5;
  white-space: nowrap;
  font-family: v.$ff;
  text-transform: uppercase;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-100% - 2rem));
  }
}
</style>