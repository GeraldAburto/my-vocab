<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-row>
          <v-col cols="6" offset="6" md="4" offset-md="8" lg="2" offset-lg="8">
            <switch-language />
          </v-col>
        </v-row>
        <router-view></router-view>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import SwitchLanguage from './components/SwitchLanguage.vue'

export default {
  components: {
    SwitchLanguage,
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  width: 100vw;
  height: 100vh;
}

#app {
  height: 100%;
  width: 100%;
}
</style>
