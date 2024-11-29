import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './utils/i18n'

import { createPinia } from 'pinia'

import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

const pinia = createPinia()
const app = createApp(App)

app.use(Vueform, vueformConfig)
app.use(i18n)
app.use(pinia)
app.use(router)

app.mount('#app')
