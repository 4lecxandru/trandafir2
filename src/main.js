import Vue from 'vue'
import App from './App.vue'
import router from './router'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
Vue.config.productionTip = false
UIkit.use(Icons);
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
