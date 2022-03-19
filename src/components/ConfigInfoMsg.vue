<script setup>
import { computed } from 'vue'
import { mdiInformationVariant } from '@mdi/js'
import { colorsBg, colorsBorders, colorsOutline } from '@/colors.js'
import Level from '@/components/Level.vue'
import Icon from '@/components/Icon.vue'

const props = defineProps({
  outline: Boolean,
  icon: {
    type: String,
    default: null
  },
  msg: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  }
})

const componentClass = computed(() => props.outline
  ? colorsOutline.info
  : [colorsBg.info, colorsBorders.info])

</script>
<template>
  <div
    :class="componentClass"
    class="px-3 py-6 md:py-3 mx-6 md:mx-0 mb-2 border rounded transition-colors duration-150"
  >
    <level>
      <div class="flex flex-col md:flex-row items-center">
        <icon
          :path="icon ? icon : mdiInformationVariant"
          w="w-10 md:w-5"
          h="h-10 md:h-5"
          size="24"
          class="md:mr-2"
        />
        <span class="text-center md:text-left">
          <p> {{ msg }} <b v-if="value"> {{ value }}</b></p>
        </span>
      </div>
    </level>
  </div>
</template>
