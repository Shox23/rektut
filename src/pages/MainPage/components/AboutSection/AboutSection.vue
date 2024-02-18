<template>
  <section class="about-section">
    <div class="about-section__container container">
      <div class="about-section__info">
        <div class="about-section__logo">
          <img loading="lazy" src="/icons/logo_desc.svg" alt="logo" />
        </div>

        <div class="about-section__desc">
          <h3 class="about-section__title">
            {{ $t("main.aboutTitleFirstPart") }}
            <span>
              {{ $t("main.aboutTitleSecondPart") }}
            </span>
          </h3>
          <p class="about-section__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit
            quibusdam facilis ex inventore repellat, quod laborum error mollitia
            atque iusto id perspiciatis cum nobis, quos ullam harum.
            Praesentium, corrupti? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla quam illum perferendis saepe voluptate,
            fugiat non! Assumenda sint quae debitis.
          </p>
          <FilledButton>
            <template #text>
              {{ $t("main.aboutBtnTitle") }}
            </template>
          </FilledButton>
        </div>
      </div>

      <div
        v-if="adaptStore.screenState === AdaptiveState.desktop"
        class="about-section__company"
      >
        <img
          class="about-section__company__image"
          loading="lazy"
          src="/images/aboutCompany.jpg"
          alt="image"
        />
        <h3 class="about-section__company__title">
          {{ $t("main.companyTitleFirstPart") }}
          <span>
            {{ $t("main.companyTitleSecondPart") }}
          </span>
        </h3>
        <p class="about-section__company__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id similique
          rem minima tempore eveniet laudantium quis odio molestias adipisci
          nihil, voluptate inventore, dolor officia qui.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AdaptiveState from "../../../../helpers/enums/adaptiveEnum";
import { useAdaptiveStore } from "../../../../store/adaptive";
import FilledButton from "../../../../ui/FilledButton/FilledButton.vue";

const adaptStore = useAdaptiveStore();
</script>

<style scoped lang="scss">
@import "../../../../assets/styles/mixins/grid.scss";

.about-section {
  width: 100%;
  padding: 30px 0;

  &__info {
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__logo {
    background: url("/images/aboutUs.jpg") no-repeat center;
    background-size: cover;
    display: flex;
    z-index: 1;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    min-height: 220px;
    flex-grow: 1;
    position: relative;
    overflow: hidden;
    // flex-grow: 1;

    &::after {
      position: absolute;
      right: 0;
      left: 0;
      z-index: -1;
      bottom: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.6);
      content: "";
    }
  }

  &__title {
    font-size: 32px;
    font-weight: 700;
    color: var(--additional-color);

    span {
      color: #b8ea71;
    }

    @media (max-width: 475px) {
      font-size: 24px;
    }
  }

  &__text {
    font-size: 16px;
    color: #18181b;
    display: -webkit-box;

    @media (max-width: 475px) {
      font-size: 14px;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
  }

  &__desc {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    width: 50%;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    @include adaptivPaddinglg(50, 50, 50, 50, 30, 30, 30, 30);

    @media (max-width: 768px) {
      width: 100%;
      @include adaptivPaddingmd(30, 30, 30, 30, 10, 10, 10, 10);
    }
  }

  &__company {
    width: 100%;
    height: 235px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    z-index: 1;

    &::after {
      position: absolute;
      right: 0;
      left: 0;
      z-index: -1;
      bottom: 0;
      top: 0;
      background: rgba(249, 249, 249, 0.8);
      content: "";
    }

    &__image {
      position: absolute;
      z-index: -1;

      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__title {
      font-weight: 700;
      font-size: 32px;
      color: var(--additional-color);

      span {
        color: var(--brand-color);
      }
    }

    &__text {
      font-size: 18px;
      color: #475569;
      text-align: center;
      max-width: 420px;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 1200px) {
      max-width: 1024px;
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
    }
  }
}
</style>
