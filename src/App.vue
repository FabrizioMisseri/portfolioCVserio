<script>
//import { store } from '../store';

import AboutMe from './components/AboutMe.vue';
import Contacts from './components/Contacts.vue';
import JumboTron from './components/JumboTron.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';




export default {

  name: "App",

  components: {
    AboutMe,
    Contacts,
    JumboTron,
    Projects,
    Skills,
  },
}
</script>

<template>
  <JumboTron id="jumbo" class="pt-5 mt-5"></JumboTron>
  <AboutMe id="about" class="py-5 mt-5"></AboutMe>
  <Skills id="skills" class="py-5 mt-5"></Skills>
  <Projects id="projects" class="py-5 mt-5"></Projects>
  <Contacts id="contacts" class="py-5 mt-5"></Contacts>
</template>

<style></style>
