<script>
import ContactLinks from '../mini-components/ContactLinks.vue';
import FormMail from '../mini-components/FormMail.vue';

export default {
    name: "Contacts",

    components: {
        ContactLinks,
        FormMail,
    }
}
</script>

<template>
    <section>
        <br>
        <ContactLinks class="mb-5"></ContactLinks>
        <FormMail></FormMail>
    </section>
</template>

<style lang="scss" scoped></style>