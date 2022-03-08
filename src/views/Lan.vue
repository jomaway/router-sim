<script setup>
import { ref, reactive } from 'vue'
import { mdiLan } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import { useStore } from 'vuex'

const titleStack = ref(['Network', 'LAN'])

const store = useStore()

const lan = reactive({
  mac: store.state.network.lanMAC,
  ip: store.state.network.lanIp,
  subnetmask: store.state.network.lanMask
})

const submit = () => {
  // if save button is clicked
  console.log('save lan settings')
}

const allDisabled = true

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <main-section>
    <card-component
      title="Lan Settings"
      :icon="mdiLan"
      form
      @submit.prevent="submit"
    >
      <field label="MAC Address:">
        <control
          v-model="lan.mac"
          disabled
        />
      </field>

      <field label="Local IP">
        <control
          v-model="lan.ip"
          :disabled="allDisabled"
        />
      </field>
      <field label="Subnetmask">
        <control
          v-model="lan.subnetmask"
          :disabled="allDisabled"
        />
      </field>

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
</template>
