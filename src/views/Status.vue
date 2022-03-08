<script setup>
import { computed, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import {
  mdiWifi,
  mdiCheckNetwork,
  mdiAccessPointNetwork,
  mdiAccessPointNetworkOff,
  mdiLan,
  mdiWeb,
  mdiHumanGreeting,
  mdiArrowLeftThick,
  mdiArrowTopRight,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiViewList,
  mdiCellphoneCog,
  mdiFormatListChecks,
  mdiInformation
} from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import CardWidget from '@/components/CardWidget.vue'
import CardComponent from '@/components/CardComponent.vue'
import Notification from '@/components/Notification.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import Divider from '@/components/Divider.vue'
import Icon from '@/components/Icon.vue'
import ModalBox from '@/components/ModalBox.vue'
import FilePicker from '@/components/FilePicker.vue'
import Control from '@/components/Control.vue'
import Field from '@/components/Field.vue'
import CardComponentCollapsable from '@/components/CardComponentCollapsable.vue'

const titleStack = ref(['General', 'Status'])

const store = useStore()

const lanStatus = ref('connected')
const wanStatus = ref('connected')
const wifiStatus = computed(() => store.state.wifi.twoPointFourGHz || store.state.wifi.fiveGHz)

const status = reactive({
  wan_ip: store.state.network.wanIp,
  lan_ip: store.state.network.lanIp
})

function exportSettings () {
  const filename = 'routersim-settings.json'
  const text = JSON.stringify(store.state.wifi)

  const element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

const settingsFile = ref(null)

function loadSettings (value) {
  // isLoadModalActive.value = true
  console.log('try to load settigs from ', settingsFile.value)
  const reader = new FileReader()

  reader.onload = (event) => {
    console.log('Settings file read success. Content is ', event.target.result)
    store.dispatch('loadWifiSettings', event.target.result)
    console.log('Settings dispatched to store')
    store.dispatch('saveWifiSettings', {})
  }

  reader.readAsText(settingsFile.value)
}

const isLoadModalActive = ref(false)

</script>

<template>
  <modal-box
    v-model="isLoadModalActive"
    button-label="Load"
    button="warning"
    title="Load Settings"
    has-cancel
    @confirm="loadSettings"
  >
    <file-picker v-model="settingsFile" />
  </modal-box>

  <title-bar :title-stack="titleStack" />
  <main-section>
    <notification
      color="success"
      :icon="mdiCheckNetwork"
    >
      Connected to the Internet on {{ status.wan_ip }}
    </notification>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
      <card-widget
        :trend="wanStatus"
        trend-type="on"
        color="text-emerald-500"
        :icon="mdiWeb"
        :number="0"
        :ipv4="status.wan_ip"
        label="WAN"
        link="/wan"
      />
      <card-widget
        :trend="lanStatus"
        trend-type="on"
        color="text-blue-500"
        :icon="mdiLan"
        :number="0"
        :ipv4="status.lan_ip"
        label="LAN"
        link="/lan"
      />
      <card-widget
        v-if="!wifiStatus"
        trend="off"
        trend-type="off"
        color="text-red-500"
        :icon="mdiAccessPointNetworkOff"
        :number="0"
        suffix=" clients"
        label="WIFI"
        link="/wifi-settings"
      />
      <card-widget
        v-else
        trend="on"
        trend-type="on"
        color="text-red-500"
        :icon="mdiAccessPointNetwork"
        :number="0"
        suffix=" clients"
        label="WIFI"
        link="/wifi-settings"
      />
    </div>
    <card-component>
      <jb-buttons class="flex gap-4">
        <jb-button
          color="warning"
          label="Export Settings"
          small
          @click="exportSettings()"
        />
        <jb-button
          color="warning"
          label="Load Settings"
          small
          @click="isLoadModalActive = true"
        />
      </jb-buttons>
    </card-component>
  </main-section>

  <main-section>
    <card-component-collapsable
      title="Getting started."
      expanded
    >
      <div class="flex justify-start">
        <icon :path="mdiHumanGreeting" />
        <p>Wilkommen auf der Benutzeroberfläche des Router-Sim.</p>
      </div>

      <field
        class="m-4"
        label="Aufgabe"
        :icon="mdiFormatListChecks"
      >
        <ul class="list-none">
          <li>
            <input
              type="checkbox"
              class="mx-2"
            >Verschaffen Sie sich einen Überblick über die Oberfläche.
          </li>
          <li>
            <input
              type="checkbox"
              class="mx-2"
            >Konfigurieren Sie den Router.
          </li>
          <li>
            <input
              type="checkbox"
              class="mx-2"
            >Exportieren Sie Ihre Einstellungen.
          </li>
        </ul>
      </field>

      <divider />
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
        <div class="flex flex-col gap-2">
          <label class="block font-bold mb-2">Navigation</label>
          <div class="flex my-2">
            <icon :path="mdiArrowLeftThick" />
            <p>Auf der Linken Seite findest du das Navigationsmenü.</p>
          </div>
          <div class="ml-6 flex flex-col gap-1">
            <p>
              Unter
              <b class="text-red-500">WIRELESS</b> sind alle Einstellung für das WLAN.
            </p>
            <ul class="list-none list-inside ml-4">
              <li>
                <icon :path="mdiWifi" />
                <b>Settings</b> ➡ Allegmeine WLAN-Einstellungen
              </li>
              <li>
                <icon :path="mdiLock" />
                <b>Security</b> ➡ Sicherheits Einstellungen (Authentifizierung und Verschlüsselung)
              </li>
              <li>
                <icon :path="mdiViewList" />
                <b>MAC-Filtering</b> ➡ MAC-Filter aktivieren/deaktivieren
              </li>
              <li>
                <icon :path="mdiSquareEditOutline" />
                <b>Advanced</b> ➡ Zusätzliche WLAN Einstellungen
              </li>
              <li>
                <icon :path="mdiCellphoneCog" />
                <b>WPS</b> ➡ WPS Einstellungen
              </li>
              <li class="mt-2">
                <icon :path="mdiAlertCircle" />
                <b>Statistics</b> ➡ Überprüfe hier deine Einstellungen
              </li>
            </ul>
            <p class="mt-4">
              <i>Hinweis:</i> Die NETWORK Einstellungen sind aktuell deaktiviert.
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label class="block font-bold mb-2">Hilfe</label>
          <p>In den einzelnen Seiten findest du kurze Hilfetexte unter den jeweiligen Feldern.</p>
          <field
            label="Beispiel"
            help="Ich bin ein Hilfetext"
          >
            <control
              placeholder="Ich bin ein Feld"
              disabled
            />
          </field>
          <p>Manchmal sind weitere Informationen am Ende der Seite zu finden.</p>
          <card-component-collapsable
            title="Weitere Infos:"
            :icon="mdiInformation"
          >
            <p class="text-gray-600">
              Hier findest du dann weitere Informationen
            </p>
          </card-component-collapsable>

          <div class="flex">
            <icon :path="mdiArrowTopRight" />
            <p>
              Oben rechts findest du einen
              <span>
                gelben
                <b class="bg-amber-500 rounded px-1">Help</b>-Button
              </span>
            </p>
          </div>
          <div class="ml-6 flex flex-col gap-1">
            <p>Dort findest du weitere Hilfe.</p>
          </div>
        </div>
      </div>
    </card-component-collapsable>
  </main-section>
</template>

<style scoped>
li:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
