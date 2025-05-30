import { createRouter } from './helper'

import routes from 'uni-router-routes'

// import permission from '@/permission/index.js'

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

// permission(router)

async function setupRouter(app) {
  app.use(router)
}

export { router, setupRouter }
