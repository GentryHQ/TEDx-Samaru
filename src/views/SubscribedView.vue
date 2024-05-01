<template>
    <div class="coming-soon">
        <h1>Thank You!</h1>
        <p> We're happy to have you join our community.</p>
        <p>You're now subscribed to receive the latest updates, news, and exclusive offers directly to your inbox.</p>
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

    p {
        text-align: center;
        color: black;
    }
}

@media (max-width: 768px) {
    .coming-soon {
        font-size: 40px;
    }
}
</style>