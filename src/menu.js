import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiWifi,
  mdiWeb,
  mdiLan
} from '@mdi/js'

export default [
  'General',
  [
    {
      to: '/status',
      icon: mdiDesktopMac,
      label: 'Status'
    },
  ],
  'Network',
  [
    {
      to: '/wan',
      icon: mdiWeb,
      label: 'Wan'
    },
    {
      to: '/lan',
      icon: mdiLan,
      label: 'Lan'
    }
  ],
  'Wireless',
  [
    {
      to: '/wifi-settings',
      label: 'Settings',
      icon: mdiWifi
    },
    {
      to: '/wifi-security',
      label: 'Security',
      icon: mdiLock
    },
    {
      to: '/wifi-mac',
      label: 'MAC Filtering',
      icon: mdiTelevisionGuide
    },
    {
      to: '/wifi-advanced',
      label: 'Advanced',
      icon: mdiResponsive
    },
    {
      to: '/wifi-stats',
      label: 'Statistics',
      icon: mdiPalette
    },
  ],
  'Extra',
  [
    {
      href: '',
      label: 'About',
      icon: mdiMonitorShimmer,
      target: '_blank'
    },
    {
      href: '',
      label: 'GitHub',
      icon: mdiGithub,
      target: '_blank'
    }
  ]
]
