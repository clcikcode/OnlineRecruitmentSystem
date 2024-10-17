import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import store from './store/store.js'
import 'element-plus/dist/index.css'
import axios from './utils/request.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}  

app.config.globalProperties.$axios = axios
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
