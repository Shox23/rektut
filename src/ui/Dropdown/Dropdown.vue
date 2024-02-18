<template>
  <div class="dropdown" :class="{ opened: isOpen }">
    <div class="dropdown__header" @click="isOpen = !isOpen">
      <p class="dropdown__title">{{ title }}</p>
      <span class="dropdown__icon" :class="{ opened: isOpen }">
        <img src="/icons/arrow-circle-down.svg" alt="icon" />
      </span>
    </div>
    <Transition
      name="expand"
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
    >
      <ul class="dropdown__list" v-if="isOpen">
        <li class="dropdown__item" v-for="item in list" :key="item">
          {{ item }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { DropdownProps } from "./interfaces";

defineProps<DropdownProps>();
const isOpen = ref<boolean>(false);

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
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins/grid.scss";
.dropdown {
  position: relative;
  border-radius: 8px;
  width: 100%;
  @include adaptivPaddinglg(16, 16, 16, 16, 12, 12, 12, 12);
  background: var(--primary-color);

  @media (max-width: 768px) {
    background: #e6e6e6;
    @include adaptivPaddingmd(16, 16, 16, 16, 12, 12, 12, 12);
  }

  &.opened {
    border-radius: 8px 8px 0 0;
    .dropdown__icon {
      transform: rotate(180deg);
    }
  }

  &__header {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
  }

  &__title {
    font-family: var(--font-family);
    font-weight: 600;
    @include adaptiv-fontlg(20, 16);
    letter-spacing: 0.01em;
    color: var(--additional-color);

    @media (max-width: 768px) {
      @include adaptiv-fontmd(20, 16);
    }
  }

  &__list {
    position: absolute;
    // top: 50px;
    z-index: 10;
    left: 0;
    width: 100%;
    border-radius: 0 0 8px 8px;
    background: inherit;
  }

  &__item {
    padding: 8px 16px;
    cursor: pointer;
  }

  &__icon {
    transition: 0.3s ease-in all;
    height: 18px;
    width: 18px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
