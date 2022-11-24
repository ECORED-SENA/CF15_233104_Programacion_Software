<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Configuración de herramientas

    .fullbg.bg--gray.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t2/t2_01.svg", alt="alt")             
        .col-lg-8(data-aos="fade-left")
          p Para realizar cualquier aplicación o producto de software el equipo de desarrollo debe guiarse con una serie de pasos que se ajustan al ciclo de vida del software SDLC.

          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/rectangle_00.svg/", alt="alt").img30.m-auto
            .col-lg
              p.mb-0 Por lo tanto, las pruebas hacen parte de una de las fases, donde se tiene que garantizar la calidad del producto o aplicación y se logra comparar ese funcionamiento con diferentes tipos de parámetros, basados en el diseño y la ejecución de las pruebas de software. 

          .cajon.cjn--yellow.p-4(data-aos="zoom-in")
            p.mb-0 Por esto es importante conocer todas las herramientas posibles que indiquen la manera más eficiente de verificar la calidad del programa desarrollado.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Técnicas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/rectangle_02.svg/", alt="alt").img30.m-auto
          .col-lg
            p Se deben utilizar los elementos útiles al momento de ejecutar los proyectos de desarrollo de software. Los elementos a utilizar son plantillas de gerencia de proyectos como:

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            ul.fa-ul.strong
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Actas de proyecto.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Definiciones de alcance.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Cronogramas. 
          .col-lg-6
            ul.fa-ul.strong
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Tablas de Gantt.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Planes de gestión de riesgos.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Planes de comunicaciones, entre otras.
              
      .col-lg-4.col-8
        figure
          img(src="@/assets/curso/temas/t2/t2_02.png", alt="alt")    

    p Las plantillas de gerencia de proyectos son importantes porque ayudan a ahorrar tiempo, se evita cometer errores y se selecciona un tipo de metodología adecuada.

    p.mb-5 Las características de las plantillas para la gerencia de proyectos son:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.order-2.order-lg-1(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_03.svg", alt="alt")

      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Ahorrar tiempo")
            .col-12
              p.mb-0 Porque solamente se completa la información que pide la plantilla.

          .row(numero="2" titulo="Asegurar el cumplimiento")
            .col-12
              p.mb-0 La plantilla sigue el procedimiento paso a paso y asegura su cumplimiento.

          .row(numero="3" titulo="Se evita omisión de la información")
            .col-12
              p.mb-0 Las plantillas siguen listas de chequeo.

          .row(numero="4" titulo="Se mejora la comunicación")
            .col-12
              p.mb-0 Las pruebas unitarias se utilizan una vez se ha terminado un código y la idea es empezar a probar uno a uno los métodos o clases de aplicación.

          .row(numero="5" titulo="Se incrementa la satisfacción del cliente")
            .col-12
              p.mb-0 Los acuerdos, las decisiones y los planes se registran y son aceptados por todos.

          .row(numero="6" titulo="Se implementan nuevos procesos")
            .col-12
              p.mb-0 Se implementan nuevas metodologías.

          .row(numero="7" titulo="Se resguarda información del proyecto")
            .col-12
              p.mb-0 Se cuenta con registros de los resultados de reuniones individuales y grupales.

    .fullbg.bg--gray.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-4 
        .col-xl-8(data-aos="fade-left")
          p La Oficina de Gestión de Proyectos PMO desarrolla la metodología que se necesita para gestionar, de muy buena manera, los proyectos empresariales. De igual modo comparte buenas prácticas, lineamientos y metodologías, promoviendo una cultura de gestión de proyectos en todas las empresas. El ideal es capacitar y entrenar a los líderes de los proyectos junto a sus equipos.          

          .cajon.cjn--yellow.p-4(data-aos="zoom-in").mb-4
            p.mb-0 Por su parte y como herramientas clave del desarrollo de software para la gerencia de proyectos están también las plantillas de curriculum vitae, estas son:

          .row.justify-content-center
            .col-xl-3.col-md-6.col-md-8.col-10.mb-4.mb-xl-0
              .crd.bg--white.brd--rad_02.shadow.p-3
                .numb_02(data-nb="01")
                figure.my-4
                  img(src="@/assets/curso/temas/t2/t2_05.svg", alt="alt").img90.m-auto               
                p.text-center Modelo de #[em curriculum vitae] para el gerente de proyecto (por logros).

            .col-xl-3.col-md-6.col-md-8.col-10.mb-4.mb-xl-0
              .crd.bg--white.brd--rad_02.shadow.p-3
                .numb_02(data-nb="02")
                figure.my-4
                  img(src="@/assets/curso/temas/t2/t2_06.svg", alt="alt").img90.m-auto               
                p.text-center Modelo de #[em curriculum vitae] para el gerente de proyecto (por responsabilidades).

            .col-xl-3.col-md-6.col-md-8.col-10.mb-4.mb-xl-0
              .crd.bg--white.brd--rad_02.shadow.p-3
                .numb_02(data-nb="03")
                figure.my-4
                  img(src="@/assets/curso/temas/t2/t2_07.svg", alt="alt").img90.m-auto               
                p.text-center Modelo de #[em curriculum vitae] para el analista programador.

            .col-xl-3.col-md-6.col-md-8.col-10.mb-4.mb-xl-0
              .crd.bg--white.brd--rad_02.shadow.p-3
                .numb_02(data-nb="04")
                figure.my-4
                  img(src="@/assets/curso/temas/t2/t2_08.svg", alt="alt").img90.m-auto               
                p.text-center Modelo de #[em curriculum vitae] para el analista de QA.

        .col-xl-4.d-none.d-xl-flex(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t2/t2_04.svg", alt="alt")

    p.mb-4 En el mismo sentido y con el mismo nivel de utilidad están las plantillas de gerencia de proyectos que se enuncian a continuación:   

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Plantillas de gerencia de proyectos

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10
        .cstm_Table 
          table
            thead.cell--blue
              tr.text-center
                th(colspan='2') 
            tbody
              tr
                td Servicios
                td Modelo de cómo hacer una propuesta de servicios.
              tr.cell--gray  
                td Factibilidad
                td Modelo de estudio de factibilidad de un proyecto.
              tr
                td Operación
                td Modelo de plan de trabajo de un proyecto.
              tr.cell--gray  
                td Constitución
                td Plantilla de acta de constitución de proyecto.
              tr
                td Acta
                td Plantilla de acta de proyecto resumida.
              tr.cell--gray  
                td Dirección
                td Modelo de plan de dirección de proyecto.
              tr
                td Cierre
                td Plantilla de acta de cierre de proyecto.
              tr.cell--gray  
                td Negocio
                td Plantilla de caso de negocio para un proyecto.
              tr
                td Distribución operativa
                td Plantilla de estructura de desglose de trabajo (EDT).
              tr.cell--gray  
                td Memoria
                td Plantilla para documentar lecciones aprendidas.
              tr
                td Trazabilidad
                td Plantilla de matriz de trazabilidad de requisitos.
              tr.cell--gray  
                td Responsabilidades
                td Plantilla de matriz RAM de asignación de responsabilidades.
              tr
                td Roles
                td Plantilla de matriz de RACI de asignación de roles y responsabilidades.
              tr.cell--gray  
                td Cambios
                td Plantilla de solicitud de cambios en proyectos.
              tr
                td #[em Stakeholders]
                td Plantilla del registro de los interesados (#[em Stakeholders]).
              tr.cell--gray  
                td Requerimientos
                td Plantilla de requerimientos de comunicaciones del proyecto.
              tr
                td Partes interesadas
                td Plantilla de plan de gestión de los interesados.
              tr.cell--gray  
                td Riesgos
                td Plantilla de plan de gestión de riesgos en proyectos.
              tr
                td Presupuesto
                td Plantilla de presupuesto de un proyecto.
              tr.cell--gray  
                td Seguimiento
                td Plantilla para el registro y el seguimiento de los riesgos en proyectos.
              tr
                td Reportes
                td Plantilla de reporte de avances del proyecto.


    p.mb-5 Para la aplicación de metodologías ágiles existen también algunas plantillas de mucha utilidad como:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Metodologías ágiles, plantillas

        figure
          img(src="@/assets/curso/temas/t2/t2_09.svg", alt="alt") 

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Plantilla del plan de pruebas de #[em software]

    .fullbg.bg--gray.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-4                    
        .col-lg-8(data-aos="fade-left")
          p Para el desarrollo de software, en la fase de pruebas, se puede caracterizar de manera crítica para que se logre asegurar el producto y para que sea enviado al equipo de producción con la calidad esperada por el cliente o el usuario final. 

          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/rectangle_00.svg/", alt="alt").img30.m-auto
            .col-lg
              p.mb-0 De igual forma se hace necesario e indispensable contar con un muy buen plan de pruebas de software para lograr la especificación de las funciones que se prueban, de la manera como serán ejecutadas las pruebas, asignar a los responsables y el cronograma para lograr las entregas finales. 

          .cajon.cjn--yellow.p-4(data-aos="zoom-in")
            p.mb-0 El plan de pruebas se debe aplicar para todo el proyecto de software. Del mismo modo, se puede acotar por iteraciones, o casos, igual se pueden definir por jerarquías o casos de prueba para ser considerados.

        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t2/t2_10.png", alt="alt") 

    .tarjeta.bg--cta.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/recursos/cta_02.png").img45
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.text-white.mb-1 Plantilla de plan de pruebas #[em software]
              p.text-white.mb-0 Estimado aprendiz a continuación descargar el siguiente documento para su consulta.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Plantilla_Plan_Pruebas_Software.docx')" target="_blank")
                span Descargar
                i.fas.fa-file-download 

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH3
          h3.mb-0 Secciones de la plantilla del plan de pruebas

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/t2_11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Hacen referencia a los pasos por seguir, en su orden, para la consecución del desarrollo óptimo de las pruebas y verificación de la calidad del producto. Analice el siguiente esquema y profundice en la comprensión de las secciones de plantilla del plan de pruebas:

    .row.justify-content-center.mb-5
      .col-lg-10        
        figure
          img(src="@/assets/curso/temas/t2/t2_12.svg", alt="alt") 

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH3
          h3.mb-0 Plantilla de casos de prueba

    .fullbg.bg--gray.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t2/t2_13.svg", alt="alt")          

        .col-lg-8(data-aos="fade-left")
          p El principal producto que se elabora durante la fase de análisis de pruebas en el proyecto de software es la especificación del diseño de casos de prueba y los respectivos datos de entrada. 

          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/rectangle_02.svg/", alt="alt").img30.m-auto
            .col-lg
              p.mb-0 Estos datos se utilizan para evaluar la calidad del producto y ayuda a determinar si cumple con los requisitos solicitados por el cliente.

          .tarjeta.bg--cta.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/recursos/cta_02.png").img45
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.text-white.mb-1 Plantilla de casos de pruebas de #[em software]
                    p.text-white.mb-0 Estimado aprendiz a continuación descargar el siguiente documento para su consulta.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Plantilla_Casos_Prueba.xlsx')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            ul.fa-ul.strong
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Id.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Caso de prueba.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Descripción.

          .col-lg-4.mb-4.mb-lg-0
            ul.fa-ul.strong
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Fecha.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Área funcional / subproceso.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Funcionalidad o característica.

          .col-lg-4.mb-4.mb-lg-0
            ul.fa-ul.strong
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Datos y acciones de entrada.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Datos de salida.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Requerimientos de los ambientes de prueba.


      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/t2/t2_16.svg", alt="alt").img180.m-auto

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Modelo de informe de ejecución de pruebas

    p.mb-5 Los siguientes son los datos de la plantilla del plan de pruebas de software:

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/t2_17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Al momento de ejecutar los proyectos de desarrollo de software, en la fase de pruebas Software Testing suele volverse crítica y los stakeholders (interesados) buscan información inmediata sobre el estado de la calidad del producto que se está ejecutando.

    .fullbg.bg--gray.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-8(data-aos="fade-left")
          .cajon.cjn--yellow.p-4.mb-4(data-aos="zoom-in")
            p.mb-0 Para este tipo de evento se suele manejar un informe del avance de las pruebas, desarrollo y funciones, el cual representa la situación actual de las pruebas, los errores, los eventos críticos y los casos por ejecutar.

          .tarjeta.bg--cta.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/recursos/cta_02.png").img45
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.text-white.mb-1 Modelo de informe de ejecución de pruebas de #[em software]
                    p.text-white.mb-0 Estimado aprendiz a continuación descargar el siguiente documento para su consulta.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Informe_Ejecucion_Pruebas.xlsx')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download         

        .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t2/t2_18.svg", alt="alt")  

    p Los siguientes son los datos de la plantilla del plan de pruebas de software:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/t2/t2_14.svg", alt="alt").img255.m-auto

      .col-lg
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            ul.fa-ul.strong
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Código asociado al proyecto.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Nombre del proyecto.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Fecha de comienzo planificada.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Fecha de finalización planificada.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Casos de prueba.

          .col-lg-4.mb-4.mb-lg-0
            ul.fa-ul.strong
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Casos planificados.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Casos exitosos.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Avance planificado.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Avance real.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Desviación.

          .col-lg-4.mb-4.mb-lg-0
            ul.fa-ul.strong
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Días de desviación.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Fecha final del pronóstico.
              .hr_line
              li
                i.fas.fa-check-circle.txt--mint.me-2
                | Casos con incidencia.  

    p.mb-5 En relación con la situación actual de defectos considere:  

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-9
        .cstm_Table 
          table
            thead.cell--blue
              tr.text-center
                th(style="width:25%;") 
                th(style="width:75%;")  
            tbody
              tr
                td Reportados
                td Se reportan la totalidad de defectos o incidencias a la fecha del reporte.
              tr.cell--gray  
                td En análisis
                td Se reportan la cantidad de defectos que se encuentran en análisis, aún no son aceptados.
              tr
                td Descartados
                td Son los defectos que se descartan porque no aplican en la prueba por el tester.
              tr.cell--gray  
                td En proceso
                td Se refiere a la cantidad de defectos que se analizaron y están nuevamente en desarrollo.
              tr
                td Corregidos 
                td Son la cantidad de defectos que ya se corrigieron, por lo tanto, ya se puede cerrar el caso. 


    



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
