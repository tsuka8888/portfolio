<template>
    <section class="skill">
        <div class="skill__inner">
            <h2
                class="skill__title main-title"
                :class="{ 'animate__animated animate__fadeIn': isInviewMainTitle }"
                v-observe-visibility="{
                    callback: (inview) => {
                        this.isInviewMainTitle = inview;
                    },
                    once: true,
                }"
            >
                My skill set
            </h2>
            <div class="skill__div1">
                <p>これまでに身につけたスキルをご紹介します。約2年半、フロントエンドからバックエンドまでのフルスタック開発の業務経験があります。</p>
            </div>
            <div class="skill__div2">
                <div
                    class="skill__div2__chart"
                    v-observe-visibility="{
                        callback: methods1,
                        once: true,
                    }"
                >
                    <chart :isRender="isInviewChart"></chart>
                </div>
                <div class="skill__div2__texts">
                    <p>
                        Vue.jsに関して業務で使用したことはありませんでしたが、もっとモダンなWebページを作れるようなエンジニアになりたいという思いから、2021年3月頃から独学で学習しました。
                    </p>
                    <p>
                        サーバーサイドに関して、実務ではASP.NET
                        MVC5とVB.NETを使用していました。PHPに関しては知識が薄いですが、現在掲示板サイトの作成を通じて学習を進めている最中です。
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Chart from "./Chart";

export default {
    data() {
        return {
            isInviewMainTitle: false,
            isInviewChart: false,
            skills: [
                {
                    name: "フロントエンド開発",
                    value: "HTML5／CSS／Javascriptを用いたフロントエンド開発を行うことが可能です。\nまた、SaSS、JQueryも使用可能です。",
                    icon: "laptop-code",
                    inview: false,
                },
                {
                    name: "バックエンド開発",
                    value:
                        "ASP.NET MVC5を用いたバックエンド開発経験があります。\nまた、Ajaxを用いたサーバとの非同期通信、SQLについても実務経験があります。",
                    icon: "server",
                    inview: false,
                },
                { name: "Git", value: "Gitを用いたチーム開発経験があります。", icon: "code-branch", inview: false },
            ],
        };
    },
    components: { Chart },
    methods: {
        methods1(inview) {
            this.isInviewChart = inview;
            console.log("isInviewChart", this.isInviewChart);
        },
    },
};
</script>

<style lang="scss" scoped>
.skill {
    & span {
        display: block;
    }

    &__inner {
        @extend .content-width;
        @extend .content-padding;
    }

    &__div2 {
        @extend .flex;
        &__chart {
            margin-bottom: 20px;
        }
    }

    &__item {
        @extend .mb-md;
        @extend .flex;
    }

    &__chart {
        @extend .mb-sm;
    }
}

@include display_tab {
    .skill {
        &__img {
            min-width: 200px;
            margin: 20px;
        }
        &__item {
            align-items: center;
        }
        &__div1 {
            width: 66%;
            margin: 0 auto 50px;
        }
        &__div2 {
            justify-content: space-between;
            align-items: center;
            &__chart {
                height: 300px;
                flex-basis: 47%;
            }
            &__texts {
                flex-basis: 47%;
            }
        }
    }
}

@include display_pc {
    .skill {
        &__img {
            &__img {
                width: 150px;
                height: 150px;
            }
        }
        &__div2 {
            justify-content: space-around;
            &__chart {
                flex-basis: 40%;
            }
            &__texts {
                flex-basis: 47%;
            }
        }
    }
}
</style>
