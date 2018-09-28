import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
const baseURL= '/data.json'

export default{
    getCommonApi(){
        return Vue.axios.get(baseURL).then((response) => response.data)
    }

    
}