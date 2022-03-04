<script setup>
import { ref } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import TitledSection from '@/components/TitledSection.vue'
import MainSection from '@/components/MainSection.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'

const titleStack = ref(['General', 'Help'])
</script>

<template>
  <title-bar :title-stack="titleStack" />


  <titled-section first>
    Getting started
  </titled-section>

  <main-section>
    <div class="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
      <p> Please config your Wifi-Settings</p>
    </div>
  </main-section>

  <titled-section>
    Open Tasks
  </titled-section>

  <main-section>
    <div class="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">

    </div>
  </main-section>

  <bottom-other-pages-section />
</template>
