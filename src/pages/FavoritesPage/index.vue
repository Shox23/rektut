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
          />
          <NotFound />
        </template>
      </TabsComponent>
      <div>
        <GridBlock />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardBlock from "../../components/Recommended/CardBlock.vue";
import GridBlock from "../../components/Recommended/GridBlock.vue";
import TabsComponent from "../../components/TabsComponent/TabsComponent.vue";
import PageTitle from "../../ui/PageTitle/PageTitle.vue";
import NotFound from "../../components/Recommended/NotFound.vue"
</script>

<style scoped lang="scss">
.favorites-page {
  padding: 30px 0;

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
