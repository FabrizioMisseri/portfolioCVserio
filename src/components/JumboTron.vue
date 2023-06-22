<script>
import Navbar from './Navbar.vue';

export default {
    name: "JumboTron",

    components: {
        Navbar,
    },
}
</script>

<template>
    <section>
        <br>
        <Navbar></Navbar>

        <figure class="container text-center">
            <img src="../../public/Fabrizio Misseri.png" alt="">
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