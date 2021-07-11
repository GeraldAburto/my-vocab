<template>
  <v-card>
    <v-progress-linear indeterminate v-if="sending" />
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.langA"
              :error-messages="langAErrors"
              :label="$t('addLanguages.langA')"
              required
              @input="$v.form.langA.$touch()"
              @blur="$v.form.langA.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.langB"
              :error-messages="langBErrors"
              :label="$t('addLanguages.langB')"
              required
              @input="$v.form.langB.$touch()"
              @blur="$v.form.langB.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn class="mr-4" @click="addLanguages" :disabled="$v.$invalid">
              {{ $t("addLanguages.addLangs") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    form: {
      langA: null,
      langB: null,
    },
    sending: false,
  }),
  mixins: [validationMixin],
  methods: {
    addLanguages() {
      this.sending = true;
      this.$v.$touch();

      if (!this.$v.$invalid)
        setTimeout(() => {
          this.onSubmit({ ...this.form });
          this.clearForm();
          this.sending = false;
        }, 1500);
    },
    clearForm() {
      this.$v.$reset();
      this.form.langA = null;
      this.form.langB = null;
    },
  },
  computed: {
    langAErrors() {
      const errors = [];
      if (!this.$v.form.langA.$dirty) return errors;
      !this.$v.form.langA.minLength &&
        errors.push(this.$i18n.t("addLanguages.invalidLength"));
      !this.$v.form.langA.required &&
        errors.push(this.$i18n.t("addLanguages.langARequired"));
      return errors;
    },
    langBErrors() {
      const errors = [];
      if (!this.$v.form.langB.$dirty) return errors;
      !this.$v.form.langB.minLength &&
        errors.push(this.$i18n.t("addLanguages.invalidLength"));
      !this.$v.form.langB.required &&
        errors.push(this.$i18n.t("addLanguages.langBRequired"));
      return errors;
    },
  },
  validations: {
    form: {
      langA: {
        required,
        minLength: minLength(3),
      },
      langB: {
        required,
        minLength: minLength(3),
      },
    },
  },
};
</script>

<style scoped>
</style>