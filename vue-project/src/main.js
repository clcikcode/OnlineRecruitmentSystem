import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import store from './store/store.js'
import 'element-plus/dist/index.css'
import axios from './utils/request.js'

const app = createApp(App)

app.config.globalProperties.$axios = axios
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
