import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";

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
    {
        name: "Login",
        component: Login,
        path: "/login",
    },
    {
        name: "Add",
        component: Add,
        path: "/add",
    },
    {
        name: "Update",
        component: Update,
        path: "/update",
    },
    
];   

// Create a new router instance
const router = createRouter({
    history: createWebHistory(), // Use the HTML5 history mode for cleaner
    routes, // Short for `routes: routes`  
});

export default router;
