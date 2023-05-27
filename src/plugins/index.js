/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import { createVuetify } from 'vuetify'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(pinia)
    .use(router)
}

export default createVuetify()