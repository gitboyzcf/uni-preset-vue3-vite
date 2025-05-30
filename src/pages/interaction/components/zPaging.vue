<!-- 自定义下拉刷新与上拉加载演示(vue) -->
<!-- https://z-paging.zxlee.cn/start/demo.html -->
<template>
  <view class="z-paging-content">
    <z-paging ref="paging" v-model="dataList" @query="queryList">
      <!-- 需要固定在顶部不滚动的view放在slot="top"的view中，如果需要跟着滚动，则不要设置slot="top" -->
      <!-- 注意！此处的z-tabs为独立的组件，可替换为第三方的tabs，若需要使用z-tabs，请在插件市场搜索z-tabs并引入，否则会报插件找不到的错误 -->
      <template #top>
        <!-- <z-tabs :list="tabList" @change="tabsChange" /> -->
        <!-- tabs占位 -->
        <view class="h-42px pointer-events-none"></view>
      </template>

      <!-- 自定义下拉刷新view(如果use-custom-refresher为true且不设置下面的slot="refresher"，此时不用获取refresherStatus，会自动使用z-paging自带的下拉刷新view) -->

      <!-- 注意注意注意！！字节跳动小程序中自定义下拉刷新不支持slot-scope，将导致custom-refresher无法显示 -->
      <!-- 如果是字节跳动小程序，请参照sticky-demo.vue中的写法，此处使用slot-scope是为了减少data中无关变量声明，降低依赖 -->
      <template #refresher="{ refresherStatus }">
        <!-- 此处的custom-refresh为demo中自定义的组件，非z-paging的内置组件，请在实际项目中自行创建。这里插入什么view，下拉刷新就显示什么view -->
        <custom-refresher :status="refresherStatus" />
      </template>
      <!-- 自定义没有更多数据view -->
      <template #loadingMoreNoMore>
        <!-- 此处的custom-nomore为demo中自定义的组件，非z-paging的内置组件，请在实际项目中自行创建。这里插入什么view，没有更多数据就显示什么view -->
        <custom-nomore />
      </template>

      <!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
      <view class="px-15px">
        <view
          class="item my-15rpx b-b-solid b-b-1rpx b-b-color-[#cccccc]"
          v-for="(item, index) in dataList"
          :key="index"
        >
          <text class="text-28rpx font-bold">{{ item.title }}</text>
          <view class="mt-5 text-18rpx color-[#9999]">{{ item.body }}</view>
        </view>
      </view>
    </z-paging>
  </view>
</template>

<script setup>
  const { API_DEMO_GET } = useRequest()
  const dataList = ref([])
  const tabList = ref(['测试1', '测试2', '测试3', '测试4'])
  const tabIndex = ref(0)
  const paging = ref(null)

  function tabsChange(index) {
    tabIndex.value = index
    // 当切换tab或搜索时请调用组件的reload方法，请勿直接调用：queryList方法！！
    // 调用reload时参数传true则代表reload时触发下拉刷新效果，不传或false则代表取消此效果
    paging.value.reload(true)
  }

  function queryList(pageNo, pageSize) {
    // 组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
    // 这里的pageNo和pageSize会自动计算好，直接传给服务器即可
    // 模拟请求服务器获取分页数据，请替换成自己的网络请求
    const params = {
      pageNo,
      pageSize
    }
    // 此处请求仅为演示，请替换为自己项目中的请求
    API_DEMO_GET({ _start: params.pageNo, _limit: params.pageSize })
      .then((res) => {
        paging.value.complete(res)
      })
      .catch(() => {
        paging.value.complete(false)
      })
  }
  function itemClick(item) {
    // 点击item时的处理逻辑
    console.log('Clicked item:', item)
  }
</script>
