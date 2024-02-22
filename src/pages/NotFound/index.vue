<template>
  <div class="not-found-page">
    <div class="not-found-page__content">
      <img src="/icons/404.svg" alt="image" class="not-found-page__image" />
      <div class="not-found-page__text">
        <h3 class="not-found-page__title">{{ $t("notFound.title") }}</h3>
        <p>
          {{ $t("notFound.text") }}
        </p>
        <span>
          {{ $t("notFound.notify") }}
        </span>
      </div>
      <ul class="not-found-page__list">
        <li
          class="not-found-page__item"
          v-for="item in linkItems"
          :key="item.title"
        >
          <router-link :to="item.link" class="text-black">{{
            item.title
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const linkItems = [
  {
    link: "/",
    title: "Pharmacies",
  },
  {
    link: "/",
    title: "Lawyers",
  },
  {
    link: "/",
    title: "Medicine",
  },
  {
    link: "/",
    title: "Car sharing",
  },
  {
    link: "/",
    title: "Cleaning service",
  },
  {
    link: "/",
    title: "Insurance",
  },
  {
    link: "/",
    title: "Beauty and health",
  },
  {
    link: "/",
    title: "Home and repair",
  },
  {
    link: "/",
    title: "For children",
  },
  {
    link: "/",
    title: "Estate agent",
  },
  {
    link: "/",
    title: "The shops",
  },
  {
    link: "/",
    title: "Eldery care",
  },
];
</script>

<style scoped lang="scss">
@import "../../assets/styles/mixins/grid.scss";
.not-found-page {
  padding: 30px 0;

  &__content {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    gap: 50px;
    padding: 0 20px;
    // overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 24px;
    line-height: 83%;
    color: var(--additional-color);
    text-align: center;

    p {
      width: 60%;
    }

    @media (max-width: 768px) {
      @include adaptiv-fontmd(20, 16);
    }
  }

  &__title {
    font-size: 36px;
    font-weight: 700;
    color: var(--brand-color);
  }

  &__list {
    width: 110%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 100%;
    }
    // justify-content: space-between;
  }

  &__item {
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    width: max-content;
    padding: 10px 16px;
    color: var(--additional-color);
    border-radius: 10px;
    border: 1px solid var(--additional-color);

    @media (max-width: 768px) {
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>
