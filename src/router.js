import Home from "./components/Home.vue";
import SignUpPage from "./components/SignUpPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./components/LogIn.vue"

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUpPage",
    component: SignUpPage,
    path: "/sign-up",
  },
 {
   name: "LogIn",
   component: LogIn,
   path: "/log-in",
 }
];
const router = createRouter({
  // that will create history to move backword or farward as like chrome browser1 to browser 2
  history: createWebHistory(),
  routes
});
export default router;
