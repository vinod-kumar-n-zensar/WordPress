import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import './assets/styles/app.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VeeValidate from 'vee-validate'    
import  VueScrollTo from 'vue-scrollto';
import AOS from 'aos';
import "aos/dist/aos.css";
import vSelect from 'vue-select';
import VueMatchHeights from 'vue-match-heights';
import $ from 'jquery'; 
Vue.use(VueMatchHeights, {
});
Vue.use(VueScrollTo)
Vue.use(VeeValidate);
library.add(faLock,faChevronRight, faChevronLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-select', vSelect)
new Vue({
  created(){
    AOS.init({
      easing: 'ease-in-out-sine',
      duration: 600,
    });
    $("*"). removeAttr("data-grid");
  },
  el: '#app',
  render (h){
    return h(App);
},
})

