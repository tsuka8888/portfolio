<template>
    <header class="header">
        <div class="header__background">
            <mobile-menu-button :menu-open="isInviewMenu" @toggle-menu-open="toggleMenuOpen"></mobile-menu-button>
            <nav class="header__nav">
                <ul class="header__ul">
                    <li v-for="(item, index) in menus" :key="index" class="header__li">
                        <a href="#">
                            <span v-scroll-to="item.class">{{ item.label }}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <MobileMenu></MobileMenu>
    </header>
</template>

<script>
import MobileMenu from "./MobileMenu.vue";
import MobileMenuButton from "./MobileMenuButton.vue";

export default {
    props: ["isInviewMenu"],
    components: {
        MobileMenu,
        MobileMenuButton,
    },
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
    methods: {
        toggleMenuOpen(value) {
            console.log(value);
            this.$emit("toggle-menu-open", value);
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    z-index: 200x;

    &__nav {
        display: none;
    }

    &__background {
        position: fixed;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 4em;
        z-index: 200;
        background-color: $cWhite;
        box-shadow: 0px 6px 40px -20px rgb(0 0 0);
    }

    &__ul {
        display: flex;
        list-style: none;
        margin: 0 20px 0 0;
    }
    &__li {
        height: 4em;
        width: 150px;
        transition: background-color 0.5s;

        &:hover {
            background-color: rgba(0, 0, 0, 0.2);
        }
        & > a {
            text-decoration: none;
            // width: 100%;
            // height: 100%;

            & > span {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                text-align: center;
            }
        }
    }
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
}
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s;
}

@include display_pc {
    .header {
        &__background{
            justify-content: center;
        }
        &__nav {
            display: block;
        }
    }
}
</style>
