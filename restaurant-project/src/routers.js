import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";

const routes = [
    {
        name: "Home",
        component: Home,
        path: "/",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    
];   

// Create a new router instance
const router = createRouter({
    history: createWebHistory(), // Use the HTML5 history mode for cleaner
    routes, // Short for `routes: routes`  
});

export default router;
