<template>
    <div>
        <section class="page-title centred" style="background-image: url(/images/fondo-amarillo-escuelita-dev.jpg);">
            <div class="container">
                <div class="content-box">
                    <h1>Acerca de Escuelita.dev</h1>
                    <ul class="bread-crumb clearfix">
                        <li>
                            <NuxtLink to="/">Inicio</NuxtLink>                            
                        </li>
                        <li>Acerca de Escuelita.dev</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="about-section style-two">
        <div class="anim-icon">
            <div class="icon icon-1 float-bob-x"></div>
            <div class="icon icon-3"></div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div class="content-box">
                        <div class="sec-title style-two">
                            <h5>Acerca de Escuelita.dev</h5>
                            <h1>{{ acerca.Titulo }}</h1>
                        </div>
                        <div class="bold-text" v-html="$md.render(acerca.Contenido)"></div>
                        <!-- <div class="btn-box"><a href="contact.html" class="theme-btn">Contact us</a></div> -->
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div class="image-box wow fadeInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInRight;">
                        <figure class="image image-1"><img src="images/resource/niña-programando.jpg" alt=""></figure>
                        <figure class="image image-2"><img src="images/resource/nino-programando-2.jpg" alt=""></figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
  async asyncData ({ $strapi }) {
    return { 
        acerca: await $strapi.find('home-acerca-de'),
    }
  },    
}
</script>