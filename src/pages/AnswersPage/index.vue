<template>
  <div class="answers-page">
    <div class="answers-page__container container">
      <PageTitle :title="$t('answers.pageTitle')" :link-text="$t('answers.pageLinkText')" />
      <Accordion />
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageTitle from "../../ui/PageTitle/PageTitle.vue";
import Accordion from "../../components/Accordion/Accordion.vue";
</script>

<style scoped lang="scss">
.answers-page {
  padding: 30px 0;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 15px;
    @media (max-width: 1200px) {
      max-width: 1000px;
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
