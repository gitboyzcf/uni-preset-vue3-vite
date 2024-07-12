/**
 * @Description: 本地存储
 * @Author zcf
 * @Date 2024-07-11 17:19
 * @E-mail boyzcf@qq.com
 */
const PREFIX = import.meta.env.VITE_APP_PREFIX

const storage = {
  local: {
    has: (key) => {
      return !!uni.getStorageSync(`${PREFIX}${key}`)
    },
    get: (key) => {
      return uni.getStorageSync(`${PREFIX}${key}`)
    },
    set: (key, value) => {
      uni.setStorageSync(`${PREFIX}${key}`, value)
    },
    remove: (key) => {
      uni.removeStorageSync(`${PREFIX}${key}`)
    },
    clear: () => {
      uni.clearStorageSync()
    }
  }
}

export default storage
