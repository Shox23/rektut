<template>
  <div class="bg-image">
    <img class="bg-image__image" src="/images/Bg.jpg" alt="bg" />
    <!-- <h1 class="bg-image__title">
      {{ $t("main.mainTitle") }}
    </h1> -->
    <div class="bg-image__filter"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.bg-image {
  position: absolute;
  width: 100%;
  height: 100%;

  &__title {
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-self: center;
    text-align: center;
    width: 80%;
    max-width: 800px;
    font-size: 100px;
    text-transform: uppercase;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    // color: #fff;
  }

  &__image {
    width: 100%;
    height: 100%;

    @media (max-width: 1880px) {
      object-fit: cover;
    }
  }

  &__filter {
    position: absolute;
    // clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
    top: 0;
    left: 0;
    // z-index: 10;
    width: 50%;
    height: 100%;
    // background: #000;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);

    @media (max-width: 768px) {
      background: #20202080;
      backdrop-filter: blur(15px);
    }
  }
}
</style>
