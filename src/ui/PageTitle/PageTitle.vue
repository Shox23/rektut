<template>
  <div class="page-title">
    <h2 class="global-title" :class="[{ lower }, { onCarousel: isCarousel }]">
      {{ title }}
    </h2>
    <div
      class="page-title__link"
      @click="$emit('onClick')"
      v-if="linkText && !isCarousel"
    >
      <span>
        <img loading="lazy" src="/icons/arrow-circle-left.svg" alt="icon" />
      </span>
      <p class="text-blue">
        {{ linkText }}
      </p>
    </div>
    <div class="page-title__link" v-if="linkText && isCarousel">
      <span
        @click="$emit('onBack')"
        v-if="adaptStore.screenState === AdaptiveState.desktop"
      >
        <img loading="lazy" src="/icons/arrow-circle-left.svg" alt="icon" />
      </span>
      <p class="text-blue page-title__link__text" @click="$emit('onClick')">
        {{ linkText }}
      </p>
      <span
        @click="$emit('onNext')"
        v-if="adaptStore.screenState === AdaptiveState.desktop"
      >
        <img loading="lazy" src="/icons/arrow-circle-left.svg" alt="icon" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AdaptiveState from "../../helpers/enums/adaptiveEnum";
import { PageTitleEmits, PageTitleProps } from "../../models/models";
import { useAdaptiveStore } from "../../store/adaptive";

defineProps<PageTitleProps>();
defineEmits<PageTitleEmits>();
const adaptStore = useAdaptiveStore();
</script>

<style scoped lang="scss">
.onCarousel {
  @media (max-width: 375px) {
    font-size: 18px;
  }
}

.page-title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__link {
    font-size: 20px;
    font-weight: 700px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;

    &__text {
      @media (max-width: 375px) {
        font-size: 18px;
      }
    }

    span {
      width: 18px;
      height: 18px;

      &:last-child {
        img {
          transform: rotate(180deg);
        }
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
