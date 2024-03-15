<template>
  <div class="tabs">
    <div class="tabs__controls">
      <ul class="tabs__header">
        <li
          class="tabs__item"
          :class="{ active: item.id === activeItem }"
          v-for="item in tabsItems"
          :key="item.id"
          @click="switchContent(item.id)"
        >
          <span class="tabs__item__text">
            {{ $t(`${item.name}`) }}
          </span>
          <span class="tabs__item__count">0</span>
        </li>
      </ul>
      <FilledButton
        v-if="titleButton"
        @on-click="$emit('btnClick')"
        :font-default="true"
        icon="plus-white.svg"
      >
        <template #text>
          {{ $t("navbar.mainButtonText") }}
        </template>
      </FilledButton>
    </div>
    <div class="tabs__wrapper">
      <div class="tabs__content" :class="[{ in: slideIn }, { out: slideOut }]">
        <slot name="content" />
      </div>
      <!-- <Transition name="slide-up" mode="out-in"> -->
      <!-- </Transition> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FilledButton from "../../ui/FilledButton/FilledButton.vue";
import { TabsEmits, TabsProps } from "../../models/models";

const props = defineProps<TabsProps>();
const emits = defineEmits<TabsEmits>();
const slideIn = ref<boolean>(false);
const slideOut = ref<boolean>(false);
const activeItem = ref<number>(0);

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
  const index = props.tabsItems.findIndex((item) => item.id === value);
  const chosenData = props.tabsItems[index].name;
  emits("switch", chosenData);
};
</script>

<style lang="scss" scoped>
.tabs {
  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 50px;

    @media (max-width: 576px) {
      flex-wrap: wrap;
      gap: 20px 30px;
    }
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
    // overflow: hidden;
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
