<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area b-1px b-solid b-color-red">
      <text class="title mt-4">{{ title }}</text>
    </view>
    <view>
      <button type="primary" @click="useCountStore.count++">点击 {{ count }}</button>
    </view>
  </view>
</template>

<script setup>
  import { useOutsideCountStore } from '@/store/count'
  const useCountStore = useOutsideCountStore()
  const title = ref('Hello World!')
  const count = computed(() => useCountStore.count)

  const { API_DEMO_POST } = useRequest()

  onMounted(() => {
    API_DEMO_POST().then(res => {
      console.log(res);
    })
  })
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
