<template>
  <section class="about-hero">
    <BgImage />
    <div class="about-hero__container container">
      <h1 class="about-hero__title">
        {{ $t("aboutUs.mainTitle") }}
        <span v-if="adaptStore.screenState === AdaptiveState.desktop">
          {{ $t("aboutUs.mainTitle") }}
        </span>
      </h1>
      <p
        v-if="adaptStore.screenState === AdaptiveState.desktop"
        class="about-hero__text"
      >
        {{ $t("aboutUs.mainText") }}
      </p>
      <FilledButton :main-section="true">
        <template #text>
          {{ $t("aboutUs.mainBtnText") }}
        </template>
      </FilledButton>
      <span class="about-hero__icon">
        <img src="/icons/arrow-circle-white.svg" alt="icon" />
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import BgImage from "../../../components/BgImage/BgImage.vue";
import { useAdaptiveStore } from "../../../store/adaptive.ts";
import AdaptiveState from "../../../helpers/enums/adaptiveEnum.ts";
import FilledButton from "../../../ui/FilledButton/FilledButton.vue";

const adaptStore = useAdaptiveStore();
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/mixins/grid.scss";

.about-hero {
  width: 100%;
  height: 100%;
  overflow: hidden;

  &__title {
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
    text-align: center;
    line-height: 90px;
    font-size: 120px;
    text-transform: uppercase;

    background-image: linear-gradient(to left, #ffffff 0 50%, #b2b8ba 50% 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    span {
      z-index: -1;
      position: absolute;
      color: #ffffff;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 1024px) {
      font-size: 100px;
    }

    @media (max-width: 768px) {
      @include adaptiv-fontmd(100, 54);
      background-image: none;
      -webkit-text-fill-color: var(--primary-color);
    }
  }

  &__text {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
    width: 100%;
    text-align: center;
    line-height: 167%;
    font-size: 20px;
    color: var(--primary-color);

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  &__icon {
    height: 34px;
    width: 34px;

    @media (max-width: 475px) {
      height: 20px;
      width: 20px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__container {
    height: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    padding: 150px 15px 0;

    @media (max-width: 1200px) {
      max-width: 1000px;
    }

    @media (max-width: 1024px) {
      max-width: 768px;
    }

    @media (max-width: 768px) {
      max-width: 576px;
    }

    @media (max-width: 576px) {
      max-width: 425px;
    }

    @media (max-width: 475px) {
      padding: 0 20px;
      justify-content: center;
    }
  }
}
</style>
