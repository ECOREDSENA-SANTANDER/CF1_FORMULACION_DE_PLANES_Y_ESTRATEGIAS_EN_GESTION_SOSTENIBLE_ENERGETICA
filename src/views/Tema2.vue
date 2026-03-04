<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El ciclo de vida del proceso energético

    p Para evaluar de manera integral los impactos de un proceso energético, no basta con analizar la fase de operación. Es necesario considerar todas sus etapas, desde el origen de los recursos hasta su disposición final. Esto es lo que se conoce como #[b análisis del ciclo de vida.]
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 7. 
          span Análisis de ciclo de vida
    .row.justify-content-center.align-items-center.mb-4.fondo2.p-4
      .col-lg-6.col-md-8
        img(src='@/assets/curso/Tema2/img01.svg', alt='El Análisis del Ciclo de Vida (ACV) se muestra como un ciclo cerrado que incluye la obtención de materias primas, la producción, la distribución, el uso y el reciclaje. Cada etapa se conecta para reincorporar materiales al sistema y reducir la extracción de nuevos recursos, todo enmarcado dentro del concepto central del ACV.')

    p El ciclo de vida de un proceso energético se puede dividir en las siguientes etapas clave:
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12.col-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/bombillo.svg")
          h3.bg3.py-2.w-card-text.text-white Etapas del ciclo de vida

    .row.justify-content-center.align-items-center.mb-4.fondo3.p-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 4. 
          span Extracción de materia prima

      .tabla-a.color-acento-contenido(alt="Describe la etapa inicial del ciclo de vida, donde se extraen recursos naturales y se generan impactos como deforestación, erosión, contaminación por petróleo y minería. Incluye efectos en renovables y prácticas de extracción sostenible.")(data-aos='fade-right')
        table
          thead
            tr
              th.w-25 Aspecto
              th Descripción
          tbody
            tr.bg9
              td.color-acento-contenido #[b Definición]
              td.text-left Primera etapa del ciclo de vida. Consiste en obtener recursos naturales directamente del ambiente.
            tr.bg10
              td #[b Importancia]
              td.text-left Determina gran parte del impacto ambiental total, ya que implica intervención directa sobre ecosistemas.
            tr.bg9
              td #[b Impactos en combustibles fósiles]
              td.text-left 
                p Combustibles fósiles:
                p #[b • Carbón:] deforestación, erosión, drenaje ácido, contaminación del agua.
                p #[b • Petróleo y gas:] derrames, contaminación del suelo y agua, riesgos del #[em fracking] (químicos y sísmicos).
            tr.bg10
              td #[b Impactos en energías renovables]
              td.text-left
                p #[b • Solar:] extracción de silicio, cadmio y teluro.
                p #[b • Eólica:] extracción de acero, concreto y tierras raras.
                p #[b • Biomasa:] riesgos de deforestación, erosión y uso intensivo de suelos.
            tr.bg9
              td #[b Consideraciones de sostenibilidad]
              td.text-left Prácticas de minería responsable, reducción de impacto en ecosistemas, certificaciones y manejo de residuos de extracción.

    .row.justify-content-center.align-items-center.mb-4.fondo4.p-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 5. 
          span Procesamiento / transformación

      .tabla-a.color-acento-contenido(alt="Presenta cómo los recursos se refinan o transforman, generando consumo energético y emisiones. Señala impactos en combustibles fósiles y renovables, y destaca la importancia de la eficiencia y el manejo seguro de materiales.")(data-aos='fade-right')
        table
          thead
            tr
              th.w-25 Aspecto
              th Descripción
          tbody
            tr.bg9
              td.color-acento-contenido #[b Definición]
              td.text-left
                | Fase donde los recursos extraídos se refinan o transforman para ser utilizados como insumos energéticos.
            tr.bg10
              td #[b Importancia]
              td.text-left
                | Implica consumo de energía y generación de emisiones antes de la fase de uso.
            tr.bg9
              td #[b Impactos en combustibles fósiles]
              td.text-left
                p #[b • Petróleo:] refinación con alto consumo energético y emisiones de SOx y NOx.
                p #[b • Carbón y gas:] eliminación de impurezas; riesgo de fugas de metano.
            tr.bg10
              td #[b Impactos en energías renovables]
              td.text-left
                p #[b • Solar:] fabricación intensiva en energía y químicos peligrosos.
                p #[b • Eólica:] producción de aspas y torres con huella de carbono moderada; materiales difíciles de reciclar.
                p #[b • Biomasa:] procesos químicos y energéticos para biocombustibles.
            tr.bg9
              td #[b Consideraciones de sostenibilidad]
              td.text-left
                | Eficiencia energética, control de emisiones, gestión segura de químicos, desarrollo de materiales reciclables.

    .row.justify-content-center.align-items-center.mb-4.fondo5.p-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 6. 
          span Transporte

      .tabla-a.color-acento-contenido(alt="Presenta la movilización de recursos o equipos, sus emisiones y riesgos como derrames y contaminación. Incluye impactos en fósiles y renovables, y propone medidas como rutas optimizadas y transporte eficiente.")(data-aos='fade-right')
        table
          thead
            tr
              th.w-25 Aspecto
              th Descripción
          tbody
            tr.bg9
              td.color-acento-contenido #[b Definición]
              td.text-left
                | Movilización de recursos, insumos o equipos desde su origen hasta el lugar de uso o transformación.
            tr.bg10
              td #[b Importancia]
              td.text-left
                | Consume energía y genera emisiones asociadas al traslado.
            tr.bg9
              td #[b Impactos en combustibles fósiles]
              td.text-left
                p #[b • Petróleo y gas:] oleoductos, gasoductos, buques; riesgo de derrames y fugas.
                p #[b • Carbón:] transporte por tren o barco; dispersión de polvo y contaminación del agua.
            tr.bg10
              td #[b Impactos en energías renovables]
              td.text-left
                p #[b • Biomasa:] movilización corta pero dependiente de combustibles fósiles.
                p #[b • Solar y eólica:] transporte de paneles, torres y turbinas de gran tamaño, con consumo energético significativo.
            tr.bg9
              td #[b Consideraciones de sostenibilidad]
              td.text-left
                | Optimización de rutas, uso de transporte eficiente, reducción de pérdidas y fugas, preferencia por insumos de producción local.

    .row.justify-content-center.align-items-center.mb-4.fondo6.p-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 7.
          span Generación / combustión

        .tabla-a.color-acento-contenido(alt="Explica la conversión del recurso en energía, con altas emisiones en combustibles fósiles y mínimos impactos en solar y eólica. Destaca medidas como eficiencia, reducción de contaminantes y uso de tecnologías limpias.")(data-aos='fade-right')
          table
            thead
              tr
                th.w-25 Aspecto
                th Descripción
            tbody
              tr.bg9
                td.color-acento-contenido #[b Definición]
                td.text-left
                  | Etapa donde el recurso se convierte en energía útil (electricidad, calor, movimiento).

              tr.bg10
                td #[b Importancia]
                td.text-left
                  | Suele ser la fase con mayor impacto atmosférico y es la más visible del ciclo de vida.

              tr.bg9
                td #[b Impactos en combustibles fósiles]
                td.text-left
                  p • Altas emisiones de CO₂, metano y contaminantes (SOx, NOx, partículas, mercurio).
                  p • Uso intensivo de agua para enfriamiento.

              tr.bg10
                td #[b Impactos en energías renovables]
                td.text-left
                  p • #[b Solar y eólica:] sin emisiones durante operación; impactos visuales y sonoros mínimos.
                  p • #[b Hidroeléctrica:] alteración de ecosistemas y posible emisión de metano por biomasa en embalses.
                  p • #[b Biomasa:] emite CO₂ pero puede ser carbono - neutra si el cultivo se renueva.
              tr.bg9
                td #[b Consideraciones de sostenibilidad]
                td.text-left
                  | Reducción de emisiones, eficiencia energética, monitoreo de contaminantes, integración de tecnologías limpias.

    .row.justify-content-center.align-items-center.mb-4.fondo7.p-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 8.
          span Disposición final residuos

        .tabla-a.color-acento-contenido(alt="Describe la gestión de residuos energéticos, incluyendo cenizas, desechos tóxicos, residuos nucleares y materiales de renovables como paneles y baterías. Señala la importancia del reciclaje y la economía circular.")(data-aos='fade-right')
          table
            thead
              tr
                th.w-25 Aspecto
                th Descripción
            tbody
              tr.bg9
                td.color-acento-contenido #[b Definición]
                td.text-left
                  | Gestión de los desechos generados al final de la vida útil del recurso o de la infraestructura energética.

              tr.bg10
                td #[b Importancia]
                td.text-left
                  | Determina el impacto ambiental a largo plazo y la posibilidad de reincorporación a ciclos productivos.

              tr.bg9
                td #[b Residuos de combustibles fósiles]
                td.text-left
                  p • Cenizas con metales pesados; riesgo de filtración.
                  p • Residuos tóxicos de plantas térmicas. 
              tr.bg10
                td #[b Residuos de energía nuclear]
                td.text-left
                  p • Altamente radiactivos; requieren almacenamiento seguro durante miles de años.

              tr.bg9
                td #[b Residuos en energías renovables]
                td.text-left
                  p • #[b Solar:] paneles con silicatos y metales; reciclaje en desarrollo.
                  p • #[b Eólica:] aspas difíciles de reciclar; torres y metales sí reciclables.
                  p • #[b Baterías:] riesgos por litio, cobalto y metales pesados.

              tr.bg10
                td #[b Consideraciones de sostenibilidad]
                td.text-left
                  | Reciclaje, economía circular, responsabilidad extendida del productor, tecnologías para valorización de residuos.


    .row.justify-content-center.align-items-center.mb-4.bg1.p-4(data-aos="zoom-in-left")
      .col-lg-1.col-4.col-md-2.mb-3
        img(src='@/assets/curso/Tema3/img01.svg', alt='')
      .col-lg-11
        p La disposición final de los residuos es un aspecto clave en el análisis del ciclo de vida, pues incluso un proyecto que parece limpio durante su operación puede generar impactos ambientales significativos en esta etapa si no cuenta con un plan adecuado y sostenible de gestión de desechos.




















































</template>

<script>
export default {
  name: 'Tema2',
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
