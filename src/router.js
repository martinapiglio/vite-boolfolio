import { createRouter, createWebHistory } from 'vue-router';

//import of all the components I call in thw belowe reported routes
import Homepage from './pages/Homepage.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    //web history created with slashes
    history: createWebHistory(),

    //routes data
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
                title: 'About me'
            }
        },
        {
            path: '/projects',
            name: 'projects-index',
            component: ProjectsIndex,
            meta: {
                title: 'Projects'
            }
        },
        {
            path: '/projects/:slug',
            name: 'projects-show',
            component: SingleProject,
            meta: {
                title: 'Project detail'
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFound,
            meta: {
              title: '404'
            }
          }
    ]

});

//change page titles shown in browser label
router.beforeEach((to) => {
    document.title = to.meta?.title ? 'MP Portfolio - ' + to.meta.title : 'Martina Piglionica - Portfolio'
});

export { router };