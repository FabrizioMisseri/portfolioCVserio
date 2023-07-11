<script>
import Navbar from '../mini-components/Navbar.vue';

export default {
    name: "JumboTron",

    components: {
        Navbar,
    },
}
</script>

<template>
    <section>
        <Navbar></Navbar>

        <figure class="container text-center">
            <img src="/FabrizioMisseri2.png" alt="">
        </figure>

    </section>
</template>

<style lang="scss" scoped>
figure {
    text-align: center;

    img {
        width: 40vw;
        min-width: 200px;
    }
}
</style>