import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局统一样式
import '@/assets/css/global.css'
createApp(App).use(store).use(router).mount('#app')
