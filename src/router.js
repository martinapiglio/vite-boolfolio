import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './pages/Homepage.vue';

const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
    ]

});

export { router };