import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
//import router
import { router } from './router.js'

// .use(router) to be added in order to let routes work
createApp(App).use(router).mount('#app')
