<script setup>
import { ref, reactive,computed } from 'vue'
import { useStore } from 'vuex'
import { mdiMonitorCellphone, mdiFilterOutline, mdiTableBorder, mdiTableOff } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import Notification from '@/components/Notification.vue'
import ClientsTable from '@/components/ClientsTable.vue'
import CardComponent from '@/components/CardComponent.vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'
import MacFilterTable from '@/components/MacFilterTable.vue'
import CheckRadioPicker from '@/components/CheckRadioPicker.vue'
import Field from '@/components/Field.vue'
import Divider from '@/components/Divider.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import Divider1 from '@/components/Divider.vue'
import CardComponentCollapsable from '@/components/CardComponentCollapsable.vue'

const titleStack = ref(['Wireless', 'Mac Filtering'])

const store = useStore()

const macFilter = reactive({
  enabled: 'disabled',
  rule: store.state.wifi.macFilter.rule
})

if (store.state.wifi.macFilter.enabled) {
  macFilter.enabled = 'enabled'
  console.log('mac Filter is:', macFilter.enabled)
}

const submit = () => {
  store.dispatch('saveMacFilters', macFilter)
  console.log('Wifi-MacFilter saved')
}

const add = () => {
  console.log('Add mac address')
}

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <main-section>
    <notification
      color="info"
      :icon="mdiFilterOutline"
      permanent
    >
      <b>Mac Filtering</b> is used to disable access for devices with a given mac address.
    </notification>

    <card-component
      class="mb-6"
    >
      <field
        label="Wireless Mac Filtering"
        help="Here you can enable/disable the mac filtering globaly."
      >
        <check-radio-picker
          v-model="macFilter.enabled"
          name="global_mac_filtering_status"
          type="radio"
          :options="{ disabled : 'Disable', enabled: 'Enable' }"
        />
      </field>

      <div v-if="macFilter.enabled=='enabled'">
        <divider />

        <field
          label="Filter Rule"
          help="Deny -> all devides with the listed mac address are blocked; Allow -> all deviced except the listed are blocked."
        >
          <check-radio-picker
            v-model="macFilter.rule"
            name="global_mac_filter_rule"
            type="radio"
            :options="{ deny : 'Deny all listed devices', allow: 'Allow only listed devices' }"
          />
        </field>
      </div>
    </card-component>

    <card-component
      v-if="macFilter.enabled == 'enabled'"
      class="mb-6"
      title="Mac Filters"
      :icon="mdiFilterOutline"
      has-table
    >
      <mac-filter-table />
    </card-component>

    <card-component
      form
      @submit.prevent="submit"
    >
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

      <field label="MAC Filtering">
        <p>Durch Mac Filter kann der Zugriff auf das WLAN durch die Überprüfung der MAC-Adresse eingeschränkt werden.</p>
        <p><b>Beachte</b> das Hacker auch sehr einfach eine MAC-Adresse fäschen können!</p>
      </field>

      <field label="Deny-Regel">
        <p>Bei dieser Regel werden alle eingetragenen MAC-Adressen gesperrt. Geräte mit dieser MAC können sich dann nicht mehr ins WLAN einloggen.</p>
      </field>

      <field label="Allow-Regel"> 
        <p>Bei dieser Regel dürfen nur sich nur die Geräte in das WLAN einloggen, deren MAC-Adresse in die Liste eingetragen ist.</p>
      </field>

      <divider/>
      <div class="flex ">
        <icon :path="mdiArrowRight"/>
        <a class="link text-red-600" href="https://www.elektronik-kompendium.de/sites/net/2109161.htm" target="_blank">WLAN-Hacking: MAC Filter umgehen ... </a>
      </div>
      
    </card-component-collapsable>
  </main-section>

  <bottom-other-pages-section />
</template>
