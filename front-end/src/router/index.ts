import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import InteractiveMap from "../views/InteractiveMap.vue";
import KeyEvents from "../views/KeyEvents.vue";
import KeyFigures from "../views/KeyFigures.vue";
import ContactPage from "../views/ContactPage.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomePage,
	},
	{
		path: "/about",
		name: "About",
		component: AboutPage,
	},
	{
		path: "/map",
		name: "Map",
		component: InteractiveMap,
	},
	{
		path: "/events",
		name: "Events",
		component: KeyEvents,
	},
	{
		path: "/figures",
		name: "Figures",
		component: KeyFigures,
	},
	{
		path: "/contact",
		name: "Contact",
		component: ContactPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
