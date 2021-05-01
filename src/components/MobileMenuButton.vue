<template>
    <button class="mobile-menu__btn" @[this.getEventType()]="toggleMenuOpen">
        <span></span>
        <span></span>
        <span></span>
    </button>
</template>

<script>
export default {
    props: ["menuOpen"],
    methods: {
        toggleMenuOpen() {
            this.$emit("toggle-menu-open", !this.menuOpen);
        },
    },
};
</script>

<style lang="scss">
.mobile-menu {
    &__btn {
        top: 15px;
        right: 10px;
        position: fixed;
        background-color: unset;
        border: none;
        outline: none !important;
        cursor: pointer;
        z-index: 2000;
        margin-right: 5px;

        & > span {
            background-color: $cMenuClose;
            width: 35px;
            height: 2px;
            display: block;
            margin-bottom: 9px;
            transition: transform 0.7s;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}

@include display_pc{
    .mobile-menu__btn{
        display: none;
    }
}
</style>
