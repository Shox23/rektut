<template>
  <nav class="desktop-nav">
    <div>
      <FilledButton icon="plus.svg">
        <template #text>
          {{ $t("navbar.mainButtonText") }}
        </template>
      </FilledButton>
    </div>

    <ul class="desktop-nav__menu">
      <li v-for="item in menuItems" :key="item.link">
        <router-link class="desktop-nav__item" :to="item.link" v-if="!item.src">
          {{ $t(`${item.title}`) }}
        </router-link>
        <router-link :to="item.link" v-else>
          <img :src="item.src" alt="icon" />
        </router-link>
      </li>
    </ul>

    <div class="desktop-nav__info">
      <div class="desktop-nav__address">
        <img src="/icons/location.svg" alt="icon" />
        <p>
          {{ $t("navbar.address") }}
        </p>
      </div>

      <button class="desktop-nav__btn">En</button>

      <router-link class="desktop-nav__profile" to="/profile">
        <img src="/icons/user_black.svg" alt="icon" />
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import FilledButton from "../../../ui/FilledButton/FilledButton.vue";

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
    src: "/icons/navigation/white_logo_desktop.png",
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
.desktop-nav {
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
  }

  &__item {
    font-weight: 600;
    letter-spacing: 0.2px;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 10px;
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
