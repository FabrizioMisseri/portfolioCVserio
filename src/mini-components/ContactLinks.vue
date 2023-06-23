<script>
export default {
    name: "ContactLinks",
}

//                 <div class="col-10 offset-1 mt-5 btn btn-danger py-2 fs-2">
//                     <a id="detonate" href="./deleteALL.zip" download="deleteALL">
//                         scarica la bomba
//                     </a>
//                 </div>
</script>

<template>
    <!-- LINKS -->
    <section class="container d-flex justify-content-center fs-2">
        <ul>
            <li>
                <a class="px-5 py-2 rounded-4" href="https://www.linkedin.com/in/fabrizio-misseri/">
                    <i class="fa-brands fa-linkedin"></i>
                    <span class="ms-3">Linkedin</span>
                </a>
            </li>

            <li>
                <a class="px-5 py-2 rounded-4" href="https://github.com/FabrizioMisseri">
                    <i class="fa-brands fa-square-github"></i>
                    <span class="ms-3">GitHub</span>
                </a>
            </li>

            <li>
                <a class="px-5 py-2 rounded-4" href="https://fabrizio-misseri-links.netlify.app/">
                    <i class="fa-solid fa-square-up-right"></i>
                    <span class="ms-3">MyLinks</span>
                </a>
            </li>

            <li>
                <a class="px-5 py-2 rounded-4" href="../../public/CV.pdf" download="CV">
                    <i class="fa-solid fa-file-pdf"></i>
                    <span class="ms-3">Curriculum</span>
                </a>
            </li>
        </ul>
    </section>
    <!-- / LINKS -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors.scss" as *;

section {

    a:hover {
        background-color: $orange;
    }
}
</style>