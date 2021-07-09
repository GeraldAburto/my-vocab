<template>
  <form class="md-size-60" @submit.prevent="validateForm">
    <md-card class="md-layout-item md-size-100">
      <md-card-header>
        <div class="md-title">{{ $t("addLanguages.title") }}</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-guter">
          <div class="md-layout-item ms-samll-size-100">
            <md-field :class="getValidationClass('langA')">
              <label for="lang-one">{{ $t("addLanguages.langA") }}</label>
              <md-input name="lang-one" id="lang-one" v-model="form.langA" />
              <span class="md-error" v-if="!$v.form.langA.required">{{
                $t("addLanguages.langARequired")
              }}</span>
              <span class="md-error" v-else-if="!$v.form.langA.minlength">{{
                $t("addLanguages.invalidLength")
              }}</span>
            </md-field>
          </div>
        </div>

        <div class="md-layout md-guter">
          <div class="md-layout-item ms-samll-size-100">
            <md-field :class="getValidationClass('langB')">
              <label for="lang-two">{{ $t("addLanguages.langB") }}</label>
              <md-input name="lang-two" id="lang-two" v-model="form.langB" />
              <span class="md-error" v-if="!$v.form.langB.required">{{
                $t("addLanguages.langBRequired")
              }}</span>
              <span class="md-error" v-else-if="!$v.form.langB.minlength">{{
                $t("addLanguages.invalidLength")
              }}</span>
            </md-field>
          </div>
        </div>
      </md-card-content>

      <md-progress-bar md-mode="indeterminate" v-if="sending" />

      <md-card-actions>
        <md-button type="submit" class="md-primary" :disabled="sending">{{
          $t("addLanguages.addLangs")
        }}</md-button>
      </md-card-actions>
    </md-card>
  </form>
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
  methods: {
    addLanguages() {
      this.sending = true;

      setTimeout(() => {
        this.onSubmit({ ...this.form });
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    clearForm() {
      this.$v.$reset();
      this.form.langA = null;
      this.form.langB = null;
    },
    getValidationClass(fielName) {
      const field = this.$v.form[fielName];
      if (field)
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
    },
    validateForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) this.addLanguages();
    },
  },
  mixins: [validationMixin],
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
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>