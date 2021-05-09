import Vue from 'vue';
import App from './App.vue';
import gv from './mixins/globalVariables';
import VueObserveVisibility from "vue-observe-visibility";
import VAnimateClass from 'animate.css';
import VueScrollTo from 'vue-scrollto';
// import VModal from 'vue-js-modal';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.mixin(gv);
Vue.config.productionTip = false
Vue.use(VueObserveVisibility);
Vue.use(VAnimateClass);
Vue.use(VueScrollTo);
// Vue.use(VModal);

new Vue({
  render: h => h(App),
}).$mount('#app')
