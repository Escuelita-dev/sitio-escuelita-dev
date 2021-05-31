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
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 offset-lg-2 form-column">
                        <div class="escuelita-form">                        
                            <div class="form">
                                <div v-if="errores.length > 0" class="alert alert-danger"><ul><li v-for="(error, index) in errores" :key="index">{{ error }}</li></ul></div>
                                <form id="contact-form" class="default-form"  @submit.stop.prevent="handleSubmit"> 
                                    <div class="row" v-if="step1">
                                        <div class="col-12 form-group mt-5">
                                            <h2>Elige tu horario preferido para cursar</h2>    
                                            
                                            <h5>Los horarios están en la hora de {{ currentTimezone }}</h5>
                                        </div>
                                        <div class="col-12 form-group">
                                            <b-form-group v-slot="{ ariaDescribedby }">
                                            <b-form-radio-group
                                                id="radio-comision"
                                                v-model="formData.comision"
                                                :aria-describedby="ariaDescribedby"
                                                name="radio-btn-stacked"
                                                button-variant="outline-primary"
                                                buttons
                                                stacked
                                                size="lg"
                                                @change="buscarCupos()"
                                            >
                                                <b-form-radio v-for="unaComision in comisiones" :key="unaComision.id" :value="unaComision.id">{{ comisionFormatearHorario(unaComision.FechaComienzo)}}<div>Comienza el {{ comisionFormatearComienzo(unaComision.FechaComienzo) }}</div></b-form-radio>
                                            </b-form-radio-group>
                                            </b-form-group>                                            
                                        </div>  
                                    </div>
                                    <div class="row" v-if="step2">
                                        <div v-if="buscandoCupos" class="col-12 form-group mt-5 text-center">
                                            <h2>Buscando Cupos Disponibles</h2>
                                            <b-spinner variant="success" label="Spinning"></b-spinner>
                                        </div>
                                        <div v-else-if="cuposDisponibles" class="col-12 form-group mt-5 text-center">
                                            <i class="far fa-check-circle fa-5x" style="color:green"></i>
                                            <h2>¡Felicidades!</h2>
                                            <h2>Hay un lugar disponible en el curso</h2><h2>¿Quieres reservarlo?</h2>                                            
                                            <button class="theme-btn mt-4" name="submit-form" @click="tomarCupo()">Sí, tomar el Cupo</button>
                                        </div>
                                        <div v-else class="col-12 form-group mt-5 text-center">
                                            <i class="far fa-frown-open fa-5x" style="color:red"></i>
                                            <h2>Ouch!</h2>
                                            <h2>Lamentablemente ya se agotaron los cupos para esta comisión del curso</h2>
                                            <p>Te estaremos invitando para la siguiente edición en un par de meses</p>
                                        </div>                                        
                                    </div>                                                         
                                    <div class="row" v-if="step3">
                                        <div class="col-12 form-group mt-5">                                        
                                            <h2>Información del Adulto Responsable</h2>
                                        </div>
                                        <div class="col-12 form-group">
                                            <input class="mb-0" v-model="formData.NombreAdulto" type="text" name="nombre" placeholder="Nombre completo*" required="" aria-required="true">
                                        </div>
                                        <div class="col-12 col-md-6 form-group">
                                            <vue-tel-input v-model="formData.TelefonoMovilAdulto" :inputOptions="{placeholder: 'Tu número de teléfono móvil'}"></vue-tel-input>
                                        </div>
                                        <div class="col-12 col-md-6 form-group">
                                            <input v-model="formData.EmailAdulto" type="email" name="email" placeholder="Tu Email*" required="" aria-required="true">
                                        </div>
                                        <div class="col-12 form-group mt-5">                                        
                                            <h2>Información del Estudiante</h2>
                                        </div>                                        
                                        <div class="col-12 form-group">
                                            ¿Cuál es su país de nacimiento?
                                        </div>
                                        <div class="col-12 form-group">
                                            <CountrySelect v-model="formData.Pais"/>
                                        </div>                                        
                                        <div class="col-6 form-group">
                                            <input v-model="formData.Nombre" class="mb-0" type="text" name="Nombre" placeholder="Nombre completo*">
                                        </div>
                                            <div class="col-6 form-group">
                                            <input v-model="formData.Edad" type="number" name="edad" placeholder="Edad*">
                                        </div>                                                                            
                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                            <button class="theme-btn mt-4" name="submit-form">Hacer Inscripción</button>
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
                                            <h2>Se completó la inscripción de {{ formData.Nombre }} para el Curso {{ curso.nombre }}</h2>

                                            <div class="inner-box mt-4">
                                                <h3>¿Sientes orgullo? ¡Compártelo!</h3>
                                                <ShareNetwork
                                                    network="facebook"
                                                    :url="`${urlCurso}?utm_source=facebook&utm_campaign=inscripcion`"
                                                    :title="`${ formData.Nombre } se inscribió al curso ${curso.nombre} en Escuelita.dev!`"
                                                    :description="`${ formData.Nombre } sigue estudiando! Se anotó a un curso de Programación en Escuelita.dev :)`"
                                                    :quote="`${ formData.Nombre } se inscribió al curso ${curso.nombre} en Escuelita.dev!`"
                                                    hashtags="PrepararseParaElFuturo, CursoProgramacion"
                                                >
                                                    <b-button class="btn btn-hover-secondary btn-width-100 my-2" variant="primary" style="background-color: #1877f2!important"><i class="fab fa-facebook-f social-link-icon mx-2"></i>Facebook</b-button>
                                                </ShareNetwork>
                                                <ShareNetwork
                                                    network="linkedin"
                                                    :url="`${urlCurso}?utm_source=linkedin&utm_campaign=inscripcion`"
                                                    :title="`${ formData.Nombre } se inscribió al curso ${curso.nombre} en Escuelita.dev!`"
                                                    :description="`${ formData.Nombre } sigue estudiando! Se anotó a un curso de Programación en Escuelita.dev :)`"
                                                    :quote="`${ formData.Nombre } se inscribió al curso ${curso.nombre} en Escuelita.dev!`"
                                                    hashtags="PrepararseParaElFuturo, CursoProgramacion"
                                                >
                                                    <b-button class="btn btn-hover-secondary btn-width-100 my-2" variant="primary" style="background-color: #0a66c2!important"><i class="fab fa-linkedin social-link-icon mx-2"></i> Linkedin</b-button>
                                                </ShareNetwork>
                                                <ShareNetwork
                                                    network="twitter"
                                                    :url="`${urlCurso}?utm_source=twitter&utm_campaign=inscripcion`"
                                                    :title="`${ formData.Nombre } se inscribió al curso ${curso.nombre} en Escuelita.dev!`"
                                                    :description="`${ formData.Nombre } sigue estudiando! Se anotó a un curso de Programación en Escuelita.dev :)`"
                                                    :quote="`${ formData.Nombre } se inscribió al curso ${curso.nombre} en Escuelita.dev!`"
                                                    hashtags="PrepararseParaElFuturo, CursoProgramacion"
                                                >
                                                    <b-button class="btn btn-hover-secondary btn-width-100 my-2" variant="primary" style="background-color: #1da1f2!important"><i class="fab fa-twitter social-link-icon mx-2"></i> Twitter</b-button>
                                                </ShareNetwork>

                                                <ShareNetwork
                                                    network="whatsapp"
                                                    :url="`${urlCurso}?utm_source=whatsapp&utm_campaign=inscripcion`"
                                                    :title="`${ formData.Nombre } se inscribió al curso ${curso.nombre} en Escuelita.dev!`"
                                                    :description="`${ formData.Nombre } sigue estudiando! Se anotó a un curso de Programación en Escuelita.dev :)`"
                                                    :quote="`${ formData.Nombre } se inscribió al curso ${curso.nombre} en Escuelita.dev!`"
                                                    hashtags="PrepararseParaElFuturo, CursoProgramacion"
                                                >
                                                    <b-button class="btn btn-hover-secondary btn-width-100 my-2" variant="primary" style="background-color: #25d366!important"><i class="fab fa-whatsapp social-link-icon mx-2"></i> Whatsapp</b-button>                    
                                                </ShareNetwork>
                                                <ShareNetwork
                                                    network="telegram"
                                                    :url="`${urlCurso}?utm_source=telegram&utm_campaign=inscripcion`"
                                                    :title="`${ formData.Nombre } se inscribió al curso ${curso.nombre} en Escuelita.dev!`"
                                                    :description="`${ formData.Nombre } sigue estudiando! Se anotó a un curso de Programación en Escuelita.dev :)`"
                                                    :quote="`${ formData.Nombre } se inscribió al curso ${curso.nombre} en Escuelita.dev!`"
                                                    hashtags="PrepararseParaElFuturo, CursoProgramacion"
                                                >
                                                    <b-button class="btn btn-hover-secondary btn-width-100 my-2" variant="primary" style="background-color: #0088cc!important"><i class="fab fa-telegram-plane social-link-icon mx-2"></i> Telegram</b-button>                    
                                                </ShareNetwork>
                                            </div>


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
import { firstToUpper } from '../../../utils/strings'

export default {
    layout: 'landings',
    async asyncData ({ params, $strapi }) {
        const cursos = await $strapi.find("cursos", {
            slug: params.slug,
        })
        const comisiones = await $strapi.find("comisiones", {
            'curso.slug': params.slug
        })
        return {
            curso: cursos[0],
            comisiones
        };
    },    
    data: function() {
        return {
            step1: true,
            step2: false,
            step3: false,
            step4: false,
            formData: {
                paisHorario: {},
                comision: '',
                NombreAdulto: '',
                TelefonoMovilAdulto: '',
                EmailAdulto: '',
                Nombre: '',
                Pais: '',
                Edad: ''
            },
            inscripcionConfirmada: false,
            cuposDisponibles: false,
            buscandoCupos: true,
            submited: false,
            success: false,
            errored: false,
            errores: [],
            // comisiones: [
            //     { horario: 'Los Viernes a las 18:00hs de Argentina', comienzo: 'Comienza el Viernes 9 de Abril', value: '13' },
            //     { horario: 'Los Viernes a las 19:00hs de Argentina',  comienzo: 'Comienza el Viernes 9 de Abril', value: '14' },
            // ]
        }
    },
    computed: {
        urlCurso: function() {
            return this.$config.baseUrl + this.$router.resolve({ name: 'cursos-slug', params: { slug: this.curso.slug } }).href
        },
        currentTimezone: function() {
            return Intl.DateTimeFormat().resolvedOptions().timeZone
        }
    },
    methods: {
        firstToUpper,
        setearPaisHorario: function({name, iso2}) {
            this.formData.paisHorario = {name, iso2}
        },
        /**
         * Ej: Los Viernes a las 18:00hs de Argentina
         */
        comisionFormatearHorario: function(fechaComienzo) {
            return this.firstToUpper(this.$moment(fechaComienzo).format('dddd')) + ' a las ' + this.$moment(fechaComienzo).format('h:mm a')
        },
        /**
         * Ej: Comienza el Viernes 9 de Abril
         */
        comisionFormatearComienzo: function(fechaComienzo) {        
            return this.firstToUpper(this.$moment(fechaComienzo).format('dddd D')) + ' de ' + this.firstToUpper(this.$moment(fechaComienzo).format('MMMM'))        
        },
        buscarCupos: function() {
            this.step1 = false
            this.step2 = true
            var v = this
            setTimeout(async function () {
                // const comision = v.comisiones.find((comision) => comision.id=v.formData.comision)
                const cuentaAlumnos = await v.$strapi.count("alumnos", {
                    comisiones: [v.formData.comision]
                });
                v.cuposDisponibles = cuentaAlumnos < (v.curso.cupo_estudiantes + 5)
                v.buscandoCupos = false
            }, 3000)
        },        
        tomarCupo: function() {
            this.step2 = false
            this.step3 = true
        },
        checkForm: function() {
            this.errores = []
            this.errored = false

            if(!this.formData.NombreAdulto) {
                this.errores.push('Ingresa el nombre del adulto responsable')
            }
            if(!this.formData.TelefonoMovilAdulto) {
                this.errores.push('Ingresa el teléfono móvil del adulto responsable')
            }
            if(!this.formData.EmailAdulto) {
                this.errores.push('Ingresa el email del adulto responsable')
            }
            if(!this.formData.Pais) {
                this.errores.push('Ingresa el país del estudiante')
            }
            if(!this.formData.Nombre) {
                this.errores.push('Ingresa el nombre del estudiante')
            }            
            if(!this.formData.Edad) {
                this.errores.push('Ingresa la edad del estudiante')
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
                .post(this.$config.strapiBaseUri + "/alumnos/inscripcion", {
                    NombreAdulto: this.formData.NombreAdulto,
                    TelefonoMovilAdulto: this.formData.TelefonoMovilAdulto,
                    EmailAdulto: this.formData.EmailAdulto,
                    Nombre: this.formData.Nombre,
                    Edad: this.formData.Edad,
                    Pais: this.formData.Pais,
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
    
    .inner-box{
        position: relative;
        display: block;
        background: #fff;
        border-radius: 20px;
        padding: 89px 15px 76px 15px;
        box-shadow: 0 20px 50px rgba(229, 229, 229, 0.8);
    }
</style>