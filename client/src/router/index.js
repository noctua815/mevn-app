import Vue from 'vue';
import Router from 'vue-router';
import Start from '@/components/pages/StartPage';
import Posts from '@/components/pages/PostsPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
    },
  ],
});
