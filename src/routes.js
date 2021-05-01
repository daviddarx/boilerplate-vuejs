import Home from './components/pages/home.vue';
import About from './components/pages/about.vue';
import Items from './components/pages/items.vue';
import Contact from './components/pages/contact.vue';


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
    label: 'About',
    path: '/about',
    name: 'about',
    component: About,
    meta: { pageTitle: 'About' }
  },
  {
    label: 'Items',
    path: '/items',
    name: 'items',
    component: Items,
    meta: { pageTitle: 'Items' }
  },
  {
    label: 'Contact',
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { pageTitle: 'Contact' }
  }
];

export default routes;
