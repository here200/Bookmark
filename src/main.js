import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import './static/css/index.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
