<template>
  <div class="ads-page">
    <div class="ads-page__container container">
      <PageTitle
        :title="$t('myAds.pageTitle')"
        :link-text="$t('myAds.pageLinkText')"
      />
      <TabsComponent>
        <template #content>
          <CardBlock
            link="/"
            link-title="Sorted by popularity"
            :title="$t('favorites.blockTitle')"
          />
          <div class="ads-page__empty">
            <h3>
              {{ $t("myAds.dontHaveAds") }}
            </h3>
            <EmptyAdsButton />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              ea.
            </h3>
          </div>
        </template>
      </TabsComponent>
      <div>
        <h3 class="ads-page__title">
          {{ $t("favorites.recommended") }}
        </h3>
        <GridBlock />
        <h3 class="ads-page__title">
          {{ $t("favorites.recommended") }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EmptyAdsButton from "./components/EmptyAdsButton.vue";
import TabsComponent from "../../components/TabsComponent/TabsComponent.vue";
import GridBlock from "../../components/Recommended/GridBlock.vue";
import PageTitle from "../../ui/PageTitle/PageTitle.vue";
</script>

<style scoped lang="scss">
.ads-page {
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

  &__empty {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px 0;

    h3 {
      font-weight: 600;
      font-size: 20px;
      color: var(--additional-color);
      text-align: center;

      &:last-child {
        color: var(--brand-color);
      }

      @media (max-width: 576px) {
        font-size: 16px;

        &:last-child {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
