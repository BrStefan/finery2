import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App.vue'
import { registerPlugins } from './plugins'

const app = createApp(App)
const vuetify = createVuetify()

registerPlugins(app)

app.use(vuetify)

app.mount('#app')