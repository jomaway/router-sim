<script setup>
import { mdiArrowLeft } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import { reactive, ref } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import JbButton from '@/components/JbButton.vue'

const titleStack = ref(['Extra', 'Aufgaben'])

const tasks = reactive({
  f1: 'Frage 1',
  a1: ''
})

</script>

<template>
  <title-bar :title-stack="titleStack">
    <template #right>
      <jb-button
        label="Zurück"
        :icon="mdiArrowLeft"
        color="info"
        to="/status"
      />
    </template>
  </title-bar>
  <main-section>
    <card-component title="Beantworte folgende Fragen:">
      <field label="Frage 1:">
        <control
          v-model="tasks.a1"
          placeholder="Bitte gebe deine Antwort hier ein."
        />
      </field>
      <p>Siehe dir dieses Video an.</p>
      <p>Test</p>
    </card-component>
  </main-section>
</template>
