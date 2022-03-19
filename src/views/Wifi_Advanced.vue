<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'
import { mdiWifi } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import ToggleSwitch from '@/components/ToggleSwitch.vue'

const titleStack = ref(['Wireless', 'Advanced'])

const store = useStore()
const toast = useToast()

const WifiAdvancedForm = reactive({
  broadcast_ssid: store.state.wifi.broadcast_ssid,
  reduce_tx_power: store.state.wifi.reduce_tx_power,
  turn_off: {
    from: store.state.wifi.turn_off.from,
    till: store.state.wifi.turn_off.till
  }
})

const submit = () => {
  store.dispatch('saveWifiAdvancedSettings', WifiAdvancedForm)
  console.log('Wifi Advanced Settings saved')
  toast.success('Advanced settings saved')
}

const allDisabled = ref(store.state.checks.done)

</script>

<template>
  <title-bar :title-stack="titleStack" />

  <main-section>
    <card-component
      title="Wifi-Advanced-Settings"
      :icon="mdiWifi"
      form
      @submit.prevent="submit"
    >
      <field
        label="Broadcast SSID"
        help="Wenn diese Option deaktiviert ist, wird die SSID, auf einem Client (Smarphone, Laptop), nicht in der Liste der verfügbaren WLANs angezeigt."
      >
        <toggle-switch
          v-model="WifiAdvancedForm.broadcast_ssid"
          name="wifi-broadcast-ssid-switch"
          :disabled="allDisabled"
        />
      </field>

      <field
        label="Reduce antenna transmit power"
        help="Diese Option schränkt die Sendeleistung und damit die Reichweite des WLANs ein."
      >
        <toggle-switch
          v-model="WifiAdvancedForm.reduce_tx_power"
          name="wifi-reduce_tx_power-switch"
          :disabled="allDisabled"
        />
      </field>

      <divider />

      <field
        label="Scheduler"
        help="WLAN zeitgesteuert ausschalten."
      >
        <div class="flex gap-2 items-center">
          <span class="col-span-2 text-center ">WLAN ausschalten von </span>
          <control
            v-model="WifiAdvancedForm.turn_off.from"
            :disabled="allDisabled"
          />
          <span> bis </span>
          <control
            v-model="WifiAdvancedForm.turn_off.till"
            :disabled="allDisabled"
          />
          <span> Uhr. </span>
        </div>
      </field>

      <divider />

      <jb-buttons>
        <jb-button
          type="submit"
          color="info"
          label="Save"
          :disabled="allDisabled"
        />
      </jb-buttons>
    </card-component>
  </main-section>

  <bottom-other-pages-section />
</template>
