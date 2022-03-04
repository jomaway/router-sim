<script setup>
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
  mdiNetwork,
  mdiWifi,
  mdiLan,
  mdiCheckNetwork,
  mdiNetworkOffOutline,
  mdiAccessPointNetworkOff
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

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})

const store = useStore()

const clientBarItems = computed(() => store.state.clients.slice(0, 3))

const transactionBarItems = computed(() => store.state.history.slice(0, 3))

const darkMode = computed(() => store.state.darkMode)
</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Status</hero-bar>
  <main-section>
    <notification
      color="success"
      :icon="mdiNetwork"
    >
      Connected to Network on 192.168.3.12
    </notification>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
      <card-widget
        trend="connected"
        trend-type="up"
        color="text-emerald-500"
        :icon="mdiCheckNetwork"
        :number="0"
        ipv4=" 147.132.24.44"
        label="WAN"
      />
      <card-widget
        trend="connected"
        trend-type="up"
        color="text-blue-500"
        :icon="mdiNetwork"
        :number="0"
        ipv4="192.168.23.1"
        label="LAN"
      />
      <card-widget
        trend="off"
        trend-type="down"
        color="text-red-500"
        :icon="mdiAccessPointNetworkOff"
        :number="256"
        suffix="%"
        label="WIFI"
      />
    </div>


  </main-section>
</template>
