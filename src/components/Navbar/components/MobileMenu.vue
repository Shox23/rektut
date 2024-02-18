<template>
  <div class="mobile-menu">
    <div class="mobile-menu__header">
      <div class="mobile-menu__burger" @click="adaptiveStore.toggleMenu">
        <img src="/icons/navigation/burger.svg" alt="burger" />
      </div>
      <div class="mobile-menu__close" @click="adaptiveStore.toggleMenu">
        <img src="/icons/navigation/close.svg" alt="close-icon" />
      </div>
    </div>

    <div class="mobile-menu__body">
      <div>
        <FilledButton icon="plus-white.svg">
          <template #text>
            {{ $t("navbar.menu.btnText") }}
          </template>
        </FilledButton>
      </div>

      <ul class="mobile-menu__menu">
        <li
          class="mobile-menu__item"
          v-for="item in menuItems"
          :key="item.link"
        >
          <router-link :to="item.link">{{ $t(`${item.title}`) }}</router-link>
        </li>
      </ul>

      <div class="mobile-menu__info">
        <div class="mobile-menu__address">
          <img
            class="mobile-menu__address__icon"
            src="/icons/location_blue.svg"
            alt="icon"
          />
          <p>
            {{ $t("navbar.address") }}
          </p>
        </div>

        <button class="mobile-menu__btn">En</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAdaptiveStore } from "../../../store/adaptive";
import FilledButton from "../../../ui/FilledButton/FilledButton.vue";

const adaptiveStore = useAdaptiveStore();

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
.mobile-menu {
  transform-origin: top;
  transition: transform 0.4s ease-in-out;
  overflow: hidden;
  padding: 20px;
  position: absolute;
  background: var(--primary-color);
  z-index: 20;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media (max-width: 425px) {
    padding: 12px;
  }

  @media (max-width: 375px) {
    padding: 8px;
  }

  @media (max-width: 375px) {
    padding: 8px 4px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__body {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  &__menu {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
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

    @media (max-width: 425px) {
      font-size: 14px;
    }

    &__icon {
      @media (max-width: 425px) {
        height: 18px;
        width: 18px;
      }
    }
  }

  &__btn {
    cursor: pointer;
    background: var(--additional-color);
    color: var(--primary-color);
    padding: 8px 10px;
    border: none;
    font-size: 16px;
    border-radius: 10px;
    outline: none;
    font-family: 600;
  }
}
</style>
