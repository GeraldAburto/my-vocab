<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ `${wordsCount} ${$t("misc.wordsCount")}` }}</v-card-text>
    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        :disabled="wordsCount === 0"
        :to="{
          name: 'practice',
          params: {
            languages: title,
          },
        }"
      >
        {{ $t("misc.practice") }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="expanded = !expanded">
        <v-icon>{{ expanded ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="expanded">
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <add-words
                :langA="languages[0]"
                :langB="languages[1]"
                :onAdded="(words) => onAddWords(title, words)"
              />
            </v-col>
            <v-col cols="12">
              <words-table
                :rows="words"
                :langA="languages[0]"
                :langB="languages[1]"
                :onAddWords="onAddWords"
                :onDeleteWords="(words) => onDeleteWords(title, words)"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import WordsTable from "./WordsTable.vue";
import AddWords from "./AddWords.vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    words: Array,
    onAddWords: {
      type: Function,
      required: true,
    },
    onDeleteWords: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    languages: function () {
      return this.title.toString().split("-");
    },
    wordsCount: function () {
      return Array.from(this.words).length;
    },
  },
  components: {
    WordsTable,
    AddWords,
  },
};
</script>