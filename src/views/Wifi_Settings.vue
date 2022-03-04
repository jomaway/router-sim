<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { mdiBallot, mdiBallotOutline, mdiAccount, mdiMail,mdiWifi, mdiPencil } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import CheckRadioPicker from '@/components/CheckRadioPicker.vue'
import FilePicker from '@/components/FilePicker.vue'
import HeroBar from '@/components/HeroBar.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import TitledSection from '@/components/TitledSection.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'
import { onBeforeRouteUpdate } from 'vue-router'

const titleStack = ref(['Wireless', 'Settings'])

const store = useStore()

const selectModeOptions = [
  { id: 0, label: '802.11 b only' },
  { id: 1, label: '802.11 g only' },
  { id: 2, label: '802.11 n only' },
  { id: 3, label: '802.11 ax only' },
  { id: 4, label: '802.11 b/g mixed' },
  { id: 5, label: '802.11 b/g/n mixed' },
  { id: 6, label: '802.11 b/g/n/ax mixed' },

]

const selectChannelOptions = [
  { id: 0, label: '0' },
  { id: 1, label: '1' },
  { id: 2, label: '2' },
  { id: 3, label: '3' },
  { id: 4, label: '4' },
  { id: 5, label: '5' },
  { id: 6, label: '6' },
  { id: 7, label: '7' },
  { id: 8, label: '8' },
  { id: 9, label: '9' },
  { id: 10, label: 'auto' }
]

const selectChannelWidthOptions = [
  { id: 0, label: '20 MHz' },
  { id: 1, label: '40 MHz' },
  { id: 2, label: '20/40 MHz' },
]

const WifiSettingsForm = reactive({
  ssid: store.state.wifi.ssid,
  mode: selectModeOptions[store.state.wifi.mode],
  channel: selectChannelOptions[store.state.wifi.channel],
  channel_width: selectChannelWidthOptions[store.state.wifi.channel_width],
  frequenz: [],
})

console.log("setup")

if (store.state.wifi.twoPointFourGHz) {
  WifiSettingsForm.frequenz.push("twopointfour")
}
if (store.state.wifi.fiveGHz) {
  WifiSettingsForm.frequenz.push("five")
}


const submit = () => {
  // If save button is pressed
  store.commit('wifi', WifiSettingsForm)
  console.log("Wifi-Settings saved")
}

const updateFreq = (value) => {
  console.log("update radio checker")
  console.log(value)
}
</script>

<template>
  <title-bar :title-stack="titleStack" />

  <main-section>
    <card-component
      title="Wifi-Settings"
      :icon="mdiWifi"
      form
      @submit.prevent="submit"
    >
      <field
        label="Frequenz"
        help="Select which frequency should be active"
        wrap-body
      >
        <check-radio-picker
          v-model="WifiSettingsForm.frequenz"
          name="frequency-checkbox"
          :options="{ twopointfour: '2,4 GHz', five: '5 GHz' }"
        />
      </field>
      
      <field 
        label="Wireless Network Name (SSID)"
        help="This is also called SSID">
        <control
          v-model="WifiSettingsForm.ssid"
          :icon="mdiPencil"
        />
      </field>

      <field label="Mode">
        <control
          v-model="WifiSettingsForm.mode"
          :options="selectModeOptions"
        />
      </field>

      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
        <field label="Channel" >
            <control
              v-model="WifiSettingsForm.channel"
              :options="selectChannelOptions"
            />
        </field>
        <field label="Channel Width" help="Select  channel width" >
          <control
            v-model="WifiSettingsForm.channel_width"
            :options="selectChannelWidthOptions"
          />
        </field>
      </div>
      

      <divider />

      <jb-buttons>
        <jb-button
          type="submit"
          color="info"
          label="Save"
        />
        <jb-button
          type="reset"
          color="info"
          outline
          label="Reset"
        />
      </jb-buttons>
    </card-component>
  </main-section>
</template>
