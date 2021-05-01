<template>
    <section class="works">
        <div class="works__inner">
            <h2
                class="works__title main-title"
                :class="{ 'animate__animated animate__fadeIn': isInviewMainTitle }"
                v-observe-visibility="{
                    callback: (inview) => {
                        this.isInviewMainTitle = inview;
                    },
                    once: true,
                }"
            >
                My outputs
            </h2>
            <div class="works__texts">
                <p>
                    これまでに作成した成果物をご紹介します。個人で学習を行い、アウトプットを行い始めてまだ2〜3ヶ月程度なのであまり多くありませんが、順次追加予定です。
                </p>
            </div>
            <div class="works__items">
                <div v-for="(item, index) in items" :key="index" class="works__item">
                    <div
                        class="cover-slide hover-darken"
                        style="box-shadow: black 3px 3px 15px 0px"
                        :class="{ inview: item.isInview }"
                        @click="showModal(index)"
                        v-observe-visibility="{
                            callback: (inview) => {
                                item.isInview = inview;
                            },
                            once: true,
                        }"
                    >
                        <div class="works__img bg-img-zoom" :style="{ 'background-image': item.backgroundImagePath }"></div>
                    </div>
                    <span class="works__label">{{ item.name }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import Modal from "./Modal.vue";

export default {
    // props: [modalInfo],
    components: {
        // Modal,
    },
    props: ["isInviewModal"],
    data() {
        return {
            isInviewMainTitle: false,
            // modalTitle: "",
            // modalMessage: "",
            // modalImage: "",
            items: [
                {
                    isInview: false,
                    imagePath: "/ss1.png",
                    backgroundImagePath: "url(/ss1.png)",
                    name: "ホテルの模擬サイト",
                    message:
                        "UdemyでHTML5、Sass、Javascript(ES6)を学んだ際の成果物です。Web開発を行っていた頃から1年半程経過しており、忘れていることも多かったため、復習も兼ねて学習しました。モダンなWebサイト製作を通して、基礎からカルーセルの実装などの応用まで学びました。",
                },
                {
                    isInview: false,
                    imagePath: "/",
                    backgroundImagePath: "#",
                    name: "ポートフォリオサイト",
                    message: "このサイトです。",
                },
            ],
        };
    },
    methods: {
        showModal(index) {
            // this.modalTitle = this.items[index].name;
            // this.modalMessage = this.items[index].message;
            // this.modalImage = this.items[index].imagePath;
            const modalInfo = {
                title : this.items[index].name,
                message : this.items[index].message,
                image : this.items[index].imagePath,
            }
            this.$emit("toggle-modal-open", modalInfo);
        },
        // toggleModalOpen(value) {
        //     this.$emit("toggle-modal-open", value);
        // },
    },
};
</script>
<style lang="scss">
.works {
    &__inner {
        @extend .content-padding;
        @extend .content-width;
    }
    &__items {
        @extend .flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &__item {
        cursor: pointer;
        flex-basis: 47%;
    }
    &__img {
        width: 200px;
        height: 400px;
        background-position: bottom;
    }

    &__label {
        display: block;
        text-align: center;
        padding: 10px 0 20px;
    }
}

@include display_tab {
    .works {
        &__texts {
            width: 66%;
            margin: 0 auto 50px;
        }
    }
}

.cover-slide {
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #eaebe6;
        opacity: 0;
    }
    &.inview {
        &::after {
            opacity: 1;

            @include animation($name: kf-cover-slide, $duration: 1.6s, $timing-function: ease-in-out, $fill-mode: both);
        }
    }
}

@keyframes kf-cover-slide {
    0% {
        transform-origin: left;
        transform: scaleX(0);
    }
    50% {
        transform-origin: left;
        transform: scaleX(1);
    }
    50.1% {
        transform-origin: right;
        transform: scaleX(1);
    }
    100% {
        transform-origin: right;
        transform: scaleX(0);
    }
}

.img-zoom {
    opacity: 0;

    .inview & {
        opacity: 1;
        transition: transform 0.3s ease;
        @include animation($name: kf-img-show, $duration: 1.6s, $timing-function: ease-in-out, $fill-mode: none);

        &:hover {
            transform: scale(1.05);
        }
    }
}

@keyframes kf-img-show {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    50.1% {
        opacity: 1;
        transform: scale(1.5);
    }
    100% {
        opacity: 1;
    }
}

.hover-darken {
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: background-color 0.3s ease;
        pointer-events: none;

        @include animation($name: kf-img-show, $duration: 1.6s, $timing-function: ease-in-out, $fill-mode: none);
    }
    &:hover::before {
        background-color: rgba(0, 0, 0, 0.4);
    }
}

.bg-img-zoom {
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    width: 100%;
    @extend .img-zoom;
}
</style>
