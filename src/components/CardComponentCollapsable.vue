<script setup>
import { mdiCog, mdiChevronDown, mdiChevronUp } from '@mdi/js'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import Icon from '@/components/Icon.vue'

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  rounded: {
    type: String,
    default: 'md:rounded'
  },
  expanded: Boolean,
  hasTable: Boolean,
  empty: Boolean,
  form: Boolean,
  hoverable: Boolean,
  modal: Boolean
})

const emit = defineEmits(['toggle-expand-clicked', 'submit'])

const is = computed(() => props.form ? 'form' : 'div')

const store = useStore()

const lightBorderStyle = computed(() => store.state.lightBorderStyle)

const componentClass = computed(() => {
  const base = [
    props.rounded,
    lightBorderStyle.value,
    props.modal ? 'dark:bg-gray-900' : 'dark:bg-gray-900/70'
  ]

  if (props.hoverable) {
    base.push('hover:shadow-lg transition-shadow duration-500')
  }

  return base
})

const computedHeaderIcon = computed(() => isExpanded.value ? mdiChevronUp : mdiChevronDown)

const toggleExpanded = () => {
  emit('toggle-expand-clicked')
  isExpanded.value = !isExpanded.value
}

const submit = e => {
  emit('submit', e)
}

const isExpanded = ref(props.expanded)

</script>

<template>
  <component
    :is="is"
    :class="componentClass"
    class="bg-white border dark:border-gray-800"
    @submit="submit"
  >
    <header
      v-if="title"
      :class="lightBorderStyle"
      class="flex items-stretch border-b dark:border-gray-800"
    >
      <p
        class="flex items-center py-3 grow font-bold"
        :class="[ icon ? 'px-4' : 'px-6' ]"
      >
        <icon
          v-if="icon"
          :path="icon"
          class="mr-3"
        />
        {{ title }}
      </p>
      <button
        class="flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring"
        aria-label="more options"
        @click="toggleExpanded"
      >
        <icon  :path="computedHeaderIcon" />
      </button>
    </header>
    <div v-show="isExpanded">
      <div
        :class="{'p-6':!hasTable}"
      >
        <slot />
      </div>
    </div>
  </component>
</template>
