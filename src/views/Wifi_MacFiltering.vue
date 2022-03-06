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
  store.commit('enableMacFilter', macFilter)
  console.log('Wifi-MacFilter saved')
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

  <bottom-other-pages-section />
</template>
