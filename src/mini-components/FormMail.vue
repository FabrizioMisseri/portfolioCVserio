<script>
import emailjs from '@emailjs/browser';

export default {
    name: "FormMail",

    methods: {
        sendEmail() {
            emailjs.sendForm('service_6zzvg4r', 'template_vh66j1e', this.$refs.form, '0SPq0DUYjYfKeTBBl')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }
}
</script>

<template>
    <section class="comtainer">

        <div class="row">
            <div class="offset-2 col-8">

                <!-- FORM -->
                <form ref="form" @submit.prevent="sendEmail">
                    <div class="mb-3">
                        <label for="nameSurname" class="form-label fs-4">Nome Cognome</label>
                        <input type="text" name="nameSurname" class="form-control" id="nameSurname">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label fs-4">Email address</label>
                        <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-5">
                        <label for="mailTxt" class="form-label fs-4">Testo della mail</label>
                        <textarea class="form-control" name="mailTxt" id="mailTxt" cols="30" rows="10"></textarea>
                    </div>
                    <div class="text-center">
                        <input id="send-btn" type="submit" value="INVIA" class="btn btn-light fs-3 px-5 py-2 rounded-5">
                    </div>
                </form>
                <!-- / FORM -->

            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors.scss" as *;

#send-btn {
    color: $orange;
    font-weight: 700;
    border: 3px solid $orange;
}
</style>