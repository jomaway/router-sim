<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import FullScreenSection from '@/components/FullScreenSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'

const form = reactive({
  login: 'Administrator',
  pass: '',
  remember: ['remember'],
  tries: 0
})

const router = useRouter()

const submit = () => {
  if (form.pass === 'routeradmin') {
    router.push('/status')
  } else {
    console.log('wrong password')
    form.tries += 1
  }
}
</script>

<template>
  <full-screen-section
    v-slot="{ cardClass, cardRounded }"
    bg="login"
  >
    <card-component
      :class="cardClass"
      :rounded="cardRounded"
      form
      @submit.prevent="submit"
    >
      <field
        label="Login"
        help="Please enter your login"
      >
        <control
          v-model="form.login"
          :icon="mdiAccount"
          name="login"
          autocomplete="username"
          disabled
        />
      </field>

      <field
        label="Password"
        help="Please enter your password"
      >
        <div class="flex flex-col">
          <p
            v-if="form.tries > 0"
            class="text-red-600"
          >
            Invalid Password!
          </p>
          <control
            v-model="form.pass"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
            :wrong-input="form.tries > 0"
          />
        </div>
      </field>

      <divider />

      <jb-buttons>
        <jb-button
          type="submit"
          color="info"
          label="Login"
        />
      </jb-buttons>
    </card-component>
  </full-screen-section>
</template>
