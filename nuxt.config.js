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
    {src: '~/plugins/countryRegionSelect.js', mode: 'client'},
    {src: '~/plugins/swiper.js'},
    {src: '~/plugins/render.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit',
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    ['@netsells/nuxt-hotjar', { 
      id: '2041320', 
      sv: '6',
    }]
  ],
  i18n: {
    locales: [
      {
        code: 'es',
        file: 'es-ES.js'
      }
    ],
    defaultLocale: 'es',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  // recommended
    },
    lazy: true,    
    langDir: 'lang/',    
    strategy: 'no_prefix'
  },
  strapi: {
    entities: ['profesors', 'cursos'],
    url: conf.strapiBaseUri
  },
  markdownit: {
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-modify-token'
    ],
    modifyToken: function (token, env) {    
      switch (token.type) {
      case 'image': // set all images to 200px width except for foo.gif
        token.attrObj.src = (env.baseUrl ? env.baseUrl : '') + token.attrObj.src
        break;
      }
    }
  },  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleAnalytics: {
    id: 'UA-24678770-2'
  }
}
