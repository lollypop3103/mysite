import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/stylus/style.styl";
import VueAnalytics from "vue-analytics";
//@ts-ignore
import PrismicVue from "prismic-vue";
//@ts-ignore
import linkResolver from "./prismic/link-resolver";
//@ts-ignore
import htmlSerializer from "./prismic/html-serializer";

library.add(fas, far, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueAnalytics, { id: "UA-143076714-1", router });
Vue.use(PrismicVue, {
  //@ts-ignore
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
