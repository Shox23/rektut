<template>
  <section class="main-hero">
    <BgImage />
    <div class="main-hero__container container">
      <h1
        class="main-hero__title"
        v-if="adaptStore.screenState === AdaptiveState.desktop"
      >
        Your <span class="text-brown">best</span> notice
        <span class="text-blue">board</span> in Tu<span class="text-white"
          >rkey</span
        >
      </h1>

      <h1 class="main-hero__title__mobile" v-else>
        Your best notice board in Turkey
      </h1>

      <span
        class="main-hero__icon"
        v-if="adaptStore.screenState === AdaptiveState.mobile"
      >
        <img src="/icons/arrow-circle-white.svg" alt="icon" />
      </span>

      <div
        class="main-hero__controls"
        v-if="adaptStore.screenState === AdaptiveState.desktop"
      >
        <h3 class="main-hero__subtitle">
          {{ $t("main.mainSubtitle") }}
        </h3>
        <FilterBlock :full-filter="false" :is-transparent="true" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import FilterBlock from "../../../../components/FilterBlock/FilterBlock.vue";
import BgImage from "../../../../components/BgImage/BgImage.vue";
import { useAdaptiveStore } from "../../../../store/adaptive";
import AdaptiveState from "../../../../helpers/enums/adaptiveEnum";

const adaptStore = useAdaptiveStore();
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/mixins/grid.scss";
.main-hero {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &__icon {
    position: absolute;
    left: 50%;
    animation: var(--glow-animation);
    transform: translateX(-50%);
    bottom: 10%;
    height: 20px;
    width: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    transform: translateY(20%);
    align-self: center;
    text-align: center;
    width: 80%;
    max-width: 800px;
    line-height: 90px;
    font-size: 100px;
    text-transform: uppercase;
    color: #c4ccd1;

    @media (max-width: 1200px) {
      font-size: 80px;
      max-width: 600px;
    }

    &__mobile {
      width: 80%;
      max-width: 80%;
      align-self: center;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      @include adaptiv-fontmd(60, 40);
      color: var(--primary-color);

      @media (max-width: 660px) {
        max-width: 400px;
      }

      @media (max-width: 385px) {
        width: 100%;
        max-width: 320px;
      }
    }
  }

  &__controls {
    animation: var(--bottom-append-animation);
    width: 100%;
  }

  &__subtitle {
    font-size: 36px;
    font-weight: 700;
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 20px;
  }

  &__container {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    padding-bottom: 20px;

    @media (max-width: 1440px) {
      padding-top: 20px;
      justify-content: space-between;
    }

    @media (max-width: 1200px) {
      max-width: 1024px;
    }

    @media (max-width: 1024px) {
      max-width: 768px;
    }

    @media (max-width: 768px) {
      max-width: 576px;
      justify-content: center;
    }
  }
}
</style>
