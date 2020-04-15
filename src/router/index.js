import Vue from 'vue';
import VueRouter from 'vue-router';
import goTo from 'vuetify/es5/services/goto';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'Contacts',
    // route level code-splitting
    // this generates a separate chunk (contacts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () =>
      import(/* webpackChunkName: "questions" */ '../views/Questions.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/Jobs.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () =>
      import(/* webpackChunkName: "privacy" */ '../views/Privacy.vue')
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  }
});

export default router;
