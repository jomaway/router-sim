<script setup>
import { ref } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import TitledSection from '@/components/TitledSection.vue'
import MainSection from '@/components/MainSection.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import VuePdfEmbed from 'vue-pdf-embed'

const titleStack = ref(['General', 'Help'])

const pdfSource = 'data-sources/Router-Sim.pdf'
</script>

<template>
  <title-bar :title-stack="titleStack" />

  <titled-section first>
    Getting started
  </titled-section>

  <main-section>
    <vue-pdf-embed :source="pdfSource" />
  </main-section>

  <titled-section first>
    Advanced
  </titled-section>

  <main-section>
    <div class="flex justify-center">
      <p><b>Melden</b> und <b>Fragen</b>!</p>
    </div>
  </main-section>

  <bottom-other-pages-section />
</template>
