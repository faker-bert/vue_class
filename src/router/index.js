import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const home = () => import('../views/index.vue')
const log_share = () => import('../views/log_share.vue')
const login = () => import('../views/login.vue')
const logup = () => import('../views/logup.vue')
const log_write=()=>import('../views/markdown.vue')
const owner_log=()=>import('../views/owner_log.vue')
const person_message = ()=>import('../views/person_message.vue')
const account = ()=>import('../views/Accounting.vue')
const life = ()=>import('../views/life.vue')
const kebiao = ()=>import('../views/kebiao.vue')
const detail = ()=>import('../views/detail.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/log_sharing',
    name: 'log_share',
    component: log_share
  },
  {
    path:'/login',
    nameL:'login',
    component:login
  },
  {
    path: '/logup',
    name: 'logup',
    component: logup
  },
  {// 测试
    path: '/log_write',
    name: 'log_write',
    component: log_write
  },
  {
    path:'/owner_log',
    name :'owner_log',
    component:owner_log
  },
  {
    path:'/person_message',
    name :'person_message',
    component:person_message
  },
  {
    path:'/account',
    name :'account',
    component:account
  },
  {
    path:'/life',
    name :'life',
    component:life
  },
  {
    path:'/table',
    name:'kebiao',
    component:kebiao
  },
  {
    path:'/detail',
    name:'detail',
    component:detail
  }
  
]

const router = new VueRouter({
  mode:'history',
  routes:routes
})

export default router
