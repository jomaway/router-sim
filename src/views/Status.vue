<script setup>
import { computed, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import {
  mdiGithub,
  mdiChartPie,
  mdiNetwork,
  mdiWifi,
  mdiCheckNetwork,
  mdiNetworkOffOutline,
  mdiAccessPointNetwork,
  mdiAccessPointNetworkOff,
  mdiLan,
  mdiWeb
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config.js'
import LineChart from '@/components/Charts/LineChart.vue'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import CardWidget from '@/components/CardWidget.vue'
import CardComponent from '@/components/CardComponent.vue'
import ClientsTable from '@/components/ClientsTable.vue'
import Notification from '@/components/Notification.vue'
import JbButton from '@/components/JbButton.vue'
import CardTransactionBar from '@/components/CardTransactionBar.vue'
import CardClientBar from '@/components/CardClientBar.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'

const titleStack = ref(['General', 'Status'])


const store = useStore()

const darkMode = computed(() => store.state.darkMode)

const lanStatus = ref('connected')
const wanStatus = ref('connected')
const wifiStatus = computed(() => store.state.wifi.twoPointFourGHz || store.state.wifi.fiveGHz)

const status = reactive({
  wan_ip: store.state.network.wanIp,
  lan_ip: store.state.network.lanIp,
})

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <main-section>
    <notification
      color="success"
      :icon="mdiCheckNetwork"
    >
      Connected to the Internet on {{status.wan_ip}}
    </notification>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
      <card-widget
        trend="connected"
        trend-type="on"
        color="text-emerald-500"
        :icon="mdiWeb"
        :number="0"
        :ipv4="status.wan_ip"
        label="WAN"
        link="/wan"
      />
      <card-widget
        trend="connected"
        trend-type="on"
        color="text-blue-500"
        :icon="mdiLan"
        :number="0"
        :ipv4="status.lan_ip"
        label="LAN"
        link="/lan"
      />
      <card-widget
        v-if="!wifiStatus"
        trend="off"
        trend-type="off"
        color="text-red-500"
        :icon="mdiAccessPointNetworkOff"
        :number="0"
        suffix=" clients"
        label="WIFI"
        link="/wifi-settings"
      />
      <card-widget
        v-else
        trend="on"
        trend-type="on"
        color="text-red-500"
        :icon="mdiAccessPointNetwork"
        :number="0"
        suffix=" clients"
        label="WIFI"
        link="/wifi-settings"
      />
    </div>
  </main-section>
</template>
