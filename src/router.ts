import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import HotView from './views/HotView.vue'
import IncomeView from './views/IncomeView.vue'
import TeamView from './views/TeamView.vue'
import ProfileView from './views/ProfileView.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeView },
    { path: '/hot', component: HotView },
    { path: '/income', component: IncomeView },
    { path: '/team', component: TeamView },
    { path: '/profile', component: ProfileView }
  ]
})
