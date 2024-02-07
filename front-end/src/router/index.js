// Assuming you're using Vue 3, you should not import Vue like in Vue 2.
// Vue 3 uses a createApp function instead of the Vue constructor.

// Import the createRouter and createWebHistory functions from vue-router
import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';

// Define your routes as an array of route objects.
const routes = [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutPage},
];


// Create the router instance by calling createRouter and passing in the
// routes array and the history implementation.
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
});

// Vue 3 no longer uses Vue.use() for installing plugins. Instead, you
// install plugins by calling app.use() in your main.js (or main.ts) where
// you create your Vue app instance with createApp().

// Example of how to install the router in your main.js (or similar entry file):
// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router'; // Import the router

// const app = createApp(App);
// app.use(router);
// app.mount('#app');

export default router;
