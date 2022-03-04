import { createStore } from 'vuex'
import axios from 'axios'
import { darkModeKey, styleKey } from '@/config.js'
import * as styles from '@/styles.js'

export default createStore({
  state: {
    /* Styles */
    lightBorderStyle: '',
    lightBgStyle: '',
    asideStyle: '',
    asideBrandStyle: '',
    asideMenuCloseLgStyle: '',
    asideMenuLabelStyle: '',
    asideMenuItemStyle: '',
    asideMenuItemActiveStyle: '',
    asideMenuItemInactiveStyle: '',
    asideSubmenuListStyle: '',
    navBarItemLabelStyle: '',
    navBarItemLabelHoverStyle: '',
    navBarItemLabelActiveColorStyle: '',
    navBarMenuListUpperLabelStyle: '',
    tableTrStyle: '',
    tableTrOddStyle: '',
    overlayStyle: '',

    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,

    /* fullScreen - fullscreen form layout (e.g. login page) */
    isFullScreen: true,

    /* Aside */
    isAsideMobileExpanded: false,
    isAsideLgActive: false,

    /* Dark mode */
    darkMode: false,

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    macFilters: [],
    clients: [],
    history: [],

    // network settings
    network: {
      wanType: 0,
      wanIp: '80.12.123.32',
      wanMask: '255.0.0.0',
      wanStatus: 'connected',
      wanGateway: '80.10.1.1',
      lanIp: '192.168.188.1',
      lanMask: '255.255.255.0',
      lanStatus: 'connected',
    },
    wifi: {
      ssid: '',
      mode: 0,  // 11 b only
      channel: 10,  // auto
      channel_width: 2,  // 20/40MHz
      twoPointFourGHz: true,
      fiveGHz: false,
      security_mode: 'disabled',
      security_version: '',
      security_encryption: '',
      security_pw: '',
      security_radius: {
        ip: '',
        port: '1812',
      },
    }
  },
  mutations: {
    /* A fit-them-all commit */
    basic (state, payload) {
      state[payload.key] = payload.value
    },

    /* Styles */
    styles (state, payload) {
      for (const key in payload) {
        if (['body', 'html'].includes(key)) {
          continue
        }

        state[`${key}Style`] = payload[key]
      }
    },

    /* User */
    user (state, payload) {
      if (payload.name) {
        state.userName = payload.name
      }
      if (payload.email) {
        state.userEmail = payload.email
      }
      if (payload.avatar) {
        state.userAvatar = payload.avatar
      }
    },
    /* Wifi */
    wifi (state, payload) {
      if (payload.ssid) {
        state.wifi.ssid = payload.ssid
      }
      if (payload.mode) {
        state.wifi.mode = payload.mode.id
      }
      if (payload.channel) {
        state.wifi.channel = payload.channel.id
      }
      if (payload.channel_width) {
        state.wifi.channel_width = payload.channel_width.id
      }
      if (payload.frequenz) {
        console.log(payload.frequenz.includes('twopointfour'))
        state.wifi.twoPointFourGHz = payload.frequenz.includes('twopointfour')
        state.wifi.fiveGHz = payload.frequenz.includes('five')
      }
      // security
      if (payload.selected) {
        state.wifi.security_mode = payload.selected
      }
      if (payload.wpa_p) {
        state.wifi.security_version = payload.wpa_p.version
        state.wifi.security_encryption = payload.wpa_p.encryption
        state.wifi.security_pw = payload.wpa_p.pw
      }
      if (payload.wpa_e) {
        state.wifi.security_version = payload.wpa_e.version
        state.wifi.security_encryption = payload.wpa_e.encryption
        state.wifi.security_radius.ip = payload.wpa_e.ip
        state.wifi.security_radius.port = payload.wpa_e.port
      }
      console.log("All wifi-Settings stored")
    }
  },
  actions: {
    setStyle ({ commit, dispatch }, payload) {
      const style = styles[payload] ?? styles.basic

      document.body.className = style.body
      document.documentElement.className = style.html

      if (localStorage[styleKey] !== payload) {
        localStorage.setItem(styleKey, payload)
      }

      commit('styles', style)
    },

    asideMobileToggle ({ commit, state }, payload = null) {
      const isShow = payload !== null ? payload : !state.isAsideMobileExpanded

      document.getElementById('app').classList[isShow ? 'add' : 'remove']('ml-60', 'lg:ml-0')

      document.documentElement.classList[isShow ? 'add' : 'remove']('m-clipped')

      commit('basic', {
        key: 'isAsideMobileExpanded',
        value: isShow
      })
    },

    asideLgToggle ({ commit, state }, payload = null) {
      commit('basic', { key: 'isAsideLgActive', value: payload !== null ? payload : !state.isAsideLgActive })
    },

    fullScreenToggle ({ commit, state }, value) {
      commit('basic', { key: 'isFullScreen', value })

      document.documentElement.classList[value ? 'add' : 'remove']('full-screen')
    },

    darkMode ({ commit, state }, payload = null) {
      const value = payload !== null ? payload : !state.darkMode

      document.documentElement.classList[value ? 'add' : 'remove']('dark')

      localStorage.setItem(darkModeKey, value ? '1' : '0')

      commit('basic', {
        key: 'darkMode',
        value
      })
    },

    fetch ({ commit }, payload) {
      axios
        .get(`data-sources/${payload}.json`)
        .then((r) => {
          if (r.data && r.data.data) {
            commit('basic', {
              key: payload,
              value: r.data.data
            })
          }
        })
        .catch(error => {
          alert(error.message)
        })
    }
  },
  modules: {
  }
})
