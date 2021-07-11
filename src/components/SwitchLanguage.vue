<template>
  <v-select :items="langs" :label="$t('misc.language')" v-model="$i18n.locale" ></v-select>
</template>

<script>
export default {
  data: () => ({
    langs: ["en", "es"],
  }),
};
</script>
