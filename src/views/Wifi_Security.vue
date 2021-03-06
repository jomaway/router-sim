<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'
import { mdiWifi, mdiLockOff, mdiAlertCircleOutline, mdiInformation, mdiArrowRight } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import CheckRadioPicker from '@/components/CheckRadioPicker.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import CardComponentCollapsable from '@/components/CardComponentCollapsable.vue'
import Notification from '@/components/Notification.vue'
import Icon from '@/components/Icon.vue'
import { securityEncryptionOptions, securityVersionOptions, securityModeOptions } from '@/config'

const titleStack = ref(['Wireless', 'Security'])

const store = useStore()
const toast = useToast()

const security = reactive({
  selected: store.state.wifi.security_mode,
  wpa_p: {
    version: securityVersionOptions[store.state.wifi.security_psk.version],
    encryption: securityEncryptionOptions[store.state.wifi.security_psk.encryption],
    pw: store.state.wifi.security_psk.pw
  },
  wpa_e: {
    version: securityVersionOptions[store.state.wifi.security_enterprise.version],
    encryption: securityEncryptionOptions[store.state.wifi.security_enterprise.encryption],
    ip: store.state.wifi.security_enterprise.radius.ip,
    port: store.state.wifi.security_enterprise.radius.port
  }
})

const submit = () => {
  store.dispatch('saveWifiSettings', security)
  console.log('Wifi-Security saved')
  toast.success('Security settings saved')
}

const allDisabled = ref(store.state.checks.done)

</script>

<template>
  <title-bar :title-stack="titleStack" />

  <main-section>
    <card-component
      title="Wifi-Security"
      :icon="mdiWifi"
      form
      @submit.prevent="submit"
    >
      <check-radio-picker
        v-model="security.selected"
        name="selected-security-option"
        type="radio"
        :options="securityModeOptions"
        :disabled="allDisabled"
      />

      <divider />

      <div v-if="security.selected == 'disabled'">
        <notification
          color="danger"
          :icon="mdiLockOff"
          permanent
        >
          <b>Danger:</b>
          You disabled all wifi-security settings.
          Your network will be open for everyone within reach.
        </notification>
      </div>

      <div v-else-if="security.selected == 'psk'">
        <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
          <field
            label="Encryption"
            help="WPA sollte nicht mehr verwendet werden. Umso höher die Version umso besser. Allerdings unterstützen noch nicht alle Clients WPA3!"
          >
            <control
              v-model="security.wpa_p.version"
              :options="securityVersionOptions"
              :disabled="allDisabled"
            />
          </field>
          <field
            label="Algorithm"
            help="Select encryption type: AES ist moderner und sicherer als TKIP"
          >
            <control
              v-model="security.wpa_p.encryption"
              :options="securityEncryptionOptions"
              :disabled="allDisabled"
            />
          </field>
        </div>
        <field
          label="Password"
          help="Choose a strong password for safety reasons. Verify at https://checkdeinpasswort.de/ "
        >
          <control
            v-model="security.wpa_p.pw"
            :disabled="allDisabled"
          />
        </field>
      </div>
      <div v-else-if="security.selected == 'enterprise'">
        <notification
          color="info"
          :icon="mdiAlertCircleOutline"
          permanent
        >
          <b>Info:</b>
          Ein externer Radius Server ist für diese Einstellung notwendig!
        </notification>
        <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
          <field label="Encryption">
            <control
              v-model="security.wpa_e.version"
              :options="securityVersionOptions"
              :disabled="allDisabled"
            />
          </field>
          <field
            label="Algorithm"
            help="Select encryption type"
          >
            <control
              v-model="security.wpa_e.encryption"
              :options="securityEncryptionOptions"
              :disabled="allDisabled"
            />
          </field>
        </div>
        <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 ">
          <field
            class="col-span-2"
            label="Radius Server IP"
            help="Geben Sie hier die IP-Adresse des Radius servers ein."
          >
            <control
              v-model="security.wpa_e.ip"
              :disabled="allDisabled"
            />
          </field>
          <field
            label="Radius Server Port"
            help="Der Standardport ist: 1812"
          >
            <control
              v-model="security.wpa_e.port"
              :disabled="allDisabled"
            />
          </field>
        </div>
      </div>
      <div v-else-if="security.selected == 'wep'">
        <notification
          color="danger"
          :icon="mdiLockOff"
          permanent
        >
          <b>Danger:</b>
          This security option is highly insecure.
          WEP can be hacked within minutes.
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
          :disabled="allDisabled"
        />
      </jb-buttons>
    </card-component>
  </main-section>

  <main-section>
    <card-component-collapsable
      title="Weitere Infos:"
      :icon="mdiInformation"
      expanded
      class="bg-gray-200"
    >
      <field label="WLAN-Sicherheit">
        <p>Funksignale bewegen sich im freien Raum. Das bedeutet, jeder der ein Funksignal empfangen kann, kann die gesendeten Funksignale abhören oder manipulieren. Das Abhören einer Funkverbindung kann praktisch nicht verhindert werden. Deshalb müssen WLANs mit Authentifizierung und Verschlüsselung betrieben werden.</p>
      </field>

      <field label="WLAN-Authentifizierung">
        <p>Fremde Personen sollten das eigene WLAN nicht nutzen dürfen. Deshalb sollte der Zugriff auf das WLAN mit einem starken Passwort eingeschränkt werden. Das Passwort bekommen dann nur die Personen und Geräte, die Zugriff auf das WLAN haben dürfen. Doch ist das Passwort erst einmal bekannt, dann ist damit der Zugriff ungesichert. Dieses Verfahren nennt man PSK (Pre-Shared-Key).</p>
        <p>Bei größeren WLANs mit vielen Nutzern und Access Points kann Authentifizierung auch mit eigene Zugangsdaten (Benutzername und Passwort) pro Nutzer eingerichtet werden. An einer zentralen Stelle kann der Zugriff auf einfache Art und Weise freigegeben oder eingeschränkt werden. Dies erfordert doch einen erhöhten administrativen Aufwand.</p>
      </field>

      <field label="WLAN-Verschlüsselung">
        <p>Durch die Verschlüsselung soll das Mitlesen der übertragenen Daten verhindert werden. Die Verschlüsselungsstandards (WEP, WPA, WPA2 und WPA3) legen fest wie die Verschlüsselung funktioniert. WEP und WPA sind heutzutage leicht zu knacken und sollten auf keinen Fall verwendet werden.</p>
        <p>WPA2 (Wifi Protected Access 2) wurde 2004 eingeführt und war lange Zeit der sicherste Standard und gilt auch heute noch als relativ sicher. Jedoch hat auch WPA2 einige Schwachstellen. Deshalb wurde 2018 der Nachfolger WPA3 vorgestellt. Dieser gilt als der aktuelle und sicherste Verschlüsselungsstandard. Leider unterstützen immer noch nicht alle Geräte diesen Standard, so das oft auf WPA2 zurückgegriffen werden muss.</p>
      </field>

      <divider />
      <div class="flex ">
        <icon :path="mdiArrowRight" />
        <a
          class="link text-red-600"
          href="https://www.elektronik-kompendium.de/sites/net/1403011.htm"
          target="_blank"
        > Weitere Infos hier</a>
      </div>
    </card-component-collapsable>
  </main-section>

  <bottom-other-pages-section />
</template>
