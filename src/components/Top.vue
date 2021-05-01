<template>
    <section class="top">
        <div class="top__inner">
            <div
                class="top__texts"
                v-observe-visibility="{
                    callback: triggerInviewMainTitle,
                    once: true,
                }"
            >
                <div v-show="isInviewMainTitle">
                    <div class="top__texts__inner" :class="{ 'animate__animated animate__fadeInUp': isInviewMainTitle }">
                        <h2 class="top__first-name" :class="{ 'animate__animated animate__fadeInUp': isInviewMainTitle }">Tsukasa</h2>
                        <h2 class="top__last-name" :class="{ 'animate__animated animate__fadeInUp': isInviewMainTitle }">Yamamoto</h2>
                    </div>
                    <h4 class="top__sub-title" :class="{ 'animate__animated animate__fadeInUp': isInviewMainTitle }">portfolio site</h4>
                    <div class="top__arrow" :class="{ 'animate__animated animate__fadeInUp': isInviewMainTitle }" v-scroll-to="'.aboutme'">
                        <font-awesome-icon icon="arrow-circle-down" class="top__arrow__icon" />
                    </div>
                </div>
            </div>

            <nav class="top__header">
                <ul class="top__header__ul">
                    <li class="top__header__li">Top</li>
                    <li class="top__header__li">/</li>
                    <li class="top__header__li">About Me</li>
                    <li class="top__header__li">/</li>
                    <li class="top__header__li">Skill</li>
                    <li class="top__header__li">/</li>
                    <li class="top__header__li">Works</li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
import gsap from "gsap";

export default {
    data() {
        return {
            isInviewMainTitle: false,
            isInviewSubTitle: false,
        };
    },
    methods: {
        triggerInviewMainTitle(inview) {
            this.isInviewMainTitle = inview;
            console.log(this.isInviewMainTitle);
        },
        animate(inview, el) {
            if (inview) {
                el.target.classList.add("inview");
                const chars = el.target.querySelectorAll(".char");
                chars.forEach((c, i) => {
                    gsap.to(c, {
                        duration: 0.6,
                        delay: i * 0.05,
                        startAt: { y: "-50%", opacity: 0 },
                        y: "0%",
                        opacity: 1,
                    });
                });
            } else {
                el.target.classList.remove("inview");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.top {
    &__inner {
        height: 100vh;
        background-color: $cMain;
        position: relative;
    }

    &__content {
        position: relative;
        width: 300px;
        margin: 0 auto;
    }

    &__texts {
        position: relative;
        top: 50%;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        font-size: 36px;
        color: $cWhite;
        transform: translateY(-50%);

        & span {
            display: block;
        }

        @include display_pc {
            &__inner {
                display: flex;
                justify-content: center;

                & > span {
                    margin-right: 10px;
                }
            }
        }

        &__inner {
            font-size: 0.8em;
        }
    }

    &__last-name {
        animation-delay: 0.5s;
        @include display_pc {
            animation-delay: 0s;
        }
    }
    &__sub-title {
        font-size: 0.6em;
        letter-spacing: 2px;
        animation-delay: 1s;
        @include display_pc {
            animation-delay: 0.5s;
        }
        @extend .mb-sm;
    }

    &__header {
        display: none;
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $cWhite;

        &__ul {
            display: flex;
            list-style: none;
            padding: 0;
        }
        &__li {
            margin-left: 20px;

            & > a {
                color: $cWhite;
            }
        }
    }

    &__arrow {
        animation-delay: 1.5s;
        @include display_pc {
            animation-delay: 1s;
        }
        &__icon {
            cursor: pointer;
            @include animation($name: kf-arrow-anime, $iteration-count: infinite, $duration: 2s, $timing-function: ease, $delay: 3s);
        }
    }
}

@keyframes kf-arrow-anime {
    0%,
    50%,
    100% {
        transform: none;
    }
    30% {
        transform: translateY(20%);
    }
}
</style>
