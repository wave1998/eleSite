import Vue from 'vue'
import App from './App.vue'
import Login from "./views/Login"
import router from './router'
import store from './store'
import axios from 'axios'
import "@/assets/style/reset.css"
import '@/assets/style/fonticon/iconfont.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$axios=axios;

axios.interceptors.request.use(config=>{
    config.url = "/ele"+config.url;
    config.headers={
        authorization:store.state.admin.token
    };
    return config;
})
axios.interceptors.response.use(({data})=>{
    if(data.ok === 2){
        store.commit("OUT_LOGIN")
    }else{
        return data
    }
})
router.beforeEach((to,from,next)=>{
  if(to.meta.isAuthor){
      next("/login")
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: function (h) { return h(this.$store.state.admin.token?App:Login) }
}).$mount('#app')
