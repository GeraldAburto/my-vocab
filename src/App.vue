<template>
  <div id="app">
    <div class="md-layout md-alignment-top-center">
      <add-languages :onSubmit="addLanguages" class="md-layout-item" />
    </div>
  </div>
</template>

<script>
import AddLanguages from "./components/AddLanguages.vue";

export default {
  name: "App",
  components: {
    AddLanguages,
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
