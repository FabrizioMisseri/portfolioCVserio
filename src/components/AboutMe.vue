<script>
export default {
    name: "AboutMe",
}
</script>

<template>
    <section class="container">
        <br>
        <article class="fs-5 rounded-4 px-5 py-3">
            Sono una persona motivata, determinata e con una grande voglia di apprendere. Fin da giovane, sono stato
            affascinato dal mondo della programmazione ed ho trovato nell'ambiente di sviluppo del codice il luogo perfetto
            dove appagare la mia sete di conoscenza e curiosità.
            Questo mondo stimolante ed in costante evoluzione mi consente di dare libero sfogo alla mia creatività e mettere
            alla prova le mie competenze tecniche. In tal modo, sono in grado di raggiungere il risultato finale e superare
            le difficoltà tecnologiche che mi si pongono davanti.
        </article>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors.scss" as *;

article {
    border: 4px solid $orange;
}
</style>