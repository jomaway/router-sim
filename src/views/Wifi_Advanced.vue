<script setup>
import { ref, reactive } from 'vue'
import { mdiBallot, mdiBallotOutline, mdiAccount, mdiMail,mdiWifi, mdiInformationVariant  } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import CheckRadioPicker from '@/components/CheckRadioPicker.vue'
import FilePicker from '@/components/FilePicker.vue'
import HeroBar from '@/components/HeroBar.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import TitledSection from '@/components/TitledSection.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'
import Notification from '@/components/Notification.vue'

const titleStack = ref(['Wireless', 'Settings'])


const submit = () => {
  // save settings
}

</script>

<template>
  <title-bar :title-stack="titleStack" />

  <main-section>
    <notification
      color="info"
      :icon="mdiInformationVariant "
      permanent
    >
    No advanced settings available.
    </notification>

    <card-component>
      Sendeleistung redizieren!!
    </card-component>
  </main-section>
 

  <bottom-other-pages-section />
</template>
