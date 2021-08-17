<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <v-card>
        <v-card-title>{{ $t("practice.letsPractice") }}</v-card-title>
        <v-card-subtitle>
          {{
            $t("practice.translateThis", {
              word: selectedWord.wordA,
              lang: languageB,
            })
          }}
        </v-card-subtitle>
        <v-card-text>
          <v-progress-linear
            v-model="guessProgress"
            color="light-blue"
            height="12"
          >
            <template v-slot:default>
              <strong>{{ rounds }}/{{ totalWords }}</strong>
            </template>
          </v-progress-linear>
          <v-form @submit.prevent="addGuess" id="guess-form">
            <v-container>
              <v-row>
                <v-col md="8">
                  <v-text-field
                    :error-messages="guessErrors"
                    v-model="form.guess"
                    @input="$v.form.guess.$touch()"
                    @blur="$v.form.guess.$touch()"
                    required
                    :label="$t('practice.label')"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn class="mr-4" v-if="done">{{$t('practice.showResults')}}</v-btn>
          <v-btn
            v-else
            class="mr-4"
            color="orange lighten-2"
            text
            :disabled="$v.$invalid"
            form="guess-form"
            type="submit"
          >
            {{$t('practice.next')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  data: () => ({
    words: [],
    selectedWord: {},
    totalWords: 0,
    guesses: [],
    rounds: 0,
    form: {
      guess: "",
    },
    done: false,
  }),
  props: ["languages"],
  computed: {
    guessErrors() {
      const errors = [];
      if (!this.$v.form.guess.$dirty) return errors;
      !this.$v.form.guess.required &&
        errors.push(this.$i18n.t("practice.guessRequired"));
      return errors;
    },
    languageB() {
      return this.languages.split("-")[1];
    },
    guessProgress() {
      return (this.rounds * 100) / this.totalWords;
    },
  },
  methods: {
    loadWords(languages) {
      const storedLanguages = JSON.parse(localStorage.getItem("languages"));
      const { words } = storedLanguages.find(
        (language) => language.languages === languages
      );
      this.words = words;
      this.totalWords = words.length;
    },
    nextWord() {
      const index = Math.floor(Math.random() * this.words.length);
      this.selectedWord = this.words[index];
      this.words.splice(index, 1);
      this.rounds += 1;
    },
    addGuess() {
      this.guesses.push({
        word: this.selectedWord,
        result:
          this.selectedWord.wordB.toLowerCase() ===
          this.form.guess.toLowerCase(),
      });
      this.done = this.guesses.length === this.totalWords;
      if (!this.done) this.nextWord();
      this.clearForm();
    },
    clearForm() {
      this.$v.$reset();
      this.form.guess = "";
    },
  },
  created() {
    this.loadWords(this.languages);
    this.nextWord();
  },
  watch: {
    languages(newValue) {
      this.loadWords(newValue);
    },
  },
  mixins: [validationMixin],
  validations: {
    form: {
      guess: {
        required,
      },
    },
  },
};
</script>

<style>
</style>