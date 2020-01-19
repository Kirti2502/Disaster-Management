import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import Graph from '@/components/Meetup/Graph'
import Message from '@/components/Meetup/Message'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import CreateMeetup2 from '@/components/Meetup/CreateMeetup2'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import Meetup from '@/components/Meetup/Meetup'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup,
      beforeEnter: AuthGuard
    },
    {
      path: '/meetup/new/1',
      name: 'CreateMeetup2',
      component: CreateMeetup2,
      beforeEnter: AuthGuard
    },
    {
      path: '/graph/new',
      name: 'Graph',
      component: Graph,
      beforeEnter: AuthGuard
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      beforeEnter: AuthGuard
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ],
  mode: 'history'
})
