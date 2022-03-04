<script setup>
import { ref } from 'vue'
import { mdiMonitorCellphone, mdiFilterOutline , mdiTableBorder, mdiTableOff } from '@mdi/js'
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

const global_status = ref("disabled")
const mac_filter_rule = ref("deny")

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

    <field label="Wireless Mac Filtering" help="Here you can enable/disable the mac filtering globaly.">

      <check-radio-picker
        v-model="global_status"
        name="global_mac_filtering_status"
        type="radio"
        :options="{ disabled : 'Disable', enabled: 'Enable' }"
      />
    </field>

    <div v-if="global_status=='enabled'">
      <divider />

      <field label="Filter Rule" help="Deny -> all devides with the listed mac address are blocked; Allow -> all deviced except the listed are blocked.">

      <check-radio-picker
        v-model="mac_filter_rule"
        name="global_mac_filter_rule"
        type="radio"
        :options="{ deny : 'Deny all listed devices', allow: 'Allow only listed devices' }"
      />
    </field>

    </div>
      
    </card-component>

    <card-component
      v-if="global_status == 'enabled'"
      class="mb-6"
      title="Mac Filters"
      :icon="mdiFilterOutline"
      has-table
    >
      <mac-filter-table checkable />
    </card-component>

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
    

  </main-section>

  <bottom-other-pages-section />
</template>
