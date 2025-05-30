import { piniaStore } from '@/store'
export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: {}
  }),
  actions: {
    async login() {
      // 模拟异步请求服务器获取 token
      setTimeout(() => {
        this.token = '123456789'
      }, 2000)
    },
    logout() {
      this.token = ''
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
