import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Signin from '../views/auth/Signin.vue'
import Signup from '../views/auth/Signup.vue'
import ForgetPassword from '../views/auth/ForgetPassword.vue'
import TasksProjects from '../views/layouts/tasks/TasksProjects.vue'
import TasksMyDay from '../views/layouts/tasks/TasksMyDay.vue'
import PomodoroSpace from '../views/layouts/tasks/PomodoroSpace.vue'
import Account from '../views/layouts/AccountSetting.vue'
// import Account from '../views/auth/'
import TestingInline from '../views/TestingInlineEditing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/forget_password',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  {
    path: '/detail-tasks/projects',
    name: 'TasksProjects',
    component: TasksProjects
  },
  {
    path: '/detail-tasks/my-day',
    name: 'TasksMyDay',
    component: TasksMyDay
  },
  {
    path: '/detail-tasks/pomodoro',
    name: 'PomodoroSpace',
    component: PomodoroSpace
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/testing',
    name: 'TestingInline',
    component: TestingInline
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
