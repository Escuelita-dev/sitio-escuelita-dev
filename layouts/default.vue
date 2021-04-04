<template>
  <span>
    <a style="position:absolute; top:0; right:0; z-index:2000" href="https://github.com/Escuelita-dev/sitio-escuelita-dev"><img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"></a>    
    <!-- .preloader -->
    <!-- <div class="preloader"></div> -->
    <!-- /.preloader -->    
    <header class="main-header">
      <div class="header-top">
        <div class="container">
          <div class="inner-container clearfix">
            <div class="social-links pull-left">
              <ul class="social-list">    
                  <li><a href="https://www.instagram.com/escuelita.dev/"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="https://www.linkedin.com/company/escuelita-dev/"><i class="fab fa-linkedin"></i></a></li>                  
              </ul>
          </div>
          <div class="header-info pull-right">
              <ul class="info-list">    
                <li>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:hola@escuelita.dev">hola@escuelita.dev</a>
                </li>
                <li>
                    <i class="fas fa-user"></i>
                    <a href="#">Ingreso Alumnos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="container">
          <div class="clearfix">
            <div class="logo-box pull-left">
              <figure class="logo"><a href="/"><img src="/images/logo-escuelita.png" alt="Escuelita.dev - Tu Escuela de Programacion - Cursos de Programacion para Niños"></a></figure>
            </div>
            <div class="nav-outer pull-right clearfix">
              <div class="menu-area">
                <nav class="main-menu navbar-expand-lg">
                  <div class="navbar-header">
                  <!-- Toggle Button -->      
                    <button type="button" class="navbar-toggle" @click="mostrar = !mostrar">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>
                  <div :class="{'navbar-collapse': true, 'collapse': true, 'clearfix': true, 'show': mostrar}">
                    <ul class="navigation clearfix">
                      <li>
                        <NuxtLink to="/">Inicio</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/cursos">Cursos</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/blog">Blog</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/preguntas-frecuentes">Preguntas</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/acerca">Acerca</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/contacto">Contacto</NuxtLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
        <!--Sticky Header-->
        <div class="sticky-header">
          <div class="container clearfix">
            <figure class="logo-box"><a href="/"><img src="/images/logo-escuelita-horizontal.png" alt=""></a></figure>
            <div class="menu-area">
              <nav class="main-menu navbar-expand-lg">
                <div class="navbar-header">
                  <!-- Toggle Button -->      
                  <button type="button" class="navbar-toggle" @click="mostrar = !mostrar">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  </button>
                </div>
                <div :class="{'navbar-collapse': true, 'collapse': true, 'clearfix': true, 'show': mostrar}">
                  <ul class="navigation clearfix">
                      <li><NuxtLink to="/">Inicio</NuxtLink></li>
                      <li><NuxtLink to="/cursos">Cursos</NuxtLink></li>
                      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                      <li><NuxtLink to="/acerca">Acerca</NuxtLink></li>
                      <li><NuxtLink to="/preguntas-frecuentes">Preguntas</NuxtLink></li>
                      <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>                                        
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div><!-- sticky-header end -->
    </header>      
    
    <Nuxt />

    <Footer />
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