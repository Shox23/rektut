<template>
  <div class="list-item">
    <div class="list-item__circle" :class="{ active: isActive }" v-if="circle">
      <div class="list-item__circle__body">
        <span class="list-item__circle__logo">
          <img :src="`/icons/${icon}`" alt="icon" />
        </span>
      </div>
      <p
        class="list-item__circle__title"
        v-if="adaptStore.screenState === AdaptiveState.desktop"
      >
        {{ title }}
      </p>
    </div>

    <div
      class="list-item__square"
      :class="{ active: isActive }"
      :title="title"
      v-else
    >
      <span class="list-item__square__logo">
        <img :src="`/icons/${icon}`" alt="icon" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdaptiveState from "../../../helpers/enums/adaptiveEnum";
import { ListItemProps } from "../../../models/models";
import { useAdaptiveStore } from "../../../store/adaptive";
defineProps<ListItemProps>();
const adaptStore = useAdaptiveStore();
</script>

<style scoped lang="scss">
@import "../../../assets/styles/mixins/grid.scss";

.list-item {
  width: fit-content;
  cursor: pointer;

  &__circle {
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    &__body {
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
      padding: 25px;
      border-radius: 50%;
      background: var(--primary-color);

      @media (max-width: 768px) {
        @include adaptivPaddingmd(25, 25, 25, 25, 15, 15, 15, 15);
      }
    }

    &__title {
      font-size: 16px;
      max-width: 80px;
      text-align: center;
      color: var(--additional-color);
    }

    &__logo {
      width: 30px;
      height: 30px;
      display: block;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    &.active {
      .list-item__circle__body {
        background: var(--brand-color);
      }

      .list-item__circle__logo img {
        filter: var(--primary-filter);
      }
    }
  }

  &__square {
    transition: 0.3s;
    border-radius: 10px;
    background: var(--primary-color);
    padding: 15px 20px;

    &__logo {
      width: 30px;
      height: 30px;
      display: block;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    &.active {
      background: var(--brand-color);

      .list-item__square__logo img {
        filter: var(--primary-filter);
      }
    }
  }
}
</style>
