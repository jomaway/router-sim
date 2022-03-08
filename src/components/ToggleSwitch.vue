<script setup>
import { computed } from 'vue'

const props = defineProps({
  labels: {
    type: Object,
    default: { on: '', off: ''}
  },
  name: {
    type: String,
    required: true
  },
  column: Boolean,
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const computedValue = computed({
  get: () => props.modelValue,
  set: value => {
    emit('update:modelValue', value)
  }
})

const computedLabel = computed(() => computedValue.value ? props.labels.on : props.labels.off)

const inputType = computed(() => props.type === 'radio' ? 'radio' : 'checkbox')
</script>

<template>
  <div
    class="flex justify-start flex-wrap -mb-3"
    :class="{'flex-col':column}"
  >
    <label
      class="switch mr-6 mb-3 last:mr-0"
    >
      <input
        v-model="computedValue"
        :type="inputType"
        :name="name"
      >
      <span class="check" />
      <span class="control-label">{{ computedLabel }}</span>
    </label>
  </div>
</template>
