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
    <section class="container wrap fs-2">
        <div class="row d-flex justify-content-center" id="media-screen">

            <a class="col-12 rounded-4 px-5 py-2" href="https://www.linkedin.com/in/fabrizio-misseri/">
                <i class="me-3 fa-brands fa-linkedin"></i>
                Linkedin
            </a>



            <a class="col-12 rounded-4 px-5 py-2" href="https://github.com/FabrizioMisseri">
                <i class="me-3 fa-brands fa-square-github"></i>
                GitHub
            </a>



            <a class="col-12 rounded-4 px-5 py-2" href="https://fabrizio-misseri-links.netlify.app/">
                <i class="me-3 fa-solid fa-square-up-right"></i>
                MyLinks
            </a>



            <a class="col-12 rounded-4 px-5 py-2" href="../../public/CV.zip" download="CV.zip">
                <i class="me-3 fa-solid fa-file-pdf"></i>
                Curriculum
            </a>


            <div class="col-12 rounded-4 px-5 py-2" @click="sendMail()">
                <i class="me-3 fa-solid fa-envelope"></i>
                misserifabrizio@gmail.com
            </div>

        </div>
    </section>
    <!-- / LINKS -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors.scss" as *;

section.wrap {

    width: 90%;
    margin: 0 auto;

    .col-12:hover {
        display: block;
        background-color: $orange;
        font-size: inherit;
        cursor: pointer;
    }

    @media screen and (max-width: 390px) {
        #media-screen {
            font-size: 2rem;
        }
    }
}
</style>
