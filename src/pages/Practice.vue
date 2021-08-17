<template>
  <v-row>
    <v-col cols="12" md="6" offset-md="3">
      <v-card>
        <v-card-title>{{$t('practice.letsPractice')}}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    words: [],
  }),
  props: ["languages"],
  methods: {
    loadWords(languages) {
      const storedLanguages = JSON.parse(localStorage.getItem("languages"));
      const { words } = storedLanguages.find(
        (language) => language.languages === languages
      );
      this.words = words;
    },
  },
  created() {
    this.loadWords(this.languages);
  },
  watch: {
    languages(newValue) {
      this.loadWords(newValue);
    },
  },
};
</script>

<style>
</style>