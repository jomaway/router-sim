<script setup>
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { mdiArrowRight, mdiWifi, mdiPencil, mdiInformation, mdiArrowDownThick  } from '@mdi/js'
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
import CardComponentCollapsable from '@/components/CardComponentCollapsable.vue'
import Icon from '@/components/Icon.vue'
import Notification from '@/components/Notification.vue'

const titleStack = ref(['Wireless', 'Settings'])

const store = useStore()

const selectModeOptions = [
  { id: 0, label: '802.11 b only' },
  { id: 1, label: '802.11 g only' },
  { id: 2, label: '802.11 a only' },
  { id: 3, label: '802.11 ac only' },
  { id: 4, label: '802.11 n only' },
  { id: 5, label: '802.11 ax only' },
  { id: 6, label: '802.11 b/g/n mixed' },
  { id: 7, label: '802.11 a/n/ac mixed' },
  { id: 8, label: '802.11 b/g/n + a/ac mixed' },
  { id: 9, label: '802.11 n/ax mixed' },
  { id: 10, label: '802.11 n/ac/ax mixed' },
]

const selectChannelOptions = [
  { id: 0, label: 'auto' },
  { id: 1, label: '1' },
  { id: 2, label: '2' },
  { id: 3, label: '3' },
  { id: 4, label: '4' },
  { id: 5, label: '5' },
  { id: 6, label: '6' },
  { id: 7, label: '7' },
  { id: 8, label: '8' },
  { id: 9, label: '9' },
  { id: 10, label: '10' },
  { id: 11, label: '11' },
  { id: 12, label: '12' },
  { id: 13, label: '13' }
]

const selectChannelWidthOptions = [
  { id: 0, label: '20 MHz' },
  { id: 1, label: '40 MHz' },
  { id: 2, label: '20/40 MHz' }
]

const WifiSettingsForm = reactive({
  ssid: store.state.wifi.ssid,
  mode: selectModeOptions[store.state.wifi.mode],
  channel: selectChannelOptions[store.state.wifi.channel],
  channel_width: selectChannelWidthOptions[store.state.wifi.channel_width],
  frequenz: []
})

console.log('setup')

if (store.state.wifi.twoPointFourGHz) {
  WifiSettingsForm.frequenz.push('twopointfour')
}
if (store.state.wifi.fiveGHz) {
  WifiSettingsForm.frequenz.push('five')
}

const submit = () => {
  // If save button is pressed
  store.dispatch('saveWifiSettings', WifiSettingsForm)
  console.log('Wifi-Settings saved')
}

const updateFreq = (value) => {
  console.log('update radio checker')
  console.log(value)
}
</script>

<template>
  <title-bar :title-stack="titleStack" />

  <main-section>
    <notification
      color="info"
      :icon="mdiArrowDownThick"
      permanent
    >
      Für <b>weitere Informationen</b> scrollen Sie nach unten!
    </notification>
    <card-component
      title="Wifi-Settings"
      :icon="mdiWifi"
      form
      @submit.prevent="submit"
    >
      <!--
      <field label="Turn Wifi On/Off">
        <check-radio-picker
          v-model="WifiSettingsForm.switch"
          name="wifi-enable-switch"
          type="switch"
          :options="enableLogo"
        />
      </field>

      <divider />
    -->
      <div>
        <field
          label="Frequenz"
          help="Select which frequency should be active. If none is enabled wifi is turned off completely."
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
          help="Der Name eines Netzwerks wird auch SSID genannt. Nutzen Sie keinen Namen der Rückschlüsse auf private Informationen zulässt."
        >
          <control
            v-model="WifiSettingsForm.ssid"
            :icon="mdiPencil"
          />
        </field>

        <field label="Mode" help="Der Modus legt fest welcher Standard genutzt wird. Falls möglich nutzen Sie einen aktuellen Standard. Ältere Standards sollten Sie nur nutzen falls Clients nur diese unterstützen.">
          <control
            v-model="WifiSettingsForm.mode"
            :options="selectModeOptions"
          />
        </field>

        <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
          <field label="Channel" help="Lassen Sie dies Funktion am besten auf auto, wenn sie sich nicht sicher sind. Weitere Informationen unter Infos">
            <control
              v-model="WifiSettingsForm.channel"
              :options="selectChannelOptions"
            />
          </field>
          <field
            label="Channel Width"
            help="Hier können Sie die Kanalbreite festlegen. 20/40 MHz legt die Breite automatisch fest"
          >
            <control
              v-model="WifiSettingsForm.channel_width"
              :options="selectChannelWidthOptions"
            />
          </field>
        </div>
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

  <main-section>
    <card-component-collapsable title="Weitere Infos:" :icon="mdiInformation" expanded>

      <field label="Modus (engl. Mode):">
        <p>Der Modus gibt an welche WLAN-Standards unterstützt werden.</p>
        <p>Ein WLAN-Standard gibt Auskunft über genutzte Frequenzbereiche, Geschwindigkeit und weitere technische Umsetzungen des WLANs. Um die kryptischen Bezeichnungen nach den IEEE 802.11 Projektgruppen zu vereinfachen, haben die Standards nun fortlaufende Nummern. Die Zuordnung sehen Sie in folgender Tabelle</p>
        <table class="my-6">
          <thead class="bg-red-400 font-bold">
            <td>Generation</td>
            <td>Standard</td>
            <td>Frequenz</td>
            <td>Jahr</td>
          </thead>
          <tr>
            <td>Wifi-6</td>
            <td>802.11 ax</td>
            <td>2,4 GHz + 5 GHz</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Wifi-5</td>
            <td>802.11 ac</td>
            <td>nur für 5 GHz</td>
            <td>2014</td>
          </tr>
          <tr>
            <td>Wifi-4</td>
            <td>802.11 n</td>
            <td>2,4 GHz + 5 GHz</td>
            <td>2009</td>
          </tr>
          <tr>
            <td>Wifi-3*</td>
            <td>802.11 g</td>
            <td>2,4 GHz</td>
            <td>2003</td>
          </tr>
          <tr>
            <td>Wifi-2*</td>
            <td>802.11 b / 802.11 a</td>
            <td>2,4 GHz / 5 GHz</td>
            <td>1999</td>
          </tr>
          <tr>
            <td>Wifi-1*</td>
            <td>802.11</td>
            <td>2,4 GHz</td>
            <td>1999</td>
          </tr>
        </table>
        <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
          * keine offiziellen Bezeichnungen.
        </div>
      </field>

      <field label="Kanäle (engl. Channel):">
        <p>Im 2,4-GHz-Frequenzband existieren insgesamt 79 schmalbandige Kanäle, die in Kanäle mit je 5 MHz zusammengefasst sind. In Europa gibt es 13, in den USA 11 und in Japan 14 solcher Kanäle. Diese Kanäle sind allerdings eng aneinandergereiht und überlappen sich. Deshalb kann man nicht alle der 11, 13 oder 14 Kanäle verwenden, sondern je nach Kanal-Verteilung nur 3 oder 4. Und das bei einer Kanalbreite von 20 MHz. Bei einer Kanalbreite von 40 MHz würde sich die Anzahl parallel nutzbarer Kanäle halbieren.</p>
      </field>

      <divider/>
      <div class="flex ">
        <icon :path="mdiArrowRight"/>
        <a class="link text-red-600" href="https://www.elektronik-kompendium.de/sites/net/1712061.htm" target="_blank"> Weitere Infos hier</a>
      </div>
      
    </card-component-collapsable>
  </main-section>
</template>
