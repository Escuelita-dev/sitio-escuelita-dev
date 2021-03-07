<template>
  <span>
    <!-- .preloader -->
    <div class="preloader"></div>
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
    <!-- main-footer -->
    <footer class="main-footer">
        <div class="footer-top">
            <div class="parallax-scene parallax-scene-4 parallax-icon">
                <span data-depth="0.40" class="parallax-layer icon icon-1"></span>
                <span data-depth="0.50" class="parallax-layer icon icon-2"></span>
                <span data-depth="0.30" class="parallax-layer icon icon-3"></span>
                <span data-depth="0.40" class="parallax-layer icon icon-4"></span>
                <span data-depth="0.50" class="parallax-layer icon icon-5"></span>
                <span data-depth="0.30" class="parallax-layer icon icon-6"></span>
                <span data-depth="0.40" class="parallax-layer icon icon-7"></span>
            </div>
            <div class="container">
                <div class="widget-section">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="about-widget footer-widget">
                                <h3 class="widget-title">¿Qué es Escuelita.dev?</h3>
                                <div class="widget-content">
                                    <div class="text">
                                        <p>Somos un emprendimiento sin fines de lucro.</p>
                                        <p>Nuestra misión es ayudar a niños y jóvenes a aprender programación para que puedan ser más felices ahora y tener un mejor futuro.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="link-widget footer-widget">
                                <h3 class="widget-title">Enlaces Útiles</h3>
                                <div class="widget-content">
                                    <ul>
                                      <li><NuxtLink to="/cursos">Cursos</NuxtLink></li>
                                      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                                      <li><NuxtLink to="/acerca">Acerca</NuxtLink></li>
                                      <li><NuxtLink to="/preguntas-frecuentes">Preguntas</NuxtLink></li>
                                      <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="contact-widget footer-widget">
                                <h3 class="widget-title">Ponte en Contacto</h3>
                                <div class="widget-content">
                                    <ul class="info-list">
                                         <li><i class="fas fa-home"></i>Tiburcio Gómez 1330 Piso 2, Montevideo, Uruguay</li>
                                        <li><i class="fas fa-envelope"></i><a href="mailto:info@example.com">hola@escuelita.dev</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="subscribe-widget footer-widget">
                                <h3 class="widget-title">Amigos de Escuelita.dev</h3>
                                <div class="widget-content">
                                    <div class="text">¿Quieres ser amigo de Escuelita.dev? Inscríbete y te tendremos al tanto de todas las novedades y cómo puedes colaborar.</div>
                                    <div class="subscribe-inner">
                                        <form action="https://dev.us2.list-manage.com/subscribe/post?u=e66e067f7aed1f417ebf8672b&amp;id=b2bdb8327d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="subscribe-form validate" target="_blank" novalidate>
                                            <div class="form-group">
                                                <input type="text" value="" name="FNAME" class="" id="mce-FNAME" placeholder="Escribe tu nombre">
                                                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Escribe tu email">

                                                <div id="mce-responses" class="clear">
                                                    <div class="response" id="mce-error-response" style="display:none"></div>
                                                    <div class="response" id="mce-success-response" style="display:none"></div>
                                                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e66e067f7aed1f417ebf8672b_b2bdb8327d" tabindex="-1" value=""></div>

                                                <button type="submit" class="theme-btn" id="mc-embedded-subscribe">Subscribirme!</button>

                                                
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="inner-container clearfix">
                    <div class="left-content pull-left">
                        <div class="copyright">Copyright &copy; <a href="#">Escuelita.dev</a> 2020. Todos los derechos reservados</div>
                    </div>
                    <div class="right-content pull-right">
                        <figure class="footer-logo"><a href="/"><img src="/images/logo-escuelita.png" alt=""></a></figure>
                        <ul class="social-style-one footer-social clearfix">
                            <li><a href="https://www.instagram.com/escuelita.dev/"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
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