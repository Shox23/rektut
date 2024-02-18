<template>
  <section class="ad-section">
    <div class="ad-section__container container">
      <CardBlock
        link="/"
        :link-title="$t('main.servicesLinkTitle')"
        :title="$t('main.servicesTilte')"
      />

      <AdvertisementBlock
        v-if="adaptStore.screenState === AdaptiveState.desktop"
      />

      <CardBlock
        v-if="adaptStore.screenState === AdaptiveState.desktop"
        link="/"
        :link-title="$t('main.newBusinessesLinkTitle')"
        :title="$t('main.newBusinesses')"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import AdvertisementBlock from "../AdvertisementBlock/AdvertisementBlock.vue";
import CardBlock from "../../../../components/Recommended/CardBlock.vue";
import { useAdaptiveStore } from "../../../../store/adaptive";
import AdaptiveState from "../../../../helpers/enums/adaptiveEnum";

const adaptStore = useAdaptiveStore();
</script>

<style lang="scss" scoped>
.ad-section {
  width: 100%;
  padding: 30px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
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
