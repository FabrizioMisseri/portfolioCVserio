<script>

export default {
    name: 'SingleSkill',

    props: {
        skill: Object,
    },

    data() {
        return {
            titleFlag: false,
        }
    },

    methods: {
        getImage(path) {
            return new URL(path, import.meta.url).href;
        },

    },
}
</script>

<template>
    <div class="item p-5 d-flex justify-content-center">
        <figure class="scroll-container">
            <img :src="getImage(skill.logoPath)" alt="">
            <div class="title fs-4 scroll-content">
                {{ skill.title }}
            </div>
        </figure>

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors.scss" as *;

.item {

    figure {
        position: relative;

        img {
            min-width: 125px;
            max-width: 125px;
        }

        .title {
            display: none;
            position: absolute;
            z-index: 1;
            top: 45%;
            left: 150px;
        }
    }

    &:hover .title {
        display: block;
    }

    .scroll-container {
        white-space: nowrap;
    }

    .scroll-content {
        display: inline-block;
        animation: scroll-right .3s linear;
    }

    @keyframes scroll-right {
        0% {
            transform: translateX(-100%);
        }

        33% {
            transform: translateX(-50%);
        }

        100% {
            transform: translateX(0%);
        }
    }
}
</style>