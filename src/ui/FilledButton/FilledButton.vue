<template>
  <button
    class="filled-btn"
    :class="[
      { bigger: bigger },
      { font_default: fontDefault },
      { on_nav: onNav },
      { fullWidth },
      { fullHeight },
      { cardBtn },
      { profilePage },
      { mainSection },
    ]"
    v-ripple
  >
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
  // width: 100%;
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

  &.fullWidth {
    width: 100%;
  }

  &.mainSection {
    border-radius: 20px;
    padding: 18px 30px;
    font-size: 32px;
    font-weight: 700;

    @media (max-width: 768px) {
      padding: 15px 25px;
      @include adaptiv-fontmd(30, 16);
      border-radius: 10px;
    }
  }

  &.profilePage {
    font-size: 16px;
    padding: 15px 32px;
    border: 1px solid var(--brand-color);
  }

  &.cardBtn {
    padding: 5px 20px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid var(--brand-color);
  }

  &.fullHeight {
    height: 100%;
  }

  &.bigger {
    @include adaptiv-fontlg(24, 18);
    @include adaptivPaddinglg(25, 25, 30, 30, 20, 20, 16, 16);

    @media (max-width: 768px) {
      @include adaptiv-fontmd(24, 18);
      @include adaptivPaddingmd(25, 25, 25, 25, 20, 20, 16, 16);
    }
  }

  &.font_default {
    font-size: 16px;
  }

  &.on_nav {
    @include adaptiv-fontlg(17, 12);

    .filled-btn__icon {
      @include adaptivHeightlg(18, 12);
      @include adaptivWidthLg(18, 12);
    }
  }

  &:hover {
    background: var(--primary-color);
    color: var(--brand-color);

    .filled-btn__icon {
      filter: var(--brand-filter);
    }
  }

  &__icon {
    transition: 0.3s;
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
