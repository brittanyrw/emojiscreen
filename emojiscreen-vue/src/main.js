import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import twemoji from 'twemoji'

Vue.directive('emoji', {
  inserted(el) {
    el.innerHTML = twemoji.parse(el.innerHTML)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
