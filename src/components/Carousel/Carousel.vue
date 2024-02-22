<template>
  <div class="carousel">
    <PageTitle
      :title="title"
      :is-carousel="true"
      :lower="true"
      :link-text="linkTitle"
    />
    <ul class="carousel__list">
      <li class="carousel__item" v-for="item in carouselItems" :key="item.text">
        <div class="carousel__item__img">
          <img :src="item.image ? item.image : '/images/Bg.jpg'" alt="image" />
        </div>

        <div class="carousel__item__info">
          <div class="carousel__item__title">
            <h3 class="carousel__item__name">{{ item.name }}</h3>
            <h4 class="carousel__item__position">{{ item.character }}</h4>
          </div>
          <p class="carousel__item__text">{{ item.text }}</p>
          <div class="carousel__item__location">
            <img src="/icons/location.svg" alt="icon" />
            <p>
              {{ item.location }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import PageTitle from "../../ui/PageTitle/PageTitle.vue";
import { CarouselProps } from "./interfaces";

defineProps<CarouselProps>();
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__list {
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  &__item {
    overflow: hidden;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    @media (max-width: 1024px) {
      padding: 40px 20px;
      justify-content: flex-start;
    }

    &__title {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__img {
      border-radius: 50%;
      overflow: hidden;
      width: 150px;
      height: 150px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__info {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
    }

    &__name {
      font-weight: 500;
      font-size: 32px;
      line-height: 84%;
      text-align: center;
      color: #18181b;
    }

    &__position {
      text-align: center;
      font-size: 16px;
      color: #18181b;

      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }

    &__text {
      text-align: center;
      font-size: 16px;
      color: #18181b;

      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }

    &__location {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>
