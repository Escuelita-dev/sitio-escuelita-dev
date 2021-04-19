<template>
    <div>
        <section class="page-title centred" :style="`background-image: url(${getStrapiMedia(curso.imagen_cabezal.url)});`">
            <div class="container">
                <div class="content-box">
                    <h1>Inscripción</h1>
                    <ul class="bread-crumb clearfix">
                        <li>
                            <NuxtLink to="/">Inicio</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ name: 'cursos-slug', params: { slug: curso.slug } }">{{ curso.nombre  }}</NuxtLink>
                        </li>                        
                        <li>Inscripción</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="contact-form-section sec-pad">
            <div class="container">
                <!-- <div class="sec-title centred">
                    <h1>Adulto responsable</h1>
                </div> -->
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 offset-lg-2 form-column">
                        <div v-if="submited && success" class="text-center">
                            <img style="max-width: 150px" src="/images/thumbs-up.png"/>
                            <h2>Muchas Gracias!</h2><h2>Nos pondremos en contacto contigo lo antes posible</h2>
                        </div>                          
                        <div v-else class="escuelita-form">                        
                            <div class="contact-form">
                                <div v-if="errores.length > 0" class="alert alert-danger"><ul><li v-for="(error, index) in errores" :key="index">{{ error }}</li></ul></div>
                                <form id="contact-form" class="default-form"  @submit.stop.prevent="handleSubmit"> 
                                    <div class="row">
                                        <div class="col-12 form-group">
                                        <b-form-group v-slot="{ ariaDescribedby }">
                                        <h2>Horario preferido</h2>    
                                        <b-form-radio-group
                                            id="radio-comision"
                                            v-model="selected"
                                            :options="comisiones"
                                            :aria-describedby="ariaDescribedby"
                                            name="radio-btn-stacked"
                                            button-variant="outline-primary"                                            
                                            buttons
                                            stacked
                                            size="lg"
                                        ></b-form-radio-group>
                                        </b-form-group>                                            
                                            <!-- <b-form-group label="Elige el Horario Preferido" v-slot="{ ariaDescribedby }">
                                            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A" size="lg">Los Viernes a las 18:00hs <span>Comienza el Viernes 9 de Abril</span></b-form-radio>
                                            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B" size="lg">Los Viernes a las 19:00hs <span>Comienza el Viernes 9 de Abril</span></b-form-radio>
                                            </b-form-group>                 -->
                                        </div>                        
                                        <div class="col-12 form-group">                                        
                                            <h2>Adulto Responsable</h2>
                                        </div>
                                        <div class="col-12 form-group">
                                            <input class="mb-0" v-model="nombre" type="text" name="nombre" placeholder="Nombre completo*" required="" aria-required="true">
                                        </div>
                                        <div class="col-12 col-md-6 form-group">
                                            <vue-tel-input v-model="whatsapp" :inputOptions="{placeholder: 'Tu número de teléfono móvil'}"></vue-tel-input>
                                        </div>
                                        <div class="col-12 col-md-6 form-group">
                                            <input v-model="email" type="email" name="email" placeholder="Tu Email*" required="" aria-required="true">
                                        </div>
                                        <div class="col-12 form-group">                                        
                                            <h2>Estudiante</h2>
                                        </div>                                        
                                        <div class="col-12 form-group">
                                            ¿Cuál es su país de nacimiento?
                                        </div>
                                        <div class="col-12 form-group">
                                            <CountrySelect v-model="de_donde"/>
                                        </div>                                        
                                        <div class="col-12 form-group">
                                            <input class="mb-0" type="text" name="nombreEstudiante" placeholder="Nombre completo*">
                                        </div>
                                        <div class="col-12 col-md-6 form-group">
                                            <input type="email" name="emailEstudiante" placeholder="Email (si tiene)">
                                        </div>                                    
                                            <div class="col-12 col-md-6 form-group">
                                            <input type="number" name="edad" placeholder="Edad*">
                                        </div>                                                                            
                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                            <button type="submit" class="theme-btn" name="submit-form">Reservar Lugar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>              
    </div>
</template>

<script>
import conf from '../../../utils/conf'
import { getStrapiMedia } from '../../../utils/medias'


export default {
    layout: 'landings',
    async asyncData ({ params, $strapi }) {
        const cursos = await $strapi.find("cursos", {
            slug: params.slug,
        });
        return {
            curso: cursos[0]
        };
    },    
    data: function() {
        return {
            submited: false,
            success: false,
            errored: false,
            errores: [],            
            nombre: '',
            email: '',
            whatsapp: '',
            asunto: '',
            de_donde: '',
            mensaje: '',
            comisiones: [
                { text: 'Los Viernes a las 18:00hs (Comienza el Viernes 9 de Abril)', value: '13' },
                { text: 'Los Viernes a las 19:00hs (Comienza el Viernes 9 de Abril)', value: '14' },
            ]
        }
    },
    methods: {
        getStrapiMedia,
        checkForm: function() {
            this.errores = []
            this.errored = false

            if(!this.nombre) {
                this.errores.push('Ingresa tu nombre')
            }
            if(!this.whatsapp) {
                this.errores.push('Ingresa tu teléfono')
            }
            if(!this.email) {
                this.errores.push('Ingresa tu email')
            }
            if(!this.de_donde) {
                this.errores.push('Ingresa de dónde eres')
            }
            if(!this.asunto) {
                this.errores.push('Ingresa un Asunto')
            }            
            if(!this.mensaje) {
                this.errores.push('Ingresa tu mensaje')
            }

            if(this.errores.length > 0) {
                this.errored = true
                return false
            }

            return true;
        },
        handleSubmit() {
            // Exit when the form isn't valid
            if (!this.checkForm()) {
                return
            }

            this.enviar()
        },        
        enviar: function() {
            this.loading = true
            if(this.la_mielcita != null) {
                this.es_bot = true
            }            
            else {
                this.$axios
                .post(conf.strapiBaseUri + "/mensajes", {
                    Nombre: this.nombre,
                    Whatsapp: this.whatsapp,
                    Email: this.email,
                    DeDonde: this.de_donde,
                    Asunto: this.asunto,
                    Mensaje: this.mensaje,
                })
                .then((response) => {
                    this.success = true;
                    this.errored = false;
                })
                .catch((error) => {
                    this.errored = true;
                })
                .finally(() => {
                    this.submited = true;
                    this.loading = false;
                });
            }
        }
    }
}
</script>

<style>
    #radio-comision {
        width: 100%
    }
    #radio-comision label {
        white-space: normal;
    }    
</style>