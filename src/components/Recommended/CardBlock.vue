<template>
  <div class="card-block">
    <div class="card-block__header">
      <h3 class="card-block__title">
        {{ title }}
      </h3>

      <router-link
        v-if="adaptStore.screenState === AdaptiveState.desktop"
        class="card-block__link"
        :to="link"
      >
        <p>
          {{ linkTitle }}
        </p>
        <span>
          <img src="/icons/long_arrow.svg" alt="icon" />
        </span>
      </router-link>
    </div>

    <div class="card-block__list">
      <ProductCard v-for="item in adsStore.adList" :key="item.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AdaptiveState from "../../helpers/enums/adaptiveEnum";
import { CardBlockProps } from "../../models/models";
import { useAdaptiveStore } from "../../store/adaptive";
import { useAdsStore } from "../../store/ads";
import ProductCard from "../../ui/ProductCard/ProductCard.vue";

const props = withDefaults(defineProps<CardBlockProps>(), {
  status: "none",
});

const adsStore = useAdsStore();
const adaptStore = useAdaptiveStore();

onMounted(() => {
  if (!adsStore.adList) {
    adsStore.getAllAds();
  }
});
</script>

<style lang="scss" scoped>
.card-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    color: var(--additional-color);
  }

  &__link {
    font-size: 16px;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      justify-content: center;
      // flex-direction: column;
    }

    @media (max-width: 768px) {
    }
  }
}
</style>
