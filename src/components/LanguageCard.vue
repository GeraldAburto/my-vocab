<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ `${wordsCount} ${$t("misc.wordsCount")}` }}</v-card-text>
    <v-card-actions>
      <v-btn color="orange lighten-2" text> Practice </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="expanded = !expanded">
        <v-icon>{{ expanded ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="expanded">
        <v-divider></v-divider>
        <v-card-text>
          <v-simple-table fixed-header height="300px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">{{ languages[0] }}</th>
                  <th class="text-left">{{ languages[1] }}</th>
                  <th class="text-left">{{ $t("misc.remove") }}</th>
                </tr>
              </thead>
            </template>
          </v-simple-table>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    words: Array,
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
};
</script>

<style>
</style>