<template>
<div class="col-lg-4 col-md-6 col-sm-12 block-column">
    <div class="inner-block wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
        <figure class="image-box">
            <NuxtLink :to="{ name: 'cursos-slug', params: { slug: curso.slug } }">
                <img :src="cdnUri + curso.imagen_tarjeta.url" :alt="curso.nombre">
            </NuxtLink>
        </figure>
        <div class="lower-content">
            <div class="link-btn">            
                <NuxtLink :to="{ name: 'cursos-slug', params: { slug: curso.slug } }">
                    <i class="flaticon-next"></i>
                </NuxtLink>
            </div>
            <h3>
                <NuxtLink :to="{ name: 'cursos-slug', params: { slug: curso.slug } }">
                    {{curso.nombre}}
                </NuxtLink>
            </h3>
            <NuxtLink :to="{ name: 'cursos-slug', params: { slug: curso.slug } }">
            <ul class="info-box">
                <li><span>{{ curso.edades }}</span></li>
                <li><span>{{ curso.cupo_estudiantes }} cupos</span></li>
                <li><span>GRATUITO</span></li>                
            </ul>
            </NuxtLink>
        </div>
    </div>
</div>
</template>


<script>  
import conf from '../utils/conf'

export default {
    data: function () {
        return {
        cdnUri: conf.strapiBaseUri
        }
    },
    props: {
        curso: {
            type: Object,
            required: true
        }
    }
  }
</script>
