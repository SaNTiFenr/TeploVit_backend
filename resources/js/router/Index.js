import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'


const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('@/views/ServicesView.vue')
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('@/views/ProductsView.vue')
    },
    {
        path: '/solutions',
        name: 'solutions',
        component: () => import('@/views/SolutionsView.vue')
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('@/views/PortfolioView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('@/views/ContactsView.vue')
    },
    {
        path: '/portfolio/:id',
        name: 'work-detail',
        component: () => import('@/views/WorkDetail.vue'),
        props: true
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// Глобальный обработчик ошибок
router.onError((error) => {
  console.error('Router error:', error);
});

export default router
