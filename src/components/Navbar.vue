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
        }
    },
}
</script>

<template>
    <nav class="mb-5">
        <ul class="container fs-3 d-flex justify-content-between">
            <li v-for="(item, index) in store.navbarList" :key="index">
                <a :href="`#${item.link}`">
                    {{ item.name }}
                </a>
            </li>
        </ul>
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
    //background-color: white;
    border-bottom: 1px solid $orange;
    //
    transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;

    //
    &.scrolled {
        background-color: #c0c0c0;
        opacity: 0.7;
        border-bottom: 0 transparent;
        display: inline-block;
        height: 30px;

        li {
            a {
                display: none;
            }
        }

        &:hover {
            animation: scroll-down .3s linear;
            height: 60px;

            li {
                a {
                    display: inline-block;
                    color: red;
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
        height: 45px;
    }

    100% {
        height: 60px;
    }
}
</style>