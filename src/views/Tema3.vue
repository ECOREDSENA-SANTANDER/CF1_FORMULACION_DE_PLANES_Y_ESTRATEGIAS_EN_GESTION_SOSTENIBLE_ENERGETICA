<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Impactos ambientales en el proceso energético

    .row.justify-content-center.mb-4.bg1.p-4(data-aos="zoom-in-left")
      .col-lg-1.col-4.mb-3.col-md-3
        img(src='@/assets/curso/Tema3/img01.svg', alt='')
      .col-lg-11
        p Una vez analizadas las etapas del ciclo de vida energético, es esencial vincular cada fase con sus posibles impactos ambientales. Estos impactos constituyen las consecuencias directas o indirectas de las actividades humanas sobre el medio ambiente. Evaluarlos adecuadamente permite tomar decisiones informadas al formular planes y estrategias de sostenibilidad.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/bombillo.svg")
          h3.bg3.py-2.w-card-text.text-white Deforestación y alteración del paisaje
    p La deforestación y la modificación del paisaje son impactos visibles y ecológicamente significativos, comúnmente asociados a la extracción de materia prima y al transporte.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            .row.mb-2.align-items-end
              .col-3.col-md-5.col-lg-2.mb-3
                figure
                  img(src='@/assets/curso/Tema3/0.svg', alt='Texto que describa la imagen')          
              .col-9.col-lg-5
                h2.bg4.p-1.text-center.text-black Deforestación
            p La tala de bosques para actividades como la minería, la construcción de represas o el cultivo de monocultivos destinados a la producción de biomasa genera pérdida de hábitats, disminución de biodiversidad y reducción de la capacidad de captura de dióxido de carbono de los ecosistemas.
          
          .col-md.tarjeta.bg1.p-5
            .row.mb-2.align-items-end
              .col-3.col-md-5.col-lg-2.mb-3
                figure
                  img(src='@/assets/curso/Tema3/1.svg', alt='Texto que describa la imagen')          
              .col-9.col-lg-7
                h2.bg4.p-1.text-center.text-black Alteración del paisaje     
            La construcción de grandes infraestructuras energéticas (presas hidroeléctricas, líneas de transmisión, parques eólicos o minas a cielo abierto) transforma de manera permanente la topografía y el aspecto visual del territorio. Estos cambios pueden afectar el valor estético, cultural y recreativo de las áreas intervenidas.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/bombillo.svg")
          h3.bg3.py-2.w-card-text.text-white Contaminación del agua y del suelo

    p La contaminación ambiental es un impacto transversal que puede presentarse en diversas etapas del ciclo de vida energético.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          h3.bg5.py-2.w-card-text1 Contaminación del agua y del suelo

    .row.justify-content-center.align-items-center.mb-3.fondo1
      .col-lg-3
        img(src="@/assets/curso/Tema3/img02.png")
      .col-lg-7
        SlyderF.circl-arrow.mb-4(columnas="col-lg-7 col-xl-6")
          .tarjeta.bg2.p-4
            .row.justify-content-center.mb-3
              .col-4.mb-2
                img(src='@/assets/curso/Tema3/01.svg' alt='')
            h5.text-center.bg6.p-1.text-white Extracción y transporte
            p.text-center Los derrames de petróleo y las fugas en oleoductos pueden contaminar cuerpos de agua dulce y marina, afectando de forma severa los ecosistemas acuáticos y las fuentes de abastecimiento humano.
          
          .tarjeta.bg2.p-4
            .row.justify-content-center.mb-3
              .col-4.mb-2
                img(src='@/assets/curso/Tema3/02.svg' alt='')
            h5.text-center.bg6.p-1.text-white Generación
            p.text-center Las centrales térmicas y nucleares requieren grandes volúmenes de agua para enfriamiento. El retorno de esta agua a temperaturas elevadas provoca contaminación térmica, alterando las condiciones ecológicas de los cuerpos de agua receptores.
          
          .tarjeta.bg2.p-4
            .row.justify-content-center.mb-3
              .col-4.mb-2
                img(src='@/assets/curso/Tema3/03.svg' alt='')
            h5.text-center.bg6.p-1.text-white Disposición de residuos
            p.text-center Los lixiviados provenientes de vertederos de cenizas de carbón o de residuos de baterías pueden filtrarse hacia acuíferos subterráneos, comprometiendo la calidad del agua.
          
       
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/bombillo.svg")
          h3.bg3.py-2.w-card-text.text-white Contaminación del suelo

    .row.justify-content-center.mb-5
      .col-lg-9
        .tarjeta--container.row
          .col-md.tarjeta.bg7.p-3
            .row.align-items-end
              .col-12.col-md-5.col-lg-12
                figure
                  img(src='@/assets/curso/Tema3/img03.svg', alt='')          
          .col-md.tarjeta.bg1.p-5
            .row.align-items-center
              .col-12.col-md-5.col-lg-12
                p #[b • Minería:] la extracción minera puede liberar metales pesados y sustancias ácidas que degradan el suelo, afectando su fertilidad y su funcionalidad ecológica.
                p #[b • Procesamiento y disposición:] Si los residuos tóxicos generados por la refinación del petróleo o la fabricación de paneles solares no se gestionan de manera adecuada, pueden alterar la composición del suelo y generar daños prolongados.
      
      .col-lg-3.mt-1
        img(src='@/assets/curso/Tema3/flores.svg', alt='')      
    
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/bombillo.svg")
          h3.bg3.py-2.w-card-text.text-white Emisiones de Gases de Efecto Invernadero (GEI)
    p.mb-3 Las emisiones de GEI representan uno de los principales impulsores del cambio climático y están especialmente relacionadas con la etapa de generación o combustión de combustibles fósiles.
    
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img(src="@/assets/curso/Tema3/img04.png")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg2")
          .row.justify-content-center(titulo="Dióxido de carbono (CO₂)")
            .col-md-11.mb-4.mb-md-0
              p Es el GEI más abundante y se libera principalmente durante la quema de petróleo, gas y carbón.
        
          .row.justify-content-center(titulo="Metano (CH₄)")
            .col-md-11.mb-4.mb-md-0
              p Aunque menos presente en la atmósfera, su potencial de calentamiento global a corto plazo es considerablemente mayor que el del CO₂. Se libera durante la extracción, procesamiento y transporte del gas natural.
    
          .row.justify-content-center(titulo="Óxidos de nitrógeno (NOx)")
            .col-md-11.mb-4.mb-md-0
              p Empleados durante la combustión a altas temperaturas, contribuyen al calentamiento global y son precursores de fenómenos como la lluvia ácida y el smog.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/bombillo.svg")
          h3.bg3.py-2.w-card-text.text-white Generación de Residuos
    p.mb-3 La generación de residuos está presente en todas las etapas del proceso energético y constituye uno de los desafíos más relevantes para avanzar hacia una economía circular.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        TabsC.color-primario
          .py-3.py-md-4(titulo="Extracción y procesamiento")
            .row.justify-content-center
              .col-md-5
                figure
                  img(src='@/assets/curso/Tema3/img05.svg', alt='Texto que describa la imagen')
              .col-md-5.mb-4.mb-md-0
                p Las actividades mineras producen grandes volúmenes de roca estéril y residuos derivados del procesamiento de minerales. Por su parte, las refinerías y plantas de producción energética generan subproductos y desechos tóxicos que requieren un manejo especializado para evitar impactos ambientales.
              
          
          .py-3.py-md-4(titulo="Disposición final")
            .row.justify-content-center
              .col-md-5
                figure
                  img(src='@/assets/curso/Tema3/img06.svg', alt='Texto que describa la imagen')
              .col-md-5.mb-4.mb-md-0
                p En esta fase se gestionan los residuos provenientes de la combustión (como las cenizas de carbón), los residuos peligrosos de origen nuclear y los materiales descartados al final de la vida útil de los equipos (turbinas, paneles solares, baterías, entre otros). Una gestión inadecuada de estos residuos puede ocasionar efectos adversos persistentes sobre los ecosistemas y la salud humana.


    .row.justify-content-center.mb-5
      .col-lg-7
        p La evaluación de los impactos ambientales no es un ejercicio superficial ni aislado; exige una visión integral que abarque todo el ciclo de vida de los procesos energéticos, desde su origen hasta su disposición final. Comprender y aplicar los principios de la sostenibilidad (equidad, visión a largo plazo y respeto por la capacidad de carga del planeta) es fundamental para la toma de decisiones informadas.
        p.bg8.p-4 Este conocimiento constituye el primer paso hacia la formulación de planes y estrategias que sean económicamente viables, socialmente equitativos y ambientalmente responsables. Desarrollar la capacidad de identificar, analizar y cuantificar estos impactos nos permite trascender lo teórico y avanzar hacia una gestión ambiental sólida, sentando así las bases para un futuro energético más sostenible y resiliente.
      .col-lg-5
        img(src='@/assets/curso/Tema3/img07.png', alt='Texto que describa la imagen')



















</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass">
.circl-arrow .slyder-f__btn i
  font-size: 1.2rem
  background-color: #F4D35E
  //background-color: $color-acento-contenido
  color: $white
  height: 46px
  width: 46px
  padding: 5px
  border-radius: 500px
  display: flex
  justify-content: center
  align-items: center

.acordion__accion__btn--a
  background-color: #EEAC3A !important
  transition: all 0.3s ease-out
.acordion__activo
  background-color: #CCE5F2 !important
  transition: all 0.3s ease-out
</style>
