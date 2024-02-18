<template>
  <button class="outlined-btn">
    <span class="outlined-btn__text">
      <slot name="text" />
    </span>
  </button>
</template>

<script setup lang="ts"></script>

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
}
</style>
