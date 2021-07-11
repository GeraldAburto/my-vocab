<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-row>
          <v-col cols="6" offset="6" md="4" offset-md="8" lg="2" offset-lg="8">
            <switch-language />
          </v-col>
          <v-col cols="12" md="6" offset-md="3">
            <add-languages :onSubmit="addLanguages" />
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import AddLanguages from "./components/AddLanguages.vue";
import SwitchLanguage from "./components/SwitchLanguage.vue";

export default {
  name: "App",
  components: {
    AddLanguages,
    SwitchLanguage,
  },
  methods: {
    addLanguages(languages) {
      //TODO: Save Languages on localstorage.
      console.log(languages);
    },
  },
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
