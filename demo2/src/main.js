import Vue from 'vue'
import App from './App.vue'
import './assets/styles/white.less'
import './assets/styles/black.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
