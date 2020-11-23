import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  routes: [{
      path: '/index',
      component: () => import('@/pages/index'),
      children: [{
          path: '/home',
          component: () => import('@/views/home'),
        meta:{
           name: '首页'
        } 
        },
        {
          path: '/sort',
          component: () => import('@/views/sort'),
          meta:{
            name: '分类'
         }
        },
        {
          path: '/cart',
          component: () => import('@/views/cart'),
          meta:{
            name: '购物车'
         }
        },
        {
          path: '/mine',
          component: () => import('@/views/mine'),
          meta:{
            name: '我的'
         }
        },
        {
          path:'',
          redirect:'/home'
        }
      ]
    },
    {
      path: '/goodsDetail',
      component: () => import('@/pages/goodsDetail'),
      name: '商品细节'
    },
    {
      path:'/order',
      component:()=>import('@/pages/order'),
      name:'确认订单'
    },
    {
      path:'/goodsList',
      component:()=>import('@/pages/goodsList'),
      name:'商品列表'
    },
  
    {
      path:'/login',
      component:()=>import('@/pages/login'),
      name:'登录'
    },
    {
      path:'/register',
      component:()=>import('@/pages/register'),
      name:'注册'
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})