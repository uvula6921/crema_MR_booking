import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutMain from '@/components/layout/LayoutMain.vue'
import MR from '@/components/MeetingRooms/MR'
import MassageChair from '@/components/layout/MassageChair'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: LayoutMain
  },
  {
    path: '/mr',
    name: 'mr',
    component: MR
  },
  // {
  //   path: '/mr1',
  //   name: 'mr1',
  //   component: MR1
  // },
  // {
  //   path: '/mr2',
  //   name: 'mr2',
  //   component: MR2
  // },
  // {
  //   path: '/mr3',
  //   name: 'mr3',
  //   component: MR3
  // },
  {
    path: '/massagechair',
    name: 'MassageChair',
    component: MassageChair
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
