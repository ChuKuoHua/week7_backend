import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend,
} from 'vee-validate'; // 驗證套件
import * as rules from 'vee-validate/dist/rules'; // 規則檔案（ex: email...）
import zhTW from 'vee-validate/dist/locale/zh_TW.json'; // 語系檔案
import 'bootstrap';
import Loading from 'vue-loading-overlay';
// fortawesome 套件
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';
// css 樣式
import './assets/scss/all.scss';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false;

// Loading
Vue.component('Loading', Loading);
// axios
Vue.use(VueAxios, axios);

// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
}); // 所有驗證規則
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('tw', zhTW);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

// fontawesome
library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.filter('currency', currencyFilter);
Vue.filter('dateFilter', dateFilter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
