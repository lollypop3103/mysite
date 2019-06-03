import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faBeer,
  faHome,
  faBlog
} from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/stylus/style.styl";

library.add(faCoffee);
library.add(faBeer);
library.add(faHome);
library.add(faBlog);
library.add(faAddressCard);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
