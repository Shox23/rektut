<template>
  <div class="filter-block">
    <div class="filter-block__box" :class="{ transparent: isTransparent }">
      <div>
        <h3 class="filter-block__title" v-if="title">{{ title }}</h3>
      </div>

      <div class="filter-block__search" v-if="withSearch">
        <h3
          v-if="adaptStore.screenState === AdaptiveState.desktop"
          class="filter-block__title"
        >
          {{ $t("filterBlock.search") }}
        </h3>
        <CustomInput
          :trailing="`${
            adaptStore.screenState === AdaptiveState.desktop ? 'search.svg' : ''
          }`"
          :icon="`${
            adaptStore.screenState === AdaptiveState.mobile ? 'search.svg' : ''
          }`"
          :bordered="
            adaptStore.screenState === AdaptiveState.mobile ? true : false
          "
          :noneShadow="true"
          :placeholder="$t('filterBlock.inputPlaceholder')"
        />
      </div>

      <div class="filter-block__controls">
        <Dropdown :list="cities" :title="$t('filterBlock.workType')" />
        <Dropdown :list="cities" :title="$t('filterBlock.workCity')" />
        <FilledButton
          :full-height="
            adaptStore.screenState === AdaptiveState.desktop ? true : false
          "
          :fullWidth="true"
        >
          <template #text>
            {{ $t("filterBlock.btnTitle") }}
          </template>
        </FilledButton>
      </div>
    </div>

    <FilterList :full-filter="fullFilter" />
  </div>
</template>

<script setup lang="ts">
import FilterList from "../FilterList/FilterList.vue";
import CustomInput from "../../ui/CustomInput/CustomInput.vue";
import Dropdown from "../../ui/Dropdown/Dropdown.vue";
import FilledButton from "../../ui/FilledButton/FilledButton.vue";
import { FilterBlockProps } from "./interfaces";
import { useAdaptiveStore } from "../../store/adaptive";
import AdaptiveState from "../../helpers/enums/adaptiveEnum";

defineProps<FilterBlockProps>();

const cities = ["Tashkent", "Moscow", "Dublin", "Seul"];
const adaptStore = useAdaptiveStore();
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins/grid.scss";

.filter-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  &__box {
    display: flex;
    flex-direction: column;
    @include adaptivPaddinglg(20, 20, 20, 20, 12, 12, 12, 12);
    border-radius: 10px;
    background: #e6e6e6;
    &.transparent {
      background: rgba(230, 230, 230, 0.2);
      backdrop-filter: blur(5px);

      @media (max-width: 768px) {
        background: var(--primary-color);
      }
    }

    @media (max-width: 768px) {
      @include adaptivPaddingmd(20, 20, 20, 20, 12, 12, 12, 12);
      background: var(--primary-color);
    }
  }

  &__title {
    @include adaptiv-fontlg(36, 24);
    font-weight: 700;
    line-height: 47%;
    color: var(--brand-color);
  }

  &__search {
    display: flex;
    align-items: center;
    @include adaptivGaplg(30, 16);
    @include adaptivPaddinglg(0, 0, 0, 25, 0, 0, 0, 15);

    @media (max-width: 768px) {
      @include adaptivGapmd(30, 16);
      @include adaptivPaddingmd(0, 0, 0, 25, 0, 0, 0, 15);
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    @include adaptivGaplg(20, 10);

    @media (max-width: 768px) {
      flex-direction: column;
      @include adaptivGapmd(20, 10);
    }
  }
}
</style>
