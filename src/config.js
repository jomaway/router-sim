export const darkModeKey = 'darkMode'

export const styleKey = 'style'

export const wifiSettingsKey = 'wifi'

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
