import { createRouter, createWebHashHistory } from 'vue-router'
import Status from '@/views/Status.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    meta: {
      title: 'Login router-sim',
      fullScreen: true
    },
    path: '/',
    name: 'login',
    component: Login
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Status'
    },
    path: '/status',
    name: 'status',
    component: Status
  },
  {
    meta: {
      title: 'Wifi Settings'
    },
    path: '/wifi-settings',
    name: 'wifi-settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wifi-settings" */ '@/views/Wifi_Settings.vue')
  },
  {
    meta: {
      title: 'Wifi Security'
    },
    path: '/wifi-security',
    name: 'wifi-security',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wifi-security" */ '@/views/Wifi_Security.vue')
  },
  {
    meta: {
      title: 'Wifi Mac Filtering'
    },
    path: '/wifi-mac',
    name: 'wifi-mac',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wifi-macfiltering" */ '@/views/Wifi_MacFiltering.vue')
  },
  {
    meta: {
      title: 'Wifi Advanced'
    },
    path: '/wifi-advanced',
    name: 'wifi-advanced',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wifi-advanced" */ '@/views/Wifi_Advanced.vue')
  },
  {
    meta: {
      title: 'Wifi WPS'
    },
    path: '/wifi-wps',
    name: 'wifi-wps',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wifi-advanced" */ '@/views/Wifi_WPS.vue')
  },
  {
    meta: {
      title: 'Wifi Statistics'
    },
    path: '/wifi-stats',
    name: 'wifi-stats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wifi-stats" */ '@/views/Wifi_Stats.vue')
  },
  {
    meta: {
      title: 'WAN'
    },
    path: '/wan',
    name: 'wan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wan" */ '@/views/Wan.vue')
  },
  {
    meta: {
      title: 'Lan'
    },
    path: '/lan',
    name: 'lan',
    component: () => import(/* webpackChunkName: "lan" */ '@/views/Lan.vue')
  },
  {
    meta: {
      title: 'Help'
    },
    path: '/help',
    name: 'help',
    component: () => import(/* webpackChunkName: "help" */ '@/views/Help.vue')
  },
  {
    meta: {
      title: 'Login',
      fullScreen: true
    },
    path: '/login',
    name: 'login2',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    meta: {
      title: 'Error',
      fullScreen: true
    },
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/views/Error.vue')
  },
  {
    meta: {
      title: 'Extra',
      fullScreen: true
    },
    path: '/extra',
    name: 'extra',
    component: () => import(/* webpackChunkName: "extra" */ '@/views/Extra.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
