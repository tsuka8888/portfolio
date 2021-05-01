<template>
    <footer class="footer">
        <div class="footer__arrow" v-scroll-to="'.top'">
            <font-awesome-icon icon="arrow-up" class="footer__arrow__icon" />
        </div>
        <p class="footer__copy">&copy; 2021 Tsukasa Yamamoto</p>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
    position: relative;
    height: 150px;
    background-color: $cMain;

    &__arrow {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 50%;
        width: 4em;
        height: 4em;
        transform: translate(-50%, -30%);
        border-radius: 50%;
        background-color: $cMain;
        transition: transform 0.5s;
        cursor: pointer;

        &:hover {
            transform: translate(-50%, -50%);
        }

        &__icon {
            font-size: 3em;
            color: $cWhite;
        }
    }
    &__copy {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $cWhite;
            width: 100%;
    text-align: center;
    }
}
</style>
