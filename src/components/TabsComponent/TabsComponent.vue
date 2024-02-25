<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        class="tabs__item"
        :class="{ active: idx === activeItem }"
        v-for="(item, idx) in tabsItems"
        :key="idx"
        @click="switchContent(idx)"
      >
        <span class="tabs__item__text">
          {{ $t(`${item.header}`) }}
        </span>
        <span class="tabs__item__count">0</span>
      </li>
    </ul>
    <div class="tabs__wrapper">
      <div class="tabs__content" :class="[{ in: slideIn }, { out: slideOut }]">
        {{ tabsItems[activeItem].content }}
      </div>
      <!-- <Transition name="slide-up" mode="out-in"> -->
      <!-- </Transition> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const slideIn = ref<boolean>(false);
const slideOut = ref<boolean>(false);
const activeItem = ref<number>(0);
const tabsItems = [
  {
    header: "favorites.work",
    content: "work",
  },
  {
    header: "favorites.housing",
    content: "housing",
  },
  {
    header: "favorites.services",
    content: "services",
  },
  {
    header: "favorites.cars",
    content: "cars",
  },
];

const switchContent = (value: number) => {
  if (activeItem.value < value) {
    slideOut.value = true;
    setTimeout(() => {
      slideOut.value = false;
    }, 300);
  } else {
    slideIn.value = true;
    setTimeout(() => {
      slideIn.value = false;
    }, 300);
  }
  activeItem.value = value;
};
</script>

<style lang="scss" scoped>
.tabs {
  &__header {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  &__item {
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    color: var(--additional-color);

    &__count {
      color: rgba(89, 89, 89, 0.5);
    }

    &.active {
      color: var(--brand-color);

      .tabs__item__count {
        color: rgba(8, 99, 231, 0.5);
      }
    }
  }

  &__content {
    &.in {
      animation: slideIn 0.3s ease forwards;
    }
    &.out {
      animation: slideOut 0.3s ease forwards;
    }
  }

  &__wrapper {
    overflow: hidden;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-10%);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOut {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(5%);
  }
}
</style>
