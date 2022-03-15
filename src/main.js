import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import { darkModeKey, styleKey, wifiSettingsKey } from '@/config.js'
import Toast from 'vue-toastification'

import './css/main.css'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

/* Fetch sample data */
store.dispatch('fetch', 'macFilters')

/* App style */
store.dispatch('setStyle', localStorage[styleKey] ?? 'basic')

/* Dark mode */
if ((!localStorage[darkModeKey] && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage[darkModeKey] === '1') {
  store.dispatch('darkMode', true)
}

/* Wifi Settings */
if (localStorage[wifiSettingsKey]) {
  console.log('Found local stored wifi settings')
  store.dispatch('loadWifiSettings', localStorage.getItem(wifiSettingsKey))
}

/* Default title tag */
const defaultDocumentTitle = 'router-sim'

/* Collapse mobile aside menu on route change */
router.beforeEach(to => {
  store.dispatch('asideMobileToggle', false)
  store.dispatch('asideLgToggle', false)
})

router.afterEach(to => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }

  /* Full screen mode */
  store.dispatch('fullScreenToggle', !!to.meta.fullScreen)
})

const toastOptions = {
  // You can set your default options here
  timeout: 1500
}

createApp(App).use(store).use(router).use(Toast, toastOptions).mount('#app')
