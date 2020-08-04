import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('@/views/Login.vue'),
  },
  // 巢狀路由
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('@/views/backstage/Dashboard'),
    children: [
      {
        path: 'products',
        name: 'BackProducts',
        component: () => import('@/views/backstage/Products'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'BackOrders',
        component: () => import('@/views/backstage/Orders'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'BackCoupons',
        component: () => import('@/views/backstage/Coupons'),
        meta: { requiresAuth: true },
      },
      {
        path: 'storages',
        name: 'BackPictures',
        component: () => import('@/views/backstage/Storages'),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
