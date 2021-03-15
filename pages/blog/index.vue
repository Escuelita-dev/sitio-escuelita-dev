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
                <BlogCard v-for="(noticia, index) in noticias" :key="index" :noticia="noticia"/>
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