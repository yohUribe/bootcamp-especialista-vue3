/*import './assets/main.css'*/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {globalRegistration} from "@/components/shared/globals";

const app = createApp(App)

globalRegistration(app)
app.use(router)

app.mount('#app')
