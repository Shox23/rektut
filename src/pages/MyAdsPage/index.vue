<template>
  <div class="ads-page">
    <div class="ads-page__container container">
      <PageTitle
        :title="$t('myAds.pageTitle')"
        :link-text="$t('myAds.pageLinkText')"
      />
      <TabsComponent
        v-if="categoriesStore.allCategories"
        @btn-click="startCreateAd"
        :tabs-items="categoriesStore.allCategories"
        title-button
      >
        <template #content>
          <CardBlock
            link="/"
            link-title="Sorted by popularity"
            :title="$t('favorites.blockTitle')"
            v-if="adStore.adList"
          />
          <div v-else class="ads-page__empty">
            <h3>
              {{ $t("myAds.dontHaveAds") }}
            </h3>
            <EmptyAdsButton @click="startCreateAd" />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              ea.
            </h3>
          </div>
        </template>
      </TabsComponent>
      <div v-if="adStore.adList">
        <GridBlock />
      </div>
    </div>

    <Modal
      @close="closeModal"
      :is-open="isCreateModalOpen"
      :headerTitle="$t('myAds.createModalTitle')"
      :bodyTitle="
        modalSection === 0
          ? $t('myAds.modalSectionChooseTitle')
          : $t('myAds.modalWorkSectionTitle')
      "
    >
      <template #body>
        <Transition name="slide-up" mode="out-in">
          <div class="ads-page__status" v-if="modalSection === 0">
            <div
              v-for="item in categoriesStore.allCategories"
              :key="item.id"
              class="ads-page__status__item"
              @click="chooseCategory(item.id)"
            >
              <img :src="item.icon" alt="icon" class="ads-page__status__icon" />
              <h3 class="ads-page__status__title">{{ item.name }}</h3>
              <!-- <p></p> -->
            </div>
          </div>

          <div v-else-if="modalSection === 1"></div>
        </Transition>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAdaptiveStore } from "../../store/adaptive";
import { useCategoriesStore } from "../../store/categories";
import EmptyAdsButton from "./components/EmptyAdsButton.vue";
import TabsComponent from "../../components/TabsComponent/TabsComponent.vue";
import GridBlock from "../../components/Recommended/GridBlock.vue";
import PageTitle from "../../ui/PageTitle/PageTitle.vue";
import Modal from "../../ui/Modal/Modal.vue";
import AdaptiveState from "../../helpers/enums/adaptiveEnum";
import CardBlock from "../../components/Recommended/CardBlock.vue";
import { useAdsStore } from "../../store/ads";

const adStore = useAdsStore();
const isCreateModalOpen = ref<boolean>(false);
const categoriesStore = useCategoriesStore();
const adaptiveStore = useAdaptiveStore();
const modalSection = ref<number>(0);
const router = useRouter();

const chooseCategory = (value: number) => {
  router.push("/my-ads/create");
  // modalSection.value = 1;
  adStore.setChosenData(value);
};

const closeModal = () => {
  isCreateModalOpen.value = false;
  modalSection.value = 0;
};

const startCreateAd = () => {
  // if (!categoriesStore.allCategories) {
  //   categoriesStore.getCategories();
  // }

  if (adaptiveStore.screenState === AdaptiveState.mobile) {
    router.push("/my-ads/create");
  } else {
    isCreateModalOpen.value = true;
  }
};
onMounted(() => {
  if (!adStore.adList) {
    adStore.getAllAds();
  }
  if (!categoriesStore.allCategories) {
    categoriesStore.getCategories();
  }
});
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

  &__status {
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(4, 240px);

    &__item {
      cursor: pointer;
      padding: 25px 40px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    &__icon {
      width: 60px;
      height: auto;
    }

    &__title {
      font-weight: 700;
      color: var(--brand-color);
      font-size: 20px;
    }
  }
}
</style>
