<script setup>
import { computed, ref, reactive } from 'vue'
import { mdiWeb } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import { useStore } from 'vuex'

const titleStack = ref(['Network', 'WAN'])

const selectConnectionTypeOptions = [
  { id: 0, label: 'dynamic IP' },
  { id: 1, label: 'static IP' }
]

const store = useStore()

const wan = reactive({
  connectionType: selectConnectionTypeOptions[store.state.network.wanType],
  ip: store.state.network.wanIp,
  subnetmask: store.state.network.wanMask,
  gateway: store.state.network.wanGateway
})

const isStatic = computed(() => wan.connectionType.id === 1)

const submit = () => {
  // if save button is clicked
  console.log('save wan settings')
}

const allDisabled = true

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <main-section>
    <card-component
      title="Wan Settings"
      :icon="mdiWeb"
      form
      @submit.prevent="submit"
    >
      <field
        label="Wan Connection Type"
        help="choose dynamic ip if not sure!"
      >
        <control
          v-model="wan.connectionType"
          :options="selectConnectionTypeOptions"
          :disabled="allDisabled"
        />
      </field>

      <div v-if="isStatic">
        <divider />

        <field label="Wan IP">
          <control
            v-model="wan.ip"
            :disabled="allDisabled"
          />
        </field>
        <field label="Subnetmask">
          <control
            v-model="wan.subnetmask"
            :disabled="allDisabled"
          />
        </field>
        <field label="Gateway">
          <control
            v-model="wan.gateway"
            :disabled="allDisabled"
          />
        </field>
      </div>
      <div v-else>
        <p> Dynamically connected to ISP on  {{ wan.ip }} </p>
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
</template>
