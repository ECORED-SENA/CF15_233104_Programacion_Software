<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos generales

    .fullbg.bg--gray.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t1/t1_01.png", alt="alt")
        .col-lg-8(data-aos="fade-left")
          p La caracterización de un caso de prueba se refleja cuando tiene una entrada conocida y una salida esperada, lo cual se debe haber formulado mediante un escrito antes de que se ejecute la prueba.
          .row
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/rectangle_00.svg/", alt="alt").img30.m-auto
            .col-lg
              p.mb-0 La entrada conocida se debe determinar con unas precondiciones establecidas en el documento, el cual se desarrollará probando una poscondición de la salida esperada. En lo referente a la caracterización de casos de prueba tenga en cuenta los siguientes aspectos:

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Ejecución de la prueba")
            .col-12
              p.mb-0 Referenciando las circunstancias de la aplicación o programa es necesario ejecutar la prueba, observar y documentar el desarrollo de la prueba junto con los resultados.

          .row(numero="2" titulo="Evaluación de resultados")
            .col-12
              p.mb-0 Seguidamente, se pasará a otros expertos quienes evaluarán los resultados y son ellos los que determinan si los resultados que arroja dicha prueba son correctos o no.

          .row(numero="3" titulo="Formulación de las pruebas")
            .col-12
              p.mb-0 Es así como se formulan las pruebas de acuerdo con el número de productos o servicios que se van implementando en el programa desarrollado.

          .row(numero="4" titulo="Ciclos de pruebas")
            .col-12
              p.mb-0 Luego de ejecutar la primera prueba se toma como línea base para el desarrollo consecutivo de los ciclos de las pruebas.          
      .col-lg-4.col-8
        figure
          img(src="@/assets/curso/temas/t1/t1_02.svg", alt="alt")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/t1/t1_03.png", alt="alt")
      .col-lg-8
        .row.mb-4(data-aos="fade-right")
          .col-auto
            .cstmH3
              h3.mb-0 Técnicas de diseño de casos de prueba

        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/rectangle_02.svg/", alt="alt").img30.m-auto              
          .col-lg 
            p.mb-0 Las fases de prueba son muy importantes en el desarrollo del #[ em software]. Las pruebas ayudan a determinar la calidad del producto, también lo modifican y actualizan para la facilidad y uso del usuario final.

          p Los casos de prueba son bloques construidos, fundamentales para combinarlos y lograr conformar la fase de prueba.

          p.mb-0 Algunos puntos que debe tener presente sobre las técnicas de diseño de casos de prueba son:

    .crd.bg_slider_01.brd--rad_02.px-4.py-2.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="01")
              h4 ¿Qué es un caso de prueba?
              p.mb-0 Un caso de prueba es el conjunto definido y preciso de instrucciones que agrupan el paso a paso para determinar si un producto final, aplicación o programa refleja o no el resultado esperado.       
          .col-lg-4.col-8
            figure
              img(src='@/assets/curso/temas/t1/t1_04.svg', alt='').img180.m-auto

        .row.justify-content-center.align-items-center.pt-5
          .col-lg-4.col-8.order-2.order-lg-1.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t1/t1_05.svg', alt='').img180.m-auto

          .col-lg-7.order-1.order-lg-2.ps-5.ps-lg-2.position-relative
            .cont.ps-4
              .numb(data-number="02")
              h4 Instrucciones integrales
              p Esta serie de instrucciones incluyen algunos conjuntos predefinidos de entradas y condiciones paralelas, junto a los pertinentes resultados finales.

        .row.justify-content-center.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="03")
              h4 Cantidad requerida de casos de prueba
              p.mb-0 De igual modo, las pruebas pueden terminar siendo demasiados casos de pruebas.      
          .col-lg-4.col-8
            figure
              img(src='@/assets/curso/temas/t1/t1_06.svg', alt='').img180.m-auto

        .row.justify-content-center.align-items-center.pt-5
          .col-lg-4.col-8.order-2.order-lg-1.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t1/t1_07.svg', alt='').img180.m-auto

          .col-lg-7.order-1.order-lg-2.ps-5.ps-lg-2.position-relative
            .cont.ps-4
              .numb(data-number="04")
              h4 Requerimientos del cliente o usuario
              p Para tratar de evitarlos se deben basar en las mejores técnicas de diseño de casos de prueba, dependiendo también de los requerimientos del cliente o usuario, para lograr reducir y ajustar el número apropiado en los casos de las pruebas.

        .row.justify-content-center.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
            .cont
              .numb(data-number="05")
              h4 Efectividad de los casos de prueba
              p.mb-0 Las técnicas que se utilicen en los casos de prueba ayudan a orientar la elaboración de casos efectivos, con muy buenas características que direccionen a determinar la calidad y el valor del producto de #[ em software].     
          .col-lg-4.col-8
            figure
              img(src='@/assets/curso/temas/t1/t1_08.svg', alt='').img180.m-auto

    .cajon.cjn--yellow.p-4.mb-5(data-aos="zoom-in")
      p.mb-0 Analice la figura que se muestra enseguida y afiance sus conocimientos sobre el diseño de casos de prueba. Tenga en cuenta los elementos más destacados que allí se mencionan y lleve registro de ello en su libreta personal de apuntes.

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Diseño de los casos de pruebas   

    figure.mb-5
      img(src='@/assets/curso/temas/t1/t1_09.svg', alt='')

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Al seleccionar el mejor diseño de caso de pruebas, debe coincidir totalmente con los requisitos que conduzcan a unas pruebas efectivas y de entrega sin errores en la aplicación. Sin duda los resultados reflejarán un producto de muy buena calidad y mejorará la experiencia del usuario final.

    p.mb-5 Otros tipos de técnicas de pruebas son:

    .row.justify-content-center.mb-4
      .col-lg-3.col-10.mb-4.mb-lg-0(data-aos="flip-left")
        .bg--blue.brd--rad_01
          .row
            .col-auto
              .bg--white02.p-2
                figure                
                  img(src="@/assets/curso/recursos/avatar.svg", alt="alt").img45
            .col.hor--negMargin        
              p.ver-align.text-center.text-white.strong.mb-0 Prueba de humo vs Prueba de cordura

      .col-lg-3.col-10.mb-4.mb-lg-0(data-aos="flip-left")
        .bg--orange.brd--rad_01
          .row
            .col-auto
              .bg--white02.p-2
                figure                              
                  img(src="@/assets/curso/recursos/avatar.svg", alt="alt").img45
            .col.hor--negMargin        
              p.ver-align.text-center.strong.mb-0 Prueba de selenio

      .col-lg-3.col-10.mb-4.mb-lg-0(data-aos="flip-left")
        .bg--blue.brd--rad_01
          .row
            .col-auto
              .bg--white02.p-2
                figure                               
                  img(src="@/assets/curso/recursos/avatar.svg", alt="alt").img45
            .col.hor--negMargin        
              p.ver-align.text-center.text-white.strong.mb-0 Prueba de caja blanca

      .col-lg-3.col-10.mb-4.mb-lg-0(data-aos="flip-left")
        .bg--orange.brd--rad_01
          .row
            .col-auto
              .bg--white02.p-2
                figure                
                  img(src="@/assets/curso/recursos/avatar.svg", alt="alt").img45
            .col.hor--negMargin        
              p.ver-align.text-center.strong.mb-0 Prueba de caja gris   


                                                           
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
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
