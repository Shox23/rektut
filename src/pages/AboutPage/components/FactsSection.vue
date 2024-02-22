<template>
  <section class="facts-section">
    <div class="facts-section__container container">
      <div class="facts-section__info">
        <div class="facts-section__titles">
          <h3 class="global-title">
            {{ $t("aboutUs.factsTitle") }}
          </h3>
          <h4 class="facts-section__subtitle">
            {{ $t("aboutUs.factsSubtitle") }}
          </h4>
        </div>

        <ul class="facts-section__list">
          <li
            class="facts-section__item"
            v-for="item in listItems"
            :key="item.quantity"
          >
            <h3 class="facts-section__item__title">
              {{ item.quantity }}
              <span>
                {{ item.title }}
              </span>
            </h3>
            <p class="facts-section__item__text">
              {{ item.text }}
            </p>
          </li>
        </ul>
      </div>
      <Carousel
        :carousel-items="carouselItems"
        :title="$t('aboutUs.factsCarouselTitle')"
        :link-title="$t('aboutUs.viewAll')"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Carousel from "../../../components/Carousel/Carousel.vue";

const listItems = [
  {
    quantity: "2.5",
    title: "thous",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    quantity: "100",
    title: "thous",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    quantity: "200",
    title: "thous",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    quantity: "135",
    title: "thous",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const carouselItems = [
  {
    name: "Cristiano",
    character: "Product manager",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum qui dolor. Dolore optio possimus magnam ipsum illum cupiditate ullam.",
    location: "Tashkent",
  },
  {
    name: "Nicola Tesla",
    character: "Product owner",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
    location: "Berlin",
  },
  {
    image: "https://avatars.githubusercontent.com/u/97742971?v=4",
    name: "Napoleon Bonaparte",
    character: "Taxi driver",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aliquam, vel placeat quidem voluptates labore voluptatem ipsam fugiat voluptas doloremque sit ab rem minus excepturi!",
    location: "Addis-abbeba",
  },
];
</script>

<style scoped lang="scss">
@import "../../../assets/styles/mixins/grid.scss";

.facts-section {
  padding: 30px 0;

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

  &__info {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__titles {
    display: flex;
    flex-direction: column;

    gap: 30px;

    @media (max-width: 768px) {
      @include adaptivGapmd(20, 10);
      align-items: center;
    }
  }

  &__subtitle {
    color: var(--additional-color);
    font-weight: 400;
    font-size: 24px;

    @media (max-width: 768px) {
      text-align: center;
      @include adaptiv-fontmd(24, 16);
    }
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__item {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 40px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
      padding: 20px;
      width: 100%;
    }

    &__title {
      @include adaptiv-fontlg(48, 24);
      font-weight: 700;
      color: #18181b;

      @media (max-width: 768px) {
        @include adaptiv-fontmd(48, 24);
      }

      span {
        font-weight: 500;
        @include adaptiv-fontlg(32, 20);

        @media (max-width: 768px) {
          @include adaptiv-fontmd(32, 14);
        }
      }
    }

    &__text {
      font-weight: 400;
      font-size: 18px;
      line-height: 167%;
      text-align: center;
      color: #18181b;

      @media (max-width: 768px) {
        @include adaptiv-fontmd(18, 14);
      }
    }
  }
}
</style>
