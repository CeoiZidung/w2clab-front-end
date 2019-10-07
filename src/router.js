import Vue from 'vue'
import Router from 'vue-router'
import firstView from "./htmlVue/firstView.vue";
import mainland from "./htmlVue/mainland.vue";


//主页的五个组件
import carousel from "./homepage-components/carousel.vue";
// import header from "./homepage-components/header.vue";
import ad from "./homepage-components/ad.vue";
import teaching from "./homepage-components/teaching.vue";
import footer from "./homepage-components/footer.vue";
import fixedtop from "./fview-components/fixed-top.vue";


import homepage from "./htmlVue/homepage.vue";
import teacher from "./htmlVue/teacher.vue";
import teach from "./htmlVue/teach.vue";
import labs from "./htmlVue/labs.vue";
import news from "./htmlVue/news.vue";


//labs组件
import weblab from "./labs/web-lab.vue";
import ailab from "./labs/ai-lab.vue";
import bdatalab from "./labs/bdata-lab.vue";






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
                Carousel:carousel,
                Ad:ad,
                Teaching:teaching,
                Footer:footer

              }
            }
          ]
        },
        {
          path:'labs',
          component:labs,
          children:[
            {path:'weblab',component:weblab},
            {path:'ailab',component:ailab},
            {path:'bdatalab',component:bdatalab}
            
          ]
        },
        {
          path:'news',
          component:news
        },
        {
          path:'teach',
          component:teach,
          children:[
            {path:'weblab',component:weblab},
            {path:'ailab',component:ailab},
            {path:'bdatalab',component:bdatalab}
            
          ]
        },
        {
          path:'teacher',
          component:teacher
        }
      ]
      
    },

//firstView第一页
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
