<template>
  <button class="outlined-btn" :class="[{ fullWidth }, { profilePage }]">
    <span class="outlined-btn__text">
      <slot name="text" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { OutlinedButtonProps } from "./interfaces";

defineProps<OutlinedButtonProps>();
</script>

<style scoped lang="scss">
.outlined-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 16px;
  background: none;
  outline: none;
  border-radius: 5px;
  border: 1px solid var(--additional-color);
  cursor: pointer;
  font-size: 14px;
  color: var(--additional-color);

  &.fullWidth {
    width: 100%;
  }

  &.profilePage {
    font-weight: 600;
    font-size: 16px;
    padding: 15px 32px;
  }
}
</style>
