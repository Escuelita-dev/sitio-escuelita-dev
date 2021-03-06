<template>
<div>
    <section class="page-title centred" style="background-image: url(/images/background/header-cursos-8.jpg);">
        <div class="container">
            <div class="content-box">
                <h1>Blog</h1>
                <ul class="bread-crumb clearfix">
                    <li>
                        <NuxtLink to="/">Inicio</NuxtLink></li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="news-section blog-page-section">
        <div class="container">
            <div class="row">
                <div v-for="(noticia, index) in noticias" :key="index" class="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div class="news-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <figure class="image-box">
                                <NuxtLink :to="{ name: 'blog-slug', params: { slug: noticia.slug } }">
                                    <img :src="getStrapiMedia(noticia.ImagenTarjeta.url)" :alt="noticia.titulo">
                                </NuxtLink>                                
                            </figure>
                            <div class="lower-content">
                                <h3><NuxtLink :to="{ name: 'blog-slug', params: { slug: noticia.slug } }">{{ noticia.titulo }}</NuxtLink></h3>
                                <ul class="info-box">
                                    <li>{{ moment(noticia.published_at).format("DD MMM YYYY") }}</li>
                                </ul>
                                <!-- <div class="text">Lorem ipsum dolor sit amet, consectetur pisicelit sed do eiusmod tempor incidie labore magna aliqua.</div> -->
                                <div class="link-btn">
                                    <NuxtLink :to="{ name: 'blog-slug', params: { slug: noticia.slug } }"><i class="flaticon-next"></i></NuxtLink>
                                </div>
                                <div class="more-btn"><NuxtLink :to="{ name: 'blog-slug', params: { slug: noticia.slug } }" class="theme-btn">Leer</NuxtLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</div>
</template>

<script>
import moment from "moment"
import { getStrapiMedia } from '../../utils/medias'

export default {
    async asyncData ({ $strapi }) {
        return { 
            personas: await $strapi.find("profesors"),
            cursos: await $strapi.find("cursos"),
            acerca: await $strapi.find('home-acerca-de'),
            noticias: await $strapi.find('notas', {_sort: 'published_at:desc'})
        }
    },
    methods: {
        getStrapiMedia,
        moment
    }
}
</script>