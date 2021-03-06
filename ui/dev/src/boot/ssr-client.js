
export default ({ router }) => {
  console.log('[Efuzy] On route change we deliberately load page from server -- in order to test hydration errors')

  let reload = false
  router.beforeEach((to, _, next) => {
    if (reload) {
      window.location.href = to.fullPath
      return
    }
    reload = true
    next()
  })
}
