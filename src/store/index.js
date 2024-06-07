import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate' // 数据持久化

export const piniaStore = createPinia()
piniaStore.use(
  createPersistedState({
    storage: {
      getItem: uni.getStorageSync,
      setItem: uni.setStorageSync
    }
  })
)

export function setupStore(app) {
  app.use(piniaStore)
}
