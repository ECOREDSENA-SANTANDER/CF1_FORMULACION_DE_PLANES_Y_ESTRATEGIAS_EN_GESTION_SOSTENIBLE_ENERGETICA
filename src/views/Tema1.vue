<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 La sostenibilidad como marco de referencia
        
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-9
          p En el núcleo de la gestión sostenible de la energía se encuentra el concepto de sostenibilidad. Aunque el término se utiliza con frecuencia, su significado es profundo y abarca múltiples dimensiones. En esencia, la sostenibilidad se refiere a la capacidad de mantener un proceso o sistema en el tiempo sin agotar los recursos que lo sustentan ni generar daños irreversibles en el entorno.
          .row.justify-content-center.mb-3(data-aos='fade-right')
            .col-lg-12
              .tarjeta--container.row
                .col-md.tarjeta.bg7.p-3.mb-4.d-none.d-lg-block
                  .row.align-items-end
                    .col-12.col-md-5.col-lg-12
                      figure
                        img(src='@/assets/curso/Tema1/img01.svg', alt='')          
                .col-md.tarjeta.bg1.p-5.mb-4
                  .row.align-items-center
                    .col-12.col-md-12.col-lg-12
                      p La definición más ampliamente aceptada proviene del Informe Brundtland de 1987, que concibe la sostenibilidad como el “desarrollo que satisface las necesidades del presente sin comprometer la capacidad de las generaciones futuras para satisfacer sus propias necesidades”. Esta perspectiva constituye el pilar fundamental para orientar las decisiones y estrategias en materia energética hacia un equilibrio entre progreso, equidad y preservación ambiental.          
        .col-lg-3.col-8.col-md-6.mb-3
          img(src='@/assets/curso/Tema1/img02.png', alt='Texto que describa la imagen')

        p Esta definición resalta el equilibrio entre tres dimensiones fundamentales:

      .row.justify-content-center.cursor-pointer.mb-5
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/1.png", alt="")
            .crd_hover_txt--body
              h4.mb-3.text-center Ambiental
              p.mb-0 Se enfoca en la protección de los ecosistemas, la biodiversidad, los recursos naturales y la calidad del aire y el agua.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/2.png", alt="")
            .crd_hover_txt--body
              h4.mb-3.text-center Social
              p.mb-0 Busca garantizar la equidad, el bienestar de las personas, la justicia social y el respeto por los derechos humanos.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/3.png", alt="")
            .crd_hover_txt--body
              h4.mb-3.text-center Económica
              p.mb-0 Considera la viabilidad financiera, la rentabilidad a largo plazo y la eficiencia en el uso de los recursos.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.bg12.p-5
          p La sostenibilidad se construye a partir de la interdependencia entre tres dimensiones clave. Estas no funcionan por separado, cada una influye y depende de las otras. Una iniciativa puede ser económicamente rentable, pero si deteriora la calidad del aire (dimensión ambiental) o afecta la salud y el bienestar de las comunidades (dimensión social), no puede considerarse sostenible.
        .col-lg-3
          img(src="@/assets/curso/Tema1/img03.svg", alt="")
        .col-lg-4
          .row
            .col-lg-3.mb-3
              img(src="@/assets/curso/Tema1/img04.svg", alt="")
            .col-lg-12
              p En esencia, la sostenibilidad es un concepto multidimensional que va más allá de la preocupación por el medio ambiente. Plantea un modelo de desarrollo que busca armonizar tres pilares fundamentales: el económico, el social y el ambiental. Solo cuando un proyecto, política o decisión integra y equilibra estos tres aspectos de manera simultánea, es posible hablar de verdadera sostenibilidad.

      .row.justify-content-center.align-items-center.mb-4.fondo8.p-4
        .col-lg-12
          .titulo-sexto.color-acento-contenido(alt="La dimensión ambiental de la sostenibilidad se orienta a la protección del capital natural y a la preservación de los ecosistemas. Su finalidad es evitar que las actividades humanas generen daños irreversibles o sobrepasen la capacidad del planeta para regenerarse y absorber residuos. En el sector energético, este enfoque se traduce en reducir las emisiones de gases de efecto invernadero, minimizar los impactos sobre el agua, el aire y el suelo, y adoptar tecnologías limpias que reduzcan la huella ambiental de los procesos. Ejemplos de su aplicación incluyen la transición hacia energías renovables, el manejo adecuado de residuos peligrosos y la implementación de planes de compensación ambiental. Para monitorear esta dimensión, se utilizan indicadores como la huella hídrica y de carbono, las emisiones por unidad de energía generada y la superficie de ecosistemas restaurados.")(data-aos='fade-right')
            h5 Tabla 1. 
            span #[em Dimensión ambiental]

          .tabla-a.color-acento-contenido(data-aos='fade-right')
            table
              thead
                tr
                  th.w-25 Aspecto
                  th Descripción
              tbody
                tr.bg9
                  td.color-acento-contenido #[b Enfoque general]
                  td.text-left
                    | Protección del capital natural, conservación de ecosistemas y uso responsable de los recursos. Busca evitar daños irreversibles y respetar los límites planetarios.
                tr.bg10
                  td #[b Objetivos principales]
                  td.text-left
                    | Reducir la contaminación, mitigar el cambio climático, preservar la biodiversidad y garantizar la regeneración de los ecosistemas.
                tr.bg9
                  td #[b Aplicación en el sector energético]
                  td.text-left
                    p • Disminución de emisiones de GEI.
                    p • Reducción de impactos en aire, agua y suelo.
                    p • Implementación de tecnologías limpias.
                    p • Restauración ambiental y manejo adecuado de residuos.
                tr.bg10
                  td #[b Ejemplos concretos]
                  td.text-left
                    p • Transición a energías renovables.
                    p • Control de vertimientos y emisiones.
                    p • Programas de compensación ambiental.
                    p • Gestión adecuada de residuos peligrosos de plantas energéticas.
                tr.bg9
                  td #[b Indicadores]
                  td.text-left
                    p • Toneladas de CO₂ emitidas.
                    p • Huella hídrica.
                    p • Emisiones atmosféricas por unidad de energía.
                    p • Superficie de ecosistemas restaurados.

      .row.justify-content-center.align-items-center.mb-4.fondo9.p-4
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 2. 
            span #[em Dimensión social]

          .tabla-a.color-acento-contenido(alt="La dimensión social de la sostenibilidad se enfoca en garantizar la equidad, la justicia y el bienestar humano, asegurando que los beneficios del desarrollo se distribuyan de manera justa. En el ámbito energético, este pilar se evidencia en acciones que permiten el acceso universal a energía asequible y limpia, la participación de las comunidades en decisiones sobre proyectos y la protección de grupos vulnerables frente a posibles impactos negativos. Esta dimensión también promueve condiciones laborales dignas y la reducción de la pobreza energética. Ejemplos de intervención social incluyen los programas de electrificación rural, los procesos de consulta previa y las iniciativas de educación energética comunitaria. Entre los indicadores más utilizados se encuentran el porcentaje de población con acceso a energía limpia, el índice de pobreza energética y el número de procesos participativos realizados.")(data-aos='fade-right')
            table
              thead
                tr
                  th.w-25 Aspecto
                  th Descripción
              tbody
                tr.bg9
                  td.color-acento-contenido #[b Enfoque general]
                  td.text-left
                    | Garantizar la equidad, la justicia social, la inclusión, el bienestar humano y el respeto por los derechos individuales y colectivos.
                tr.bg10
                  td #[b Objetivos principales]
                  td.text-left
                    | Distribución justa de los beneficios, participación social, reducción de la pobreza energética y garantía de condiciones laborales dignas.
                tr.bg9
                  td #[b Aplicación en el sector energético]
                  td.text-left
                    p • Acceso universal a energía limpia y asequible.
                    p • Consultas y participación comunitaria.
                    p • Prevención de impactos en poblaciones vulnerables.
                    p • Fortalecimiento de condiciones laborales.
                tr.bg10
                  td #[b Ejemplos concretos]
                  td.text-left
                    p • Programas de electrificación rural.
                    p • Procesos de consulta previa.
                    p • Educación energética en comunidades.
                    p • Proyectos que minimizan el desplazamiento o el riesgo social.
                tr.bg9
                  td #[b Indicadores]
                  td.text-left
                    p • Porcentaje de población con acceso a energía asequible.
                    p • Índice de pobreza energética.
                    p • Participación efectiva en procesos de toma de decisiones.
                    p • Accidentes laborales en el sector.

      .row.justify-content-center.align-items-center.mb-4.fondo10.p-4
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 3. 
            span #[em Dimensión económica]

          .tabla-a.color-acento-contenido(alt="La dimensión económica de la sostenibilidad busca asegurar la viabilidad financiera de los sistemas productivos sin comprometer los recursos naturales ni el bienestar social. Su objetivo es lograr prosperidad a largo plazo mediante la eficiencia, la innovación tecnológica y la resiliencia económica. En el sector energético, esta dimensión impulsa la creación de mercados para las energías renovables, la inversión en tecnologías eficientes y el desarrollo de modelos de negocio que combinen rentabilidad con responsabilidad ambiental y social. Ejemplos de esta dimensión incluyen la implementación de sistemas de energía solar o eólica, las auditorías energéticas y la incorporación de redes inteligentes. Entre los indicadores más usados se encuentran el costo nivelado de energía (LCOE), el retorno de inversión, los ahorros derivados de medidas de eficiencia y la proporción de energía renovable en la matriz energética.")(data-aos='fade-right')
            table
              thead
                tr
                  th.w-25 Aspecto
                  th Descripción
              tbody
                tr.bg9
                  td.color-acento-contenido #[b Enfoque general]
                  td.text-left
                    | Garantizar la viabilidad financiera, la eficiencia y la prosperidad económica sin agotar recursos ni comprometer las demás dimensiones.
                tr.bg10
                  td #[b Objetivos principales]
                  td.text-left
                    | Estabilidad económica, eficiencia energética, innovación tecnológica, rentabilidad a largo plazo y resiliencia del sistema energético.
                tr.bg9
                  td #[b Aplicación en el sector energético]
                  td.text-left
                    p • Promoción de energías renovables.
                    p • Desarrollo de mercados sostenibles.
                    p • Implementación de tecnologías eficientes.
                    p • Optimización de costos y recursos.
                tr.bg10
                  td #[b Ejemplos concretos]
                  td.text-left
                    p • Inversión en paneles solares o aerogeneradores.
                    p • Auditorías energéticas para reducir consumo.
                    p • Desarrollo de redes inteligentes (smart grids).
                tr.bg9
                  td #[b Indicadores]
                  td.text-left
                    p • Costo nivelado de energía (LCOE).
                    p • Retorno de inversión (ROI).
                    p • Ahorros por eficiencia energética.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1. 
            span #[em Los tres pilares del desarrollo sostenible]
          img.mb-2(src='@/assets/curso/Tema1/fig1.svg', alt='Se representa el concepto de desarrollo sostenible a través de un esquema de superposición de tres componentes fundamentales. En el centro, se define el desarrollo sostenible como el punto de equilibrio entre tres pilares principales: el económico, el social y el ambiental. El modelo indica que el desarrollo es equitativo cuando se logra el balance entre los aspectos económico y social; es viable cuando se equilibra lo económico y lo ambiental; y es vivible (o soportable) cuando se encuentra el balance entre lo social y lo ambiental. El desarrollo sostenible se logra, por lo tanto, únicamente cuando se satisfacen las tres condiciones simultáneamente.')
          figcaption #[b Fuente:] Girosalut (2024)  

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src="@/assets/curso/Tema1/img05.png", alt="")
        .col-lg-7  
          p El verdadero desafío de la sostenibilidad, y al mismo tiempo su mayor fortaleza, radica en lograr el equilibrio entre sus tres pilares fundamentales. No es suficiente que una iniciativa energética sea económicamente rentable si desatiende sus efectos sobre el entorno natural o sobre las comunidades. De igual forma, un proyecto ambientalmente responsable no puede considerarse sostenible si no resulta económicamente viable o si genera perjuicios sociales. La sostenibilidad surge precisamente en el punto de convergencia entre estas tres dimensiones, donde se integran de manera armoniosa para orientar decisiones responsables y de largo plazo.
          .row.justify-content-center.align-items-center.mb-4.bg1.p-4(data-aos="zoom-in-left")
            .col-lg-2.col-4.col-md-3
              img(src='@/assets/curso/Tema3/img01.svg', alt='')
            .col-lg-10
              p En esta línea, resulta esencial profundizar en las características que distinguen a la sostenibilidad de otros modelos de desarrollo. Estas cualidades constituyen la base para una gestión sólida y verdaderamente sostenible, y permiten comprender mejor los criterios que deben guiar la toma de decisiones en el ámbito energético y en cualquier otro sector.
























  </template>

<script>
export default {
  name: 'Tema1',
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
.cursor-pointer.crd_hover_txt
  cursor: pointer
.crd_hover_txt
  position: relative
  padding: 0 !important
  overflow: hidden !important
  &:hover
    .crd_hover_txt--body
      transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1)
      transform: translateY(0)

  .crd_hover_txt--body
    position: absolute
    padding: 1.5rem
    bottom: 0
    transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1)
    transform: translateY(calc( 100% - 3.85rem ))
    background-color: rgba(153, 202, 229, 100)

  @media (min-width:1200px) and (max-width:1400px)
    .crd_hover_txt--body
      p
        font-size: 0.85em
</style>
