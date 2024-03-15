import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/LoginPage/index.vue";
import HomePage from "../pages/MainPage/index.vue";
import { useAuthStore } from "../store/auth";
import TokenStatus from "../helpers/enums/authEnums";
import isAuth from "../helpers/functions/isAuth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Main",
      path: "/",
      component: HomePage,
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
    {
      name: "Profile",
      path: "/profile",
      component: () => import("../pages/ProfilePage/index.vue"),
    },
    {
      name: "Team",
      path: "/team",
      component: () => import("../pages/TeamPage/index.vue"),
    },
    {
      name: "About",
      path: "/about",
      component: () => import("../pages/AboutPage/index.vue"),
    },
    {
      name: "Favorites",
      path: "/favorites",
      component: () => import("../pages/FavoritesPage/index.vue"),
    },
    {
      name: "Answers",
      path: "/faq",
      component: () => import("../pages/AnswersPage/index.vue"),
    },
    {
      name: "My ads",
      path: "/my-ads",
      component: () => import("../pages/MyAdsPage/index.vue"),
    },
    {
      name: "Ads create",
      path: "/my-ads/create",
      component: () => import("../pages/MyAdsPage/pages/AdCreatePage.vue"),
    },
    {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      component: () => import("../pages/NotFound/index.vue"),
    },
  ],
});

router.beforeEach(async (to, _, next) => {
  const authStore = useAuthStore();
  const publicPages = ["/", "/favorites", "/about", "/log-in", "/faq"];
  const authRequired = !publicPages.includes(to.path);

  if (
    (authRequired && isAuth() === TokenStatus.empty) ||
    isAuth() == TokenStatus.logout
  ) {
    console.log("1");
    next("/log-in");
  } else if (isAuth() == TokenStatus.ok && authRequired) {
    console.log(to.path);
    next();
  } else if (isAuth() == TokenStatus.refresh && authRequired) {
    authStore.refreshTokens();
    next();
  } else {
    console.log(isAuth, authRequired);
    next();
  }
});

export default router;
