export const darkModeKey = 'darkMode'

export const styleKey = 'style'

export const wifiSettingsKey = 'wifi'
export const ConfigCheckKey = 'confcheck'

export const isDebugMode = false

export const selectModeOptions = [
  { id: 0, label: '802.11 b only' },
  { id: 1, label: '802.11 g only' },
  { id: 2, label: '802.11 a only' },
  { id: 3, label: '802.11 ac only' },
  { id: 4, label: '802.11 n only' },
  { id: 5, label: '802.11 ax only' },
  { id: 6, label: '802.11 b/g/n mixed' },
  { id: 7, label: '802.11 a/n/ac mixed' },
  { id: 8, label: '802.11 b/g/n + a/ac mixed' },
  { id: 9, label: '802.11 n/ax mixed' },
  { id: 10, label: '802.11 n/ac/ax mixed' }
]

export const selectChannelOptions = [
  { id: 0, label: 'auto' },
  { id: 1, label: '1' },
  { id: 2, label: '2' },
  { id: 3, label: '3' },
  { id: 4, label: '4' },
  { id: 5, label: '5' },
  { id: 6, label: '6' },
  { id: 7, label: '7' },
  { id: 8, label: '8' },
  { id: 9, label: '9' },
  { id: 10, label: '10' },
  { id: 11, label: '11' },
  { id: 12, label: '12' },
  { id: 13, label: '13' }
]

export const selectChannelWidthOptions = [
  { id: 0, label: '20 MHz' },
  { id: 1, label: '40 MHz' },
  { id: 2, label: '20/40 MHz' }
]

export const securityEncryptionOptions = [
  { id: 0, label: 'TKIP' },
  { id: 1, label: 'AES' }
]

export const securityVersionOptions = [
  { id: 0, label: 'WPA' },
  { id: 1, label: 'WPA2' },
  { id: 2, label: 'WPA3' }
]

export const securityModeOptions = { disabled: 'Disable Security', psk: 'PSK', enterprise: 'Enterprise', wep: 'WEP' }

export const getDefaultState = () => {
  return {
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

    // network settings
    network: {
      wanType: 0,
      wanIp: '80.12.123.32',
      wanMask: '255.0.0.0',
      wanStatus: 'connected',
      wanGateway: '80.10.200.1',
      lanIp: '10.13.200.30',
      lanMask: '255.255.252.0',
      lanStatus: 'connected',
      lanMAC: 'B8-27-EB-66-21-11'
    },
    wifi: {
      ssid: '',
      mode: 0, // 11 b only
      channel: 0, // auto
      channel_width: 2, // 20/40MHz
      twoPointFourGHz: false,
      fiveGHz: false,
      security_mode: 'disabled',
      security_psk: {
        version: 0, // wpa
        encryption: 0, // tkip
        pw: ''
      },
      security_enterprise: {
        version: 0, // wpa
        encryption: 0, // tkip
        radius: {
          ip: '',
          port: '1812'
        }
      },
      macFilter: {
        enabled: false,
        rule: 'deny'
      },
      broadcast_ssid: true,
      reduce_tx_power: false,
      turn_off: {
        from: '',
        till: ''
      },
      wps_enabled: true,
      wps_pin: 23529323
    },
    checks: {
      running: false, // not used yet
      done: false
    }
  }
}
