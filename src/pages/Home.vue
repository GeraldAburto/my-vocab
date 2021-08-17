<template>
  <v-row>
    <v-col cols="12" md="6" offset-md="3">
      <add-languages :onSubmit="addLanguages" />
    </v-col>
    <v-col cols="12" md="6" offset-md="3">
      <v-alert :value="alert" color="red" type="error" dismissible dense>{{
        $t("misc.alert")
      }}</v-alert>
    </v-col>
    <v-col
      sm="12"
      md="6"
      lg="4"
      xl="3"
      v-for="({ languages, words }, index) in languages"
      :key="index"
    >
      <language-card
        :title="languages"
        :words="words"
        :onAddWords="addWords"
        :onDeleteWords="deleteWords"
      />
    </v-col>
  </v-row>
</template>

<script>
import LanguageCard from "../components/LanguageCard.vue";
import AddLanguages from '../components/AddLanguages.vue';

export default {
  data() {
    return {
      languages: [],
      alert: false,
    };
  },
  name: "App",
  components: {
    AddLanguages,
    LanguageCard,
  },
  methods: {
    addLanguages({ langA, langB }) {
      const a = `${langA}-${langB}`;
      const b = `${langB}-${langA}`;
      if (
        this.languages.some(
          ({ languages }) => languages.includes(a) || languages.includes(b)
        )
      )
        return (this.alert = true);

      this.languages.push({ languages: a, words: [] });
      this.saveLanguages();
    },
    saveLanguages() {
      localStorage.setItem("languages", JSON.stringify(this.languages));
    },
    addWords(langs, words) {
      this.languages
        .find(({ languages }) => languages === langs)
        .words.push(words);
      this.saveLanguages();
    },
    deleteWords(langs, words) {
      const language = this.languages.find(
        ({ languages }) => languages === langs
      );
      const index = language.words.indexOf(
        language.words.find(({ id }) => id === words)
      );
      language.words.splice(index, 1);
      this.saveLanguages();
    },
  },
  mounted() {
    this.languages = JSON.parse(localStorage.getItem("languages")) || [];
  },
};
</script>