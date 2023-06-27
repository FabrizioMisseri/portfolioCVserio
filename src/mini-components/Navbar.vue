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
    <nav class="mb-5">
        <div class="row d-flex px-5">

            <!-- NAME -->
            <div class="col-6 text-start fs-4 phantom">
                <a href="#">
                    <span id="misse" class="me-2">FABRIZIO</span>
                    <span>MISSERI</span>
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
                    <i class="pt-1 fa-solid fa-bars fs-4" @click="switchShowHideFlag()"></i>
                </div>
                <!-- / bars -->

                <!-- list -->
                <div class="list py-2 px-4" v-if="showHideFlag">
                    <ul>
                        <li class="text-end">
                            <i class="fa-regular fa-circle-xmark fs-2 mb-3" @click="switchShowHideFlag()"></i>
                        </li>
                        <li v-for="(item, index) in store.navbarList" :key="index">
                            <a :href="`#${item.link}`" class="fs-5">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- / list -->

            </div>
            <!-- hide-menu -->

        </div>




    </nav>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors.scss" as *;

nav {
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    // debug
    border-bottom: 3px solid $orange;
    //
    transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;

    i {
        color: $red;
        cursor: pointer;
    }

    a {
        color: inherit;
    }

    //
    &.scrolled {
        background-color: black;
        border-bottom: 3px solid $orange;
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
        height: 48px;
    }
}

#misse {
    color: $red;
}

.hide {
    display: none;
}

@media screen and (max-width: 930px) {
    .scrolled:hover {
        .show {
            display: none;
        }

        .hide {
            display: inline-block;

            .list {
                position: absolute;
                top: 0;
                right: 0;
                background-color: black;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
            }
        }
    }
}
</style>