<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 La sostenibilidad como marco de referencia
        
      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
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

      .row.justify-content-center.cursor-pointer.mb-5(data-aos="zoom-in-left")
        .col-xl-4.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/1.png", alt="")
            .crd_hover_txt--body
              h4.mb-3.text-center Ambiental
              p.mb-0 Se enfoca en la protección de los ecosistemas, la biodiversidad, los recursos naturales y la calidad del aire y el agua.
        .col-xl-4.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/2.png", alt="")
            .crd_hover_txt--body
              h4.mb-3.text-center Social
              p.mb-0 Busca garantizar la equidad, el bienestar de las personas, la justicia social y el respeto por los derechos humanos.
        .col-xl-4.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/3.png", alt="")
            .crd_hover_txt--body
              h4.mb-3.text-center Económica
              p.mb-0 Considera la viabilidad financiera, la rentabilidad a largo plazo y la eficiencia en el uso de los recursos.

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.bg12.p-5.mb-3
          p La sostenibilidad se construye a partir de la interdependencia entre tres dimensiones clave. Estas no funcionan por separado, cada una influye y depende de las otras. Una iniciativa puede ser económicamente rentable, pero si deteriora la calidad del aire (dimensión ambiental) o afecta la salud y el bienestar de las comunidades (dimensión social), no puede considerarse sostenible.
        .col-lg-3.d-none.d-lg-block
          img(src="@/assets/curso/Tema1/img03.svg", alt="")
        .col-lg-4
          .row
            .col-lg-3.mb-3.col-4.col-md-3
              img(src="@/assets/curso/Tema1/img04.svg", alt="")
            .col-lg-12
              p En esencia, la sostenibilidad es un concepto multidimensional que va más allá de la preocupación por el medio ambiente. Plantea un modelo de desarrollo que busca armonizar tres pilares fundamentales: el económico, el social y el ambiental. Solo cuando un proyecto, política o decisión integra y equilibra estos tres aspectos de manera simultánea, es posible hablar de verdadera sostenibilidad.

      .row.justify-content-center.align-items-center.mb-4.fondo8.p-4(data-aos="zoom-in-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(alt="La dimensión ambiental de la sostenibilidad se orienta a la protección del capital natural y a la preservación de los ecosistemas. Su finalidad es evitar que las actividades humanas generen daños irreversibles o sobrepasen la capacidad del planeta para regenerarse y absorber residuos. En el sector energético, este enfoque se traduce en reducir las emisiones de gases de efecto invernadero, minimizar los impactos sobre el agua, el aire y el suelo, y adoptar tecnologías limpias que reduzcan la huella ambiental de los procesos. Ejemplos de su aplicación incluyen la transición hacia energías renovables, el manejo adecuado de residuos peligrosos y la implementación de planes de compensación ambiental. Para monitorear esta dimensión, se utilizan indicadores como la huella hídrica y de carbono, las emisiones por unidad de energía generada y la superficie de ecosistemas restaurados.")(data-aos='fade-right')
            h5 Tabla 1. 
            span Dimensión ambiental

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
                    | Reducir la contaminación, mitigar el cambio climático, preservar la biodiversidad y garantizar la regeneración de los recursos naturales.
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

      .row.justify-content-center.align-items-center.mb-4.fondo9.p-4(data-aos="zoom-in-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 2. 
            span Dimensión social

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

      .row.justify-content-center.align-items-center.mb-4.fondo10.p-4(data-aos="zoom-in-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 3. 
            span Dimensión económica

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
                    | Estabilidad económica, eficiencia energética, innovación tecnológica, rentabilidad a largo plazo y resiliencia del sistema productivo.
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
                    p • Desarrollo de redes inteligentes (#[em smart grids]).
                    p • Modelos de negocio de autoconsumo.
                tr.bg9
                  td #[b Indicadores]
                  td.text-left
                    p • Costo nivelado de energía (LCOE).
                    p • Retorno de inversión (ROI).
                    p • Ahorros por eficiencia energética.
                    p • Porcentaje de energías renovables en la matriz.

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1. 
            span Los tres pilares del desarrollo sostenible
          img.mb-2(src='@/assets/curso/Tema1/fig1.svg', alt='Se representa el concepto de desarrollo sostenible a través de un esquema de superposición de tres componentes fundamentales. En el centro, se define el desarrollo sostenible como el punto de equilibrio entre tres pilares principales: el económico, el social y el ambiental. El modelo indica que el desarrollo es equitativo cuando se logra el balance entre los aspectos económico y social; es viable cuando se equilibra lo económico y lo ambiental; y es vivible (o soportable) cuando se encuentra el balance entre lo social y lo ambiental. El desarrollo sostenible se logra, por lo tanto, únicamente cuando se satisfacen las tres condiciones simultáneamente.')
          figcaption #[b Fuente:] Girosalut (2024)  

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-5.col-10.mb-3
          img(src="@/assets/curso/Tema1/img05.png", alt="")
        .col-lg-7  
          p El verdadero desafío de la sostenibilidad, y al mismo tiempo su mayor fortaleza, radica en lograr el equilibrio entre sus tres pilares fundamentales. No es suficiente que una iniciativa energética sea económicamente rentable si desatiende sus efectos sobre el entorno natural o sobre las comunidades. De igual forma, un proyecto ambientalmente responsable no puede considerarse sostenible si no resulta económicamente viable o si genera perjuicios sociales. La sostenibilidad surge precisamente en el punto de convergencia entre estas tres dimensiones, donde se integran de manera armoniosa para orientar decisiones responsables y de largo plazo.
          .row.justify-content-center.align-items-center.mb-4.bg1.p-4(data-aos="zoom-in-left")
            .col-lg-2.col-4.col-md-3.mb-3
              img(src='@/assets/curso/Tema3/img01.svg', alt='')
            .col-lg-10
              p En esta línea, resulta esencial profundizar en las características que distinguen a la sostenibilidad de otros modelos de desarrollo. Estas cualidades constituyen la base para una gestión sólida y verdaderamente sostenible, y permiten comprender mejor los criterios que deben guiar la toma de decisiones en el ámbito energético y en cualquier otro sector.
      
      
      .p-5.fondo11(data-aos="zoom-in-left")
        SlyderA(tipo="b").tarjeta.bg13.p-4
          .row.justify-content-center
            .col-md-12.mb-4.mb-md-0.col-lg-6
              h4 Interdependencia
              p La sostenibilidad reconoce que las dimensiones ambiental, social y económica no operan de forma aislada. Por el contrario, están profundamente interconectadas e influyen mutuamente. Un problema ambiental, como la escasez de agua, puede tener un impacto directo en la producción económica y en el bienestar social de una comunidad. Del mismo modo, una decisión económica, como la construcción de una planta de energía sin considerar el impacto social, puede generar conflictos y degradar el medio ambiente. La interdependencia exige un enfoque holístico que considere los efectos cruzados de cada acción.
            .col-md-7.col-lg-4
              img(src='@/assets/curso/Tema1/img06.png', alt='')
          
          .row.justify-content-center
            .col-md-12.mb-4.mb-md-0.col-lg-6
              h4 Visión a largo plazo
              p  A diferencia de los modelos que priorizan las ganancias inmediatas, la sostenibilidad se orienta hacia el futuro. Implica tomar decisiones hoy que no comprometan la capacidad de las generaciones futuras para satisfacer sus propias necesidades. Esto significa que los proyectos y las estrategias deben evaluarse no solo por su rentabilidad actual, sino también por sus consecuencias a largo plazo en los recursos naturales y en el bienestar de las sociedades futuras. La visión a largo plazo es esencial para una planificación energética que trascienda la coyuntura.
            .col-md-7.col-lg-4
              img(src='@/assets/curso/Tema1/img07.png', alt='')
          
          .row.justify-content-center
            .col-md-12.mb-4.mb-md-0.col-lg-6
              h4 Equidad 
              p La equidad es un pilar fundamental de la sostenibilidad. Se manifiesta en dos aspectos clave:
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check-circle
                  p #[b Equidad social:] se refiere a la distribución justa de los beneficios y los costos del desarrollo. Asegura que todos los miembros de una sociedad tengan acceso a los recursos y oportunidades necesarios para un bienestar pleno. En el sector energético, esto implica garantizar el acceso universal a la energía limpia y asequible, así como una participación justa en los proyectos.
                li.d-flex
                  i.fas.fa-check-circle
                  p #[b Equidad intergeneracional:] se centra en la justicia entre las generaciones. Implica que la generación actual no debe agotar los recursos del planeta de tal manera que las futuras generaciones no puedan disfrutar de ellos.
            .col-md-7.col-lg-4
              img(src='@/assets/curso/Tema1/img08.png', alt='')
          
          .row.justify-content-center
            .col-md-12.mb-4.mb-md-0.col-lg-6
              h4 Capacidad de carga del planeta 
              p La sostenibilidad opera dentro de los límites biofísicos de la tierra. La capacidad de carga se refiere a la capacidad de los ecosistemas para soportar la vida y las actividades humanas sin degradarse irreversiblemente. La sostenibilidad requiere que las actividades humanas permanezcan dentro de esta capacidad de carga. Conceptos como la huella ecológica son herramientas clave para medir y comprender si una actividad o un estilo de vida están operando dentro de estos límites.
            .col-md-7.col-lg-4
              img(src='@/assets/curso/Tema1/img09.png', alt='')
      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1 Huella ecológica
         

      .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.col-11.mb-3
          img(src="@/assets/curso/Tema1/img10.png", alt="")
        .col-lg-7  
          p Para medir y entender nuestra relación con el planeta, el concepto de huella ecológica es una herramienta esencial. Es un indicador que calcula la cantidad de tierra y agua biológicamente productivas que una persona, un país o la humanidad en general necesita para producir los recursos que consume y para absorber los residuos que genera.
          .row.justify-content-center.align-items-center.mb-4.bg1.p-2(data-aos="zoom-in-left")
            .col-lg-2.col-4.col-md-3.mb-3
              img(src='@/assets/curso/Tema1/img11.svg', alt='')
            .col-lg-10
              p Su relevancia radica en que nos permite comparar nuestra demanda de recursos con la biocapacidad de la tierra, que es la capacidad del planeta para regenerar esos recursos y absorber los residuos. Cuando nuestra huella ecológica excede la biocapacidad, estamos consumiendo más de lo que el planeta puede regenerar, lo cual es insostenible.

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-4.col-md-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2. 
            span Huella ecológica
          img.mb-2(src='@/assets/curso/Tema1/fig4.svg', alt='Representa la huella ecológica mediante la silueta de un pie que integra íconos de industrias, transporte, agua, residuos y energía. Esta imagen sintetiza cómo las actividades humanas generan una presión conjunta sobre la naturaleza y cuánto territorio biológicamente productivo se requiere para sostener ese estilo de vida.')
       
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img12.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          br
          p.mb-0 La #[b huella ecológica] es un indicador que mide la demanda de recursos naturales por parte de la humanidad. Se expresa en hectáreas globales (gha), lo que permite comparar de forma estandarizada el impacto de diferentes países, ciudades o individuos.
          br
          br

      p En términos simples, representa cuánta superficie biológicamente productiva del planeta se requiere para sostener un estilo de vida. Esta demanda se compone de varios elementos:


      .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-10
          PasosA.color-acento-contenido.mb-5(tipo="n")
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0
                h3 Tierras de cultivo
                p Necesarias para producir alimentos, fibras y aceites.
              .col-md-4
                figure
                  img(src='@/assets/curso/Tema1/01.png', alt='Texto que describa la imagen')


            .row.justify-content-center
              .col-md-4
                figure
                  img(src='@/assets/curso/Tema1/02.png', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                h3.text-left Tierras de pastoreo
                p.text-left Destinadas a la cría de ganado y la producción de carne.

            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0
                h3 Bosques
                p Utilizados para obtener madera y papel, además de absorber dióxido de carbono.
              .col-md-4
                figure
                  img(src='@/assets/curso/Tema1/03.png', alt='Texto que describa la imagen')
          

            .row.justify-content-center
              .col-md-4
                figure
                  img(src='@/assets/curso/Tema1/04.png', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                h3.text-left Zonas de pesca
                p.text-left Áreas marinas que proveen productos pesqueros.
            

            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0
                h3 Área urbanizada
                p Espacio que ocupan las infraestructuras humanas, como viviendas, carreteras y ciudades.
              .col-md-4
                figure
                  img(src='@/assets/curso/Tema1/05.png', alt='Texto que describa la imagen')

            .row.justify-content-center
              .col-md-4
                figure
                  img(src='@/assets/curso/Tema1/06.png', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                h3.text-left Área de absorción de carbono
                p.text-left Superficie forestal requerida para capturar las emisiones de CO₂ generadas por el uso de combustibles fósiles.



      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-1.col-4.mb-4.col-md-2
          img(src='@/assets/curso/Tema1/img13.svg', alt='Texto que describa la imagen')
        .col-lg-11
          p Al sumar todas estas áreas, se obtiene una cifra que representa la “huella” de una población. El cálculo de la huella ecológica demuestra que el consumo de los países más desarrollados es, en promedio, significativamente mayor que el de los países en desarrollo.
          p A continuación, se presenta un ejemplo simplificado de un cálculo de huella ecológica, para entender cómo se aplica el concepto de una manera práctica.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/bombillo.svg")
            h3.bg3.py-2.w-card-text.text-white Ejemplo de cálculo de huella ecológica personal
      p.mb-3 Para ilustrar el cálculo de la huella ecológica individual, se puede considerar el caso de Sofía, una persona que reside en una zona urbana. Con el fin de estimar su impacto ambiental, se analizan tres categorías principales de consumo: energía, transporte y alimentación.
    
      .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
        .col-lg-3.col-8.mb-3.col-md-6
          img(src="@/assets/curso/Tema1/img14.png")
        .col-lg-9
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg2")
            .row.justify-content-center(titulo=" Consumo de energía")
              .col-md-11.mb-4.mb-md-0
                p Sofía utiliza electricidad proveniente de una combinación de fuentes energéticas, entre ellas combustibles fósiles. Su consumo anual asciende a #[b 2,000 kWh.]
                p Considerando un factor simplificado de #[b 0.5 hectáreas globales (gha) por cada 1,000 kWh], necesario para absorber el CO₂ emitido en la generación eléctrica, la huella correspondiente se calcula de la siguiente manera:
              .col-lg-11
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 3.
                  span Fórmula del consumo de energía
              .col-lg-5 
                img.mb-2(src='@/assets/curso/Tema1/fig3.svg', alt='La fórmula representa el cálculo de la huella ecológica generada por el consumo anual de energía eléctrica. En ella, se divide el consumo total de electricidad entre 1,000 kWh para estandarizar la medida y posteriormente se multiplica por el factor de 0.5 gha, correspondiente al área necesaria para absorber las emisiones de CO₂ asociadas a su producción. El resultado expresa la demanda ecológica derivada del uso de electricidad por parte de Sofía.')
 
          
            .row.justify-content-center(titulo="Transporte")
              .col-md-11.mb-4.mb-md-0
                p Para desplazarse diariamente a su lugar de trabajo, Sofía utiliza un vehículo particular que funciona con gasolina. En promedio, recorre #[b 15,000 km] al año, con un rendimiento de #[b 10 km por litro], lo que equivale a un consumo total de #[b 1,500 litros] de combustible.
                p CUtilizando un factor estimado de #[b 0.1 gha por cada 100 litros] de gasolina (que incluye la producción del combustible y la absorción de sus emisiones) la huella asociada se obtiene mediante el siguiente cálculo:
              .col-lg-11
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 4. 
                  span Fórmula del transporte
              .col-lg-5 
                img.mb-2(src='@/assets/curso/Tema1/fig04.svg', alt='Esta fórmula muestra la estimación de la huella ecológica causada por el consumo anual de gasolina. Primero, se divide el volumen total de combustible utilizado entre 100 litros, con el fin de aplicar el factor de huella asociado a ese intervalo. Luego se multiplica por 0.1 gha, que corresponde al espacio requerido para la producción del combustible y la absorción de las emisiones generadas. El resultado refleja el impacto ambiental del transporte individual de Sofía.')
      
            .row.justify-content-center(titulo="Alimentación")
              .col-md-11.mb-4.mb-md-0
                p La dieta de Sofía incluye tanto productos de origen animal como vegetal. Su consumo anual estimado corresponde a 100 kg de carne y 300 kg de vegetales.
                p Bajo factores simplificados de huella ecológica, donde la producción de carne requiere 0.05 gha / kg y la producción de vegetales 0.01 gha / kg, la estimación se realiza así:
              .col-lg-11
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 5. 
                  span Fórmula del consumo de carne y vegetales
              .col-lg-5 
                img.mb-4(src='@/assets/curso/Tema1/fig5.svg', alt='Las fórmulas estiman la huella ecológica derivada del consumo anual de carne y vegetales. Ambas multiplican la cantidad consumida en kilogramos por un factor de huella específico (0.05 gha / kg para la carne y 0.01 gha / kg para los vegetales), reflejando los recursos necesarios para su producción. El resultado muestra la presión ambiental generada por la dieta de Sofía.')
              p.col-lg-11 La huella total correspondiente a la alimentación es de 8 gha.

      .row.justify-content-center.mb-3(data-aos='fade-right')
        .col-lg-9
          .tarjeta--container.row
            .col-md.tarjeta.bg7.d-none.d-lg-block.mb-4
              .row.align-items-end
                .col-12.col-md-5.col-lg-10
                  figure
                    img(src='@/assets/curso/Tema1/img15.svg', alt='')          
            .col-md.tarjeta.bg1.p-4.mb-4
              .row.align-items-center
                .col-12.col-md-12.col-lg-12
                  h5.bg10.p-2 Resumen del cálculo
                  p La huella ecológica total estimada para Sofía resulta de la suma de las categorías analizadas:
                  p • Consumo de energía: 1 gha
                  p • Transporte: 1.5 gha
                  p • Alimentación: 8 gha
                  p Huella ecológica total: 10.5 gha
        .col-lg-3.col-8
          img(src='@/assets/curso/Tema1/img16.svg', alt='') 

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-7
          p El valor obtenido, 10.5 hectáreas globales (gha), corresponde a la huella ecológica estimada de Sofía. Para comprender su significado, este resultado puede compararse con la biocapacidad per cápita disponible a nivel mundial, que se estima en aproximadamente 1.6 gha por persona. La diferencia evidencia que el estilo de vida de Sofía supera ampliamente la capacidad del planeta para regenerar los recursos que utiliza, lo que señala un nivel de consumo ambientalmente insostenible.
          p Es importante señalar que este es un ejemplo simplificado. Un cálculo real de huella ecológica incorpora otros aspectos relevantes, como la construcción de viviendas, el uso de agua, la generación de residuos y el consumo de bienes y servicios. No obstante, el ejercicio permite ilustrar un principio esencial: la huella ecológica convierte el impacto de nuestras actividades en un valor asociado a la superficie de tierra biológicamente productiva necesaria para sostenerlas, facilitando así la comprensión de nuestra presión sobre los ecosistemas.
        .col-lg-5.col-md-8
          img(src='@/assets/curso/Tema1/img17.png', alt='') 

      .row.justify-content-center.mb-4
        .col-lg-12
          .tarjeta--container.row
            .col-lg-5.tarjeta.p-0
              figure.h-100
                img.img-cover.d-none.d-lg-block(src='@/assets/curso/Tema1/img18.png', alt='')
            .col-lg-7.tarjeta.bg4.p-5
              h5.bg14.p-2.text-white.col-lg-3.text-center Relevancia
              p Comparación entre la huella y la biocapacidad del planeta como un límite de la sostenibilidad.
              p La relevancia de la huella ecológica radica en que nos permite comparar la demanda humana con la biocapacidad de la tierra. La biocapacidad es la capacidad de los ecosistemas para regenerar los recursos que usamos y absorber los desechos que producimos.
              p Cuando la huella ecológica de la humanidad excede la biocapacidad, entramos en un déficit ecológico. Esto significa que estamos consumiendo los recursos naturales más rápido de lo que los ecosistemas pueden regenerarlos y estamos acumulando residuos, como el dióxido de carbono en la atmósfera. En este momento, la huella ecológica global ya ha superado la biocapacidad del planeta. Esto indica que el modelo de desarrollo actual es insostenible y que estamos viviendo de los “créditos” de recursos de las generaciones futuras.


      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-1.col-4.mb-3.col-md-2
          img(src='@/assets/curso/Tema1/mano.svg', alt='Texto que describa la imagen')
        .col-lg-11
          p Por lo tanto, la huella ecológica no solo es una herramienta de medición, sino un indicador de advertencia que nos muestra que la sostenibilidad requiere una acción inmediata para reducir nuestra demanda de recursos y vivir dentro de los límites ecológicos del planeta. 
                
      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2 Desarrollo sostenible

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-4.col-md-8
          img(src='@/assets/curso/Tema1/img19.png', alt='Texto que describa la imagen')
        .col-lg-7
          p El desarrollo sostenible es la aplicación práctica del concepto de sostenibilidad. Es un camino de progreso que busca la integración de las tres dimensiones (ambiental, social y económica) para lograr un crecimiento que no solo sea económicamente viable, sino también socialmente justo y ambientalmente responsable. Sus principios clave son la integración de la protección ambiental, el crecimiento económico y la equidad social. Busca que las decisiones tomadas hoy no comprometan la capacidad del futuro para prosperar.
          .bloque-texto-e.bg15.p-4
            .bloque-texto-e__texto
              i.fas.fa-quote-left
              h4 El desarrollo sostenible es aquel que satisface las necesidades del presente sin comprometer la capacidad de las generaciones futuras para satisfacer las suyas.
              i.fas.fa-quote-right

      p Esta definición implica una doble responsabilidad:         
    
      .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-lg-12
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-primario.p-5
              .row.mb-2.align-items-end
                .col-3.col-md-5.col-lg-2.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/001.svg', alt='Texto que describa la imagen')          
                .col-9.col-lg-10.col-md-11
                  h2.bg4.p-1.text-center.text-black Responsabilidad con el presente
              p Asegurar que las necesidades básicas de todas las personas, como el acceso a la energía, agua potable, alimentos y un medio ambiente sano, sean satisfechas de manera equitativa.
            
            .col-md.tarjeta.bg16.p-5
              .row.mb-2.align-items-end
                .col-3.col-md-5.col-lg-2.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/002.svg', alt='Texto que describa la imagen')          
                .col-9.col-lg-10.col-md-11
                  h2.bg10.p-1.text-center.text-black Responsabilidad con el futuro   
              p Garantizar que el uso de los recursos y la generación de residuos hoy no impidan que las futuras generaciones puedan vivir una vida plena y próspera. Esto requiere no agotar los recursos no renovables y no degradar los ecosistemas a un punto irreversible.

      p En el sector energético, esto se traduce en buscar soluciones que no solo generen energía de manera eficiente y asequible, sino que también minimicen la contaminación y no dejen un legado de problemas ambientales y sociales para las próximas generaciones (por ejemplo, la gestión de residuos nucleares o la contaminación del suelo por la minería del carbón).

      .row.justify-content-center.align-items-center.mb-4.bg1.p-4(data-aos="zoom-in-left")
        .col-lg-1.col-4.mb-3.col-md-3
          img(src='@/assets/curso/Tema1/img19.svg', alt='Texto que describa la imagen')
        .col-lg-11
          h4.bg14.col-lg-1.text-center.text-white.p-1 Principios
          p Integración de la protección ambiental, el crecimiento económico y la equidad social.


      .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-7.bg8.p-4.mb-3
          p El desarrollo sostenible se rige por un conjunto de principios que orientan su implementación:
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p #[b Protección ambiental:] el medio ambiente no es solo una variable a considerar, sino la base que sustenta la economía y la sociedad. La protección de los recursos naturales y los ecosistemas es un prerrequisito para cualquier actividad de desarrollo.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p #[b Crecimiento económico:] el desarrollo no puede darse en un contexto de pobreza. Un crecimiento económico sostenido y equitativo es necesario para generar los recursos que permitan mejorar la calidad de vida y financiar las inversiones en tecnologías más limpias y eficientes.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p #[b Equidad social:] este principio busca una distribución justa de los costos y beneficios del desarrollo, tanto dentro de una misma generación (equidad social) como entre diferentes generaciones (equidad intergeneracional). Un proyecto energético, por ejemplo, debe asegurar que las comunidades cercanas se beneficien y no se vean perjudicadas por su implementación.
        .col-lg-5.mb-3.col-10.col-md-7
          img(src='@/assets/curso/Tema1/img20.png', alt='Texto que describa la imagen')
        .col-lg-12 
          p Estos principios están interconectados y deben aplicarse de manera integrada. El verdadero desafío del desarrollo sostenible reside en encontrar el punto de equilibrio donde los tres pilares se apoyen mutuamente, permitiendo un progreso genuino y duradero.


      separador
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.3 Economía circular

      p A diferencia del modelo económico tradicional o economía lineal (basado en extraer, producir, usar y desechar), la economía circular plantea un enfoque regenerativo. Su propósito es mantener los recursos en uso durante el mayor tiempo posible, reduciendo al mínimo la generación de residuos y evitando la contaminación desde la etapa de diseño de los productos.

      .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-5
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 6. 
            span Economía circular
      .row.justify-content-center.align-items-center.mb-4.fondo2.p-4
        .col-lg-6.col-md-8
          img(src='@/assets/curso/Tema1/fig06.svg', alt='El proceso inicia con las materias primas, continúa con el diseño, la producción, la distribución y el consumo, y prioriza la reutilización y reparación para extender la vida útil de los productos. Finalmente, los materiales se recolectan y reciclan para reintegrarse al ciclo productivo, dejando solo una mínima fracción como residuo.')
      p La principal diferencia radica en el cierre de ciclos. La economía circular procura que los productos y materiales permanezcan dentro del ciclo de valor mediante la reutilización, reparación, reacondicionamiento y reciclaje. Este enfoque disminuye la necesidad de extraer nuevas materias primas, reduce la generación de residuos y alivia la presión sobre los ecosistemas, contribuyendo directamente al logro de los objetivos de sostenibilidad.

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img21.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          h5.bg14.text-white.px-3.py-2.d-inline-block.mb-3
            | Modelo de producción y consumo que busca la reducción, reutilización, reparación y reciclaje de materiales.
          p 
            br
            | El modelo de la economía circular se fundamenta en un diseño sistémico que busca un flujo continuo de materiales y energía, imitando los ciclos de la naturaleza. A diferencia del modelo lineal de “tomar – hacer - desechar,” la circularidad se basa en tres principios clave que actúan de manera interconectada:

      .p-5.fondo11.mb-5(data-aos="zoom-in-left")
        .tarjeta.tarjeta--gris.p-4
          PasosB.color-primario
            .row.justify-content-center
              .col-md-12.mb-4.mb-md-0.col-lg-6
                h4.mb-4 Eliminar residuos y contaminación desde el diseño
                p El residuo no es un accidente, sino una falla de diseño. Este principio busca prevenir la generación de residuos y la contaminación en cada etapa, desde la concepción del producto hasta su disposición final. En lugar de gestionar los desechos al final, se diseñan productos y procesos que no los produzcan en primer lugar.
              .col-md-7.col-lg-4
                img(src='@/assets/curso/Tema1/img22.png', alt='')
            
            .row.justify-content-center
              .col-md-12.mb-4.mb-md-0.col-lg-6
                h4.mb-4 Mantener productos y materiales en uso
                p  La economía circular se enfoca en alargar la vida útil de los productos. Esto se logra a través de estrategias como:
                ul.lista-ul--color
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Reutilización:] usar un producto más de una vez sin modificarlo.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Reparación:] arreglar un producto defectuoso para que pueda seguir funcionando.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Remanufactura:] desmontar un producto, limpiar sus partes y volver a montarlo para que funcione como nuevo.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Reciclaje:] procesar materiales para transformarlos en nuevos productos, aunque esto a menudo requiere más energía que la reutilización.
              .col-md-7.col-lg-4
                img(src='@/assets/curso/Tema1/img23.png', alt='')
            
            .row.justify-content-center
              .col-md-12.mb-4.mb-md-0.col-lg-6
                h4.mb-4 Regenerar sistemas naturales
                p La economía circular no solo minimiza los daños, sino que busca activamente restaurar y mejorar los sistemas naturales. Esto implica utilizar energía renovable y devolver los materiales biológicos al suelo de forma segura (por ejemplo, a través del compostaje). La economía se convierte en una fuerza positiva que regenera el capital natural en lugar de agotarlo.
                p Estos tres principios se aplican en cada una de las etapas del ciclo de vida de un producto o servicio, cerrando los ciclos de materiales y creando un sistema que es inherentemente más sostenible.
              .col-md-7.col-lg-4
                img(src='@/assets/curso/Tema1/img24.png', alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/bombillo.svg")
            h3.bg3.py-2.w-card-text.text-white Diferencia con la economía lineal: el “cierre de ciclos” y la minimización de residuos
      p.mb-3 La diferencia más significativa entre la economía circular y el modelo tradicional de producción y consumo (la economía lineal) se encuentra en la manera en que cada sistema concibe y gestiona los materiales y los residuos.


      .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-lg-12
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-primario.p-5
              .row.mb-2.align-items-end
                .col-3.col-md-5.col-lg-2.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/25.svg', alt='Texto que describa la imagen')          
                .col-9.col-lg-8
                  h2.bg4.p-1.text-center.text-black Economía lineal: “extraer, producir, usar y desechar”
              p Este modelo, predominante desde la Revolución Industrial, funciona como un flujo unidireccional: se extraen recursos de la naturaleza, se transforman en productos, se utilizan y finalmente se desechan cuando dejan de ser útiles. En este esquema, el residuo es un resultado inevitable y sin valor, lo que impulsa el agotamiento de recursos finitos, el incremento de desechos y la creciente contaminación ambiental.
            
            .col-md.tarjeta.bg16.p-5
              .row.mb-2.align-items-end
                .col-3.col-md-5.col-lg-2.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/26.svg', alt='Texto que describa la imagen')          
                .col-9.col-lg-8
                  h2.bg10.p-1.text-center.text-black Economía circular: el “cierre de ciclos” 
              p En contraste, la economía circular busca eliminar el concepto mismo de residuo. Propone un sistema en el que los productos y materiales se mantienen dentro de un ciclo continuo de valor. En lugar de finalizar en un vertedero, los materiales regresan al sistema productivo mediante estrategias como la reutilización, reparación, remanufactura y reciclaje. Esto permite reducir significativamente la extracción de nuevas materias primas y emular los ciclos naturales.

      .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
        .col-lg-5.bg8.p-4
          h5.bg13.p-2.mb-4 En síntesis, la principal diferencia es:
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p #[b Modelo lineal:] el valor del producto se concentra en la venta y disminuye rápidamente hasta su desecho.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p #[b Modelo circular:] el valor de los materiales se conserva y se aprovecha durante el mayor tiempo posible dentro del sistema.
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/Tema1/27.svg', alt='Texto que describa la imagen')
        .col-lg-4.mb-3
          .row
            .col-lg-3.mb-3.col-4.col-md-3
              img(src='@/assets/curso/Tema1/Modelo1.svg', alt='Texto que describa la imagen')
            .col-lg-12
              p Este cambio de paradigma no solo reduce la generación de residuos, sino que también disminuye la presión sobre los ecosistemas, optimiza el uso de la energía y abre nuevas oportunidades económicas al recuperar valor de materiales que antes se consideraban desechables.



























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
.tarjeta.color-primario
  background-color: #004B72

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
