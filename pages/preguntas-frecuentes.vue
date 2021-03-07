<template>
    <div>

        <section class="page-title centred" style="background-image: url(/images/fondo-amarillo-escuelita-dev.jpg);">
            <div class="container">
                <div class="content-box">
                    <h1>Preguntas frecuentes sobre Escuelita.dev</h1>
                    <ul class="bread-crumb clearfix">
                        <li>
                            <NuxtLink to="/">Inicio</NuxtLink>                            
                        </li>
                        <li>Preguntas Frecuentes</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="faq-page-section">
            <div class="anim-icon">
                <div class="icon icon-1 float-bob-y"></div>
            </div>
            <div class="container">
                <div class="row">
                    
                    <div class="col-xl-12 col-lg-12 col-md-12 faq-column">
                        <div class="faq-content">
                            <Preguntas :preguntas="preguntas"/>
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
        preguntas: await $strapi.find("preguntas-frecuentes")
    }
  },    
}
</script>