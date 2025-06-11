import { createRouter } from './helper'
import { testMiddleware } from './middleware'

import routes from 'uni-router-routes'

const router = createRouter({
  routes: [
    ...routes

    // 通配符，一般用于匹配不到路径跳转404页面
    // {
    //   path: '*',
    //   redirect: () => {
    //     // 可返回{ name: '404' }，{ path: '/pages/404/404' }， '/pages/404/404'
    //     return { name: '404' }
    //   }
    // }
  ]
})

// 路由守卫中页面跳转不支持路径别名，请使用实际路径，避免使用别名
testMiddleware(router)

async function setupRouter(app) {
  app.use(router)
}

export { router, setupRouter }
