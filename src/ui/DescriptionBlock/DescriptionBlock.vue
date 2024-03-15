<template>
  <div class="desc-block" :class="{ filled: wrapperFilled }">
    <PageTitle v-if="title" :title="title" :lower="true" />
    <div v-if="!empty" class="desc-block__content">
      <div class="desc-block__wrapper">
        <div class="desc-block__upper">
          <slot name="upper-text" />
        </div>
        <div class="desc-block__lower">
          <slot name="lower-text" />
        </div>
      </div>
      <div class="desc-block__details">
        <div class="desc-block__leading" v-if="leading">
          {{ leading }}
        </div>
        <div class="desc-block__trailing" v-if="trailing || date">
          <span>{{ trailing }}</span>
          <time v-if="date">{{ date }}</time>
        </div>
      </div>
    </div>
    <slot name="custom" />
  </div>
</template>
<script setup lang="ts">
import { DescriptionBlock } from "../../models/models";
import PageTitle from "../PageTitle/PageTitle.vue";
defineProps<DescriptionBlock>();
</script>
<style lang="scss" scoped>
.desc-block {
  background: var(--primary-color);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    background: none;
    padding: 0;
    box-shadow: none;
  }

  @media (max-width: 576px) {
    gap: 20px;
  }

  &.filled {
    .desc-block__wrapper {
      padding: 25px;
      border-radius: 10px;
      background: #f2f1f0;

      @media (max-width: 576px) {
        padding: 15px;
      }
    }

    @media (max-width: 768px) {
      background: var(--primary-color);
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      padding: 40px;

      .desc-block__content {
        background: none;
        padding: 0;
        box-shadow: none;
      }
    }

    @media (max-width: 576px) {
      padding: 20px;
    }

    @media (max-width: 375px) {
      padding: 15px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px) {
      background: var(--primary-color);
      border-radius: 10px;
      padding: 40px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 576px) {
      padding: 20px;
      gap: 15px;
    }

    @media (max-width: 375px) {
      padding: 15px;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--additional-color);
    font-size: 18px;
    line-height: 150%;
    font-weight: 400;

    @media (max-width: 576px) {
      gap: 15px;
      font-size: 16px;
    }

    @media (max-width: 375px) {
      font-size: 14px;
    }
  }

  &__lower {
    font-weight: 700;
  }

  &__details {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 75%;
    justify-content: space-between;
    color: rgba(0, 0, 0, 0.3);

    @media (max-width: 425px) {
      font-size: 18px;
    }
    @media (max-width: 375px) {
      font-size: 16px;
    }
  }

  &__trailing {
    time {
      margin-left: 5px;
    }
  }
}
</style>
