<template>
    <div>
        <h2 class="not-found">Page Not Found</h2>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 60px;
    color: red;
    font-weight: 700;
    font-family: Inter;
    margin-top: 40px;
}

@media (max-width: 768px) {
    .not-found {
        font-size: 40px;
    }
}
</style>