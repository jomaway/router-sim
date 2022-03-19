<script setup>
import { computed } from 'vue'
import { mdiAlert, mdiCheck, mdiAlertOctagram } from '@mdi/js'
import { colorsBg, colorsBorders, colorsOutline } from '@/colors.js'
import Icon from '@/components/Icon.vue'

const props = defineProps({
  outline: Boolean,
  icon: {
    type: String,
    default: null
  },
  condition: { type: Boolean, default: false },
  successMsg: {
    type: String,
    default: ''
  },
  warningMsg: {
    type: String,
    default: ''
  },
  isCritical: Boolean
})

const color = computed(() => props.condition ? 'success' : (props.isCritical) ? 'danger' : 'warning')
const componentClass = computed(() => props.outline
  ? colorsOutline[color.value]
  : [colorsBg[color.value], colorsBorders[color.value]])

</script>
<template>
  <div
    :class="componentClass"
    class="px-3 py-6 md:py-3 mx-6 md:mx-0 mb-2 border rounded transition-colors duration-150"
  >
    <div class="flex flex-col md:flex-row items-center">
      <icon
        :path="icon ? icon : condition ? mdiCheck : (isCritical) ? mdiAlertOctagram : mdiAlert"
        w="w-10 md:w-5"
        h="h-10 md:h-5"
        size="24"
        class="md:mr-2"
      />
      <span>
        <p v-if="condition"> {{ successMsg }}</p>
        <p v-else> {{ warningMsg }}</p>
      </span>
    </div>
  </div>
</template>
