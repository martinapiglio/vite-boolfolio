import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './pages/Homepage.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
            meta: {
                title: 'MP Portfolio - About me'
            }
        },
        {
            path: '/projects',
            name: 'projects-index',
            component: ProjectsIndex,
            meta: {
                title: 'MP Portfolio - Projects'
            }
        },
        {
            path: '/projects/:slug',
            name: 'projects-show',
            component: SingleProject,
            meta: {
                title: 'MP Portfolio - Project detail'
            }
        },
    ]

});

//change page titles
router.beforeEach((to) => {
    document.title = to.meta?.title ?? 'Martina Piglionica - Portfolio'
});

export { router };