<template>
    <div class="work-modal">
        <div class="work-modal__overlay" @click="closeModal">
            <div class="work-modal__window">
                <div class="work-modal__header">
                    <h4 class="work-modal__header__title">{{ title }}</h4>
                    <span class="work-modal__header__close" @click="closeModal">×</span>
                </div>
                <div class="work-modal__content">
                    <p class="work-modal__content__message">{{ message }}</p>
                    <div class="work-modal__content__img">
                        <img :src="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["isInviewModal", "title", "message", "image"],
    methods: {
        closeModal() {
            this.$emit("set-inview-modal", false);
        },
    },
};
</script>

<style lang="scss">
.work-modal {
    position: relative;
    z-index: 300;

    &__window {
        background-color: $cWhite;
        padding-bottom: 50px;
    }

    &__overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 1000;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: 0.4);
    }

    &__header {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        font-size: 20px;

        &__title {
            color: $cMain;
            text-align: center;
        }
        &__close {
            position: absolute;
            cursor: pointer;
            top: 0;
            right: 15px;
            font-size: 35px;
            transition: color .5s;

            &:hover {
                text-decoration: none;
                color: $cMain;
            }
        }
    }
    &__content {
        @extend .content-width;

        &__img {
            & > img {
                box-shadow: black 3px 3px 15px 0px;
            }
        }
    }
}

@include display_tab {
    .work-modal {
        &__content {
            &__message {
                width: 70%;
                margin: 0 auto 30px;
            }
            &__img {
                text-align: center;
                & > img {
                    width: 50%;
                }
            }
        }
    }
}
</style>
