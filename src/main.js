import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import router from './router'
library.add(fas);
Vue.component('awesome',FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount("#app");


