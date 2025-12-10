<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4.bg1.p-4(data-aos="zoom-in-left")
      .col-lg-1.col-4.mb-3.col-md-3
        img(src='@/assets/curso/portada/img01.svg', alt='')
      .col-lg-11
        p En la era del cambio climático y de la creciente conciencia ambiental, el sector energético se encuentra en el centro de una transformación global sin precedentes. La manera en que se produce y consume energía tiene un impacto directo en el futuro del planeta y en la calidad de vida de las generaciones venideras. Por ello, la gestión sostenible de la energía deja de ser una alternativa y se convierte en una necesidad imperativa.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.mb-4.col-10.col-md-9
        img(src='@/assets/curso/portada/img02.png', alt='')
      .col-lg-7.mb-4
        p Este documento constituye el punto de partida hacia la formulación de planes y estrategias orientados a la gestión energética sostenible. En él se abordan los principios y herramientas fundamentales para comprender la compleja relación entre la energía y el medio ambiente. Asimismo, se examina el ciclo de vida completo de los procesos energéticos, desde la extracción de los recursos hasta la disposición final de los residuos, con el fin de promover una mirada que trascienda el simple consumo.
        p.p-4.bg2 A lo largo de este primer módulo, se presentarán conceptos clave como el desarrollo sostenible, la huella ecológica y la economía circular, y se analizará cómo estos se articulan para dar forma a un futuro más resiliente. El propósito es construir una visión integral que permita identificar y evaluar los impactos ambientales derivados de cada decisión energética.
      p Se invita a profundizar en este contenido con el fin de fortalecer las bases necesarias para evaluar y transformar el sistema energético hacia un modelo verdaderamente sostenible.


    .row.justify-content-center.align-items-center           
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 













</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
