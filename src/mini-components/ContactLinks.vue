<script>
export default {
    name: "ContactLinks",

    data() {
        return {
            pathCV: "../../public/CV.zip"
        }
    },
    methods: {
        sendMail() {
            window.open('mailto:misserifabrizio@gmail.com');
        }
    },
}
</script>

<template>
    <!-- LINKS -->
    <section class="container fs-2">
        <div class="row d-flex justify-content-center">
            <div class="col-7 rounded-4">
                <a class="px-5 py-2" href="https://www.linkedin.com/in/fabrizio-misseri/">
                    <i class="fa-brands fa-linkedin"></i>
                    <span class="ms-3">Linkedin</span>
                </a>
            </div>

            <div class="col-7 rounded-4">
                <a class="px-5 py-2" href="https://github.com/FabrizioMisseri">
                    <i class="fa-brands fa-square-github"></i>
                    <span class="ms-3">GitHub</span>
                </a>
            </div>

            <div class="col-7 rounded-4">
                <a class="px-5 py-2" href="https://fabrizio-misseri-links.netlify.app/">
                    <i class="fa-solid fa-square-up-right"></i>
                    <span class="ms-3">MyLinks</span>
                </a>
            </div>

            <div class="col-7 rounded-4">
                <a class="px-5 py-2" :href="`${pathCV}`" download>
                    <i class="fa-solid fa-file-pdf"></i>
                    <span class="ms-3">Curriculum</span>
                </a>
            </div>
            <div class="col-7 rounded-4">
                <a class="px-5 py-2" @click="sendMail()">
                    <i class="fa-solid fa-envelope"></i>
                    <span class="ms-3">misserifabrizio@gmail.com</span>
                </a>
            </div>
        </div>
    </section>
    <!-- / LINKS -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors.scss" as *;

section {

    .col-7:hover {
        background-color: $orange;
        cursor: pointer;
    }
}
</style>
