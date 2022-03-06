<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { mdiBallot, mdiBallotOutline, mdiAccount, mdiMail, mdiWifi, mdiInformationVariant } from '@mdi/js'
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
import Notification from '@/components/Notification.vue'

const titleStack = ref(['Wireless', 'Advanced'])

const store = useStore()

const WifiAdvancedForm = reactive({
  broadcast_ssid: true,
  reduce_tx_power: false
})

const submit = () => {
  // save settings
}

</script>

<template>
  <title-bar :title-stack="titleStack" />

  <main-section>
    <notification
      color="info"
      :icon="mdiInformationVariant "
      permanent
    >
      No advanced settings available.
    </notification>

    <card-component
      title="Wifi-Advanced-Settings"
      :icon="mdiWifi"
      form
      @submit.prevent="submit"
    >

      <field label="Broadcast SSID" help="You can ">
        <check-radio-picker
          v-model="WifiAdvancedForm.broadcast_ssid"
          name="wifi-broadcast-ssid-switch"
          type="switch"
          :options="{broadcast:''}"
        />
      </field>

      <field label="Reduce antenna transmit power">
        <check-radio-picker
          v-model="WifiAdvancedForm.reduce_tx_power"
          name="wifi-reduce_tx_power-switch"
          type="switch"
          :options="{reduce:''}"
        />
      </field>

      Sendeleistung redizieren!!
      <p> Wlan abschalten.</p>
      <p>Gastwlan</p>
    </card-component>
  </main-section>

  <bottom-other-pages-section />
</template>
