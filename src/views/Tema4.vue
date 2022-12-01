<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Construcción de #[em test] unitarios 

    figure(data-aos="zoom-in")
      img(src="@/assets/curso/temas/t4/t4_01.png", alt="alt")
    .row.justify-content-center.top--negMargin(data-aos="fade").mb-5
      .col-lg-10
        .crd.bg--gray.shadow.brd--rad_01.p-4
          p.mb-0 Para lograr determinar la calidad y la funcionalidad de la aplicación se deben diseñar uno o varios casos de prueba donde se integren todas las características posibles, trabajando conjuntamente con el equipo de desarrollo, para así lograr hacer las entregas a tiempo al usuario, velando por su continua funcionalidad y prestación del servicio de #[em software].     

    .fullbg.bg--gray.p-4.mb-4      
      .row.mb-4(data-aos="fade-right")
        .col-auto
          .cstmH3
            h3.mb-0 Pruebas unitarias de #[em software]

      .row.justify-content-center
        .col-lg-4(data-aos="zoom-in")   
          figure
            img(src="@/assets/curso/temas/t4/t4_02.png", alt="alt") 
        .col-lg-8(data-aos="fade-left")
          p Este tipo de pruebas son también conocidas como #[em unit testing] o test unitarios. Se describen como el mecanismo de la comprobación del funcionamiento de las unidades de menor tamaño de una aplicación.   

          .row.align-items-center.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/rectangle_00.svg/", alt="alt").img30.m-auto              
            .col-lg 
              p.mb-0 Se trata, en definitiva, de trozos de código diseñado para la comprobación de que el código del programa funciona como se espera, según los requerimientos y la funcionalidad del sistema solicitado por el cliente. 
          
          .cajon.cjn--yellow.p-4.mb-5(data-aos="zoom-in")
            p.mb-0 #[strong Estos tipos de pruebas son importantes para la detección de errores por fases del desarrollo.]

    p(data-aos="fade-left").mb-4 En cuanto a las pruebas unitarias tenga en cuenta aspectos como los que se mencionan a continuación:

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Uso")
            .col-12
              p.mb-0 Las pruebas unitarias se utilizan para comprobar que los métodos referenciados en el código funcionan de manera correcta.

          .row(numero="2" titulo="Testeo")
            .col-12
              p.mb-0 En ellas se prueban las regresiones o se realizan las pruebas relacionadas o de humo.

          .row(numero="3" titulo="Orden")
            .col-12
              p.mb-0 Se debe recordar que las pruebas en orden se utilizan para desarrollar otros casos de prueba en un orden determinado.

          .row(numero="4" titulo="Método")
            .col-12
              p.mb-0 Las pruebas unitarias se utilizan una vez se ha terminado un código y la idea es empezar a probar uno a uno los métodos o clases de aplicación.

      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_03.png", alt="alt") 

    .cajon.cjn--yellow.p-4.mb-4(data-aos="zoom-in")
      p.mb-0 Las pruebas unitarias se caracterizan porque se logran ejecutar si necesidad de la intervención manual. De igual modo, esta característica posibilita la automatización de su ejecución. Este tipo de pruebas se pueden repetir gran cantidad de veces. Por tal motivo, la rapidez de las pruebas es clave. 

    p(data-aos="fade-left").mb-4 Otros factores que sobre las pruebas unitarias se deben tener presentes son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.order-2.order-lg-1(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_04.svg", alt="alt") 

      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        ul.fa-ul.strong
          li
            i.fas.fa-check-circle.txt--mint.me-2
            | Las pruebas pueden cubrir casi la totalidad del código del programa desarrollado. 
          .hr_line
          li
            i.fas.fa-check-circle.txt--mint.me-2
            | Es una prueba excelente debido a su gran cobertura en el código.
          .hr_line
          li
            i.fas.fa-check-circle.txt--mint.me-2
            | Las pruebas unitarias se deben poder ejecutar de manera independiente del estado al entorno de desarrollo.
          .hr_line
          li
            i.fas.fa-check-circle.txt--mint.me-2
            | Se deben lograr ejecutar en cualquier ordenador del equipo de desarrollo.
          .hr_line
          li
            i.fas.fa-check-circle.txt--mint.me-2
            | Al ejecutar este tipo de prueba, su ejecución no puede afectar la de otra prueba.
          .hr_line
          li
            i.fas.fa-check-circle.txt--mint.me-2
            | Luego de la ejecución de la prueba, el entorno del desarrollo debe quedar igual que al inicio.
          .hr_line
          li
            i.fas.fa-check-circle.txt--mint.me-2
            | Las relaciones entre los módulos deben ser simuladas para que no dependan de otros módulos.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="flip-left")
        .crd.crd--avatarH.clr--01
          .row
            .col-auto
              figure
                img(src="@/assets/curso/recursos/avatar_01.svg", alt="alt").img75
            .col
              p.v-align.mb-0 Se debe conocer con claridad y exactitud el objetivo de la prueba. El desarrollador debe estar enterado del objetivo de la prueba para comprender la calidad del producto o de la aplicación.
              
      .col-lg-6.mb-4.mb-lg-0
        .crd.crd--avatarH.clr--02(data-aos="flip-left")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/recursos/avatar_02.svg", alt="alt").img75
            .col
              p.v-align.mb-0 A medida que se avanza en la prueba se obtiene más experiencia en la aplicación junto al equipo de desarrollo para optimizar tiempos de entrega y calidad del programa.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4/t4_05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La implementación de pruebas unitarias dentro de un equipo de desarrollo implica también una gran inversión de capacitación. En las primeras ejecuciones de las pruebas unitarias se tardará más tiempo en lograr ejecutarlas bien, ya que implica la familiarización de las herramientas con las cuales se ejecutan dichas pruebas. #[strong Analice el siguiente esquema y conozca más sobre los tipos de pruebas unitarias:]

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/t4/t4_06.svg', alt='')

    p(data-aos="fade-left").mb-5 Para finalizar, el siguiente video muestra un ejemplo rápido de prueba unitaria. Obsérvelo con atención y asimile los pasos para su creación: 

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/JtjLG40i-LI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      


</template>

<script>
export default {
  name: 'Tema4',
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
