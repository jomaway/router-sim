<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { mdiInformationVariant } from '@mdi/js'
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

const titleStack = ref(['Wireless', 'Statistics'])

const store = useStore()

const stats = reactive({
  ssid: store.state.wifi.ssid,
  security_mode: store.state.wifi.security_mode
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
      :icon="mdiInformationVariant"
      permanent
    >
      No clients are currently connected.
    </notification>

    <card-component>
      <p><b>SSID: </b> {{ stats.ssid }} </p>
      <p>
        <b>Frequenzbereich:</b>
        <b> 2,4 GHz: </b>{{ store.state.wifi.twoPointFourGHz }}
        <b> 5 GHz: </b>{{ store.state.wifi.fiveGHz }}
      </p>
      <p><b>Mode:</b> {{ store.state.wifi.mode }}</p>
      <divider />
      <p><b>Security Mode: </b> {{ stats.security_mode }} </p>
      <div v-if="stats.security_mode == 'wpa_psk'">
        <p><b>Version: </b> {{ store.state.wifi.security_psk.version }}</p>
        <p><b>Encryption: </b> {{ store.state.wifi.security_psk.encryption }}</p>
        <p><b>PW: </b> {{ store.state.wifi.security_psk.pw }}</p>
      </div>
    </card-component>
  </main-section>
  <bottom-other-pages-section />
</template>
