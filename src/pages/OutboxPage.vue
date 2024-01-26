<template>
  <div id="container" class="q-pa-md">
    <div id="box" class="q-pa-md text-center">
      <h5 style="margin-bottom: 10px">Hello there!</h5>
      <p>Proin gravida quam felis, a.</p>

      <div class="flex column" style="gap: 16px">
        <q-input
          outlined
          v-model="text"
          :dense="dense"
          hint="Enter your account"
        >
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>

        <q-input
          outlined
          v-model="password"
          type="password"
          :dense="dense"
          hint="Enter your password"
        >
          <template v-slot:prepend>
            <q-icon name="key" />
          </template>
        </q-input>

        <q-btn unelevated color="primary" label="Sign In" />

        <div class="flex column" style="gap: 10px">
          <p style="margin: 0">Need you help?</p>

          <div class="flex justify-center">
            <a href="#">Forget account</a>
            <p style="margin: 0 8px">|</p>
            <a href="#">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
const password = ref('');
const dense = ref(true);
</script>

<style lang="scss" scoped>
@import '../css/app.scss';

.q-icon {
  color: $black-main;
}

#container {
  position: relative;
  height: 100vh;
  background-image: url('../assets/images/background.jpg');
  background-size: cover;
}

#box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $white-main;
  min-width: 300px;
  border-radius: 10px;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.5);
}
</style>
