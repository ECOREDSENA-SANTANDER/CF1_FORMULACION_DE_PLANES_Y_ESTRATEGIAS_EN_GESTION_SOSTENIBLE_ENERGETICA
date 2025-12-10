<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este primer componente formativo ha servido como base para comprender la gestión sostenible de la energía. Se estableció un marco conceptual que trasciende la preocupación ambiental, al definir la sostenibilidad como el equilibrio entre tres dimensiones fundamentales: ambiental, social y económica. También se introdujeron conceptos clave como la huella ecológica, que permite medir nuestra demanda de recursos frente a la capacidad del planeta, y la economía circular, un modelo orientado a eliminar residuos y mantener los materiales en uso durante el mayor tiempo posible.
    p Para realizar una evaluación integral, se desglosó el ciclo de vida del proceso energético en cinco etapas esenciales: extracción de materia prima, procesamiento, transporte, generación o combustión, y disposición final de los residuos. Finalmente, se estableció la relación entre cada una de estas etapas y sus impactos ambientales directos, entre los que se destacan la deforestación, la contaminación del agua y del suelo, las emisiones de gases de efecto invernadero y la generación de residuos.

    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
