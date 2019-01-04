import Vue from 'vue'
// tslint:disable-next-line:no-import-side-effect
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
