import Vue from 'vue'
import App from './App.vue'
import "@/styles/global.css";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
router.afterEach((to, from, next) => {
  to;
  from;
  next;
  window.scrollTo(0, 0);
})