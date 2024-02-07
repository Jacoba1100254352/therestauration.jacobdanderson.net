// Import the necessary functions from Vue and Vue Router
import {createApp} from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';

// Import your route definitions
import routes from './router'; // Make sure your routes are defined in a compatible way with Vue Router 4

// Create the router instance
const router = createRouter({
    history: createWebHistory(), // Use the HTML5 history mode
    routes, // Short for `routes: routes`
});

// Create and mount the Vue application
const app = createApp(App);

// Use the router with the application
app.use(router);

app.mount('#app');
