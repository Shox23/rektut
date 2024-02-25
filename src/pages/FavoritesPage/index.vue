<template>
  <div class="favorites-page">
    <div class="favorites-page__container container">
      <PageTitle
        :title="$t('favorites.pageTitle')"
        :link-text="$t('favorites.pageLinkText')"
      />
      <TabsComponent />
      <div>
        <GridBlock />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GridBlock from "../../components/Recommended/GridBlock.vue";
import TabsComponent from "../../components/TabsComponent/TabsComponent.vue";
import PageTitle from "../../ui/PageTitle/PageTitle.vue";
</script>

<style scoped lang="scss"></style>
