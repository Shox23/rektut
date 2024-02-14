<template>
  <button class="filled-btn" :class="{ bigger: bigger }" v-ripple>
    <span>
      <slot name="text" />
    </span>
    <span class="filled-btn__icon" v-if="icon">
      <img :src="`/icons/${icon}`" alt="icon" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { FilledButtonEmits, FilledButtonProps } from "./interfaces";

defineProps<FilledButtonProps>();
const emits = defineEmits<FilledButtonEmits>();
</script>

<style scoped lang="scss">
@import "../../assets/styles/mixins/grid.scss";
.filled-btn {
  font-weight: 600;
  @include adaptiv-fontlg(24, 18);
  letter-spacing: 0.01em;
  color: var(--primary-color);
  background: var(--brand-color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
  transition: 0.3s;
  overflow: hidden;

  &.bigger {
    @include adaptiv-fontlg(24, 18);
    @include adaptivPaddinglg(25, 25, 30, 30, 20, 20, 16, 16);

    @media (max-width: 768px) {
      @include adaptiv-fontmd(24, 18);
      @include adaptivPaddingmd(25, 25, 25, 25, 20, 20, 16, 16);
    }
  }

  &:hover {
    background: var(--primary-color);
    color: var(--brand-color);
  }

  &__icon {
    width: 18px;
    height: 18px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
