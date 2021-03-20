import conf from '~/utils/conf.js'

export default (ctx, inject) => {  
  inject('render', (markdown) => {
    return ctx.$md.render(markdown, { baseUrl: conf.strapiCdnBaseUri})
  })
}