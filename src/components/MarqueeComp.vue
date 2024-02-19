<template>
  <div class="marquee">
    <div class="marquee__group">
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
    </div>
    <div class="marquee__group" aria-hidden="true">
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
    </div>
  </div>

  <div class="marquee marquee2">
    <div class="marquee__group">
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
    </div>
    <div class="marquee__group" aria-hidden="true">
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
      <span>hello there ➺</span>
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
  overflow: hidden;
  height: 50px;
  user-select: none;
  gap: $gap;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: v.$red;
  transform: skewY(-3deg);
  //  transform: rotate(-5deg) translateY(-30px) translateX(50px);
}



.marquee:hover {
  -webkit-text-stroke: 1px v.$White;
  text-stroke: 1px v.$White;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  color: transparent;
  transition: all 0.5s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.marquee2 {
  background-color: v.$White;
  transform: skewY(9deg);

  .marquee__group span {
    color: v.$red;
  }

  &:hover {
    -webkit-text-stroke: 1px v.$red;
    text-stroke: 1px v.$red;
  }

}


.marquee__group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $gap;
  min-width: 100%;
  animation: scroll 15s linear infinite reverse;
}

.marquee__group span {
  color: white;
  font-size: 2rem;
  font-weight: v.$fw7;
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