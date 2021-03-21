<template>
    <b-modal
        id="form-interesado"
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
                    <h5>Me interesa el curso</h5>
                    <h1>{{ curso.nombre }}</h1>
                </div>
                <div class="row">                                      
                    <div  class="col-lg-8 col-md-12 col-sm-12 offset-lg-2 form-column">
                        <div v-if="submited && success" class="text-center">
                            <img style="max-width: 150px" src="/images/thumbs-up.png"/>
                            <h2>¡Muchas gracias por tu interés!</h2>
                            <p>Te tendremos al tanto de novedades, y ni bien se abran las inscripciones al curso te enviaremos un Email</p>
                        </div>                          
                        <div v-else class="escuelita-form">
                            <div class="text-center mb-4">
                                <h3>Déjanos tu información de contacto y te avisaremos cuando se abran las inscripciones para este curso</h3>
                            </div>                              
                            <div v-if="errores.length > 0" class="alert alert-danger"><ul><li v-for="(error, index) in errores" :key="index">{{ error }}</li></ul></div>
                            <form id="escuelita-form" class="default-form" @submit.stop.prevent="handleSubmit"> 
                                <div class="row">
                                    <div class="col form-group">
                                        Tu nombre
                                    </div>                                                                        
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="text" v-model="nombre" name="nombre" placeholder="Tu nombre*">
                                    </div>                                    
                                    <div class="col form-group">
                                        ¿De dónde eres?
                                    </div>                                                                                                            
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group"> 
                                        <CountrySelect v-model="pais"/>
                                    </div>
                                    <div class="col form-group">
                                        Tu email
                                    </div>                                                                                                                                                
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="email" v-model="email" name="email" required placeholder="Email*">
                                    </div>
                                    <div class="d-none">
                                        <input type="text" v-model="la_mielcita" name="la_mielcita" placeholder="Vení abejita">
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
            pais: '',
            email: '',
            la_mielcita: null,
            cuentaInteresados: 0,
        }
    },
    mounted: async function() {
        this.cuentaInteresados = await this.$strapi.count('interesados', {'Curso.id': this.curso.id})
    },
    methods: {
        abrir: function() {
            this.$bvModal.show('form-interesado')
        },
        checkForm: function() {
            this.errores = []
            this.errored = false

            if(!this.nombre) {
                this.errores.push('Ingresa tu nombre')
            }
            if(!this.pais) {
                this.errores.push('Ingresa tu país')
            }
            if(!this.email) {
                this.errores.push('Ingresa tu email')
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
                .post(conf.strapiBaseUri + "/interesados", {
                    Nombre: this.nombre,
                    Email: this.email,
                    Pais: this.pais,
                    Curso: this.curso.id
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