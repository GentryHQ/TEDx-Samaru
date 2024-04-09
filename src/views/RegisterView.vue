<template>
    <div class="coming-soon">
        Coming Soon
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.coming-soon {
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
    .coming-soon {
        font-size: 40px;
    }
}
</style>