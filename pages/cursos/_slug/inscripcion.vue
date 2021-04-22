<template>
    <div>           
        <section class="page-title centred narrow" style="background-color: #008bb0">
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
        <section class="form-section sec-pad">
            <ul id="progressbar" class="text-center">
                <li :class="{active: step1}"><i class="far fa-clock"></i><strong>Elegir Horario</strong></li>
                <li :class="{active: step3}" id="personal"><i class="fas fa-pen"></i><strong>Inscripción</strong></li>
                <li :class="{active: step4}" id="payment"><i class="fas fa-check"></i><strong>FIN</strong></li>
            </ul> <!-- fieldsets -->                
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
                            <div class="form">
                                <div v-if="errores.length > 0" class="alert alert-danger"><ul><li v-for="(error, index) in errores" :key="index">{{ error }}</li></ul></div>
                                <form id="contact-form" class="default-form"  @submit.stop.prevent="handleSubmit"> 
                                    <div class="row" v-if="step1">
                                        <div class="col-12 form-group mt-5">
                                            <h2>Elige tu horario preferido para cursar</h2>    
                                            <h5>Los horarios están en la hora de Argentina <a href="#">(cambiar país)</a></h5>
                                        </div>
                                        <div class="col-12 form-group">
                                            <b-form-group v-slot="{ ariaDescribedby }">
                                            <b-form-radio-group
                                                id="radio-comision"
                                                v-model="selected"
                                                :aria-describedby="ariaDescribedby"
                                                name="radio-btn-stacked"
                                                button-variant="outline-primary"
                                                buttons
                                                stacked
                                                size="lg"
                                                @change="buscarCupos()"
                                            >
                                                <b-form-radio v-for="comision in comisiones" :key="comision.value" :value="comision.value">{{comision.horario}}<div>{{ comision.comienzo }}</div></b-form-radio>

                                            </b-form-radio-group>
                                            </b-form-group>                                            
                                        </div>  
                                    </div>
                                    <div class="row" v-if="step2">
                                        <div v-if="!cuposDisponibles" class="col-12 form-group mt-5 text-center">
                                            <h2>Buscando Cupos Disponibles</h2>
                                            <b-spinner variant="success" label="Spinning"></b-spinner>
                                        </div>
                                        <div v-else class="col-12 form-group mt-5 text-center">
                                            <i class="far fa-check-circle fa-5x" style="color:green"></i>
                                            <h2>¡Felicidades!</h2>
                                            <h2>Hay un lugar disponible en el curso</h2><h2>¿Quieres reservarlo?</h2>                                            
                                            <button class="theme-btn mt-4" name="submit-form" @click="tomarCupo()">Sí, tomar el Cupo</button>
                                        </div>
                                    </div>                                                         
                                    <div class="row" v-if="step3">
                                        <div class="col-12 form-group mt-5">                                        
                                            <h2>Información del Adulto Responsable</h2>
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
                                        <div class="col-12 form-group mt-5">                                        
                                            <h2>Información del Estudiante</h2>
                                        </div>                                        
                                        <div class="col-12 form-group">
                                            ¿Cuál es su país de nacimiento?
                                        </div>
                                        <div class="col-12 form-group">
                                            <CountrySelect v-model="de_donde"/>
                                        </div>                                        
                                        <div class="col-6 form-group">
                                            <input v-model="nombreEstudiante" class="mb-0" type="text" name="nombreEstudiante" placeholder="Nombre completo*">
                                        </div>
                                            <div class="col-6 form-group">
                                            <input type="number" name="edad" placeholder="Edad*">
                                        </div>                                                                            
                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                            <button class="theme-btn mt-4" name="submit-form">Reservar Lugar</button> <span @click="completarInscripcion()">CLICK ACA</span>
                                        </div>
                                    </div>
                                    <div class="row" v-if="step4">
                                        <div v-if="!inscripcionConfirmada" class="col-12 form-group mt-5 text-center">
                                            <h2>Completando Inscripción</h2>
                                            <b-spinner variant="success" label="Spinning"></b-spinner>
                                        </div>
                                        <div v-else class="col-12 form-group mt-5 text-center">
                                            <i class="far fa-check-circle fa-5x" style="color:green"></i>
                                            <h2>¡Felicidades!</h2>
                                            <h2>Se completó la inscripción de {{ this.nombreEstudiante }} para el Curso {{ curso.nombre }}</h2>
                                            <ShareNetwork
                                                network="facebook"
                                                :url="`${urlCurso}?utm_source=facebook&utm_campaign=inscripcion`"
                                                :title="`Asistí a la conferencia ${certificate.webinar.title} en Eprenda!`"
                                                description="Ingresa para ver este y otros Webinarios y verificar mi certificado"
                                                :quote="`${certificate.name} asistió a la conferencia ${certificate.webinar.title} en Eprenda!`"
                                                hashtags="MejoraContinua,Cursos"                
                                            >
                                                <b-button class="btn btn-hover-secondary btn-width-100 my-2" variant="primary" style="background-color: #1877f2!important"><i class="fab fa-facebook-f social-link-icon mx-2"></i>Facebook</b-button>
                                            </ShareNetwork>                                            
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
            step1: true,
            step2: false,
            step3: false,
            step4: false,
            inscripcionConfirmada: false,
            cuposDisponibles: false,
            selected: '',
            submited: false,
            success: false,
            errored: false,
            errores: [],            
            nombre: '',
            email: '',
            whatsapp: '',
            nombreEstudiante: '',
            asunto: '',
            de_donde: '',
            mensaje: '',
            comisiones: [
                { horario: 'Los Viernes a las 18:00hs de Argentina', comienzo: 'Comienza el Viernes 9 de Abril', value: '13' },
                { horario: 'Los Viernes a las 19:00hs de Argentina',  comienzo: 'Comienza el Viernes 9 de Abril', value: '14' },
            ]
        }
    },
    computed: {
        urlCurso: function() {
            return this.$route.resolve({ name: 'cursos-slug', params: { slug: this.curso.slug } })
        }
    },
    mounted: function() {
        // this.$bvModal.show('modalRevisarCupos')
    },
    methods: {
        getStrapiMedia,
        buscarCupos: function() {
            this.step1 = false
            this.step2 = true
            var v = this
            setTimeout(function () {
                v.cuposDisponibles = true
            }, 3000)
        },        
        tomarCupo: function() {
            this.step2 = false
            this.step3 = true
        },
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
        completarInscripcion: function() {
            this.step3 = false
            this.step4 = true
            var v = this
            setTimeout(function () {
                v.inscripcionConfirmada = true
            }, 3000)
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
    #radio-comision div{
        color: rgb(136, 99, 99);
    }
    #radio-comision .btn-outline-primary:hover div{
        color: rgb(243, 227, 6);
    }    
    #radio-comision {
        width: 100%
    }
    #radio-comision label {
        white-space: normal;
    }    
</style>

<style scoped>
    #progressbar {
        margin-bottom: 30px;
        overflow: hidden;
        color: lightgrey
    }

    #progressbar .active {
        color: #000000
    }

    #progressbar li {
        list-style-type: none;
        font-size: 12px;
        width: 33%;
        float: left;
        position: relative
    }

    #progressbar li i {
        width: 50px;
        height: 50px;
        line-height: 45px;
        display: block;
        font-size: 18px;
        color: #ffffff;
        background: lightgray;
        border-radius: 50%;
        margin: 0 auto 10px auto;
        padding: 2px;
        z-index: 20;
    }

    #progressbar li:after {
        content: '';
        width: 100%;
        height: 2px;
        background: lightgray;
        position: absolute;
        left: 0;
        top: 25px;
        z-index: 1;
    }

    #progressbar li.active i,
    #progressbar li.active:after {
        background: skyblue
    }
</style>