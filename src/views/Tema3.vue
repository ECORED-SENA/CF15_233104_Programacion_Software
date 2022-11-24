<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipos de pruebas de software

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_01.svg", alt="alt")             
      .col-lg-8(data-aos="fade-left")
        p Es importante diferenciar los tipos de pruebas de software entre manuales y automatizadas. Las manuales se realizan en persona, se hace clic a través de la aplicación, interactuando con el software y las herramientas adecuadas para la prueba.

        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/rectangle_00.svg/", alt="alt").img30.m-auto
          .col-lg
            p.mb-0 En ocasiones suelen ser muy costosas, puesto que se requiere la configuración del entorno y su ejecución, y suelen estar propensas a errores, ya sea por error humano al omitir alguna funcionalidad o al añadir pasos erróneos de la prueba al ejecutarlo con la aplicación.

        .cajon.cjn--yellow.p-4(data-aos="zoom-in")
          p.mb-0 Por otro lado, las pruebas automatizadas se realizan a través de una aplicación, la cual ejecuta un script de la prueba, definido y diseñado con antelación. Este tipo de pruebas varían según el nivel de complejidad, desde los métodos más pequeños en el código hasta lograr probar los resultados generales en la interfaz.

    p(data-aos="fade-left").mb-4 En la siguiente figura se muestran los tipos de pruebas de software; lleve registro de estos en su libreta personal de apuntes:

    .row.justify-content-center(data-aos="zoom-in") 
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Diseño de los casos de pruebas 

        figure.mb-5
        img(src='@/assets/curso/temas/t3/t3_02.svg', alt='')
      

    


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

<style lang="sass"></style>
