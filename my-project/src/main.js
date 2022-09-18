import Vue from 'vue'
import App from './App.vue'  //跟组件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
