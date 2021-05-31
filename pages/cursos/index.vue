<template>
    <div>    
        <section class="page-title centred" style="background-image: url(/images/background/header-cursos-32.jpg);">
            <div class="position-absolute w-100 h-100 opacity-4 bg-dark"></div>
            <div class="container">
                <div class="content-box">
                    <h1>Cursos de Programación para Niños y Jóvenes</h1>
                    <ul class="bread-crumb clearfix">
                        <li><a href="/">Inicio</a></li>
                        <li>Cursos</li>
                    </ul>
                </div>
            </div>
        </section>        
        <section class="classes-section classes-page-section sec-pad">
            <div class="container">
                <div class="row">
                    <CourseCard v-for="curso in cursos" :key="curso.id" :curso="curso"/>                    
                </div>
            </div>
        </section>        
    </div>
</template>

<script>
export default {
  async asyncData ({ $strapi }) {
    return { 
        cursos: await $strapi.find("cursos"),
    }
  }
}
</script>