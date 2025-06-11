<script setup>
  const version = '1.0.0'
  const userStore = useOutsideUserStore()
  const router = useRouter()

  const isLogin = computed(() => !!userStore.token)
  const userInfo = computed(() => userStore.userInfo)

  const systemItems = computed(() => [
    {
      icon: 'i-carbon-customer-service',
      text: '联系我们',
      path: '/contact'
    },
    {
      icon: 'i-carbon-settings',
      text: '系统设置',
      path: '/settings'
    }
  ])

  function handleMenuItemClick(item) {
    if (item.path === '/settings') {
      uni.showToast({ title: '系统设置功能暂未开放', icon: 'none' })
      return
    }
    router.push({
      path: item.path,
      query: item.query || {}
    })
  }

  function handleLogin() {
    if (isLogin.value) {
      router.push({
        path: '/personal'
      })
      return false
    }

    router.push({
      path: '/login'
    })
  }

  function onEnterpriseClick() {
    window.open(userInfo.value.url)
  }

  function handleLogout() {
    uni.showModal({
      title: '提示',
      content: '确定要退出登录吗?',
      showCancel: true,
      confirmText: '确定',
      cancelText: '取消',
      success: async function (res) {
        if (res.confirm) {
          await userStore.logout()
          uni.showToast({
            title: '退出登录成功',
            icon: 'success'
          })
          setTimeout(() => {
            router.replace({
              path: '/user'
            })
          }, 500)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
</script>

<template>
  <view class="h-full flex flex-col">
    <view class="relative overflow-hidden">
      <view class="absolute inset-0 bg-blue-500"></view>

      <view
        class="absolute h-42 w-42 rounded-full bg-white opacity-10 -right-10 -top-10 z-1"
      ></view>
      <view
        class="absolute bottom-0 right-20 h-20 w-20 rounded-full bg-white opacity-10 z-1"
      ></view>

      <view class="h-[--safe-top]"></view>

      <view
        class="relative flex items-center px-6 pb-12 pt-12 bg-blue-500"
        hover-class="opacity-90"
        @click="handleLogin"
      >
        <view class="h-18 w-18 overflow-hidden border-2 border-white/30 rounded-full shadow-lg">
          <image src="/static/logo.png" alt="用户头像" class="h-full w-full" />
        </view>

        <view class="ml-4 flex-1">
          <view v-if="isLogin" class="text-xl text-white font-bold">
            {{ userInfo.username }}
          </view>
          <view v-else class="flex items-center">
            <view class="text-xl text-white font-medium"> 立即登录 </view>
            <view class="ml-2 rounded-full bg-white/20 px-3 py-1 text-xs text-white"> 未登录 </view>
          </view>
        </view>

        <view v-if="isLogin" class="flex items-center text-white/70">
          <view>编辑个人资料</view>
          <view class="i-carbon-chevron-right size-6"></view>
        </view>
      </view>
    </view>

    <view class="mx-3 mt-3 overflow-hidden rounded-xl shadow-sm">
      <view
        v-for="(item, index) of systemItems"
        :key="index"
        :class="[index !== systemItems.length - 1 ? 'border-b border-gray-100' : '']"
        class="flex items-center bg-white px-5 py-4 transition-colors duration-200 active:bg-gray-50"
        hover-class="bg-gray-50"
        @click="handleMenuItemClick(item)"
      >
        <view class="w-10 flex flex-none items-center justify-center text-gray-500">
          <view class="size-6 text-blue-500" :class="item.icon"></view>
        </view>

        <view class="flex-1 text-gray-700 font-medium">
          {{ item.text }}
        </view>
        <view class="text-gray-400">
          <view class="i-carbon-chevron-right size-5"></view>
        </view>
      </view>
    </view>

    <view v-if="isLogin" class="mb-8 mt-auto px-5">
      <button
        class="w-full bg-red-500 py-3 text-gray-50 font-medium transition-colors duration-200 !rounded-lg"
        hover-class="bg-red-700"
        @click="handleLogout"
      >
        退出登录
      </button>
    </view>

    <view v-else class="mb-6 mt-auto text-center text-xs text-gray-400">
      <view>
        Supported by
        <text class="text-blue-500 underline active:text-blue-700" @click="onEnterpriseClick">
          {{ userInfo.name }}
        </text>
        v{{ version }}
      </view>
    </view>
  </view>
</template>
