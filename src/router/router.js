import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MyCareer from '../views/MyCareer.vue';
import Search from '../views/Search.vue';
import ProfileLibrary from '../views/profile/ProfileLibrary.vue';
import Profile from '../views/profile/Profile.vue';
import SimilarProfiles from '../views/profile/SimilarProfiles.vue';
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
    beforeEnter(to, from, next) {
      if (this.$store.state.isLoggedIn) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    beforeEnter(to, from, next) {
      if (this.$store.state.isLoggedIn) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/profile-library',
    name: 'ProfileLibrary',
    component: ProfileLibrary,
    beforeEnter(to, from, next) {
      if (this.$store.state.isLoggedIn) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/profile/:displayName',
    name: 'Profile',
    component: Profile,
    props: true,
    beforeEnter(to, from, next) {
      if (this.$store.state.isLoggedIn) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/similar-profiles/:displayName',
    name: 'SimilarProfiles',
    component: SimilarProfiles,
    beforeEnter(to, from, next) {
      if (this.$store.state.isLoggedIn) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
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
  scrollBehavior(to, from, savedPosition) {
    // If user navigates back to page, maintains scroll
    if (savedPosition) {
      return savedPosition;
    }
    // Scroll down to element id
    if (to.hash) {
      return { selector: to.hash };
    }
    // Otherwise displays top of page
    return { x: 0, y: 0 };
  },
});

export default router;
