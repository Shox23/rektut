<template>
  <nav class="mobile-nav">
    <div class="mobile-nav__left">
      <div class="mobile-nav__burger" @click="adaptiveStore.toggleMenu">
        <img
          :src="`${
            route.fullPath === '/'
              ? '/icons/navigation/burger-white.svg'
              : '/icons/navigation/burger.svg'
          }`"
          alt="menu-icon"
        />
      </div>
      <div class="mobile-nav__logo">
        <router-link to="/">
          <img
            :src="`${
              route.fullPath === '/'
                ? '/icons/navigation/white_logo_mobile.svg'
                : '/icons/navigation/logo_sub.svg'
            }`"
            alt="logo"
          />
        </router-link>
      </div>
    </div>

    <NavbarRightBlock />
  </nav>
</template>

<script setup lang="ts">
import NavbarRightBlock from "./NavbarRightBlock.vue";
import { useAdaptiveStore } from "../../../store/adaptive";
import { useRoute } from "vue-router";

const route = useRoute();
const adaptiveStore = useAdaptiveStore();
</script>

<style lang="scss" scoped>
.mobile-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 425px) {
    padding: 12px;
  }

  @media (max-width: 375px) {
    padding: 8px;
  }

  @media (max-width: 375px) {
    padding: 8px 4px;
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__burger {
    cursor: pointer;
  }
}
</style>
