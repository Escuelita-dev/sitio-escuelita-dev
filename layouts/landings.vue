<template>
  <span>
    <header class="main-header d-none d-md-block">      
      <div class="header-bottom">
        <div class="container">
          <div class="clearfix">
            <div class="logo-box pull-left">
              <figure class="logo"><a href="/"><img src="/images/logo-escuelita.png" alt="Escuelita.dev - Tu Escuela de Programacion - Cursos de Programacion para Niños"></a></figure>
            </div>
          </div>
        </div>
      </div>
        <!--Sticky Header-->
        <div class="sticky-header">
          <div class="container clearfix">
            <figure class="logo-box"><a href="/"><img src="/images/logo-escuelita-horizontal.png" alt=""></a></figure>
          </div>
        </div><!-- sticky-header end -->
    </header>     


    <Nuxt />

    <span class="d-none d-md-block">
      <Footer />
    </span>
  </span>
</template>

<style>
</style>

<script>
export default {
  data: function () {
    return {
      mostrar: false
    }
  }
}
</script>