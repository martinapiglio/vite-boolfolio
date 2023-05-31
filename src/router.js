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
            component: AppAbout
        },
        {
            path: '/projects',
            name: 'projects-index',
            component: ProjectsIndex
        },
        {
            path: '/projects/:slug',
            name: 'projects-show',
            component: SingleProject
        },
    ]

});

export { router };