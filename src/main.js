//import vue
import Vue from 'vue'
import router from './router'
// import Layout from "./views/Layout.vue";

import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
Vue.use(iView);
import Quote from "./quote.vue";


//bootstrap 引入
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

// router.push('/mainland')

new Vue({
  router,
  render: h => h(Quote),
  
  
}).$mount('#app')
