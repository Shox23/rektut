<template>
  <div class="app">
    <Navbar v-if="!route.fullPath.includes('/log-in')" />
    <Transition
      name="expand"
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
    >
      <MobileMenu
        v-if="
          adaptiveStore.screenState === AdaptiveState.mobile &&
          adaptiveStore.menuOpen
        "
      />
    </Transition>
    <!-- </Transition> -->
    <div class="app__content">
      <router-view />
    </div>
    <Footer v-if="!route.fullPath.includes('/log-in')" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useLanguageStore } from "./store/lang";
import { useAdaptiveStore } from "./store/adaptive";
import Navbar from "./components/Navbar/Navbar.vue";
import MobileMenu from "./components/Navbar/components/MobileMenu.vue";
import AdaptiveState from "./helpers/enums/adaptiveEnum";
import Footer from "./components/Footer/Footer.vue";
import { useAdsStore } from "./store/ads";
import { useAuthStore } from "./store/auth";
// import { useAuthStore } from "./store/auth";

// const authStore = useAuthStore();
const adsStore = useAdsStore();
const route = useRoute();
const langStore = useLanguageStore();
const adaptiveStore = useAdaptiveStore();
const authStore = useAuthStore();

const enter = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = "auto";
  const height = getComputedStyle(el).height;
  el.style.height = "0";
  getComputedStyle(el);
  setTimeout(() => {
    el.style.height = height;
  });
};

const afterEnter = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = "auto";
};

const leave = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = getComputedStyle(el).height;
  getComputedStyle(el);
  setTimeout(() => {
    el.style.height = "0";
  });
};

onMounted(() => {
  // adsStore.getAllAds();
  adaptiveStore.setScreenValue(window.innerWidth);
  window.addEventListener("resize", () => {
    adaptiveStore.setScreenValue(window.innerWidth);
  });
  langStore.getDefaultLanguage();

  if (localStorage.accessToken && localStorage.refreshToken) {
    authStore.setAuth(true);
  } else {
    authStore.setAuth(false);
  }
  console.log(authStore.isAuth);
});
</script>

<style scoped>
.expand-enter-active {
  transition: height 400ms cubic-bezier(0.01, 0.59, 0.25, 0.94);
  overflow: hidden;
}

.expand-enter-from {
  & .menu__list {
    transform: translateY(-20px);
    opacity: 0;
  }
}

.expand-leave-active {
  transition: height 100ms;
  overflow: hidden;
}
</style>
