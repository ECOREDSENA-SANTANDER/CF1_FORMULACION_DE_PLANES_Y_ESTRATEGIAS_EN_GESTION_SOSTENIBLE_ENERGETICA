export default {
  global: {
    Name:
      'Fundamentos de la evaluación de impactos ambientales en procesos energéticos',
    Description:
      'El componente formativo ofrece una comprensión básica sobre cómo las actividades energéticas afectan el entorno. A través de conceptos como sostenibilidad, ciclo de vida y tipos de impactos ambientales, este módulo permite identificar los efectos que generan los procesos energéticos y reconocer la importancia de gestionarlos de manera responsable para promover prácticas más sostenibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La sostenibilidad como marco de referencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Huella ecológica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Desarrollo sostenible',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Economía circular',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El ciclo de vida del proceso energético',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Impactos ambientales en el proceso energético',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_22230062_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Biomasa',
      significado:
        'Materia orgánica utilizada como fuente de energía, proveniente de residuos forestales, agrícolas o urbanos.',
    },
    {
      termino: 'Capacidad de carga del planeta',
      significado:
        'Límite de recursos que la tierra puede proporcionar sin deteriorarse de manera irreversible.',
    },
    {
      termino: 'Ciclo de vida',
      significado:
        'Análisis de todas las etapas de un producto o proceso, desde la extracción de materias primas hasta su disposición final.',
    },
    {
      termino: 'Contaminación del agua',
      significado:
        'Alteración de la calidad del agua por vertimientos, derrames o residuos, afectando los ecosistemas acuáticos.',
    },
    {
      termino: 'Contaminación del suelo',
      significado:
        'Degradación de la calidad del suelo debido a sustancias tóxicas o desechos peligrosos.',
    },
    {
      termino: 'Deforestación',
      significado:
        'Pérdida de cobertura boscosa debido a actividades humanas como minería, agricultura o infraestructura.',
    },
    {
      termino: 'Economía circular',
      significado:
        'Modelo de producción que busca reducir residuos y mantener los materiales en uso mediante reutilización, reciclaje y recuperación.',
    },
    {
      termino: 'Eficiencia energética',
      significado:
        'Uso óptimo de la energía para realizar una actividad o producir un bien, reduciendo pérdidas y consumo.',
    },
    {
      termino: 'Emisiones de GEI',
      significado:
        'Liberación de gases de efecto invernadero que contribuyen al calentamiento global, como CO₂, CH₄ y NOx.',
    },
    {
      termino: 'Energía renovable',
      significado:
        'Energía obtenida de fuentes naturales que se regeneran de manera continua, como el sol, el viento o el agua.',
    },
    {
      termino: 'Huella ecológica',
      significado:
        'Indicador que mide la demanda humana de recursos naturales frente a la capacidad del planeta para regenerarlos.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'Consecuencia de una actividad humana sobre los ecosistemas y los recursos naturales.',
    },
    {
      termino: 'Residuos peligrosos',
      significado:
        'Desechos que representan riesgos para la salud o el ambiente, como residuos nucleares o químicos.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Enfoque que busca equilibrar las dimensiones ambiental, social y económica para garantizar el bienestar presente sin comprometer el futuro.',
    },
    {
      termino: 'Transporte energético',
      significado:
        'Movimiento de energía o materiales energéticos a través de oleoductos, redes eléctricas o buques.',
    },
  ],
  referencias: [
    {
      referencia:
        'Comisión Mundial sobre Medio Ambiente y Desarrollo. (1987). Nuestro futuro común (Informe Brundtland).',
      link: '',
    },
    {
      referencia:
        'Global Footprint Network. (2024). Huella Ecológica: Conceptos, medición y aplicaciones.',
      link: '',
    },
    {
      referencia:
        'Ellen MacArthur Foundation. (2017). Introducción a la economía circular.',
      link: '',
    },
    {
      referencia:
        'Agencia Internacional de la Energía (IEA). (2023). World Energy Outlook 2023. IEA Publications.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (MADS) de Colombia. (2019). Guía metodológica para la evaluación de impactos ambientales.',
      link: '',
    },
    {
      referencia:
        'UNEP, GRID-Arendal. (2018). Energy and the Sustainable Development Goals: An Integrated Approach.',
      link: '',
    },
    {
      referencia:
        'U.S. Department of Energy (DOE), Federal Energy Management Program (FEMP). (2022). Advanced Energy Performance Indicator (EnPI) Tool Training.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gianmarco Serrano Cabarcas',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
