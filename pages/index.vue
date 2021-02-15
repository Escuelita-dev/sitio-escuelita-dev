<template>
  <div>
    <section class="style-two">
        <div style="background-image:url(/images/main-slider/slider-paisaje-escuelita.jpg)">
            <div class="container py-5">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="video-container">                
                        <iframe src="https://www.youtube-nocookie.com/embed/hohvxKYaFUY?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>                    
                </div>
            </div>
        </div>
    </section>

    <!-- about-section -->
    <a name="acerca"></a>    
    <section class="about-section">
        <div class="anim-icon">
            <div class="icon icon-2 wow zoomIn animated"></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
              <div class="image-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <figure class="image image-1"><img src="/images/resource/niña-programando.jpg" alt=""></figure>
                <figure class="image image-2"><img src="/images/resource/nino-programando-2.jpg" alt=""></figure>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
              <div class="content-box">
                <div class="sec-title style-two">
                    <h5>Acerca de Escuelita.dev</h5>
                    <h1>Bienvenid@ a Escuelita.dev</h1>
                </div>
                <div class="bold-text">Somos una organización sin fines de lucro que ayuda a niños y jóvenes a aprender a Programar.</div>
                <div class="bold-text">Nuestra misión es ayudar a niños y jóvenes a aprender programación para que puedan ser más felices ahora y tener un mejor futuro.</div>
                <div class="bold-text">La programación ayuda a los chicos a aprender a trabajar en equipo, desarrollar habilidades sociales, a resolver problemas, y abre las puertas a una profesión.</div>
                <div class="bold-text">Por eso queremos que TODO niño y joven que quiera tenga la oportunidad de aprender Programación.</div>
                <div class="bold-text">Creemos en el juego como el principal motor para el aprendizaje, y por eso en nuestros cursos lo niños aprenden mientras crean los proyectos que les apasionan.</div>
                <div class="bold-text">En este momento estamos dictando cursos gratuitos de programación en vivo a niños, niñas y jóvenes de toda Latinoamérica.</div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <!-- about-section end -->    

    <!-- classes-section -->
    <a name="cursos"></a>
    <section class="classes-section style-two sec-pad">
        <div class="parallax-scene parallax-scene-1 parallax-icon">
            <span data-depth="0.40" class="parallax-layer icon icon-1"></span>
            <span data-depth="0.50" class="parallax-layer icon icon-2"></span>
            <span data-depth="0.30" class="parallax-layer icon icon-3"></span>
            <span data-depth="0.40" class="parallax-layer icon icon-4"></span>
            <span data-depth="0.50" class="parallax-layer icon icon-5"></span>
            <span data-depth="0.30" class="parallax-layer icon icon-6"></span>
            <span data-depth="0.40" class="parallax-layer icon icon-7"></span>
        </div>
        <div class="container">
            <div class="sec-title centred">
                <h5>Cursos Comenzando Pronto</h5>
                <h1>Cursos de Programación<br />para Niños y Jóvenes</h1>
            </div>
            <div class="row">
                @include('_partials.card-programacion-ninos-scratch')

                @include('_partials.card-app-inventor')

                @include('_partials.card-python')                

            </div>
        </div>
    </section>
    <!-- classes-section end -->    
    <!-- cta-section -->
    <a name="contact"></a>
    <section class="cta-section centred">
        <div class="parallax-scene parallax-scene-3 parallax-icon">
            <span data-depth="0.40" class="parallax-layer icon icon-1"></span>
            <span data-depth="0.50" class="parallax-layer icon icon-2"></span>
            <span data-depth="0.30" class="parallax-layer icon icon-3"></span>
            <span data-depth="0.40" class="parallax-layer icon icon-4"></span>
            <span data-depth="0.50" class="parallax-layer icon icon-5"></span>
            <span data-depth="0.30" class="parallax-layer icon icon-6"></span>
            <span data-depth="0.40" class="parallax-layer icon icon-7"></span>
        </div>
        <div class="anim-icon">
            <div class="icon icon-1 float-bob-x"></div>
            <div class="icon icon-2 rotate-me"></div>
        </div>
        <div class="container">
            <div class="content-box">
                <h3>Escríbenos</h3>
                <h1>¿Quieres inscribir a tu hijo en uno de nuestros cursos?</h1>
                <div class="text">Entra en contacto con nosotros</div>
                <div class="btn-box" x-data>
                    <a class="typeform-share button theme-btn" x-bind:href="addUtms('https://eprenda.typeform.com/to/ZEdhRIcn?curso=ninguno-es-form-contacto')" data-mode="drawer_right" style="display:inline-block;text-decoration:none;background-color:#FF7162;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:0px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" target="_blank">INSCRIBIRME</a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
                </div>
            </div>
        </div>
    </section>
    <!-- cta-section end -->    
    

    <!-- our-teachers -->
    <section class="our-teachers style-two sec-pad centred">
        <div class="parallax-scene parallax-scene-2 parallax-icon">
            <span data-depth="0.40" class="parallax-layer icon icon-1"></span>
            <span data-depth="0.50" class="parallax-layer icon icon-2"></span>
            <span data-depth="0.30" class="parallax-layer icon icon-3"></span>
            <span data-depth="0.40" class="parallax-layer icon icon-4"></span>
            <span data-depth="0.50" class="parallax-layer icon icon-5"></span>
            <span data-depth="0.30" class="parallax-layer icon icon-6"></span>
            <span data-depth="0.40" class="parallax-layer icon icon-7"></span>
        </div>
        <div class="container">
            <div class="sec-title">
                <h5>El Equipo</h5>
                <h1>El Equipo Fundador<br />de Escuelita.dev</h1>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-12 block-column">
                    <div class="teachers-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <div class="image-holder">
                                <figure class="image-box"><a href="#"><img src="/images/equipo/mauricio-etcheverry.jpg" alt="Mauricio Etcheverry"></a></figure>
                            </div>
                            <div class="lower-content">
                                <h3><a href="#">Mauricio Etcheverry</a></h3>
                                <span class="designation">Fundador</span>
                                <ul class="social-list">
                                    <li><a href="https://www.linkedin.com/in/mauricio-etcheverry/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a></li>
                                    <li><a href="https://twitter.com/maurietchev" target="_blank"><i class="fab fa-twitter fa-2x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-12 block-column">
                    <div class="teachers-block-one wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <div class="image-holder">
                                <figure class="image-box"><a href="#"><img src="/images/equipo/lucia-pardal.jpg" alt="Lucia Pardal"></a></figure>
                            </div>
                            <div class="lower-content">
                                <h3><a href="#">Lucía Pardal</a></h3>
                                <span class="designation">Coordinadora</span>
                            <ul class="social-list">
                                <li><a href="https://www.linkedin.com/in/luc%C3%ADapardal/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-12 block-column">
                    <div class="teachers-block-one wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <div class="image-holder">
                                <figure class="image-box"><a href="#"><img src="/images/equipo/brenda-torrez.jpg" alt="Brenda Torrez"></a></figure>
                            </div>
                            <div class="lower-content">
                                <h3><a href="#">Brenda Torrez</a></h3>
                                <span class="designation">Docente</span>
                                <ul class="social-list">
                                <li><a href="https://www.linkedin.com/in/brenda-torrez-758150119/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-12 block-column">
                    <div class="teachers-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <div class="image-holder">
                                <figure class="image-box"><a href="#"><img src="/images/equipo/ezequiel-guzman.jpeg" alt="Ezequiel Guzman"></a></figure>
                            </div>
                            <div class="lower-content">
                                <h3><a href="#">Ezequiel Guzman</a></h3>
                                <span class="designation">Colaborador</span>
                                <ul class="social-list">
                                    <li><a href="https://www.linkedin.com/in/ezequiel-guzman-52b056154/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </section>    
  </div>
  <!-- <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        sitio-escuelita-dev
      </h1>
      <div class="links">
        <ul>
          <li v-for="post in posts" :key="post.id">
            <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div> -->
</template>

<script>
  import { getPosts } from '../api/posts';

  export default {
    async asyncData () {
      const posts = await getPosts();
      return { posts: posts }
    }
  }
</script>
