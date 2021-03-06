<template>
    <span>
        <div v-if="contenido.__component === 'blog.texto'">
            <div class="bold-text" v-html="$md.render(contenido.Texto)">
            </div>
        </div>
        <div v-else-if="contenido.__component === 'blog.imagen'">
            <figure class="image-box"><img :src="getStrapiMedia(contenido.Imagen.url)" :alt="contenido.Caption"></figure>
            <div>{{ contenido.Caption }}</div>
        </div>        
    </span>
</template>

<script>
import { getStrapiMedia } from '../utils/medias'

export default {
    props: {
        contenido: {
            type: Object,
            required: true
        }
    },
    methods: {
        getStrapiMedia
    }
}
</script>