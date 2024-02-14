<template>
  <button class="white-btn" :class="{ bigger: bigger }" v-ripple>
    <span class="white-btn__icon" v-if="icon">
      <img :src="`/icons/${icon}`" alt="icon" />
    </span>
    <span>
      <slot name="text" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { WhiteButtonEmits, WhiteButtonProps } from "./interfaces";

defineProps<WhiteButtonProps>();
const emits = defineEmits<WhiteButtonEmits>();
</script>

<style scoped lang="scss">
@import "../../assets/styles/mixins/grid.scss";
.white-btn {
  width: 100%;
  min-width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  @include adaptiv-fontlg(24, 18);
  line-height: 62%;
  background: var(--primary-color);
  border: none;
  border-radius: 10px;
  overflow: hidden;
  user-select: none; // padding: 30px 25px;
  @include adaptivPaddinglg(25, 25, 30, 30, 20, 20, 16, 16);
  transition: 0.3s;
  cursor: pointer;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  // &:hover {
  //   background: var(--primary-color);
  //   color: var(--brand-color);
  // }

  &__icon {
    width: 24px;
    height: 24px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    @include adaptiv-fontmd(24, 18);
    @include adaptivPaddingmd(20, 20, 25, 25, 20, 20, 16, 16);
  }
}
</style>
