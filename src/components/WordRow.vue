<template>
  <tr>
    <td>{{ wordA }}</td>
    <td>{{ wordB }}</td>
    <td>
      <v-btn text color="success" @click="() => onDelete(identifier)">
        <v-icon left> mdi-delete </v-icon>
        {{$t('misc.remove')}}
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    identifier: {
      type: String,
      required: true,
    },
    wordA: {
      type: String,
      required: true,
    },
    wordB: {
      type: String,
      required: true,
    },
    onDelete: {
      type: Function,
      required: true,
    },
  },
};
</script>