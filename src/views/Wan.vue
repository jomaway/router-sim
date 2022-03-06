<script setup>
import { computed, ref, onMounted, reactive } from 'vue'
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
  mdiCheckNetworkOutline,
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
import JbButtons from '@/components/JbButtons.vue'
import CardTransactionBar from '@/components/CardTransactionBar.vue'
import CardClientBar from '@/components/CardClientBar.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'

const titleStack = ref(['Network', 'WAN'])

const store = useStore()

const clientBarItems = computed(() => store.state.clients.slice(0, 3))

const transactionBarItems = computed(() => store.state.history.slice(0, 3))

const darkMode = computed(() => store.state.darkMode)

const selectConnectionTypeOptions = [
  { id: 0, label: 'dynamic IP' },
  { id: 1, label: 'static IP' }
]

const wan = reactive({
  connectionType: selectConnectionTypeOptions[0],
  ip: '80.18.30.122',
  subnetmask: '255.252.0.0',
  gateway: '80.10.200.1'
})

const isStatic = computed(() => wan.connectionType.id == 1)

const submit = () => {
  // if save button is clicked
  console.log('save wan settings')
}

const allDisabled = true

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <main-section>

    <card-component
      title="Wan Settings"
      :icon="mdiWan"
      form
      @submit.prevent="submit"
    >
      <field
        label="Wan Connection Type"
        help="choose dynamic ip if not sure!"
      >
        <control
          v-model="wan.connectionType"
          :options="selectConnectionTypeOptions"
          :disabled="allDisabled"
        />
      </field>

      <div v-if="isStatic">
        <divider />

        <field label="Wan IP">
          <control v-model="wan.ip" :disabled="allDisabled"/>
        </field>
        <field label="Subnetmask">
          <control v-model="wan.subnetmask" :disabled="allDisabled"/>
        </field>
        <field label="Gateway">
          <control v-model="wan.gateway" :disabled="allDisabled"/>
        </field>
      </div>
      <div v-else>
        <p> Dynamically connected to ISP on  {{ wan.ip }} </p>
      </div>

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
