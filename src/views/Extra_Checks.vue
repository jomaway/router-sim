<script setup>
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import { ref } from 'vue'

const titleStack = ref(['Extra', 'Checks'])

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <main-section>
    <p>Test</p>
  </main-section>
</template>
