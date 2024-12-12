<script>
  export default {
    onLaunch: function () {
      console.log('App Launch')
    },
    onShow: function () {
      console.log('App Show')
    },
    onHide: function () {
      console.log('App Hide')
    }
  }
</script>

<style lang="scss">
  /*每个页面公共css */
  @import 'nutui-uniapp/styles/index.scss';
  page,
  html,
  body {
    height: 100%;
  }
</style>
