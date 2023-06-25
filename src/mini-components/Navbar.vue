<script>
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

import { store } from '../../store';

export default {
    name: 'NavBar',

    data() {
        return {
            store,
            showHideFlag: false,
        }
    },

    methods: {
        switchShowHideFlag() {
            this.showHideFlag = !this.showHideFlag;
        }
    }
}
</script>

<template>
    <nav class="mb-5 container-fluid">
        <div class="row d-flex px-5">

            <!-- NAME -->
            <div class="col-6 text-start fs-4 phantom">
                <a href="#">
                    <span class="me-2">FABRIZIO</span>
                    <span id="misse">MISSERI</span>
                </a>
            </div>
            <!-- / NAME -->

            <!-- link-list -->
            <div class="col-6 pt-1 show">
                <div>
                    <ul class="container d-flex justify-content-between">
                        <li v-for="(item, index) in store.navbarList" :key="index">
                            <a :href="`#${item.link}`" class="fs-5">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- / link-list -->

            <!-- hide-menu -->
            <div class="col-6 pt-1 hide">
                <!-- bars -->
                <div class="text-end" v-if="!showHideFlag">
                    <i class="fa-solid fa-bars fs-4" @click="switchShowHideFlag()"></i>
                </div>
                <!-- / bars -->

                <div class="text-end" v-if="showHideFlag">
                    <ul>
                        <li class="text-end">
                            <i class="fa-regular fa-circle-xmark fs-3 mb-3" @click="switchShowHideFlag()"></i>
                        </li>
                        <li v-for="(item, index) in store.navbarList" :key="index">
                            <a :href="`#${item.link}`" class="fs-5">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- hide-menu -->

        </div>




    </nav>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors.scss" as *;

nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    // debug
    border-bottom: 3px solid $orange;
    //
    transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;

    a {
        color: inherit;
    }

    //
    &.scrolled {
        background-color: #c0c0c0;
        border-bottom: 0 transparent;
        display: inline-block;
        height: 30px;

        li,
        .phantom {
            a {
                display: none;
            }
        }

        &:hover {
            animation: scroll-down .3s linear;
            height: 45px;

            li,
            .phantom {
                a {
                    display: inline-block;
                    color: $red;
                }
            }
        }
    }


    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
}

@keyframes scroll-down {
    0% {
        height: 30px;
    }

    33% {
        height: 38px;
    }

    100% {
        height: 45px;
    }
}

#misse {
    color: $red;
}

.hide {
    display: none;
}

@media screen and (max-width: 930px) {
    .show {
        display: none;
    }

    .hide {
        display: inline-block;
    }
}
</style>