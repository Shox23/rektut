<template>
  <div class="product-card">
    <div class="product-card__content">
      <div class="product-card__img">
        <img loading="lazy" src="/images/Bg.jpg" alt="card-image" />
      </div>
      <div class="product-card__desc">
        <p class="product-card__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          dolores dolorem quo vitae vel facere sunt ut, rerum dignissimos qui
          ducimus nobis doloremque provident sequi?
        </p>

        <span class="product-card__price"> 50.00 USD </span>
      </div>
    </div>

    <div class="product-card__controls">
      <div class="product-card__district">
        {{ $t("productCard.districtTitle") }}
      </div>

      <OutlinedButton>
        <template #text>Learn more</template>
      </OutlinedButton>

      <div class="product-card__wrapper">
        <FilledButton :card-btn="true">
          <template #text>text</template>
        </FilledButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FilledButton from "../FilledButton/FilledButton.vue";
import OutlinedButton from "../OutlinedButton/OutlinedButton.vue";
</script>

<style lang="scss" scoped>
.product-card {
  width: max-content;
  border-radius: 10px;
  padding: 14px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  background: var(--primary-color);

  &__content {
    display: flex;
    flex-direction: column;
    max-width: 182px;
    gap: 15px;
    margin-bottom: 10px;

    @media (max-width: 576px) {
      max-width: 100%;
    }
  }

  &__desc {
    @media (max-width: 576px) {
      display: flex;
      justify-content: space-between;
    }
  }

  &__wrapper {
    @media (max-width: 576px) {
      display: none;
    }
  }

  &__district {
    display: none;
    font-size: 14px;
    color: var(--additional-color);

    @media (max-width: 576px) {
      display: block;
    }
  }

  &__price {
    display: none;
    font-weight: 600;
    font-size: 14px;
    color: var(--brand-color);

    @media (max-width: 576px) {
      display: block;
    }
  }

  &__text {
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    @media (max-width: 576px) {
      width: 70%;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__img {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    height: 100%;
    width: 100%;
    aspect-ratio: 1;
    // max-height: 182px;

    &::after {
      background-image: linear-gradient(
        180deg,
        rgba(53, 53, 53, 0) 0%,
        rgba(53, 53, 53, 0.14) 49%,
        #353535 100%
      );
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      content: "";
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
