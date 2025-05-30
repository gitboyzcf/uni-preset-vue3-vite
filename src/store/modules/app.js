import { piniaStore } from '@/store'
export const useAppStore = defineStore('app', {
  state: () => {
    return {
      darkMode: 'light'
    }
  },
  actions: {},
  persist: true // 配置持久化
})

export function useOutsideAppStore() {
  return useAppStore(piniaStore)
}
