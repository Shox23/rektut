<template>
  <div class="main">
    {{ $t("main") }}
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.main {
  position: relative;
  height: 100vh;
  width: 100vw;
  background: url("/images/Bg.jpg") no-repeat center;
  background-size: cover;

  &::after {
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(3px);
  }
}
</style>
