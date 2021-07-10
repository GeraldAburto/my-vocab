<template>
  <md-field>
    <label for="language">{{$t("misc.language")}}</label>
    <md-select v-model="$i18n.locale" name="language" id="language">
      <md-option v-for="(lang, i) in langs" :key="i" :value="lang" :name="lang">{{
        lang
      }}</md-option>
    </md-select>
  </md-field>
</template>

<script>
export default {
  data: () => ({
    langs: ["en", "es"],
  }),
};
</script>

<style>
</style>