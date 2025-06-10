import { createSSRApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import 'uno.css'
export function createApp() {
  const app = createSSRApp(App)
  setupStore(app)
  setupRouter(app)
  return {
    app
  }
}
