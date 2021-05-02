import Home from './components/pages/home.vue';
import Beratung from './components/pages/beratung.vue';
import Uebermich from './components/pages/ueber-mich.vue';
import Impressum from './components/pages/impressum.vue';


//basic routes
let routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    label: 'Home',
    path: '/home',
    name: 'home',
    component: Home,
    meta: { pageTitle: 'Home' }
  },
  {
    label: 'Beratung',
    path: '/beratung',
    name: 'beratung',
    component: Beratung,
    meta: { pageTitle: 'Beratung' }
  },
  {
    label: 'Über mich',
    path: '/ueber-mich',
    name: 'ueber-mich',
    component: Uebermich,
    meta: { pageTitle: 'Über mich' }
  },
  {
    label: 'Impressum',
    path: '/impressum',
    name: 'impressum',
    component: Impressum,
    meta: { pageTitle: 'Impressum' }
  }
];

export default routes;
