<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: null
  },
  help: {
    type: String,
    default: null
  },
  noWrap: {
    type: Boolean,
    default: false
  }
})

const slots = useSlots()

const wrapperClass = computed(() => {
  const base = []
  const slotsLength = slots.default().length

  if (props.noWrap) {
    return base
  }

  if (slotsLength > 1) {
    base.push('grid grid-cols-1 gap-3')
  }

  if (slotsLength === 2) {
    base.push('md:grid-cols-2')
  }

  return base
})
</script>

<template>
  <div class="mb-6 last:mb-0">
    <label
      v-if="label"
      class="block font-bold mb-2"
    >{{ label }}</label>
    <div :class="wrapperClass">
      <slot />
    </div>
    <div
      v-if="help"
      class="text-xs text-gray-500 dark:text-gray-400 mt-1"
    >
      {{ help }}
    </div>
  </div>
</template>
