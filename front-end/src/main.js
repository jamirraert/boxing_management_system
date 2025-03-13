import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './route/'

import { createPinia } from 'pinia'

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const pinia = createPinia()

const app = createApp(App)
app.use(ToastPlugin)
app.use(router)
app.use(pinia)
app.mount('#app')
