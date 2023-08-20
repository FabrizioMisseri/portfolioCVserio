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
            <div class="title fs-4 scroll-content rounded-4 px-4 py-2">
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
            bottom: -40px;
            left: 0;
            color: white;
            background-color: $orange;
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
            transform: translateY(-100%);
            color: $body;
            background-color: $body;
            filter: opacity(1);
        }

        33% {
            transform: translateY(-50%);
            filter: opacity(.66);
        }

        100% {
            transform: translateY(0%);
            filter: opacity(0);
        }
    }
}
</style>