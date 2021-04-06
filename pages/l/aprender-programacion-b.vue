<template>
    <div>
        <section class="page-title centred d-none d-md-block" style="background-image: url(/images/landings/fondo-mucha-pantalla.jpg);">
            <div class="container">
                <div class="content-box">
                    <h1>¿Tus hijos usan mucho las pantallas?</h1>
                </div>
            </div>
        </section>
        <section class="landing-section">
            <!-- <div class="anim-icon">
                <div class="icon icon-1 float-bob-x"></div>
                <div class="icon icon-3"></div>
            </div> -->
            <div class="container d-none d-md-block">
                <div class="row rounded" style="background-color: #dcf7ff;">
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column p-5" >
                        <div class="content-box">
                            <div class="sec-title style-two">
                                <h1>En tus tiempos no era así</h1>
                            </div>
                            <div class="bold-text">Probablemente en tu niñez jugabas en la calle, salías con tus amigos, y tus padres ni sabían de tí hasta que terminaba el día.</div>
                            <div class="bold-text">Hacías muchas más actividades al aire libre y pasabas muchísimo menos tiempo frente a una pantalla.</div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column p-5">
                        <div class="content-box">
                            <div class="sec-title style-two">
                                <h1>Pero los tiempos cambian</h1>
                            </div>
                            <div class="bold-text">Y reconoces que el mundo en el que se desarrollan tus hijos no es el mundo en el que tú creciste.</div>                            
                            <div class="bold-text">Dominar la tecnología es MUY importante para el futuro de tus hijos y ellos tienen las facilidades que los adultos no tenemos para hacerlo.</div>
                            <div class="bold-text"><strong>¿Por qué no utilizarlo en su favor?</strong></div>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
        <section class="landing-section cta-section">
            <div class="anim-icon"> 
                <div class="icon icon-1 float-bob-x"></div>
                <div class="icon icon-3"></div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content-box" style="color: #fff">
                            <div class="sec-title style-two d-none d-md-block">
                                <h1>Te proponemos verlo de otra manera</h1>
                            </div>
                            <img src="/images/landings/mucha-pantalla-cuadrado.png" class="d-block d-md-none my-2"/>
                            <div class="bold-text">La pasión de los niños por la tecnología puede utilizarse en su favor.</div>
                            <div class="bold-text">En el futuro de tus hijos, la tecnología va a jugar un rol fundamental</div>
                            <div class="bold-text">¿Por qué no apoyarlos para que la dominen y usen de forma constructiva desde ahora?</div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content-box text-center">
                            <img src="/images/landings/nino-programando-2.jpg"/>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
        <section class="landing-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 content-column">
                        <div class="content-box">
                            <div class="sec-title style-two">
                                <h1>¿Quiénes somos?</h1>
                            </div>
                            <div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/533364367?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
        <section class="landing-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 content-column">
                        <div class="content-box">
                            <div class="sec-title style-two">
                                <h1>¿Cómo podemos ayudarte?</h1>
                            </div>
                            <div class="bold-text">Escuelita.dev ayuda a los niños y jóvenes a aprender uno de los pilares principales del desarrollo tecnológico de hoy día: el arte de la Programación de Computadoras.</div>
                            <div class="bold-text">Los cursos no tienen costo y están iniciando todo el año. ¡Entérate más abajo!</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
                    <h5>Aquí comienza la aventura</h5>
                    <h1>Elige el Curso más adecuado de acuerdo a la edad</h1>
                </div>
                <div class="row">
                <CourseCard v-for="curso in cursos" :key="curso.id" :curso="curso"/>
                </div>
            </div>
        </section>  

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
                    <h1>¿Tienes dudas?</h1>
                    <div class="text">Entra en contacto con nosotros</div>
                    <div class="btn-box" x-data>
                        <NuxtLink to="/contacto" class="typeform-share button theme-btn" style="display:inline-block;text-decoration:none;background-color:#FF7162;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:0px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" target="_blank">CONTACTAR</NuxtLink>
                    </div>
                </div>
            </div>
        </section>              
        <footer class="main-footer">
            <div class="footer-bottom d-block d-md-none">
                <div class="container">
                    <div class="inner-container clearfix">
                        <div class="right-content pull-right">
                            <figure class="footer-logo"><img src="/images/logo-escuelita.png" alt=""></figure>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import conf from '../../utils/conf'
import { getStrapiMedia } from '../../utils/medias'

export default {
    layout: 'landings',
    data: function () {
        return {
            cdnUri: conf.strapiBaseUri,
            swiperOptions: {
                slidesPerView: 5,
                spaceBetween: 50,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                    },
                    768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                    },
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    }
                }
            }
        }
    },
    async asyncData ({ $strapi }) {
        return { 
            cursos: await $strapi.find("cursos"),
        }
    },
    mounted() {
        this.$amplitude.logEvent('Ve Landing', {'landing': '/l/aprender-programacion/'});
    },
    methods: {
        getStrapiMedia,
    }
}
</script>

<style scoped>
    .landing-section {
        position: relative;
        display: block;
        margin: 80px 0px 80px 0px;
    }
    .anim-icon .icon-1 {
        background: url(/images/icons/anim-icon-9.png);
        width: 158px;
        height: 115px;
        top: -45px;
        left: 180px;
        background-repeat: no-repeat;
    }

    .bold-text {
        font-size: 20px!important;
        margin-bottom: 20px;
    }
    .image-box{
        position: relative;
        display: block;
        margin: 6px 30px 0px 140px;
    }

    .image-box:before{
        position: absolute;
        content: '';
        background: #dcf7ff;
        width: 215px;
        height: 215px;
        border-radius: 50%;
        left: -135px;
        top: 105px;
        -webkit-animation: zoom-fade 5s infinite linear;
        animation: zoom-fade 5s infinite linear;
    }

    .image-box .image{
        position: relative;
        display: block;
        box-shadow: 0 30px 50px rgba(8,13,62,.15);
    }

    .image-box .image img{
        width: 100%;
    }
    .swiper {
        margin-top:80px;
        margin-bottom:80px;
    }
</style>