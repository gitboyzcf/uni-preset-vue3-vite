/**
 * 命名=》API_xxx_methodName
 */

import { request } from '../request'
export default {
  API_DEMO_POST(data = {}) {
    return request({
      url: '/mock/user',
      method: 'post',
      data
    })
  },

  API_DEMO_GET(params = {}) {
    return request({
      url: '/posts',
      method: 'get',
      params
    })
  }
}
