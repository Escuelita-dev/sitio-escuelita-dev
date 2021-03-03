import conf from './utils/conf'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Escuelita.dev - Escuela de Programación para niños y jóvenes',
    htmlAttrs: {
      lang: 'es'
    },
    bodyAttrs: {
      class: 'boxed_wrapper'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Somos una escuela de programación para niñas, niños, y jóvenes sin fines de lucro. Enseñamos programación para hacer a nuestros niños más felices ahora y apoyarles para que tengan un mejor futuro.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      { rel: 'stylesheet', href: "/css/style.css"},
      { rel: 'stylesheet', href: "/css/responsive.css"}
    ],
    script: [
      {
        src: "/js/jquery.js"
      },
      {
        src: "/js/popper.min.js"
      },
      {
        src: "/js/owl.js"
      },
      {
        src: "/js/wow.js"
      },
      {
        src: "/js/jquery.fancybox.js"
      },
      {
        src: "/js/appear.js"
      },
      {
        src: "/js/parallax.min.js"
      },
      {
        src: "/js/isotope.js"
      }, 
      {
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CE0deH3Jhj6GN4YvdCFZS7DpbXexzGU"
      },
      {
        src: "/js/gmaps.js"
      },
      {
        src: "/js/map-helper.js"
      },
      {
        src: "/js/script.js"
      } 
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit',
    'bootstrap-vue/nuxt',
  ],
  strapi: {
    entities: ['profesors', 'cursos'],
    url: conf.strapiBaseUri
  },  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
