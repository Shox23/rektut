<template>
  <div class="filter-list" v-if="categoriesStore.allCategories">
    <div class="filter-list__full" v-if="fullFilter">
      <li
        class="filter-list__item"
        v-for="item in categoriesStore.allCategories"
        :key="item.id"
      >
        <ListItem :icon="item.icon" hide-title circle :title="item.name" />
      </li>
    </div>

    <div class="filter-list__short" v-else>
      <ListItem
        v-for="item in categoriesStore.allCategories"
        :key="item.id"
        :icon="item.icon"
        :circle="false"
        :title="item.name"
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
import { onMounted } from "vue";
import { useCategoriesStore } from "../../store/categories";

defineProps<FilterListProps>();
const categoriesStore = useCategoriesStore();

onMounted(() => {
  // console.log(!categoriesStore.allCategories);
  // if (!categoriesStore.allCategories && categoriesStore.loading) {
  categoriesStore.getCategories();
  // }
});
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
