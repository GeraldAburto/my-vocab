import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate'
import en from './locales/locale.en'
import es from './locales/locale.es'
import { MdButton, MdCard, MdField, MdProgress } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

//Use Vue Material Components.
Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdField)
Vue.use(MdProgress)

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
  i18n,
}).$mount('#app')
