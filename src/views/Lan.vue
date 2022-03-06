<script setup>
import { computed, ref, reactive } from 'vue'
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
  mdiAccessPointNetworkOff,
  mdiCheckNetworkOutline
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
import JbButtons from '@/components/JbButtons.vue'
import CardTransactionBar from '@/components/CardTransactionBar.vue'
import CardClientBar from '@/components/CardClientBar.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'

const titleStack = ref(['Network', 'LAN'])

const store = useStore()

const darkMode = computed(() => store.state.darkMode)

const lan = reactive({
  mac: '00-0A-EB-13-09-19',
  ip: '192.168.188.1',
  subnetmask: '255.255.255.0'
})

const submit = () => {
  // if save button is clicked
  console.log('save lan settings')
}

const allDisabled = true

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <main-section>
    <card-component
      title="Lan Settings"
      :icon="mdiLan"
      form
      @submit.prevent="submit"
    >
      <field label="MAC Address:">
        <control
          v-model="lan.mac"
          disabled
        />
      </field>

      <field label="Local IP">
        <control v-model="lan.ip" :disabled="allDisabled"/>
      </field>
      <field label="Subnetmask">
        <control v-model="lan.subnetmask" :disabled="allDisabled"/>
      </field>

      <divider />

      <jb-buttons>
        <jb-button
          type="submit"
          color="info"
          label="Save"
          :disabled="allDisabled"
        />
        <jb-button
          type="reset"
          color="info"
          outline
          label="Reset"
          :disabled="allDisabled"
        />
      </jb-buttons>
    </card-component>
  </main-section>
</template>
