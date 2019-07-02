import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faBeer,
  faHome,
  faBook,
  faBookmark,
  faMusic,
  faEnvelope,
  faUser,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import {
  faVuejs,
  faJsSquare,
  faNode,
  faGithubSquare,
  faTwitter,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/stylus/style.styl";
import VueAnalytics from "vue-analytics";

library.add(
  faCoffee,
  faBeer,
  faHome,
  faBook,
  faBookmark,
  faMusic,
  faEnvelope,
  faUser,
  faCheck,
  faPalette,
  faAddressCard,
  faVuejs,
  faJsSquare,
  faNode,
  faGithubSquare,
  faTwitter,
  faGoogle
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueAnalytics, { id: "UA-143076714-1", router });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
