<template>
  <section class="info-section">
    <div class="info-section__container container">
      <div class="info-section__info">
        <div class="info-section__logo">
          <img loading="lazy" src="/icons/logo_desc.svg" alt="logo" />
        </div>

        <div class="info-section__desc">
          <h3 class="info-section__title">
            {{ $t("main.aboutTitleFirstPart") }}
            <span>
              {{ $t("main.aboutTitleSecondPart") }}
            </span>
          </h3>
          <p class="info-section__text">
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

      <div class="info-section__titles">
        <h3 class="global-title mobile-lower">
          {{ $t("aboutUs.infoTitle") }}
        </h3>
        <h4 class="info-section__subtitle">
          {{ $t("aboutUs.infoSubtitle") }}
        </h4>
      </div>

      <ul class="info-section__list">
        <li
          class="info-section__item"
          v-for="item in listItems"
          :key="item.title"
        >
          <time class="info-section__item__time">
            {{
              `0${new Date(item.date).getMonth() + 1}.${new Date(
                item.date
              ).getDate()}`
            }}
            <span class="info-section__item__title">{{
              new Date(item.date).getFullYear()
            }}</span>
          </time>
          <div class="info-section__item__content">
            <h4 class="info-section__item__title">
              {{ $t(`${item.title}`) }}
            </h4>
            <p class="info-section__item__text">
              {{ item.text }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import FilledButton from "../../../ui/FilledButton/FilledButton.vue";

const listItems = [
  {
    date: "06.12.2024",
    title: "aboutUs.listItemBirth",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a necessitatibus quam numquam neque debitis velit dolore eligendi sint! Ex, numquam. Non eligendi sit dignissimos!",
  },
  {
    date: "06.12.2024",
    title: "aboutUs.listItemStart",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a necessitatibus quam numquam neque debitis velit dolore eligendi sint! Ex, numquam. Non eligendi sit dignissimos!",
  },
  {
    date: "06.12.2024",
    title: "aboutUs.listItemAchivement",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a necessitatibus quam numquam neque debitis velit dolore eligendi sint! Ex, numquam. Non eligendi sit dignissimos!",
  },
  {
    date: "06.12.2024",
    title: "aboutUs.listItemToday",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a necessitatibus quam numquam neque debitis velit dolore eligendi sint! Ex, numquam. Non eligendi sit dignissimos!",
  },
];
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/mixins/grid.scss";
.info-section {
  padding: 30px 0;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 0 15px;
    // @media (max-width: 1200px) {
    //   max-width: 1000px;
    // }

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
      @include adaptivPaddingmd(30, 30, 30, 30, 20, 20, 20, 20);
    }
  }

  &__titles {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
      @include adaptivGapmd(20, 10);
    }
  }

  &__subtitle {
    color: var(--additional-color);
    font-weight: 400;
    font-size: 24px;

    @media (max-width: 768px) {
      @include adaptiv-fontmd(24, 16);
    }
  }

  &__list {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  &__item {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 25px;
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
      @include adaptivPaddingmd(25, 25, 25, 25, 20, 20, 10, 10);
      @include adaptivGapmd(20, 10);
      // align-items: center;
    }

    &__time {
      text-align: center;
      font-size: 16px;
      color: #18181b;
      font-family: var(--second-font);

      @media (max-width: 768px) {
        @include adaptiv-fontmd(16, 14);
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 40px 10px;

      @media (max-width: 768px) {
        padding: 10px;
      }
    }

    &__title {
      color: var(--brand-color);
      font-size: 24px;
      font-weight: 700;

      @media (max-width: 768px) {
        text-align: center;
        @include adaptiv-fontmd(24, 16);
      }
    }

    &__text {
      font-size: 16px;
      color: #18181b;
      font-family: var(--second-font);

      @media (max-width: 768px) {
        @include adaptiv-fontmd(26, 12);
        text-align: center;
      }
    }
  }
}
</style>
