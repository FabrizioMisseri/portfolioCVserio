<script>
export default {
    name: "FormMail",
}
</script>

<template>
    <section class="comtainer">

        <div class="row">
            <div class="offset-2 col-8">

                <!-- FORM -->
                <form>
                    <div class="mb-3">
                        <label for="nameSurname" class="form-label fs-4">Nome Cognome</label>
                        <input type="text" class="form-control" id="nameSurname">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label fs-4">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-5">
                        <label for="mailTxt" class="form-label fs-4">Testo della mail</label>
                        <textarea class="form-control" name="" id="mailTxt" cols="30" rows="10"></textarea>
                    </div>
                    <div class="text-center">
                        <button id="send-btn" type="submit" class="btn btn-light fs-3 px-5 py-3 rounded-5">Invia
                            mail</button>
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