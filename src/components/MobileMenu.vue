<template>
    <nav class="mobile-menu">
        <ul class="mobile-menu__main">
            <li class="mobile-menu__item" v-for="(item, index) in menus" :key="index">
                <a class="mobile-menu__link" href="#">
                    <h4 v-scroll-to="item.class">{{ item.label }}</h4>
                    <!-- <span>トップ</span> -->
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menus: [
                { label: "Top", class: ".top" },
                { label: "About me", class: ".aboutme" },
                { label: "My skill set", class: ".skill" },
                { label: "My outputs", class: ".works" },
            ],
        };
    },
};
</script>

<style lang="scss">
.mobile-menu {
    position: fixed;
    right: 0;
    top: 4em;
    width: 300px;
    z-index: 200;
    background-color: $cWhite;
    transform: translateX(100%);
    transition: transform 0.5s;

    & .logo {
        padding: 0 40px;
        font-size: 38px;
    }

    &__cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        visibility: hidden;
        transition: opacity 1s;
        cursor: pointer;
        z-index: 200;
    }
    &__main {
        padding: 0;
        margin: 0;
        perspective: 2000px;
        transform-style: preserve-3d;
    }
    &__item {
        height: 40px;
        list-style: none;
        display: block;
        transform: translate3d(0, 0, -1000px);
        // padding: 0 40px;
        transition: transform 0.3s, opacity 0.2s;
        opacity: 0;
        background-color: $cWhite;
    }
    &__link {
        display: block;
        // margin-top: 30px;
        height: 100%;
        color: $cBlack;
        text-decoration: none !important;
        transition: background-color 0.5s;

        &:hover {
            background-color: rgba(0, 0, 0, 0.3);
        }
        & h4 {
            display: flex;
            align-items: center;
            padding-left: 30px;
            width: 100%;
            height: 100%;
            margin: 0;
        }
    }
}

.menu-open {
    // & #container {
    //     transform: translate(-300px, 0px);
    //     box-shadow: 0 8px 40px -10px rgba(0, 0, 0, 0.8);
    // }

    & .mobile-menu {
        // &__cover {
        //     opacity: 1;
        //     visibility: visible;
        // }

        transform: none;

        &__item {
            transform: none;
            opacity: 1;
            height: 4em;

            @for $i from 1 through 5 {
                &:nth-child(#{$i}) {
                    transition-delay: 0.2s + $i * 0.07s;
                }
            }
        }
        &__btn {
            & > span {
                background-color: $cMenuOpen;

                &:nth-child(1) {
                    transition-delay: 70ms;
                    transform: translateY(11px) rotate(135deg);
                }
                &:nth-child(2) {
                    transition-delay: 0s;
                    transform: translateX(-18px) scaleX(0);
                }
                &:nth-child(3) {
                    transition-delay: 140ms;
                    transform: translateY(-11px) rotate(-135deg);
                }
            }
        }
    }
}
</style>
