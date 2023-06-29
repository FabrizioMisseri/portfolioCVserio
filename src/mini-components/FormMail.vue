<script>
import emailjs from '@emailjs/browser';

export default {
    name: "FormMail",

    data() {
        return {
            inputName: '',
            email: '',
            content: '',
            mailLoaderFlag: false,
            mailSuccessFlag: false,
        }
    },

    methods: {

        // MAIL JS
        sendEmail() {
            this.switchLoaderFlag();
            emailjs.sendForm('service_6zzvg4r', 'template_vh66j1e', this.$refs.form, '0SPq0DUYjYfKeTBBl')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    this.inputName = '';
                    this.email = '';
                    this.content = '';
                    if (result.text == 'OK') {
                        this.switchLoaderFlag();
                        this.switchSuccessFlag();
                        setTimeout(() => {
                            this.switchSuccessFlag();
                        }, 3000);
                    }
                }, (error) => {
                    console.log('FAILED...', error.text);
                    alert(`${error.text}`);
                });
        },
        // MAIL JS

        switchLoaderFlag() {
            this.mailLoaderFlag = !this.mailLoaderFlag;
        },

        switchSuccessFlag() {
            this.mailSuccessFlag = !this.mailSuccessFlag;
        },

    }
}
</script>

<template>
    <section class="container">

        <div class="row">
            <div class="offset-2 col-8">

                <!-- FORM ( MAIL JS )-->
                <form ref="form" @submit.prevent="sendEmail">
                    <div class="mb-3">
                        <label for="nameSurname" class="form-label fs-4">Nome Cognome</label>
                        <input type="text" name="nameSurname" class="form-control" id="nameSurname" v-model="inputName">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label fs-4">Email address</label>
                        <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp"
                            v-model="email">
                    </div>
                    <div class="mb-5">
                        <label for="mailTxt" class="form-label fs-4">Testo della mail</label>
                        <textarea class="form-control" name="mailTxt" id="mailTxt" cols="30" rows="10"
                            v-model="content"></textarea>
                    </div>
                    <!-- BTN -->
                    <div v-show="!mailLoaderFlag && !mailSuccessFlag" class="text-center btn-sender">
                        <input id="send-btn" type="submit" value="INVIA" class="btn btn-light fs-3 px-5 py-2 rounded-5">
                    </div>
                    <!-- / BTN -->

                    <!-- success -->
                    <div v-show="mailSuccessFlag" class="text-center">
                        <span class=" fs-3 px-5 py-3 card text-white rounded-5 success">
                            MAIL INVIATA CON SUCCESSO
                        </span>
                    </div>
                    <!-- / success -->
                </form>
                <!-- / FORM -->
            </div>

            <!-- loader -->
            <div v-show="mailLoaderFlag" class="text-center">
                <span class=" fs-3 px-5 py-3 rounded-5 loader">
                    LOADING...
                </span>
            </div>
            <!-- / loader -->



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

.loader {
    background-color: $red;
}

.success {
    background-color: $green;
}
</style>