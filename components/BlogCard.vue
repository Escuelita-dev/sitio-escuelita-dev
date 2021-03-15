<template>
    <div class="col-lg-4 col-md-6 col-sm-12 news-block my-4">
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
</template>

<script>
import moment from "moment"
import { getStrapiMedia } from '../utils/medias'

export default {    
    props: {
        noticia: {
            type: Object,
            required: true
        }
    },
    methods: {
        getStrapiMedia,
        moment
    }
}
</script>