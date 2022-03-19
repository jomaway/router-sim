<script setup>
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'
import { mdiWifi } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import CardComponentCollapsable from '@/components/CardComponentCollapsable.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import { selectModeOptions, securityModeOptions, securityVersionOptions, securityEncryptionOptions, isDebugMode } from '@/config'
import ConfigCheckMsg from '@/components/ConfigCheckMsg.vue'
import ConfigInfoMsg from '@/components/ConfigInfoMsg.vue'

const titleStack = ref(['Wireless', 'Statistics'])

const store = useStore()
const toast = useToast()

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
  running: false,
  done: store.state.checks.done,
  code: 0,
  wrongCode: false
})

const overviewCard = ref(null)
const runChecksCode = ref(null)
const checksDone = computed(() => isDebugMode ? true : store.state.checks.done)

const runChecks = () => {
  console.log('starting checks ...', checks.code)
  if (checks.code === '23985') {
    checks.running = true
    overviewCard.value.toggleExpanded()
    store.dispatch('checksDone', true)
    toast.info('Running checks ... ')
    setTimeout(cbRunChecks, 6000)
  } else {
    checks.wrongCode = true
    toast.error('Please insert corect code')
  }
}

const cbRunChecks = () => {
  checks.running = false
  toast.success('Running checks done ')
}

</script>

<template>
  <title-bar :title-stack="titleStack" />

  <main-section>
    <card-component-collapsable
      ref="overviewCard"
      title="Overview:"
      :expanded="!(checksDone)"
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
      v-if="!checksDone"
      title="Run checks"
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
          label="Starte die Überprüfung"
          help="Gebe den Code ein und klicke auf den Button Run checks"
          form
        >
          <control
            ref="runChecksCode"
            placeholder="Enter Code"
            type="numbers"
            :wrong-input="checks.wrongCode"
            @input="event => checks.code = event.target.value"
            @keyup.enter="runChecks"
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
      v-else
      title="Auswertung"
      class="bg-blue-200"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="flex flex-col gap-4">
          <p>Hier siehst du die <b>Auswertung deiner Konfiguration</b>.</p>
          <p>
            Du kannst die aktuelle Konfiguration nun nicht mehr ändern.
          </p>
          <p class="mb-2">
            Auf der <a
              href="#/status"
              class="link text-red-700 font-bold"
            > ➡ Status Seite </a> kannst du einen <b>Reset</b> durchführen und mit der Konfiguration nochmal von vorne anfangen.
          </p>
        </div>
        <div>
          <field label="Bedeutung der Farben!">
            <config-check-msg
              :condition="true"
              success-msg="Diese Einstellung ist gut. 👍"
            />
            <config-check-msg
              :condition="false"
              warning-msg="Diese Einstellung kann verbessert werden. 🤔"
            />
            <config-check-msg
              :condition="false"
              is-critical
              warning-msg="Diese Einstellung macht dein WLAN unsicher und angreifbar! 🤬"
            />
            <config-info-msg msg="Dies ist eine Information. 🤗" />
          </field>
        </div>
      </div>
    </card-component>

    <div class="h-2" />

    <card-component
      v-if="checks.running"
      class="bg-orange-600"
    >
      <div class="flex items-center gap-2">
        <svg
          role="status"
          class="mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <p class="font-bold text-lg">
          Die Konfiguration wird ausgewertet. Dies dauert einen kurzen Moment.
        </p>
      </div>
    </card-component>

    <div
      v-if="checksDone && !(checks.running)"
      id="check-results-wrapper"
    >
      <card-component-collapsable
        expanded
        title="WLAN-Settings"
        class="mb-2"
      >
        <!-- WLAN check -->

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          <div class="flex flex-col gap-1">
            <p class="font-bold">
              Allgemein
            </p>
            <config-check-msg
              :condition="wifiEnabled"
              :icon="mdiWifi"
              success-msg="WLAN ist aktiviert."
              warning-msg="Du hast das WLAN nicht aktiviert"
            />
            <config-check-msg
              :condition="store.state.wifi.twoPointFourGHz"
              success-msg="Die 2,4 GHz Frequenz is aktiviert."
              warning-msg="Die 2,4 GHz Frequenz ist nicht aktiviert"
            />
            <config-check-msg
              :condition="store.state.wifi.fiveGHz"
              success-msg="Die 5 GHz Frequenz is aktiviert."
              warning-msg="Die 5 GHz Frequenz ist nicht aktiviert"
            />
            <config-info-msg
              v-if="store.state.wifi.ssid != ''"
              msg="Your SSID is:"
              :value="store.state.wifi.ssid"
            />
          </div>
          <!-- right side -->
          <div class="flex flex-col gap-1">
            <p class="font-bold">
              Unterstütze WLAN-Standards
            </p>
            <config-check-msg
              :condition="!wifiBackwardsSupport"
              success-msg="Unterstützung für ältere Wifi-Standards deaktiviert. Gut 👍"
              warning-msg="Unterstützung für ältere Wifi-Standards aktiviert. Das ist nicht nötig 🤔"
            />
            <config-check-msg
              :condition="wifi4Support"
              success-msg="Wifi-4️⃣ wird unterstützt."
              warning-msg="Wifi-4️⃣ wird nicht unterstützt."
            />
            <config-check-msg
              :condition="wifi5Support"
              success-msg="Wifi-5️⃣ wird unterstützt."
              warning-msg="Wifi-5️⃣ wird nicht unterstützt."
            />
            <config-check-msg
              :condition="wifi6Support"
              success-msg="Wifi-6️⃣ wird unterstützt."
              warning-msg="Wifi-6️⃣ wird nicht unterstützt."
            />
          </div>
        </div>
        <!-- WLAN channel check -->
        <config-check-msg
          :condition="!store.state.wifi.channel > 0"
          success-msg="Auto Channel aktiviert. Der Router wählt automatisch den verwendeten Kanal."
          warning-msg="Du hast einen festen Kanal gewählt. Auto Channel ist meist die bessere Option."
        />
      </card-component-collapsable>

      <card-component-collapsable
        title="WLAN-Security"
        expanded
        class="mb-2"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2 w-full">
          <div>
            <p class="font-bold mb-2">
              Authentifizierung
            </p>
            <config-check-msg
              :condition="!(store.state.wifi.security_mode == 'disabled' || store.state.wifi.security_mode == 'wep')"
              success-msg="WLAN durch Authentifizierung abgesichert."
              warning-msg="WLAN nicht abgesichert."
              is-critical
            />
            <config-info-msg
              v-if="store.state.wifi.security_mode == 'disabled'"
              msg="Du hast keine Authentifizierung ausgewählt!"
            />
            <config-info-msg
              v-if="store.state.wifi.security_mode == 'wep'"
              msg="Die Methode WEP ist veraltet und unsicher!"
            />
            <config-info-msg
              v-if="store.state.wifi.security_mode == 'psk'"
              msg="Dein Passwort ist:"
              :value="store.state.wifi.security_psk.pw"
            />
            <p
              v-if="store.state.wifi.security_mode == 'psk'"
              class="text-sm ml-2  text-slate-700"
            >
              Überprüfe die Sicherheit deines Passworts unter <a
                href="https://checkdeinpasswort.de/"
                target="_blank"
                class="text-red-700"
              >checkdeinpasswort.de</a>
            </p>
            <config-info-msg
              v-if="store.state.wifi.security_mode == 'enterprise'"
              msg="Für diese Authentifizierung brauchst du einen extra Radius server!"
              is-warning
            />
          </div>
          <div v-if="!(store.state.wifi.security_mode == 'disabled' || store.state.wifi.security_mode == 'wep')">
            <p class="font-bold mb-2">
              Verschlüsselung
            </p>
            <div v-if="store.state.wifi.security_mode == 'psk'">
              <config-check-msg
                :condition="store.state.wifi.security_psk.version > 0"
                success-msg="WLAN Verschlüsselung sicher"
                warning-msg="WLAN Verschlüsselung nicht sicher. WPA kann gehackt werden."
                is-critical
              />
              <config-check-msg
                :condition="store.state.wifi.security_psk.encryption == 1"
                success-msg="Verschlüsselungsalgorithmus sicher. 👍"
                warning-msg="Verschlüsselungsalgorithmus veraltet. Nutze AES."
              />
            </div>
            <div v-else-if="store.state.wifi.security_mode == 'enterprise'">
              <config-check-msg
                :condition="store.state.wifi.security_enterprise.version > 0"
                success-msg="WLAN Verschlüsselung sicher"
                warning-msg="WLAN Verschlüsselung nicht sicher. WPA kann gehackt werden."
                is-critical
              />
              <config-check-msg
                :condition="store.state.wifi.security_enterprise.encryption == 1"
                success-msg="Verschlüsselungsalgorithmus sicher. 👍"
                warning-msg="Verschlüsselungsalgorithmus veraltet. Nutze AES."
              />
            </div>
          </div>
        </div>
      </card-component-collapsable>

      <card-component-collapsable
        title="Weitere Einstellungen"
        expanded
        class="mb-2"
      >
        <div class="grid grid-cols-1 md: grid-cols-2 gap-2">
          <div>
            <p class="font-bold mb-2">
              Advanced-Settings
            </p>
            <field help="Wird der SSID Broadcast deaktiviert wird das WLAN in der Liste der verfügbaren Netzwerke nicht angezeigt. Für Hacker ist es jedoch trotzdem leicht auffindbar.">
              <config-check-msg
                :condition="store.state.wifi.broadcast_ssid"
                success-msg="SSID-Broadcast aktiviert. "
                warning-msg="SSID-Broadcast deaktiviert."
              />
            </field>
            <field help="Durch die Reduzierung der Sendeleistung wird die Reichweite des Netzwerks beeinflusst.">
              <config-check-msg
                :condition="!store.state.wifi.reduce_tx_power"
                success-msg="Sendeleistung der Antennen reduziert."
                warning-msg="Sendeleistung der Antennen nicht reduziert."
              />
            </field>
            <field
              label="Zeitschaltung"
              help="Du solltest das WLAN in der Nacht automatisch abschalten!"
            >
              <config-check-msg
                :condition="!(store.state.wifi.turn_off.from == '' || store.state.wifi.turn_off.till == '')"
                success-msg="Automatische Zeitabschaltung aktiviert."
                warning-msg="Automatische Zeitabschaltung nicht aktiviert."
              />
            </field>
          </div>
          <!-- right side -->
          <div>
            <field
              label="MAC-Filter"
              help="Durch die Aktivierung des MAC-Filters kann man WLAN Geräte mit bestimmten MAC-Adressen vom WLAN ausschließen."
            >
              <config-check-msg
                :condition="store.state.wifi.macFilter.enabled"
                success-msg="MAC-Filter aktiviert."
                warning-msg="MAC-Filter nicht aktiviert."
              />
            </field>
            <field
              label="WPS-Einstellungen"
              help="WPS vereinfacht es neue Geräte zum WLAN hinzuzufügen. Macht den WLAN-Zugang aber auch einfacher angreifbar."
            >
              <config-check-msg
                :condition="!store.state.wifi.wps_enabled"
                success-msg="WPS nicht aktiviert."
                warning-msg="WPS aktiviert."
              />
            </field>
          </div>
        </div>
      </card-component-collapsable>
    </div>
  </main-section>
  <bottom-other-pages-section />
</template>
