<template>
    <div>
        <section class="page-title centred" style="background-image: url(/images/fondo-amarillo-escuelita-dev.jpg);">
            <div class="container">
                <div class="content-box">
                    <h1>Contacto</h1>
                    <ul class="bread-crumb clearfix">
                        <li>
                            <NuxtLink to="/">Inicio</NuxtLink></li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="contact-info-section sec-pad centred">
            <div class="container">
                <div class="sec-title">
                    <h5>Contacto</h5>
                    <h1>Ponte en Contacto con Nosotros</h1>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 info-column">
                        <div class="single-info-box wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 600ms; animation-name: fadeInUp;">
                            <div class="inner-box">
                                <div class="icon-box"><i class="flaticon-mail"></i></div>
                                <h3>Email</h3>
                                <div class="text">
                                    <a href="mailto:hola@escuelita.dev">hola@escuelita.dev</a><br>
                                </div>
                            </div>
                        </div>
                    </div>                    
                    <div class="col-lg-4 col-md-6 col-sm-12 info-column">
                        <div class="single-info-box wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                            <div class="inner-box">
                                <div class="icon-box"><i class="flaticon-address"></i></div>
                                <h3>Nuestra Dirección</h3>
                                <div class="text">Tiburcio Gómez 1330, Piso 2<br>Montevideo,  Uruguay.</div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-lg-4 col-md-6 col-sm-12 info-column">
                        <div class="single-info-box wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 300ms; animation-name: fadeInUp;">
                            <div class="inner-box">
                                <div class="icon-box"><i class="flaticon-vintage-hand-phone"></i></div>
                                <h3>Teléfono</h3>
                                <div class="text">
                                    <a href="tel:(+55)654-545-5418">(+55) 654 - 545 - 5418</a><br>
                                    <a href="tel:(+55)654-545-1235">(+55)  654 - 545 - 1235</a>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>  
        <section class="contact-form-section sec-pad">
            <div class="container">
                <div class="sec-title centred">
                    <h1>Déjanos un Mensaje</h1>
                </div>
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
                                        <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input v-model="nombre" type="text" name="nombre" placeholder="Tu nombre*" required="" aria-required="true">
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input v-model="email" type="email" name="email" placeholder="Tu Email*" required="" aria-required="true">
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input v-model="whatsapp" type="text" name="whatsapp" placeholder="Tu número de teléfono móvil" required="" aria-required="true">
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input v-model="asunto" type="text" name="asunto" placeholder="Asunto" required="" aria-required="true">
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input v-model="de_donde" type="text" name="de_donde" placeholder="¿De dónde eres?" required="" aria-required="true">
                                        </div>                                    
                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea v-model="mensaje" name="mensaje" placeholder="Escribe tu mensaje"></textarea>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                            <button type="submit" class="theme-btn" name="submit-form">Enviar</button>
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
import conf from '../utils/conf'

export default {
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
            mensaje: ''
        }
    },
    methods: {
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