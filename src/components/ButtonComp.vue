<template>
    <router-link :to="{ name: 'register' }" class="btn">
        <slot>Register</slot>
    </router-link>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;

.btn {
    @include m.btn(v.$White,
        v.$black,
        v.$red,
        v.$red,
        v.$White,
        v.$White )
}

.links {
    display: flex;
    gap: 12px;
    align-items: center;

    .cta {
        margin-inline-start: 8px;
    }
}
</style>