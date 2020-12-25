import bindStorage from 'nuxt-vuex-localstorage/plugins/bindStorage'

export default (ctx) => {
  const options = {"localStorage":["user","deviceProfile","servers"]}
  bindStorage(ctx, options)
}
