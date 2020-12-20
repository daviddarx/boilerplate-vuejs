import Home from './components/pages/home.vue';
import Page01 from './components/pages/page-01.vue';
import Page02 from './components/pages/page-02.vue';

//basic routes
let routes = [
  {
    label: 'Home',
    path: '/',
    name: 'home',
    component: Home,
    meta: { pageTitle: 'Home' }
  },
  {
    label: 'Page 01',
    path: '/page-01',
    name: 'page-01',
    component: Page01,
    meta: { pageTitle: 'Page01' }
  },
  {
    label: 'Page 02',
    path: '/page-02',
    name: 'page-02',
    component: Page02,
    meta: { pageTitle: 'Page02' }
  }
];

export default routes;
