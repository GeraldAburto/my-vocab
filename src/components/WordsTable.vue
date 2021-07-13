<template>
  <v-simple-table fixed-header height="300px" dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">{{ langA }}</th>
          <th class="text-left">{{ langB }}</th>
          <th class="text-left">{{ $t("misc.actions") }}</th>
        </tr>
      </thead>
      <tbody class="py-5">
        <word-row
          v-for="{ wordA, wordB, id } in rows"
          :key="id"
          :wordA="wordA"
          :wordB="wordB"
          :identifier="id"
          :onDelete="onDeleteWords"
        />
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import WordRow from "./WordRow.vue";

export default {
  props: {
    langA: {
      type: String,
      required: true,
    },
    langB: {
      type: String,
      required: true,
    },
    rows: Array,
    onDeleteWords: {
      type: Function,
      required: true,
    },
  },
  components: {
    WordRow,
  },
};
</script>