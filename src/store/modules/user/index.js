import { piniaStore } from '@/store'
export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: {}
  }),
  actions: {
    async login() {
      return new Promise((resolve) => {
        // 模拟异步请求服务器获取 token
        setTimeout(() => {
          this.getUserInfo()
          this.token = '123456789'
          resolve()
        }, 2000)
      })
    },
    logout() {
      return new Promise((resolve) => {
        // 模拟异步请求
        setTimeout(() => {
          this.token = ''
          resolve()
        }, 1000)
      })
    },
    async getUserInfo() {
      // 模拟异步请求服务器获取用户信息
      return new Promise((resolve) => {
        setTimeout(() => {
          this.userInfo = {
            name: 'boyzcf',
            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            gender: 0,
            email: 'boyzcf@qq.com',
            url: 'https://gitboyzcf.github.io/',
            wechat: 'wxboyzcf',
            address: ''
          }
          resolve(this.userInfo)
        })
      })
    }
  },
  persist: {
    pick: ['token'] // 只持久化 token
  }
})

export function useOutsideUserStore() {
  return useUserStore(piniaStore)
}
