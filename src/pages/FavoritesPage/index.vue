<template>
  <div class="favorites-page">
    <div class="favorites-page__container container">
      <PageTitle
        :title="$t('favorites.pageTitle')"
        :link-text="$t('favorites.pageLinkText')"
      />
      <Tabs />
      <div> 
        <GridBlock />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GridBlock from "../../components/Recommended/GridBlock.vue";
import Tabs from "../../components/Tabs/Tabs.vue";
import PageTitle from "../../ui/PageTitle/PageTitle.vue";
</script>

<style scoped lang="scss"></style>
