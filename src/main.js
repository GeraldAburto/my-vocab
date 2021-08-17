import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate'
import en from './locales/locale.en'
import es from './locales/locale.es'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import router from './plugins/router'

//Use Multi-Language support.
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en,
    es
  }
})

//Use form validations.
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  i18n,
  router,
}).$mount('#app')
