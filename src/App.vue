<template>
  <div id="app">
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-100 md-layout md-alignment-top-right">
        <switch-langue class="md-size-20 md-layout-item" />
        <div class="md-size-10 md-layout-item"></div>
      </div>
      <div class="md-layout-item md-size-100 md-layout md-alignment-top-center">
        <add-languages :onSubmit="addLanguages" class="md-layout-item md-size-60" />
      </div>
    </div>
  </div>
</template>

<script>
import AddLanguages from "./components/AddLanguages.vue";
import SwitchLangue from "./components/SwitchLanguage.vue";

export default {
  name: "App",
  components: {
    AddLanguages,
    SwitchLangue,
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
