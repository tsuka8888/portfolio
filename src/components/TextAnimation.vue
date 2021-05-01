<template>
    <span class="tween-animate-title">
        <span v-for="(list, index) in spanArray" :key="index" class="char">{{ list }}</span>
    </span>
</template>

<script>
export default {
    props: ["texts"],
    computed: {
        spanArray() {
            return this.texts.trim().split("");
        },
    },
};
</script>

<style lang="scss">
.tween-animate-title {
    opacity: 0;
    &.inview {
        opacity: 1;
    }
    & .char {
        display: inline-block;
        opacity: 0;
        white-space: pre;
    }
}
</style>
