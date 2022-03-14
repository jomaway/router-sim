<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { mdiWifi } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import Field from '@/components/Field.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import ToggleSwitch from '@/components/ToggleSwitch.vue'
import ModalBox from '@/components/ModalBox.vue'

const titleStack = ref(['Wireless', 'WPS'])

const store = useStore()

const WifiWPSForm = reactive({
  wps_enabled: store.state.wifi.wps_enabled,
  wps_pin: store.state.wifi.wps_pin
})

const submit = () => {
  store.dispatch('saveWPSSettings', WifiWPSForm)
  console.log('Wifi Advanced Settings saved')
  isSaveModalActive.value = true
}

function genNewPin () {
  WifiWPSForm.wps_pin = Math.floor(10000000 + Math.random() * 90000000)
  console.log('new wps pin is', WifiWPSForm.wps_pin)
}

const isModalActive = ref(false)
const isSaveModalActive = ref(false)

const allDisabled = ref(store.state.checks.done)

</script>

<template>
  <modal-box
    v-model="isModalActive"
    title="Add new device"
  >
    <p>This is just an simulation.</p>
    <p>In real life you can now connect your Device via WPS.</p>
  </modal-box>
  <modal-box
    v-model="isSaveModalActive"
    title="WPS Settings Saved"
  >
    <p>WPS-Settings saved. Go to Statistics to check your Wifi-Status</p>
  </modal-box>

  <title-bar :title-stack="titleStack" />

  <main-section>
    <card-component
      title="WPS-Settings"
      :icon="mdiWifi"
      form
      @submit.prevent="submit"
    >
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
        <div>
          <field
            label="WPS Staus"
            help="Aktivieren oder Deaktiviern Sie WPS."
          >
            <toggle-switch
              v-model="WifiWPSForm.wps_enabled"
              name="wifi-wps-switch"
              :labels="{ on: 'enabled', off: 'disabled' }"
              :disabled="allDisabled"
            />
          </field>

          <div v-show="WifiWPSForm.wps_enabled">
            <divider />

            <field
              label="Use WPS-PBC"
              help="Drücken Sie auf diesen Button um eine Gerät per WPS-PBC zu verbinden."
            >
              <jb-button
                color="warning"
                label="Add new Device"
                small
                :disabled="allDisabled"
                @click="isModalActive = true"
              />
            </field>

            <divider />

            <field
              label="Use WPS-PIN"
              help="Mit Hilfe der PIN können Sie ein Gerät mittels WPS-PIN verbinden."
            >
              <div class="flex flex-row gap-3 ml-2 items-center m-3">
                <p class="strong font-bold text-lg">
                  {{ WifiWPSForm.wps_pin }}
                </p>
                <jb-button
                  color="warning"
                  label="Generate new PIN"
                  small
                  :disabled="allDisabled"
                  @click="genNewPin()"
                />
              </div>
            </field>
          </div>
        </div>

        <div class="bg-gray-200 p-4 rounded">
          <divider class="lg:hidden" />

          <label class="block font-bold mb-2">Infos:</label>
          Der Router Sim unterstütz zwei WPS Methoden:
          <divider />
          <h2 class="text-blue-600 font-bold my-1">
            Authentifizierung nach Knopfdruck (WPS-PBC):
          </h2>
          <p
            class="block text-justify"
          >
            Beim WPS-PBC-Verfahren drückt man einen Knopf, um die WPS-Anmeldephase zu starten. Der erste WLAN-Client, der sich daraufhin per WPS anmeldet, bekommt das Passwort für die WLAN-Authentifizierung. Ein Angreifer müsste genau diesen Moment abpassen und dann schneller als man selbst sein. Das macht einen solchen Angriff unwahrscheinlich.
          </p>
          <divider />
          <h2 class="text-blue-600 font-bold my-1">
            Authentifizierung per Zahleneingabe (WPS-Pin):
          </h2>
          <p
            class="block text-justify"
          >
            Die Authentifizierung per WPS-Pin sieht die Eingabe einer achtstelligen Zahlenfolge auf dem WLAN-Client vor. Gerade bei Smartphones ist das eine echte Erleichterung. Vor allem, wenn man ein kompliziertes WLAN-Passwort mit Buchstaben, Zahlen und Sonderzeichen hat. Die WPS-Pin-Methode sieht vor, dass das WLAN-Passwort dem WLAN-Client mitgeteilt wird, wenn ein korrekter WPS-Pin eingegeben wurde.
          </p>
          <p>Das Problem bei dieser Methode ist, dass die meisten Access-Points einen statischen WPS-Pin vergeben. Das heißt der Pin ändert sich nie. Dadurch lässt sich in 3 – 10 Stunden durch reines Ausprobieren der Pin herausfinden und ein Zugang zum WLAN herstellen.</p>
        </div>
      </div>

      <divider />

      <jb-buttons>
        <jb-button
          type="submit"
          color="info"
          label="Save"
        />
      </jb-buttons>
    </card-component>
  </main-section>

  <bottom-other-pages-section />
</template>
