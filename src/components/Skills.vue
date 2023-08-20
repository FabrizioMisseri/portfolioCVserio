<script>
import SingleSkill from '../mini-components/SingleSkillV2.vue';
import { store } from '../../store';

// AOS-------------
import AOS from 'aos';
import 'aos/dist/aos.css';
// ----------------

export default {
    name: "Projects",

    components: {
        SingleSkill,
    },

    data() {
        return {
            store,
        }
    },

    // AOS --------------------
    mounted() {
        AOS.init();
    },
    // AOS --------------------
}
</script>

<template>
    <section class="container">
        <br>
        <!-- SKILLS -->
        <div class="row">
            <h2 class="text-center mb-3">SKILLS:</h2>
            <SingleSkill data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" data-aos-once="true"
                class="skill col-12 col-md-6 col-lg-4" v-for="(skill, index) in store.logosArray" :key="index"
                :skill="skill">
            </SingleSkill>
        </div>
        <!-- /SKILLS -->
    </section>
</template>

<style lang="scss" scoped></style>