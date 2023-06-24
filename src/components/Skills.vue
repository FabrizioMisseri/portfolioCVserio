<script>
import SingleSkill from '../mini-components/SingleSkill.vue';
import { store } from '../../store';

export default {
    name: "Projects",

    components: {
        SingleSkill,
    },

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="container">
        <br>
        <!-- SKILLS -->
        <div class="row">
            <h2 class="text-center mb-3">SKILLS:</h2>
            <SingleSkill class="skill col-12 col-md-6 col-lg-4" v-for="(skill, index) in store.logosArray" :key="index"
                :skill="skill">
            </SingleSkill>
        </div>
        <!-- /SKILLS -->
    </section>
</template>

<style lang="scss" scoped></style>