<template>
    <section class="aboutme">
        <div class="aboutme__inner">
            <h2
                class="aboutme__title main-title"
                :class="{ 'animate__animated animate__fadeIn': isInviewMainTitle }"
                v-observe-visibility="{
                    callback: (inview) => {
                        this.isInviewMainTitle = inview;
                    },
                    once: true,
                }"
            >
                About me
            </h2>
            <div class="aboutme__container">
                <div
                    class="aboutme__img"
                    v-observe-visibility="{
                        callback: (inview) => {
                            this.isInviewImage = inview;
                        },
                    }"
                >
                    <div class="aboutme__img__img" :class="{ 'animate__animated animate__bounceIn': isInviewImage }">
                        <img src="/aboutme_icon.png" alt="" />
                    </div>
                    <span class="aboutme__img__name">山本 司</span>
                </div>
                <div
                    class="aboutme__texts"
                    :class="{ 'animate__animated animate__fadeIn': isInviewDiv1 }"
                    v-observe-visibility="{
                        callback: (inview) => {
                            this.isInviewDiv1 = inview;
                        },
                    }"
                >
                    <p>
                        滋賀県出身のシステムエンジニア。小さい頃からパソコンとゲームが大好きだったこともあり、ゲームプログラマーの専門学校へ飛び込む。その学校でWeb開発の授業を受けたのがWeb開発との最初の出会い。システム会社に入社後は、Web開発のエンジニアとしてサーバーサイドからフロントエンドまで業務を経験。現在はVB.Netの業務ソフトウェアの開発と保守など、様々なことに挑戦しています。
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isInviewMainTitle: false,
            isInviewImage: false,
            isInviewProfile: false,
            isInviewDiv1: false,
            isInviewDiv2: false,
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.aboutme {
    & span {
        display: block;
    }

    &__inner {
        @extend .content-width;
        @extend .content-padding;
    }

    &__title {
        text-align: center;
    }

    &__container {
        @extend .flex;
        @extend .content-width-texts;
        justify-content: space-around;
    }

    &__img {
        @extend .mb-sm;

        &__img {
            @extend .mb-sm;
            margin: 0 auto;
            width: 100px;
            height: 100px;
            object-fit: contain;

            & > img {
                border-radius: 20px;
            }
        }

        &__name {
            text-align: center;
        }
    }
}

@include display_tab {
    .aboutme {
        &__img {
            min-width: 200px;
            &__img {
                width: 120px;
                height: 120px;
            }
        }
    }
}

@include display_pc {
    .aboutme {
        &__img {
            &__img {
                width: 150px;
                height: 150px;
            }
        }
        &__texts {
            margin: 0 35px;
        }
    }
}
</style>
