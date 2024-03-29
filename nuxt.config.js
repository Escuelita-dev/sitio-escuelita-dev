export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: true,
    exclude: [/^(?=.*\inscripcion\b).*$/]
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || 'https://escuelita.dev',
    strapiBaseUri: process.env.API_URL || 'https://strapi.escuelita.dev',
    strapiCdnBaseUri: process.env.API_URL || "https://strapi.escuelita.dev",
  },
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
        src: "https://umami.mauri.co/umami.js",
        async: true,
        'data-website-id': '408b9351-2b94-45d1-b2ef-7c78b1bd5753'
      },
      {
        src: "https://www.googleoptimize.com/optimize.js?id=OPT-WGQD938"
      },
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
      },
      {
        src: "https://d335luupugsy2.cloudfront.net/js/loader-scripts/602c1b4a-fe13-4402-a4d8-5134010fefbc-loader.js",
        async: true,
        body: true
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
    '@nuxtjs/google-analytics',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit',
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    'vue-social-sharing/nuxt',    
    ['@netsells/nuxt-hotjar', { 
      id: '2041320', 
      sv: '6',
    }],
    ['nuxt-amplitude-plugin',
      { apiKey: '6d2a3f757a6f48beab4ca89bc95136bc', config: {includeReferrer: true, includeUtm: true} }
    ],
    ['nuxt-facebook-pixel-module', {
      /* module options */
      track: 'PageView',
      pixelId: '176480920981296',
      autoPageView: true,
      disabled: false
    }]
  ],
  moment: {
    timezone: true,
    defaultLocale: 'es',
    locales: ['es']
  },
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
    url: process.env.API_URL || 'https://strapi.escuelita.dev',
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
