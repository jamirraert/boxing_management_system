import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './route/'

import { createPinia } from 'pinia'

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Ripple from 'primevue/ripple';

import { VueSpinnersPlugin } from 'vue3-spinners';
import LogoutLoadingComponent from './components/LogoutLoadingComponent.vue'
import Card from 'primevue/card'
import Skeleton from 'primevue/skeleton'

const pinia = createPinia()

const app = createApp(App)

app.component('LogoutLoading', LogoutLoadingComponent)
app.component('Card', Card)

app.use(VueSpinnersPlugin)
app.use(ToastPlugin)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.component('Skeleton', Skeleton)
app.directive('ripple', Ripple);
app.use(router)
app.use(pinia)
app.mount('#app')
