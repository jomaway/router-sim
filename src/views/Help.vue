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
    <div class="flex flex-col gap-1  items-center text-lg">
      <p> Erste <b>Informationen</b> finden Sie auf dem <b>Flyer</b>. </p>
      <p> Weitere Informationen finden Sie auf direkt auf den einzelnen Seiten.</p>
      <p> Falls Sie totzdem nicht weiter kommen oder eine Fragen haben. <b>Melden</b> sie sich und <b>fragen</b>.</p>
    </div>
  </main-section>

  <titled-section first>
    Flyer
  </titled-section>

  <main-section>
    <vue-pdf-embed :source="pdfSource" />
  </main-section>

  <bottom-other-pages-section />
</template>
