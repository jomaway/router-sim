<script setup>
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'
import { mdiInformationVariant, mdiCog, mdiWifi, mdiAlert, mdiCheck, mdiAlertOctagram, mdiLockAlert } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import Notification from '@/components/Notification.vue'
import CardComponentCollapsable from '@/components/CardComponentCollapsable.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import { selectModeOptions, securityModeOptions, securityVersionOptions, securityEncryptionOptions } from '@/config'

const titleStack = ref(['Wireless', 'Statistics'])

const store = useStore()
const toast = useToast()

const darkMode = computed(() => store.state.darkMode)

const wifiEnabled = computed(() => store.state.wifi.twoPointFourGHz || store.state.wifi.fiveGHz)

const wifiBackwardsSupport = computed(() => {
  const mode = store.state.wifi.mode
  console.log(mode)
  console.log(mode <= 2 || (mode > 6 && mode < 8))
  return (mode <= 2 || (mode >= 6 && mode <= 8))
})
const wifi4Support = computed(() => {
  const mode = store.state.wifi.mode
  return (mode === 4 || mode >= 6)
})
const wifi5Support = computed(() => {
  const mode = store.state.wifi.mode
  return (mode === 3 || mode === 7 || mode === 8 || mode === 10)
})
const wifi6Support = computed(() => {
  const mode = store.state.wifi.mode
  return (mode === 5 || mode >= 9)
})

const schedulerEnabled = computed(() => {
  return !(store.state.wifi.turn_off.from === '' || store.state.wifi.turn_off.till === '')
})

const checks = reactive({
  done: store.state.checks.done,
  code: 0,
  wrongCode: false
})
const checksDone = computed(() => store.state.checks.done)

const runChecks = () => {
  console.log('starting checks ...', checks.code)
  if (checks.code === '23985') {
    store.commit('runChecks', true)
    toast.success('Running checks done ')
  } else {
    checks.wrongCode = true
    toast.error('Please insert corect code')
  }
}

</script>

<template>
  <title-bar :title-stack="titleStack" />

  <main-section>
    <card-component-collapsable
      title="Overview:"
      expanded
      class="bg-gray-200"
    >
      <div class="flex flex-col gap-2">
        <p><b>SSID: </b> {{ store.state.wifi.ssid }} </p>
        <p><b>2,4 GHz: </b> {{ store.state.wifi.twoPointFourGHz ? 'aktiviert' : 'deaktiviert' }} </p>
        <p><b> 5 GHz: </b>{{ store.state.wifi.fiveGHz ? 'aktiviert' : 'deaktiviert' }}</p>
        <p><b>Mode:</b> {{ selectModeOptions[store.state.wifi.mode].label }}</p>
      </div>
      <divider />
      <div class="flex flex-col gap-2">
        <p><b>Security Mode: </b> {{ securityModeOptions[store.state.wifi.security_mode] }} </p>
        <div v-if="store.state.wifi.security_mode === 'psk'">
          <p><b>Version: </b> {{ securityVersionOptions[store.state.wifi.security_psk.version].label }}</p>
          <p><b>Encryption: </b> {{ securityEncryptionOptions[store.state.wifi.security_psk.encryption].label }}</p>
          <p><b>PW: </b> {{ store.state.wifi.security_psk.pw }}</p>
        </div>
        <div v-else-if="store.state.wifi.security_mode === 'enterprise'">
          <p><b>Version: </b> {{ securityVersionOptions[store.state.wifi.security_enterprise.version].label }}</p>
          <p><b>Encryption: </b> {{ securityEncryptionOptions[store.state.wifi.security_enterprise.encryption].label }}</p>
          <p><b>Radius server Ip: </b> {{ store.state.wifi.security_enterprise.radius.ip }}</p>
          <p><b>Radius server Port: </b> {{ store.state.wifi.security_enterprise.radius.port }}</p>
        </div>
      </div>
      <divider />
      <div class="flex flex-col gap-2">
        <p><b>MAC-Filter: </b> {{ store.state.wifi.macFilter.enabled ? 'aktiviert' : 'deaktiviert' }}  - <b>Regel</b>: {{ store.state.wifi.macFilter.rule }} </p>
        <p><b>SSID-Broadcast : </b> {{ store.state.wifi.broadcast_ssid ? 'aktiviert' : 'deaktiviert' }} </p>
        <p><b>Sendeleistung: </b> {{ store.state.wifi.reduce_tx_power ? 'reduziert' : 'nicht reduziert' }} </p>
        <p><b>WLAN Zeitabschaltung: </b> {{ schedulerEnabled ? 'aktiviert' : 'deaktiviert' }} </p>
        <p v-if="schedulerEnabled">
          <b>Wlan wird ausgeschalten von: </b> {{ store.state.wifi.turn_off.from ?? '00:00' }} <b> bis: </b> {{ store.state.wifi.turn_off.till ?? '00:00' }}
        </p>
        <p><b>WPS:</b> {{ store.state.wifi.wps_enabled ? 'aktiviert' : 'deaktiviert' }} </p>
      </div>
    </card-component-collapsable>

    <div class="h-2" />

    <card-component
      title="Run Checks"
      class="bg-red-200"
    >
      <div class="flex flex-col gap-4">
        <p class="">
          Wenn du die Konfiguration abgeschlossen hast kannst du hier deine Einstellungen überprüfen.
        </p>
        <p class="mb-2">
          <b>Überprüfe</b> nochmal ob deine Einstellungen alle <b>Anforderungen</b> (siehe Whitebaord) erfüllen, bevor du die Checks startest.
        </p>
        <field
          label="Starte die Checks"
          help="Gebe den Code ein und klicke auf den Button Run checks"
        >
          <control
            id="runChecksCode"
            placeholder="Enter Code"
            type="numbers"
            :wrong-input="checks.wrongCode"
            @input="event => checks.code = event.target.value"
          />
          <jb-button
            type="button"
            color="warning"
            label="Run checks"
            @click="runChecks"
          />
        </field>
      </div>
    </card-component>

    <card-component
      v-if="checksDone"
      title="WLAN-Settings"
    >
      <!-- WLAN check -->
      <notification
        v-if="wifiEnabled"
        color="success"
        :icon="mdiWifi"
        permanent
      >
        WLAN is enabled.
      </notification>
      <notification
        v-else
        color="warning"
        :icon="mdiWifi"
      >
        WLAN is disabled. Go to Wireless Settings to enable it.
        <template #right>
          <jb-button
            to="/wifi-settings"
            :icon="mdiCog"
            icon-w="w-4"
            icon-h="h-4"
            :color="darkMode ? 'white' : 'light'"
            :outline="darkMode"
            small
          />
        </template>
      </notification>

      <!-- IF WLAN enabled -->
      <div
        v-if="wifiEnabled"
        class="mb-6"
      >
        <!-- WLAN freq info -->
        <notification
          v-if="store.state.wifi.twoPointFourGHz"
          color="info"
          :icon="mdiInformationVariant"
          permanent
        >
          The <b>2,4 GHz</b> frequency is enabled.
        </notification>
        <notification
          v-else
          color="warning"
          :icon="mdiAlert"
          permanent
        >
          The <b>2,4 GHz</b> frequency is disabled. Devices which only support this frequency can't connect to your Network.
        </notification>

        <notification
          v-if="store.state.wifi.fiveGHz"
          color="info"
          :icon="mdiInformationVariant"
          permanent
        >
          The <b>5 GHz</b> frequency is enabled.
        </notification>
        <notification
          v-else
          color="warning"
          :icon="mdiAlert"
          permanent
        >
          The <b>5 GHz</b> frequency is disabled. Devices which only support this frequency can't connect to your Network.
        </notification>
        <!-- WLAN ssid info -->
        <notification
          v-if="store.state.wifi.ssid != ''"
          color="info"
          :icon="mdiInformationVariant"
          permanent
        >
          Your SSID is: <b> {{ store.state.wifi.ssid }} </b>
        </notification>
        <notification
          v-else
          color="danger"
          :icon="mdiAlertOctagram"
          permanent
        >
          Your SSID is emtpy!
        </notification>
        <!-- WLAN mode check  TODO! -->
        <!-- Older SUpport check -->
        <notification
          v-if="!wifiBackwardsSupport"
          color="success"
          :icon="mdiCheck"
          permanent
        >
          <b>WLAN Mode:</b> Good. 👍 Older Wifi-Versions should not be supported if not necessary!
        </notification>
        <notification
          v-if="wifiBackwardsSupport"
          color="warning"
          :icon="mdiAlert"
          permanent
        >
          <b>WLAN Mode:</b> Ahh. 🤔 You enabled support for older Wifi-versions. If not necessary disable them.
        </notification>

        <!-- WIFI-6 SUpport check -->
        <notification
          v-if="wifi4Support"
          color="success"
          :icon="mdiCheck"
          permanent
        >
          <b>WLAN Mode:</b> Wifi-4️⃣ is supported
        </notification>
        <notification
          v-if="!wifi4Support"
          color="warning"
          :icon="mdiAlert"
          permanent
        >
          <b>WLAN Mode:</b> Wifi-4️⃣ is not supported!
        </notification>
        <!-- WIFI-5 SUpport check -->
        <notification
          v-if="wifi5Support"
          color="success"
          :icon="mdiCheck"
          permanent
        >
          <b>WLAN Mode:</b> Wifi-5️⃣ is supported
        </notification>
        <notification
          v-if="!wifi5Support"
          color="warning"
          :icon="mdiAlert"
          permanent
        >
          <b>WLAN Mode:</b> Wifi-5️⃣ is not supported!
        </notification>
        <!-- WIFI-6 SUpport check -->
        <notification
          v-if="wifi6Support"
          color="success"
          :icon="mdiCheck"
          permanent
        >
          <b>WLAN Mode:</b> Wifi-6️⃣is supported
        </notification>
        <notification
          v-if="!wifi6Support"
          color="warning"
          :icon="mdiAlert"
          permanent
        >
          <b>WLAN Mode:</b> Wifi-6️⃣ is not supported!
        </notification>
        <!-- WLAN channel check -->
        <notification
          v-if="store.state.wifi.channel > 0"
          color="warning"
          :icon="mdiAlert"
          permanent
        >
          <b>WLAN Channel Settings:</b> Do you know what you are doing? If you don't have a reason choose the option <i>auto</i>.
        </notification>
      </div>
    </card-component>

    <!-- IF WLAN enabled -->
    <div
      v-if="wifiEnabled && checksDone"
      class="mb-6"
    >
      <card-component title="WLAN-Security">
        <!-- WLAN security check start -->
        <notification
          v-if="store.state.wifi.security_mode == 'disabled' || store.state.wifi.security_mode == 'wep'"
          color="danger"
          :icon="mdiAlertOctagram "
          permanent
        >
          <b>Danger:</b> Security level to low.
        </notification>
        <notification
          v-else-if="store.state.wifi.security_mode == 'wpa_e'"
          color="warning"
          :icon="mdiLockAlert"
          permanent
        >
          <b>Warning:</b> Good Idea to use WPA/WPA2 Enterprise. But we don't have an Radius Server.
        </notification>
        <notification
          v-else
          color="success"
          :icon="mdiCheck"
          permanent
        >
          <b>Good choise:</b> Using WPA/WPA2-PSK is a good option if your password is strong enough. ➡ Check at: <a
            class="text-yellow-400"
            href="https://checkdeinpasswort.de/"
            target="_blank"
          >checkdeinpasswort.de</a>
        </notification>
        <!-- IF WLAN security = PSK  -->
        <div
          v-if="store.state.wifi.security_mode == 'wpa_psk'"
          class="my-6"
        >
          <!-- Security PSK version check -->
          <notification
            v-if="store.state.wifi.security_psk.version > 0"
            color="success"
            :icon="mdiCheck"
            permanent
          >
            <b>Security Version is good </b> WPA2 or WPA3 is a good choise
          </notification>
          <notification
            v-if="store.state.wifi.security_psk.version == 0"
            color="danger"
            :icon="mdiAlert"
            permanent
          >
            <b>Security Version:</b> Wahh. You should not use WPA anymore! 😮
          </notification>
          <!-- Security PSK encryption check -->
          <notification
            v-if="store.state.wifi.security_psk.encryption > 0"
            color="success"
            :icon="mdiCheck"
            permanent
          >
            <b>Security Encryption:</b> The AES Encryption does a good job. 👍
          </notification>
          <notification
            v-else
            color="warning"
            :icon="mdiAlert"
            permanent
          >
            <b>Security Encryption:</b> You should update to AES if possible.
          </notification>
        </div>
        <!-- WLAN security check end -->
      </card-component>
      <card-component title="Mac-Filter">
        <!-- Mac Filter check -->
        <notification
          v-if="store.state.wifi.macFilter.enabled"
          color="success"
          :icon="mdiCheck"
          permanent
        >
          <b>MAC-Filter enabled:</b> Enabling MAC-Filters is a good option to secure your Wifi-Network. But be aware that hackers can bypass this easily.
        </notification>
        <notification
          v-else
          color="warning"
          :icon="mdiAlert"
        >
          <b>MAC-Filter disabled:</b> Enabling MAC-Filters is an option to secure your Wifi-Network.
          <template #right>
            <jb-button
              to="/wifi-mac"
              :icon="mdiCog"
              icon-w="w-4"
              icon-h="h-4"
              :color="darkMode ? 'white' : 'light'"
              :outline="darkMode"
              small
            />
          </template>
        </notification>
      </card-component>
      <card-component title="WLAN-Advanced-Settings">
        <!-- WIFI Advanced check -->
        <!-- WIFI Advanced - broadcast check -->
        <notification
          v-if="store.state.wifi.broadcast_ssid"
          color="success"
          :icon="mdiCheck"
          permanent
        >
          <b>SSID-Broadcast:</b> enabled. This will allow you to see the Wifi in the List of available Networks.
        </notification>
        <notification
          v-else
          color="warning"
          :icon="mdiAlert"
          permanent
        >
          <b>SSID-Broadcast:</b> disabled. You won't find your WLAN in the List of available Networks.
        </notification>
        <!-- WIFI Advanced - reduce antenna tx power check -->
        <notification
          v-if="store.state.wifi.reduce_tx_power"
          color="success"
          :icon="mdiCheck"
          permanent
        >
          <b>Reduce antenna transmit power:</b> enabled.
        </notification>
        <notification
          v-else
          color="warning"
          :icon="mdiAlert"
          permanent
        >
          <b>Reduce antenna transmit power:</b> disabled.
        </notification>
        <!-- WIFI Advanced - scheduler check -->
        <notification
          v-if="store.state.wifi.turn_off.from == '' || store.state.wifi.turn_off.till == ''"
          color="warning"
          :icon="mdiCheck"
          permanent
        >
          <b>Scheduler disabled.</b>  Maybe you can automatically turn wifi off during the night?
        </notification>
        <notification
          v-else
          color="success"
          :icon="mdiAlert"
          permanent
        >
          <b>Scheduler active. </b> Check if the time settings make sence.
        </notification>
      </card-component>
      <card-component title="WPS Settings">
        <!-- WIFI WPS check -->
        <notification
          v-if="store.state.wifi.wps_enabled"
          color="warning"
          :icon="mdiCheck"
          permanent
        >
          <b>WPS enabled.</b> WPS is a nice option to add new devices to the wlan. But it may be an security hole. Better turn it off.
        </notification>
        <notification
          v-else
          color="success"
          :icon="mdiAlert"
          permanent
        >
          <b>WPS disabled</b> That sounds like a good idea. 👌
        </notification>
      </card-component>
      <card-component title="Further Information">
        <!-- Further Information -->
        <notification
          color="info"
          :icon="mdiInformationVariant"
          permanent
        >
          No clients are currently connected.
        </notification>
      </card-component>
    </div>
  </main-section>
  <bottom-other-pages-section />
</template>
