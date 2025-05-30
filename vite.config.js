import { defineConfig, loadEnv } from 'vite'
import path from 'node:path'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import UniRouter from 'unplugin-uni-router/vite'
import UnoCSS from 'unocss/vite'
// https://github.com/uni-helper
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniComponents from '@uni-helper/vite-plugin-uni-components'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const isDevelopment = mode === 'development'
  const env = loadEnv(mode, path.resolve(process.cwd()))
  const {
    VITE_APP_API_BASEURL,
    VITE_APP_PROXY,
    VITE_APP_PROXY_PREFIX,
    VITE_DELETE_CONSOLE,
    VITE_SHOW_SOURCEMAP
  } = env
  return defineConfig({
    build: {
      /** 解决 Windows 下开发模式控制台提示崩溃的问题 */
      ...(isDevelopment
        ? {
            watch: {
              exclude: ['node_modules/**', '/__uno.css']
            }
          }
        : {}),
      // minify: false,
      // 方便非h5端调试
      sourcemap: VITE_SHOW_SOURCEMAP === 'true', // 默认是false
      target: 'es6',
      // 开发环境不用压缩
      minify: isDevelopment ? false : 'terser',
      terserOptions: {
        compress: {
          drop_console: VITE_DELETE_CONSOLE === 'true',
          drop_debugger: true
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@root': path.resolve('./'),
        '@img': path.resolve('./src/static/images')
      }
    },
    plugins: [
      UniComponents({
        dts: false,
        resolvers: []
      }),
      UniLayouts(),
      UniManifest(),
      UniRouter(),
      uni(),
      AutoImport({
        dts: false,
        imports: [
          'vue',
          'uni-app',
          'pinia',
          {
            '@/api': ['useRequest']
          }
        ],
        dirs: ['./src/store/modules/**', './src/hooks/**', './src/router/helper.js'],
        eslintrc: {
          enabled: true,
          globalsPropValue: true
        }
      }),
      UnoCSS()
    ],
    server: {
      host: '0.0.0.0',
      hmr: true,
      // 仅 H5 端生效，其他端不生效（其他端走build，不走devServer)
      proxy: JSON.parse(VITE_APP_PROXY)
        ? {
            [VITE_APP_PROXY_PREFIX]: {
              target: VITE_APP_API_BASEURL,
              changeOrigin: true,
              rewrite: (path) => path.replace(new RegExp(`^${VITE_APP_PROXY_PREFIX}`), '')
            }
          }
        : undefined
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "nutui-uniapp/styles/variables.scss";`,
          api: 'modern-compiler',
          // 忽略警告提示
          silenceDeprecations: ['legacy-js-api', 'import']
        }
      }
    }
  })
}
