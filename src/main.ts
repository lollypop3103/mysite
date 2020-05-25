import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueAnalytics from 'vue-analytics';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './assets/stylus/style.styl';

library.add(fas, far, fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueAnalytics, { id: 'UA-143076714-1', router });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
