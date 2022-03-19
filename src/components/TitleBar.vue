<script setup>
import { mdiHelp } from '@mdi/js'
import Level from '@/components/Level.vue'
import JbButton from '@/components/JbButton.vue'
import { computed, useSlots } from 'vue'

defineProps({
  titleStack: {
    type: Array,
    default: () => []
  }
})

const slots = useSlots()
const hasRightSlot = computed(() => slots.right)

</script>

<template>
  <section class="p-6">
    <level>
      <ul>
        <li
          v-for="(title, index) in titleStack"
          :key="index"
          class="title-stack-item inline-block pr-3 text-2xl text-gray-500 dark:text-gray-400 last:pr-0 last:font-black last:text-black dark:text-gray-100"
        >
          {{ title }}
        </li>
      </ul>
      <slot
        v-if="hasRightSlot"
        name="right"
      />
      <jb-button
        v-else
        to="/help"
        color="warning"
        label="Help"
        :icon="mdiHelp"
      />
    </level>
  </section>
</template>

<style scoped>
li.title-stack-item:not(:last-child):after {
  content: "/";
  @apply inline-block pl-3;
}
</style>
