export default {
  global: {
    componenteFormativo: 'Pruebas unitarias',
    descripcionCurso:
      'Este componente formativo aborda aspectos clave de las pruebas unitarias en la programación de herramientas de <em>software</em>. Con su estudio responsable el aprendiz se afianzará en la conceptualización básica y en la configuración de herramientas de pruebas, tales como plantillas, modelos, plan de pruebas, informe de pruebas y construcción de test unitarios con base en la normativa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/f1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/f2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/f3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/f4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/f5.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos generales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Configuración de herramientas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Plantillas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Plantilla del plan de pruebas de <em>software</em>',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Modelo de informe de ejecución de pruebas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de pruebas de <em>software</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Construcción de <em>test</em> unitarios',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: 'Configuración de herramientas',
      referencia:
        'Ramírez, S. (2020). Instalar librería JUnit manualmente para Java Netbeans + prueba unitaria',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cMx8jsgmXII',
    },
    {
      tema: 'Construcción de <em>test</em> unitarios',
      referencia: 'Miranda, M. (2015). Pruebas unitarias con JUnit en Netbeans',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=fyPfiEXt5i8&t=173s&ab_channel=MynorMiranda',
    },
  ],
  glosario: [
    {
      termino: '<em>Development</em>',
      significado:
        'Es el conjunto de profesionales que desarrollan el producto con ciertas habilidades técnicas.',
    },
    {
      termino: 'Diseño',
      significado: 'Actividad creativa que proyecta objetos útiles.',
    },
    {
      termino: 'Plantilla',
      significado: 'Pieza que sirve de modelo o guía para ejecutar algo.',
    },
    {
      termino: 'Prueba',
      significado:
        'Acción o efecto de probar cualquier especie de razón o medio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acervo Lima. (s.f.). Entorno de prueba para pruebas de <em>software</em>. Acervo Lima.',
      link:
        'https://es.acervolima.com/entorno-de-prueba-para-pruebas-de-software/ ',
    },
    {
      referencia:
        'Atlassian. (2022). Los distintos tipos de pruebas en <em>software</em>. Atlassian',
      link:
        'https://www.atlassian.com/es/continuous-delivery/software-testing/types-of-software-testing',
    },
    {
      referencia:
        '<em>Quality Stream.</em> (2020). Cómo escribir casos de pruebas paso a paso [video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=laawNIdX9js&ab_channel=Quality-Stream',
    },
    {
      referencia:
        '<em>Quality Stream</em>. (2020). ¿Qué necesitas saber para empezar como <em>tester</em>? [video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=vDhAgZMoRlM&ab_channel=Quality-Stream',
    },
    {
      referencia:
        'Ramírez, S. (2020). Instalar librería JUnit manualmente para Java Netbeans + prueba unitaria [video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=cMx8jsgmXII&ab_channel=SANTIAGORAMIREZ',
    },
    {
      referencia:
        '<em> Spanish Software Testing Qualifications Board</em>. (2022). Objetivos del SSTQB. SSTQB',
      link: 'https://es.sstqb.com',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mario Fernando Meneses Calvache',
        cargo: 'Experto temático',
        centro:
          'Centro Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Hernán Muñoz',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'María Fernanda Chacón Castro',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Palencia',
        cargo: 'Propuesta gráfica',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
