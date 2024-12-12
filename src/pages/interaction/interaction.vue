<template>
  <view class="interaction h-full">
    <nut-tabs v-model="state.tab11value" type="smile" swipeable>
      <!-- #ifdef H5 -->
      <nut-tab-pane class="h-full important-p-0" title="NutUi">
        <iframe
          class="h-full w-full"
          src="https://nutui-uniapp.pages.dev/ui/#/"
          frameborder="0"
        ></iframe>
      </nut-tab-pane>
      <!-- #endif -->
      <nut-tab-pane class="important-p-0 important-px-2" title="加载刷新"
        ><MescrollBox
      /></nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
  </view>
</template>
<script setup>
  import MescrollBox from './components/mescrollBox.vue'
  const state = reactive({
    tab11value: '0'
  })
</script>
<style lang="scss" scoped>
  :deep(.nut-tabs) {
    height: 100%;
    .nut-tabs__content {
      height: calc(100% - var(--window-bottom));
    }
  }
</style>
