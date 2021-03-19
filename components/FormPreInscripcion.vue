<template>
    <b-modal
        id="form-preinscripcion"
        ref="modal"
        hide-header
        hide-footer
        size="lg"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
        class="rounded"
    >
        <div class="escuelita-form-section sec-pad">
            <div class="container">
                <div v-if="!(submited && success)" class="sec-title centred">
                    <h5>Reserva tu lugar</h5>
                    <h1>{{ curso.nombre }}</h1>
                </div>
                <div class="row">                                      
                    <div  class="col-lg-8 col-md-12 col-sm-12 offset-lg-2 form-column">
                        <div v-if="submited && success" class="text-center">
                            <img style="max-width: 150px" src="/images/thumbs-up.png"/>
                            <h2>Felicidades!</h2><h2>Has hecho la pre-inscripción al curso</h2>
                            <p>Entraste a la lista de espera para la siguiente edición de este curso</p>
                            <p>Nos pondremos en contacto a la primer oportunidad de acceder al curso.</p>
                        </div>                          
                        <div v-else class="escuelita-form">
                            <div v-if="errores.length > 0" class="alert alert-danger"><ul><li v-for="(error, index) in errores" :key="index">{{ error }}</li></ul></div>
                            <form id="escuelita-form" class="default-form" @submit.stop.prevent="handleSubmit"> 
                                <div class="row">
                                    <div class="my-4 col-12">
                                        <h3>Adulto responsable</h3>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="text" v-model="nombre" name="nombre" placeholder="Nombre del adulto responsable*">
                                    </div>                                    
                                    <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                        <vue-tel-input v-model="whatsapp" @country-changed="paisTelefono" :inputOptions="{placeholder: 'Número de teléfono'}"></vue-tel-input>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                        <input type="email" v-model="email" name="email" required placeholder="Email*">
                                    </div>
                                    <div class="col-12 my-4">
                                        <h3>Estudiante</h3>
                                    </div>                                    
                                    <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                        <input type="text" v-model="para_quien" name="para_quien" placeholder="Nombre de estudiante*">
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                        <input type="text" v-model="edad" name="edad" placeholder="Edad*">
                                    </div>                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group"> 
                                        <CountrySelect v-model="de_donde"/>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                        <input type="text" v-model="ciudad" name="ciudad" placeholder="Ciudad de residencia*">
                                    </div>                                    
                                    <div class="d-none">
                                        <input type="text" v-model="la_mielcita" name="la_mielcita" placeholder="Vení abejita">
                                    </div>                                            
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <textarea v-model="mensaje" name="mensaje" placeholder="¿Por qué quieres inscribirle al curso?"></textarea>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group  centred">
                                        <b-button type="submit" class="theme-btn" style="font-size:2rem!important">{{ loading ? "Enviando ..." : "ENVIAR" }}</b-button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>                    
            </div>
        </div>
    </b-modal>
</template>


<script>  
import conf from '../utils/conf'

export default {
    props: {
        curso: {
            type: Object,
            required: true
        }
    },
    data: function() {
        return {
            loading: false,
            submited: false,
            success: false,
            errored: false,
            errores: [],
            es_bot: false,
            nombre: '',
            ciudad: '',
            phoneCode: '',
            whatsapp: '',
            email: '',
            de_donde: '', // pais del estudiante
            para_quien: '',
            edad: '',
            la_mielcita: null,
            mensaje: '',
            preInscripciones: 0
        }
    },
    mounted: async function() {
        this.preInscripciones = await this.$strapi.count('pre-inscripcions', {'curso.id': this.curso.id})
    },
    methods: {
        paisTelefono(obj) {
            this.phoneCode = obj.dialCode;
        },
        abrir: function() {
            this.$bvModal.show('form-preinscripcion')            
        },
        checkForm: function() {
            this.errores = []
            this.errored = false

            if(!this.nombre) {
                this.errores.push('Ingresa el nombre del adulto responsable de la inscripción')
            }
            if(!this.whatsapp) {
                this.errores.push('Ingresa tu teléfono')
            }
            if(!this.email) {
                this.errores.push('Ingresa tu email')
            }
            if(!this.de_donde) {
                this.errores.push('Ingresa tu país de nacimiento')
            }
            if(!this.ciudad) {
                this.errores.push('Ingresa la ciudad de residencia')
            }            
            if(!this.edad) {
                this.errores.push('Ingresa la edad del estudiante')
            }                        
            if(!this.para_quien) {
                this.errores.push('Ingresa para quién es el curso')
            }

            if(this.errores.length > 0) {
                this.errored = true
                return false
            }

            return true;
        },
        resetModal() {
            return
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
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
                .post(conf.strapiBaseUri + "/pre-inscripcions", {
                    nombre: this.nombre,
                    whatsapp: '+' + this.phoneCode + this.whatsapp,
                    email: this.email,
                    para_quien: this.para_quien,
                    edad: this.edad,
                    de_donde: this.de_donde,
                    ciudad: this.ciudad,
                    mensaje: this.mensaje,
                    curso: this.curso.id
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