import { createRouter, createWebHistory } from 'vue-router'  //'vue-router' 를 기반으로 2개를 임포트 해오겠다.
import HomeView from '../views/HomeView.vue'

const routes = [  //기능에 따라서 분리도 할 수 있다. route 는 배열.
  {
    path: '/',
    name: 'home', //경로로 불러오거나, 이름으로 불러올 수 있으며 두가지 혼용하여 사용함. 보통 두가지는 따로 추가한다.
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes  //routes : 라우팅 목록
})

export default router
