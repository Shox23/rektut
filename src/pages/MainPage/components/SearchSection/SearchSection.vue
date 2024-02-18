<template>
  <section class="search-section">
    <div class="search-section__container container">
      <GridBlock v-if="adaptStore.screenState === AdaptiveState.desktop" />
      <FilterBlock :fullFilter="true" :withSearch="true" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import FilterBlock from "../../../../components/FilterBlock/FilterBlock.vue";
import GridBlock from "../../../../components/Recommended/GridBlock.vue";
import AdaptiveState from "../../../../helpers/enums/adaptiveEnum";
import { useAdaptiveStore } from "../../../../store/adaptive";

const adaptStore = useAdaptiveStore();
</script>

<style lang="scss" scoped>
.search-section {
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
