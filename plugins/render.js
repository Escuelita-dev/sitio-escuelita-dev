export default (ctx, inject) => {  
  inject('render', (markdown) => {
    return ctx.$md.render(markdown, { baseUrl: ctx.$config.strapiCdnBaseUri})
  })
}