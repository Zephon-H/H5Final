import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import More from '@/views/More'
import Price from '@/views/Price'
import SiteInformation from '@/views/SiteInformation'
import Trip from '@/views/Trip'
Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'index',
  component: Index,
  meta: {
    title: '首页'
  }
},
{
  path: '/more',
  name: 'more',
  component: More,
  meta: {
    title: '更多'
  }
},
{
  path: '/price',
  name: 'price',
  component: Price,
},
{
  path: '/site',
  name: 'site',
  component: SiteInformation,
},
{
  path: '/trip',
  name: 'trip',
  component: Trip,
},
];

const router = new VueRouter({
  routes
});

export default router
