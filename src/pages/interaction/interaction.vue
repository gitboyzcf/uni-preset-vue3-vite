<template>
  <view class="interaction h-full overflow-hidden">
    <wd-tabs v-model="state.tab11value">
      <!-- #ifdef H5 -->
      <wd-tab title="Wot UI" class="h-full important-p-0">
        <iframe
          class="h-full w-full"
          src="https://wot-design-uni.cn/demo/"
          frameborder="0"
        ></iframe>
      </wd-tab>
      <!-- #endif -->
      <wd-tab title="加载刷新">
        <ZPaging />
      </wd-tab>
      <wd-tab title="Tab 3"> Tab 3 </wd-tab>
    </wd-tabs>
  </view>
</template>
<script setup>
  import ZPaging from './components/zPaging.vue'
  const state = reactive({
    tab11value: '0'
  })
</script>
<style lang="scss" scoped>
  :deep(.wd-tabs) {
    height: 100%;
    .wd-tabs__nav {
      z-index: 99;
    }
    .wd-tabs__container {
      height: calc(100% - var(--window-bottom));
      .wd-tab__body {
        height: 100%;
      }
    }
  }
</style>
