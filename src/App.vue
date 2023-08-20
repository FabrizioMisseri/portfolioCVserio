<script>
//import { store } from '../store';

import AboutMe from './components/AboutMe.vue';
import Contacts from './components/Contacts.vue';
import JumboTron from './components/JumboTron.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';

// AOS-------------
import AOS from 'aos';
import 'aos/dist/aos.css';
// ----------------

export default {

  name: "App",

  components: {
    AboutMe,
    Contacts,
    JumboTron,
    Projects,
    Skills,
  },

  // AOS --------------------
  mounted() {
    AOS.init();
  },
  // AOS --------------------
}
</script>

<template>
  <JumboTron id="jumbo" class="pt-5 mt-5"></JumboTron>
  <AboutMe id="about" class="py-5 mt-5" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50"
    data-aos-once="true"></AboutMe>
  <Skills id="skills" class="py-5 mt-5"></Skills>
  <Projects id="proj" class="py-5 mt-5" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50"
    data-aos-once="true"></Projects>
  <Contacts id="contacts" class="py-5 mt-5" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50"
    data-aos-once="true"></Contacts>
</template>

<style></style>
