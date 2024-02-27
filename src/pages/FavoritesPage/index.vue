<template>
  <div class="favorites-page">
    <div class="favorites-page__container container">
      <PageTitle
        :title="$t('favorites.pageTitle')"
        :link-text="$t('favorites.pageLinkText')"
      />
      <TabsComponent>
        <template #content>
          <CardBlock
            link="/"
            link-title="Sorted by popularity"
            :title="$t('favorites.blockTitle')"
            v-if="isFound"
          />
          <NotFound
            v-else
            :title="$t('favorites.notFoundTitle')"
            :text="$t('favorites.notFoundText')"
            :btn-text="$t('favorites.notFoundBtnText')"
          />
        </template>
      </TabsComponent>
      <div v-if="!isFound">
        <h3 class="favorites-page__title">
          {{ $t("favorites.recommended") }}
        </h3>
        <GridBlock />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CardBlock from "../../components/Recommended/CardBlock.vue";
import GridBlock from "../../components/Recommended/GridBlock.vue";
import TabsComponent from "../../components/TabsComponent/TabsComponent.vue";
import PageTitle from "../../ui/PageTitle/PageTitle.vue";
import NotFound from "../../components/Recommended/NotFound.vue";

const isFound = ref<boolean>(true);
</script>

<style scoped lang="scss">
.favorites-page {
  padding: 30px 0;

  &__title {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 30px;
    color: var(--additional-color);
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
