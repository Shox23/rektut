import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/LoginPage/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Main",
      path: "/",
      component: () => import("../pages/MainPage/index.vue"),
    },
    {
      name: "Login",
      path: "/log-in",
      component: Login,
      children: [
        {
          path: "recover",
          name: "recover-form",
          component: () =>
            import("../pages/LoginPage/components/RecoverForm/RecoverForm.vue"),
        },
        {
          path: "sign-up",
          name: "signup-form",
          component: () =>
            import("../pages/LoginPage/components/SignUpForm/SignUpForm.vue"),
        },
      ],
    },
  ],
});

export default router;
