import { createSSRApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import 'virtual:uno.css'
export function createApp() {
  const app = createSSRApp(App)
  setupStore(app)
  return {
    app
  }
}
