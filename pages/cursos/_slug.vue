<template>
    <div>
        <FormInteresado ref="formInteresado" :curso="curso"/>
        <!--Page Title-->
        <section class="page-title centred" :style="'background-image: url('+ getStrapiMedia(curso.imagen_cabezal.url) +');'">
            <div class="position-absolute w-100 h-100 opacity-4 bg-dark"></div>
            <div class="content-box">
                <div class="row">
                    <div clasS="col-md-4">
                        <img class="rounded" :src="getStrapiMedia(curso.imagen_tarjeta.url)" :alt="curso.nombre">
                    </div>
                    <div class="col-md-8 text-md-left">
                        <h1>{{ curso.nombre }}</h1>
                    </div>                    
                </div>
                <ul class="bread-crumb clearfix">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/cursos">Cursos</a></li>
                </ul>
            </div>
        </section>
        <!--End Page Title-->

        <!-- class-details -->
        <section class="class-details">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div class="class-details-content">
                            <div class="inner-box">
                                <div class="upper-content">
                                    <div class="sec-title style-two">
                                        <h5>En este curso</h5>
                                        <h1>{{ curso.subtitulo }}</h1>
                                    </div>
                                    <div class="bold-text">{{ curso.descripcion_breve }}</div>
                                    <div class="info-box">
                                        <ul class="clearfix">
                                            <li>
                                                <figure class="thumb-box"><img :src="getStrapiMedia(curso.profesor.foto.formats.thumbnail.url)" :alt="curso.profesor.nombre"></figure>
                                                <h6>Docente</h6>
                                                <h5>{{ curso.profesor.nombre }}</h5>
                                            </li>
                                            <li>
                                                <h6>Costo</h6>
                                                <h5>SIN COSTO</h5>
                                            </li>
                                            <li class="btn-box">
                                                <b-button :class="'theme-btn'" style="font-size:22px" @click="abrirForm">HACER INSCRIPCIÓN</b-button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="lower-content">
                                    <div class="bold-text" v-html="$md.render(curso.descripcion_larga)">
                                    </div>
                                    <div v-if="!!curso.Temario && !!curso.Temario.Modulo.length">
                                        <Temario :temario="curso.Temario"/>
                                    </div>                                    
                                </div>
                                    <div class="info-box">
                                        <ul class="clearfix">
                                            <li>
                                                <figure class="thumb-box"><img :src="getStrapiMedia(curso.profesor.foto.formats.thumbnail.url)" :alt="curso.profesor.nombre"></figure>
                                                <h6>Docente</h6>
                                                <h5>{{ curso.profesor.nombre }}</h5>
                                            </li>
                                            <li>
                                                <h6>Costo</h6>
                                                <h5>SIN COSTO</h5>
                                            </li>
                                            <li class="btn-box">
                                                <b-button :class="'theme-btn'" style="font-size:22px" @click="abrirForm">HACER INSCRIPCIÓN</b-button>
                                            </li>
                                        </ul>
                                    </div>                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div class="class-details-sidebar">
                            <div class="inner-box">
                                <ul class="info-list">
                                    <li>
                                        <h5>Costo</h5>
                                        <span>Gratuito</span>
                                    </li>
                                    <li>
                                        <h5>Modalidad:</h5>
                                        <span>Por Videoconferencia (Zoom)</span>
                                    </li>
                                    <li>
                                        <h5>Edades:</h5>
                                        <span>{{ curso.edades }}</span>
                                    </li>
                                    <li>
                                        <h5>Tamaño del grupo:</h5>
                                        <span>{{ curso.cupo_estudiantes }} estudiantes</span>
                                    </li>
                                    <li>
                                        <h5>Cantidad de encuentros:</h5>
                                        <span>{{ curso.duracion }}</span>
                                    </li>
                                    <li>
                                        <h5>Comienzo:</h5>
                                        <span>{{ curso.tiene_comienzo ? curso.fecha_comienzo : 'PROXIMAMENTE' }}</span>
                                    </li>                                
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- class-details end -->            
    </div>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias'

export default {
    layout: 'internoSinCabezal',
    async asyncData ({ params, $strapi }) {
        const cursos = await $strapi.find("cursos", {
            slug: params.slug,
        });
        return {
            curso: cursos[0]
        };
    },
    methods: {
        getStrapiMedia,
        abrirForm: function() {
            this.$refs['formInteresado'].abrir();
        }
    }
  }
</script>