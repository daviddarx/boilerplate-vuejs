import Home from './components/pages/home.vue';
import About from './components/pages/about.vue';
import Items from './components/pages/items.vue';
import ItemDetail from './components/pages/item-detail.vue';
import Contact from './components/pages/contact.vue';

import * as itemsList from '../content/items/items/*.json';
delete itemsList.default;


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

// //dynamically create routes for items
var test = Object.values(itemsList);
Object.values(itemsList).forEach(item => {
  routes.push(
    {
      label: item.uuid,
      path: '/items/'+item.uuid,
      name: 'item-'+item.uuid,
      component: ItemDetail,
      meta: { content:item, isNavHidden: true }
    }
  );
});


export default routes;
