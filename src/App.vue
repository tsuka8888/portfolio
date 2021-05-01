<template>
    <transition name="menu">
        <div id="global-container" ref="global-container" :class="{ 'menu-open': isInviewMenu, 'modal-open': isInviewModal }">
            <div id="container">
                <transition name="fade">
                    <div v-show="isInviewMenu" class="overlay" @click="closeMenu"></div>
                </transition>
                <Header :isInviewMenu="isInviewMenu" @toggle-menu-open="setInviewMenu"></Header>
                <main class="main">
                    <Top></Top>
                    <AboutMe></AboutMe>
                    <Skill></Skill>
                    <Works :isInviewModal="isInviewModal" @toggle-modal-open="toggleModalOpen"></Works>
                </main>
                <Footer></Footer>
                <transition name="fade">
                    <Modal
                        v-show="isInviewModal"
                        :title="modalInfo.title"
                        :message="modalInfo.message"
                        :image="modalInfo.image"
                        :isInviewModal="isInviewModal"
                        @set-inview-modal="setInviewModal"
                    />
                </transition>
            </div>
        </div>
    </transition>
</template>

<script>
import Header from "./components/Header.vue";
import Top from "./components/Top.vue";
import AboutMe from "./components/AboutMe.vue";
import Skill from "./components/Skill.vue";
import Works from "./components/Works.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

export default {
    components: {
        Header,
        Top,
        AboutMe,
        Skill,
        Works,
        Footer,
        Modal,
    },
    data() {
        return {
            observers: [],
            isInviewMenu: false,
            isInviewModal: false,
            modalInfo: {
                title: "",
                message: "",
                image: "",
            },
        };
    },
    watch: {
        isInviewModal: function (newValue) {
            newValue ? disableBodyScroll(this.$el) : clearAllBodyScrollLocks();
        },
        isInviewMenu: function (newValue) {
            newValue ? disableBodyScroll(this.$el) : clearAllBodyScrollLocks();
        },
    },
    methods: {
        toggleModalOpen(value) {
            console.log(value);
            this.modalInfo.title = value.title;
            this.modalInfo.message = value.message;
            this.modalInfo.image = value.image;
            this.isInviewModal = true;
        },
        closeMenu() {
            if (this.isInviewMenu) {
                this.isInviewMenu = false;
            }
        },
        setInviewMenu(value) {
            this.isInviewMenu = value;
        },
        setInviewModal(value) {
            this.isInviewModal = value;
        },
    },
    mounted() {},
};
</script>

<style lang="scss">
@import "./styles/vendors/bootstrap-reboot.css";
@import url("https://fonts.googleapis.com/css2?family=Capriola&display=swap");

body {
    font-size: 14px;

    @include display_pc {
        font-size: 16px;
    }
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Capriola", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Meiryo, sans-serif;
}

#container {
    position: relative;
    z-index: 10;
    transition: transform 0.5s ease;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
</style>
