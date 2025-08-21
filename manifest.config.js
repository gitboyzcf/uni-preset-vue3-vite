// manifest.config.js
import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'
import path from 'node:path'
import { loadEnv } from 'vite'

// 获取环境变量的范例
const env = loadEnv(process.env.NODE_ENV, path.resolve(process.cwd()))
const { VITE_APP_TITLE, VITE_UNI_APPID, VITE_WX_APPID, VITE_APP_PUBLIC_BASE } = env

export default defineManifestConfig({
  name: VITE_APP_TITLE,
  appid: VITE_UNI_APPID,
  description: '模板app测试',
  versionName: '1.0.0',
  versionCode: '2025062101',
  transformPx: false,
  locale: 'zh-Hans',
  h5: {
    router: {
      base: VITE_APP_PUBLIC_BASE
    }
  },
  /* 5+App特有相关 */
  'app-plus': {
    usingComponents: true,
    nvueStyleCompiler: 'uni-app',
    compilerVersion: 3,
    compatible: {
      ignoreVersion: true
    },
    splashscreen: {
      alwaysShowBeforeRender: true,
      waiting: true,
      autoclose: true,
      delay: 0
    },
    /* 模块配置 */
    modules: {},
    /* 应用发布信息 */
    distribute: {
      /* android打包配置 */
      android: {
        minSdkVersion: 30,
        targetSdkVersion: 30,
        abiFilters: ['armeabi-v7a', 'arm64-v8a'],
        permissions: [
          '<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>',
          '<uses-permission android:name="android.permission.VIBRATE"/>',
          '<uses-permission android:name="android.permission.READ_LOGS"/>',
          '<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>',
          '<uses-feature android:name="android.hardware.camera.autofocus"/>',
          '<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.CAMERA"/>',
          '<uses-permission android:name="android.permission.GET_ACCOUNTS"/>',
          '<uses-permission android:name="android.permission.READ_PHONE_STATE"/>',
          '<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>',
          '<uses-permission android:name="android.permission.WAKE_LOCK"/>',
          '<uses-permission android:name="android.permission.FLASHLIGHT"/>',
          '<uses-feature android:name="android.hardware.camera"/>',
          '<uses-permission android:name="android.permission.WRITE_SETTINGS"/>'
        ]
      },
      /* ios打包配置 */
      ios: {},
      /* SDK配置 */
      sdkConfigs: {},
      icons: {
        android: {
          hdpi: 'src/static/app/icons/72x72.png',
          xhdpi: 'src/static/app/icons/96x96.png',
          xxhdpi: 'src/static/app/icons/144x144.png',
          xxxhdpi: 'src/static/app/icons/192x192.png'
        },
        ios: {
          iphone: {
            'app@2x': 'src/static/app/icons/120x120.png',
            'app@3x': 'src/static/app/icons/180x180.png',
            'spotlight@2x': 'src/static/app/icons/80x80.png',
            'spotlight@3x': 'src/static/app/icons/120x120.png',
            'settings@2x': 'src/static/app/icons/58x58.png',
            'settings@3x': 'src/static/app/icons/87x87.png',
            'notification@2x': 'src/static/app/icons/40x40.png',
            'notification@3x': 'src/static/app/icons/60x60.png'
          },
          ipad: {
            app: 'src/static/app/icons/76x76.png',
            'app@2x': 'src/static/app/icons/152x152.png',
            'proapp@2x': 'src/static/app/icons/167x167.png',
            spotlight: 'src/static/app/icons/40x40.png',
            'spotlight@2x': 'src/static/app/icons/80x80.png',
            settings: 'src/static/app/icons/29x29.png',
            'settings@2x': 'src/static/app/icons/58x58.png',
            notification: 'src/static/app/icons/20x20.png',
            'notification@2x': 'src/static/app/icons/40x40.png'
          },
          appstore: 'src/static/app/icons/1024x1024.png'
        }
      }
    }
  },
  /* 快应用特有相关 */
  quickapp: {},
  /* 小程序特有相关 */
  'mp-weixin': {
    appid: VITE_WX_APPID,
    setting: {
      urlCheck: false
    },
    usingComponents: true
    // __usePrivacyCheck__: true,
  },
  'mp-alipay': {
    usingComponents: true,
    styleIsolation: 'shared'
  },
  'mp-baidu': {
    usingComponents: true
  },
  'mp-toutiao': {
    usingComponents: true
  },
  uniStatistics: {
    enable: false
  },
  vueVersion: '3'
})
