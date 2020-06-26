// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import VueCompositionApi from '@vue/composition-api';
import VueMeta from 'vue-meta';

import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'prismjs/themes/prism-okaidia.css';

import './assets/stylus/style.styl';

library.add(fas, far, fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(VueCompositionApi);
  Vue.use(VueMeta, {
    keyName: 'head',
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto',
  });
}
