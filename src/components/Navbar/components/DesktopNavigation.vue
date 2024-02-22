<template>
  <nav class="desktop-nav">
    <div>
      <FilledButton :font-default="true" icon="plus-white.svg">
        <template #text>
          {{ $t("navbar.mainButtonText") }}
        </template>
      </FilledButton>
    </div>

    <ul class="desktop-nav__menu">
      <li v-for="(item, idx) in menuItems" :key="item.link">
        <router-link
          class="desktop-nav__item"
          :class="{
            white:
              idx < 2 &&
              (route.fullPath === '/' || route.fullPath === '/about'),
          }"
          :to="item.link"
          v-if="!item.src"
        >
          {{ $t(`${item.title}`) }}
        </router-link>
        <router-link class="desktop-nav__logo" :to="item.link" v-else>
          <img
            :src="`${
              route.fullPath === '/' || route.fullPath === '/about'
                ? item.src
                : item.externalScr
            }`"
            alt="icon"
          />
        </router-link>
      </li>
    </ul>

    <NavbarRightBlock />
  </nav>
</template>

<script setup lang="ts">
import NavbarRightBlock from "./NavbarRightBlock.vue";
import FilledButton from "../../../ui/FilledButton/FilledButton.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const menuItems = [
  {
    link: "/",
    title: "navbar.home",
  },
  {
    link: "/about",
    title: "navbar.about",
  },
  {
    link: "/",
    src: "/icons/navigation/white_logo_desktop.svg",
    externalScr: "/icons/navigation/logo_sub.svg",
  },
  {
    link: "/advertisement",
    title: "navbar.advertisement",
  },
  {
    link: "/reviews",
    title: "navbar.reviews",
  },
];
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/mixins/grid.scss";
.desktop-nav {
  position: relative;
  padding: 20px;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__menu {
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 1024px) {
      gap: 10px;
    }
  }

  &__item {
    font-weight: 600;
    letter-spacing: 0.2px;
    @include adaptiv-fontlg(16, 15);

    &.white {
      color: var(--primary-color);
    }
  }

  &__info {
    display: flex;
    align-items: center;
    @include adaptivGaplg(10, 6);
  }

  &__address {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    color: var(--additional-color);
  }

  &__profile {
    cursor: pointer;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 24px;
      height: 24px;
    }
  }

  &__btn {
    cursor: pointer;
    background: var(--additional-color);
    color: var(--primary-color);
    padding: 8px 10px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-family: 600;
  }
}
</style>
