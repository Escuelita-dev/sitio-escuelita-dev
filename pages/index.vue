<template>
  <div>
    <section class="style-two">
        <div style="background-image:url(/images/fondo-head-home-escuelita-escuela-programacion-niños.jpg)">
            <div class="container py-5">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="video-container">
                        <iframe src="https://www.youtube-nocookie.com/embed/hohvxKYaFUY?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
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
                <h1>Cursos de Programación<br />para Niños y Jóvenes</h1>
            </div>
            <div class="row">
              <CourseCard v-for="curso in cursos" :key="curso.id" :curso="curso"/>
            </div>
        </div>
    </section>
    <!-- classes-section end -->     

    <!-- news-section -->
    <section class="news-section" v-if="noticias.length > 0">
        <div class="anim-icon">
            <div class="icon icon-2 wow zoomIn" data-wow-delay="00ms" data-wow-duration="1500ms"></div>
        </div>
        <div class="container">
            <div class="row">
                <BlogCard v-for="(noticia, index) in noticias" :key="index" :noticia="noticia"/>
            </div>
        </div>
    </section>
    <!-- news-section end -->   

  

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
                    <NuxtLink to="/contacto" class="typeform-share button theme-btn" style="display:inline-block;text-decoration:none;background-color:#FF7162;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:0px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" target="_blank">CONTACTAR</NuxtLink>
                </div>
            </div>
        </div>
    </section>
    <!-- cta-section end -->    

    <!-- about-section -->
    <a name="acerca"></a>
    <section class="about-section">
        <div class="anim-icon">
            <div class="icon icon-2 wow zoomIn animated"></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 image-column">
              <div class="image-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <figure class="image image-1"><img src="/images/resource/niña-programando.jpg" alt=""></figure>
                <figure class="image image-2 d-md-none"><img src="/images/resource/nino-programando-2.jpg" alt=""></figure>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
              <div class="content-box">
                <div class="sec-title style-two">
                    <h5>Acerca de Escuelita.dev</h5>
                    <h1>{{ acerca.Titulo }}</h1>
                </div>
                <div class="bold-text" v-html="$md.render(acerca.Contenido.substring(0, 225))"></div>
                <div class="btn-box"><NuxtLink to="acerca" class="theme-btn">Saber más</NuxtLink></div>

              </div>
            </div>
          </div>
        </div>
    </section>
    <!-- about-section end -->    
    
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
                <div v-for="persona in personas" :key="persona.uid" class="col-xl-4 col-lg-6 col-md-6 block-column">
                    <div class="teachers-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <div class="image-holder">
                                <figure class="image-box"><a href="#"><img :src="cdnUri + persona.foto.formats.thumbnail.url" :alt="persona.nombre"></a></figure>
                            </div>
                            <div class="lower-content">
                                <h3><a href="#">{{ persona.nombre }}</a></h3>
                                <span class="designation">{{ persona.rol }}</span>
                                <ul class="social-list">
                                    <li><a :href="persona.linkedin" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a></li>
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
import conf from '../utils/conf'
import moment from "moment"
import { getStrapiMedia } from '../utils/medias'

export default {
  data: function () {
    return {
      cdnUri: conf.strapiBaseUri
    }
  },
  async asyncData ({ $strapi }) {
    return { 
        personas: await $strapi.find("profesors"),
        cursos: await $strapi.find("cursos"),
        acerca: await $strapi.find('home-acerca-de'),
        noticias: await $strapi.find('notas', {_limit: 4, _sort: 'fechaNoticia:desc'})
    }
  },
  methods: {
      getStrapiMedia,
      moment      
  }
}
</script>
