import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MyCareer from '../views/MyCareer.vue';
import Search from '../views/Search.vue';
import ProfileLibrary from '../views/ProfileLibrary.vue';
import Profile from '../views/Profile.vue';
import PageNotFound from '../components/PageNotFound.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/my-career',
    name: 'MyCareer',
    component: MyCareer,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/profile-library',
    name: 'ProfileLibrary',
    component: ProfileLibrary,
  },
  {
    path: '/profile/:userId',
    name: 'Profile',
    component: Profile,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/page-not-found',
    name: 'PageNotFound',
    component: PageNotFound,
  },
  {
    path: '*',
    redirect: '/page-not-found',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
