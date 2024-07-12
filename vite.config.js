import { defineConfig, loadEnv } from 'vite'
import path from 'node:path'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const env = loadEnv(mode, path.resolve(process.cwd()))
  const { VITE_APP_API_BASEURL, VITE_APP_PROXY, VITE_APP_PROXY_PREFIX } = env
  return defineConfig({
    resolve: {
      alias: {
        '@': path.join(process.cwd(), './src'),
        '@img': path.join(process.cwd(), './src/static/images')
      }
    },
    plugins: [
      UniManifest(),
      uni(),
      AutoImport({
        imports: [
          'vue',
          'uni-app',
          'pinia',
          {
            '@/api': ['useRequest']
          }
        ],
        eslintrc: { enabled: true }
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
    }
  })
}
