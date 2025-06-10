<script setup>
  // import { description, version } from '@root/package.json'
  import Agreement from './components/agreement.vue'
  import { useMessage } from 'wot-design-uni'
  const userStore = useUserStore()
  const router = useRouter()
  const message = useMessage('wd-message-box-slot')

  const agreed = ref(false)
  const isLoading = ref(false)
  const agreementVisible = ref(false)

  const appName = 'uni-preset-vue-vite'

  async function onLoginClick() {
    if (!agreed.value) {
      uni.showToast({
        title: '请先同意服务协议',
        icon: 'none'
      })
      return
    }

    try {
      isLoading.value = true

      await userStore.login()

      uni.showToast({
        title: '登录成功',
        icon: 'success'
      })
      setTimeout(async () => {
        router.pushTab({
          path: '/pages/index/index'
        })
      }, 500)
    } catch (error) {
      uni.showToast({
        title: '登录失败，请重试',
        icon: 'error'
      })
    } finally {
      isLoading.value = false
    }
  }

  function toggleAgreement() {
    agreed.value = !agreed.value
  }

  function onAgreementClick() {
    agreementVisible.value = true
    console.log(message)

    message.alert({
      title: '《产品服务协议》'
    })
    // uni.showModal({
    // title: '提示',
    //  content: '触发了路由中间件，是否允许通过?',
    //  success: (res) => {}
    // })
  }
</script>

<template>
  <view class="relative min-h-screen overflow-hidden from-blue-50 to-blue-100/70 bg-gradient-to-br">
    <view class="absolute left-0 top-0 h-full w-full opacity-5">
      <view class="absolute right-10 top-20 h-32 w-32 rounded-full bg-blue-400 blur-3xl"></view>
      <view class="absolute bottom-40 left-10 h-24 w-24 rounded-full bg-blue-400 blur-2xl"></view>
    </view>

    <view class="relative z-10 min-h-screen flex flex-col">
      <view class="flex flex-1 flex-col justify-center px-6 py-12">
        <view class="mb-12 text-center">
          <view class="relative mb-6 inline-block">
            <view
              class="mx-auto h-24 w-24 flex items-center justify-center rounded-3xl bg-white shadow-lg"
            >
              <image src="/static/logo.png" alt="App Logo" class="h-16 w-16 rounded-2xl" />
            </view>
            <view
              class="absolute rounded-3xl from-blue-400 to-blue-400 bg-gradient-to-r opacity-20 blur-lg -inset-2"
            ></view>
          </view>

          <view class="space-y-2">
            <text class="block text-3xl text-gray-900 font-bold">
              {{ appName }}
            </text>
            <!-- <text class="block text-base text-gray-600">
              {{ description }}
            </text> -->
          </view>
        </view>

        <view class="space-y-6">
          <button
            class="relative w-full overflow-hidden rounded-2xl from-blue-500 to-blue-400 bg-gradient-to-r px-6 py-4 font-semibold shadow-lg transition-all duration-200 active:scale-98 disabled:cursor-not-allowed !text-white disabled:opacity-70"
            :class="{ 'shadow-xl': !isLoading }"
            :disabled="isLoading"
            @click="onLoginClick"
          >
            <view class="flex items-center justify-center space-x-3">
              <view v-if="isLoading" class="i-carbon-fade h-5 w-5 animate-spin bg-white"></view>
              <view v-else class="i-carbon-phone h-5 w-5"></view>
              <text>{{ isLoading ? '登录中...' : '手机号快捷登录' }}</text>
            </view>

            <view
              class="absolute inset-0 from-transparent via-white to-transparent bg-gradient-to-r opacity-0 transition-all duration-500 -translate-x-full group-active:translate-x-full group-active:opacity-20"
            ></view>
          </button>

          <view class="flex items-center px-2 space-x-2">
            <view
              class="h-5 w-5 flex flex-shrink-0 items-center justify-center border-2 border-gray-300 rounded transition-all duration-200 active:scale-95"
              :class="agreed ? 'bg-blue-500 border-blue-500' : 'bg-white'"
              @click="toggleAgreement"
            >
              <view v-if="agreed" class="i-carbon-checkmark h-3 w-3 text-white"></view>
            </view>

            <view class="mt-[1px] flex-1 leading-relaxed">
              <text class="text-sm text-gray-600">
                我已阅读并同意
                <text
                  class="text-blue-600 font-medium transition-colors duration-200 active:text-blue-700"
                  @click.stop="onAgreementClick"
                >
                  《产品服务协议》
                </text>
              </text>
            </view>
          </view>
        </view>
      </view>

      <view class="px-6 pb-8">
        <view class="text-center space-y-3">
          <view class="mb-6 flex items-center space-x-4">
            <view class="h-px flex-1 bg-gray-200"></view>
            <text class="px-3 text-xs text-gray-400"> 技术支持 </text>
            <view class="h-px flex-1 bg-gray-200"></view>
          </view>

          <view class="flex items-center justify-center text-xs text-gray-400 space-x-2">
            <view class="i-carbon-information h-3 w-3"></view>
            <text>版本 v1.0.0</text>
          </view>
        </view>
      </view>
    </view>
  </view>
  <!-- demo 基础用法 -->
  <wd-message-box selector="wd-message-box-slot">
    <Agreement />
  </wd-message-box>
</template>

<style scoped lang="scss">
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }
</style>
