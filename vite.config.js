import { defineConfig } from 'vite'
import path from 'node:path'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(process.cwd(), './src'),
      '@img': path.join(process.cwd(), './src/static/images')
    }
  },
  plugins: [
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
  ]
})
