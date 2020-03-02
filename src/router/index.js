import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/index')
  },
  {
    path:"/homepage",
    component:()=> import("../components/home/homepage")
  },
  {
    path:"/homepage/homepagedetail",
    component:()=> import("../components/home/homepagedetail")
  },
  {
    path:"/goodsdetail/g-details",
    component:()=> import("../components/goodsdetail/g-details")
  },
  {
    path:"/index/:page",
    component:() => import('../components/index')
  },
  {
    path:"/test",
    component:()=> import('../components/test')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
