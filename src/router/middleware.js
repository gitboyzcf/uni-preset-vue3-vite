// 添加中间件单页面路由拦截
export function testMiddleware(router) {
  const userStore = useOutsideUserStore()
  // 只有路由对象meta中 携带test的路由会走此部分
  // /src/router/helper.js
  defineMiddleware(
    'test',
    function (router) {
      router.beforeEach((to, from, next) => {
        if (userStore.token) {
          // 如果有token，直接跳转到目标路由
          next()
        } else {
          uni.showModal({
            title: '提示',
            content: '请先登录',
            success: (res) => {
              if (res.confirm) {
                next({ name: 'login' })
              }
            }
          })
        }
      })

      router.afterEach(() => {})
    },
    { router }
  )
}
