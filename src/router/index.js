import Vue from 'vue';
import VueRouter from 'vue-router';
import goTo from 'vuetify/es5/services/goto';
import Home from '../views/Home.vue';
import { MAIN_TITLE } from '@/constants';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Играй в снежки по правилам!',
    },
  },
  {
    path: '/contacts',
    name: 'Contacts',
    // route level code-splitting
    // this generates a separate chunk (contacts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue'),
    meta: {
      title: 'Контакты',
    },
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () =>
      import(/* webpackChunkName: "questions" */ '../views/Questions.vue'),
    meta: {
      title: 'Вопросы',
    },
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/Jobs.vue'),
    meta: {
      title: 'Работа у нас',
    },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () =>
      import(/* webpackChunkName: "privacy" */ '../views/Privacy.vue'),
    meta: {
      title: 'Конфиденциальность',
    },
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "404" */ '../views/NotFound.vue'),
    meta: {
      title: 'Такой страницы нет',
    },
  },
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
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} ${MAIN_TITLE}`;
  }
  next();
});

export default router;
