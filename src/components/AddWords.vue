<template>
  <tr>
    <td colspan="3">
      <v-form>
        <v-container fluid class="pa-0">
          <v-row>
            <v-col cols="4">
              <v-text-field
                :label="langA"
                :error-messages="wordAErrors"
                v-model="form.wordA"
                @input="$v.form.wordA.$touch()"
                @blur="$v.form.wordA.$touch()"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="4"
              ><v-text-field
                :label="langB"
                :error-messages="wordBErrors"
                v-model="form.wordB"
                @input="$v.form.wordB.$touch()"
                @blur="$v.form.wordB.$touch()"
                required
              ></v-text-field
            ></v-col>
            <v-col cols="4">
              <div
                class="d-flex align-center justify-center"
                :style="{ width: '100%', height: '100%' }"
              >
                <v-btn @click="addWords" :disabled="$v.$invalid">
                  {{ $t("misc.add") }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </td>
  </tr>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  data: () => ({
    form: {
      wordA: null,
      wordB: null,
    },
  }),
  props: {
    langA: String,
    langB: String,
    onAdded: {
      type: Function,
      required: true,
    },
  },
  computed: {
    wordAErrors() {
      const errors = [];
      if (!this.$v.form.wordA.$dirty) return errors;
      !this.$v.form.wordA.required &&
        errors.push(this.$i18n.t("addWords.wordARequired"));
      return errors;
    },
    wordBErrors() {
      const errors = [];
      if (!this.$v.form.wordB.$dirty) return errors;
      !this.$v.form.wordB.required &&
        errors.push(this.$i18n.t("addWords.wordBRequired"));
      return errors;
    },
  },
  methods: {
    addWords() {
      this.$v.$touch();

      if (!this.$v.invalid) {
        this.onAdded({ ...this.form, id: this.generateId() });
        this.clearForm();
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.wordA = null;
      this.form.wordB = null;
    },
    generateId() {
      return Math.random().toString(36).substr(2, 9);
    },
  },
  mixins: [validationMixin],
  validations: {
    form: {
      wordA: {
        required,
      },
      wordB: {
        required,
      },
    },
  },
};
</script>