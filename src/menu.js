import {
  mdiDesktopMac,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiViewList,
  mdiWifi,
  mdiWeb,
  mdiLan,
  mdiCellphoneCog 
} from '@mdi/js'

export default [
  'General',
  [
    {
      to: '/status',
      icon: mdiDesktopMac,
      label: 'Status'
    }
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
      icon: mdiViewList
    },
    {
      to: '/wifi-advanced',
      label: 'Advanced',
      icon: mdiSquareEditOutline
    },
    {
      to: '/wifi-wps',
      label: 'WPS',
      icon: mdiCellphoneCog
    },
    {
      to: '/wifi-stats',
      label: 'Statistics',
      icon: mdiAlertCircle
    }
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
