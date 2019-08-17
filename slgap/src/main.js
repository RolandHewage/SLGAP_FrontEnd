import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import "chart.js"
import "hchs-vue-charts"
import VueParticles from 'vue-particles'
import VueGoogleCharts from 'vue-google-charts'


Vue.use(VueParticles);
Vue.use(VueGoogleCharts);

import * as VueGoogleMaps from "vue2-google-maps";


// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC5Ci0welMadP6XywtaK8IXEgbUU78FM2M",
    libraries: "places"
  }
});
//AIzaSyC5Ci0welMadP6XywtaK8IXEgbUU78FM2M
//AIzaSyDGiWwuGtaM18a7aYlP6GBY-Obw1leX0L4
Vue.use(window.VueCharts);

//app theme
Vue.use(Vuetify, { theme: {
  primary: '#114604',
  secondary: colors.green.lighten4,
  accent: colors.indigo.base,
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107',
  card: '#80C746'
}});





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

