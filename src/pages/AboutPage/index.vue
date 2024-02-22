<template>
  <div class="about-page">
    <HeroSection />
    <InfoSection />
    <FactsSection />
    <!-- <div class="about-page__container container">
      <PageTitle
        :title="$t('ourTeam.pageTitle')"
        :link-text="$t('ourTeam.pageLinkText')"
        @onClick="router.back"
      />

      <div class="about-page__info">
        <div class="about-page__desc">
          <h3 class="about-page__title">
            {{ $t("ourTeam.titleFirst") }}
            <span>
              {{ $t("ourTeam.titleSecond") }}
            </span>
          </h3>
          <p class="about-page__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit
            quibusdam facilis ex inventore repellat, quod laborum error mollitia
            atque iusto id perspiciatis cum nobis, quos ullam harum.
            Praesentium, corrupti? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla quam illum perferendis saepe voluptate,
            fugiat non! Assumenda sint quae debitis.
          </p>
          <FilledButton>
            <template #text>
              {{ $t("ourTeam.btnTitle") }}
            </template>
          </FilledButton>
        </div>

        <div class="about-page__img">
          <img src="/images/Bg.jpg" alt="image" />
        </div>
      </div>

      <h3 class="about-page__lower-title">
        {{ $t("ourTeam.lowerTitleFirst") }}
        <span class="text-black">{{ $t("ourTeam.lowerTitleSecond") }}</span>
        <span>{{ $t("ourTeam.lowerTitleThird") }}</span>
      </h3>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import PageTitle from "../../ui/PageTitle/PageTitle.vue";
import FilledButton from "../../ui/FilledButton/FilledButton.vue";
import FactsSection from "./components/FactsSection.vue"
import InfoSection from "./components/InfoSection.vue";
import HeroSection from "./components/HeroSection.vue";

const router = useRouter();
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins/grid.scss";

.text-black {
  font-weight: 500;
}
.about-page {
  height: 100vh;
  // padding: 30px 0;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 15px;
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
    }
  }

  &__lower-title {
    align-self: center;
    max-width: 74%;
    font-weight: 700;
    line-height: 111%;
    text-align: center;
    @include adaptiv-fontlg(36, 26);
    color: var(--brand-color);

    @media (max-width: 1200px) {
      max-width: 78%;
    }
    @media (max-width: 1024px) {
      max-width: 80%;
    }
    @media (max-width: 768px) {
      line-height: 100%;
      max-width: 100%;
      @include adaptiv-fontmd(24, 18);
    }
    @media (max-width: 576px) {
      // font-weight: 600;s
    }
  }

  &__info {
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__img {
    width: 50%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px) {
      width: 100%;
      order: -1;
    }

    // &::after {
    //   position: absolute;
    //   top: 0;
    //   content: "";
    //   left: 0;
    //   right: 0;
    //   bottom: 0;
    //   background: rgba(0, 0, 0, 0.6);
    // }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
    padding: 50px;
    // @include adaptivPaddinglg(50, 50, 50, 50, 30, 30, 30, 30);

    @media (max-width: 768px) {
      width: 100%;
      @include adaptivPaddingmd(30, 30, 30, 30, 20, 20, 20, 20);
    }
  }
}
</style>
