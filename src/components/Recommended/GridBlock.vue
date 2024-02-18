<template>
  <div class="grid-block">
    <div class="grid-block__left">
      <div class="grid-block__item">
        <img src="/images/Bg.jpg" alt="image" />
      </div>
    </div>
    <div class="grid-block__right">
      <div class="grid-block__item">
        <img src="/images/Bg.jpg" alt="image" />
      </div>
      <div class="grid-block__item">
        <img src="/images/Bg.jpg" alt="image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.grid-block {
  height: 500px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 60% 1fr;

  &__item {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: red;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__right {
    display: grid;
    gap: 20px;
    grid-template-rows: 55% 1fr;
  }
}
</style>
