<template>
  <div class="filter-list">
    <div class="filter-list__full" v-if="fullFilter">
      <li class="filter-list__item" v-for="item in 20" :key="item">
        <ListItem icon="export.svg" :circle="true" title="Somethin" />
      </li>
    </div>

    <div class="filter-list__short" v-else>
      <ListItem
        v-for="item in 7"
        :key="item"
        icon="export.svg"
        :circle="false"
        title="Somethin"
      />
      <FilledButton :full-height="true">
        <template #text> All </template>
      </FilledButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FilterListProps } from "../../models/models";
import ListItem from "./components/ListItem.vue";
import FilledButton from "../../ui/FilledButton/FilledButton.vue";
defineProps<FilterListProps>();
</script>

<style lang="scss" scoped>
.filter-list {
  width: 100%;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__full {
    display: grid;
    gap: 10px 0;
    grid-template-columns: repeat(9, 1fr);

    @media (max-width: 1024px) {
      grid-template-columns: repeat(7, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__short {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(8, 70px);
    align-items: center;
    justify-content: center;
  }
}
</style>
