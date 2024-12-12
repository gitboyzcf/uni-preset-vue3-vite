<template>
  <view class="h-full w-full">
    <mescroll-uni
      :down="{ auto: false }"
      :fixed="false"
      :safearea="true"
      @init="mescrollInit"
      @down="downCallback"
      @up="upCallback"
    >
      <view
        class="item my-15rpx b-b-solid b-b-1rpx b-b-color-[#cccccc]"
        v-for="(item, index) in dataList"
        :key="index"
      >
        <text class="text-28rpx font-bold">{{ item.title }}</text>
        <view class="mt-5 text-18rpx color-[#9999]">{{ item.body }}</view>
      </view>
      <nut-empty
        v-if="isError && dataList.length == 0"
        image="error"
        description="加载失败/错误"
      ></nut-empty>
    </mescroll-uni>
  </view>
</template>
<script setup>
  // https://github.com/mescroll/mescroll
  import MescrollUni from '@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-uni.vue'

  const { API_DEMO_GET } = useRequest()
  const dataList = ref([])
  const queryParams = reactive({
    pageNo: 1,
    pageSize: 10
  })
  const isError = ref(false)

  const queryList = () => {
    return new Promise((resolve, reject) => {
      // 此处请求仅为演示，请替换为自己项目中的请求
      API_DEMO_GET({ _start: queryParams.pageNo, _limit: queryParams.pageSize })
        .then((res) => {
          resolve(res)
        })
        .catch(reject)
    })
  }
  const mescrollInit = async (mescroll) => {
    console.log(mescroll)
  }

  const downCallback = async (mescroll) => {
    try {
      queryParams.pageNo = 1
      const res = await queryList()
      dataList.value = res
      mescroll.endSuccess() // 隐藏加载进度
    } catch (error) {
      mescroll.endErr()
      isError.value = true
    }
  }
  const upCallback = async (mescroll) => {
    try {
      const res = await queryList()
      dataList.value = dataList.value.concat(res)
      mescroll.endSuccess(dataList.value.length)
      queryParams.pageNo++
    } catch (error) {
      mescroll.endErr()
      isError.value = true
    }
  }
</script>
