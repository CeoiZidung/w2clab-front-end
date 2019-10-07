import Vue from 'vue'
import Router from 'vue-router'
import firstView from "./htmlVue/firstView.vue";
import mainland from "./htmlVue/mainland.vue";


//主页的五个组件
import carousel from "./homepage-components/carousel.vue";
import header from "./homepage-components/header.vue";
import ad from "./homepage-components/ad.vue";
import teaching from "./homepage-components/teaching.vue";
import footer from "./homepage-components/footer.vue";
import fixedtop from "./fview-components/fixed-top.vue";

import homepage from "./homepage-components/homepage.vue";

Vue.use(Router)


export default new Router({
  el:'#app',
  routes: [
    {
      path: '/mainland',
      component:mainland,   
      children:[
        {
          path:'homepage',
          component:homepage,
          children:[
            {
              path:'',
              components:{
                Header:header,
                Carousel:carousel,
                Ad:ad,
                Teaching:teaching,
                Footer:footer
              }

            }
            
          ]
          
                
              },

          {
            path:'',
          components:{
            Header:header
          }
            
          }
        
      ],
      
    },


    {
      path: '/',
      // name: 'Layout',
      component:firstView,
      children:[
        {
          path:'',
          component:fixedtop
        }
      ]
    }
  ]
    
})
