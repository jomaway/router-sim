<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { mdiBallot, mdiBallotOutline, mdiWifi, mdiPencil, mdiLockOff, mdiAlertCircleOutline } from '@mdi/js'
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
import CardTransactionBar from '@/components/CardTransactionBar.vue'
import CardComponentCollapsable from '@/components/CardComponentCollapsable.vue'
import Notification from '@/components/Notification.vue'
import Icon from '@/components/Icon.vue'

const titleStack = ref(['Wireless', 'Security'])

const store = useStore()

const selectEnryptionOptions = [
  { id: 0, label: 'TKIP' },
  { id: 1, label: 'AES' }
]

const selectVersionOptions = [
  { id: 0, label: 'WPA' },
  { id: 1, label: 'WPA2' },
  { id: 2, label: 'WPA3' }
]

const security = reactive({
  selected: store.state.wifi.security_mode,
  wpa_p: {
    version: selectVersionOptions[store.state.wifi.security_psk.version],
    encryption: selectEnryptionOptions[store.state.wifi.security_psk.encryption],
    pw: store.state.wifi.security_psk.pw
  },
  wpa_e: {
    version: selectVersionOptions[store.state.wifi.security_enterprise.version],
    encryption: selectEnryptionOptions[store.state.wifi.security_enterprise.encryption],
    ip: store.state.wifi.security_enterprise.radius.ip,
    port: store.state.wifi.security_enterprise.radius.port
  }
})

const submit = () => {
  store.commit('wifi', security)
  console.log('Wifi-Security saved')
}

</script>

<template>
  <title-bar :title-stack="titleStack" />

  <main-section>
    <card-component-collapsable
      title="Wifi-Security"
      :icon="mdiWifi"
      expanded
      form
      @submit.prevent="submit"
    >
      <check-radio-picker
        v-model="security.selected"
        name="selected-security-option"
        type="radio"
        :options="{ disabled : 'Disable Security', wpa_psk: 'WPA/WPA2 - PSK', wpa_e : 'WPA/WPA2 Enterprise', wep: 'WEP' }"
      />

      <divider />

      <div v-if="security.selected == 'disabled'">
        <notification
          color="danger"
          :icon="mdiLockOff"
        >
          <b>Warning:</b>
          You disabled all wifi-security settings.
          Your network will be open for everyone within reach.

          <template #right>
            <icon :path="mdiAlertCircleOutline" />
          </template>
        </notification>
      </div>

      <div v-else-if="security.selected == 'wpa_psk'">
        <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
          <field label="Version">
            <control
              v-model="security.wpa_p.version"
              :options="selectVersionOptions"
            />
          </field>
          <field
            label="Encryption"
            help="Select encryption type"
          >
            <control
              v-model="security.wpa_p.encryption"
              :options="selectEnryptionOptions"
            />
          </field>
        </div>
        <field
          label="Password"
          help="Choose a strong password for safety reasons. Verify at https://checkdeinpasswort.de/ "
        >
          <control
            v-model="security.wpa_p.pw"
          />
        </field>
      </div>
      <div v-else-if="security.selected == 'wpa_e'">
        <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
          <field label="Version">
            <control
              v-model="security.wpa_e.version"
              :options="selectVersionOptions"
            />
          </field>
          <field
            label="Encryption"
            help="Select encryption type"
          >
            <control
              v-model="security.wpa_e.encryption"
              :options="selectEnryptionOptions"
            />
          </field>
        </div>
        <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 ">
          <field
            class="col-span-2"
            label="Radius Server IP"
            help="The ip address for the radius server. Example: 192.168.23.99"
          >
            <control
              v-model="security.wpa_e.ip"
            />
          </field>
          <field
            label="Radius Server Port"
            help=""
          >
            <control
              v-model="security.wpa_e.port"
            />
          </field>
        </div>
      </div>
      <div v-else-if="security.selected == 'wep'">
        <notification
          color="warning"
          :icon="mdiLockOff"
        >
          <b>Warning:</b>
          This security option is highly insecure.
          WEP can be hacked within minutes. You should not use this option!

          <template #right>
            <icon :path="mdiAlertCircleOutline" />
          </template>
        </notification>
      </div>
      <div v-else>
        <notification
          color="info"
          :icion="mdiAlertCircleOutline"
        >
          Please select an Security Option!
          <template #right />
        </notification>
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
    </card-component-collapsable>
  </main-section>
  <bottom-other-pages-section />
</template>
