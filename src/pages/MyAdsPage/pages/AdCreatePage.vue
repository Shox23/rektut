<template>
  <div class="ad-create">
    <div class="ad-create__container container">
      <PageTitle
        :title="$t('createAd.pageTitle')"
        :link-text="$t('createAd.pageLinkText')"
      />

      <div class="ad-create__wrapper">
        <DescriptionBlock empty>
          <template #custom>
            <div class="ad-create__desc">
              <h3 class="ad-create__desc__title">
                {{ $t("createAd.createTitle") }}
              </h3>
              <span class="ad-create__desc__subtitle">{{
                $t("createAd.createSubtitle")
              }}</span>

              <div class="ad-create__input">
                <span class="ad-create__span">
                  {{ $t("createAd.mainTitleLabel") }}
                </span>
                <CustomInput
                  colored
                  v-model="titleValue"
                  :placeholder="$t('createAd.mainTitlePlaceholder')"
                />
              </div>

              <div class="ad-create__desc__dropdowns">
                <div class="ad-create__input">
                  <span class="ad-create__span">{{
                    $t("createAd.categoryDropdownLabel")
                  }}</span>
                  <Dropdown
                    @choose="chooseCategory"
                    filled
                    :list="categoriesStore.allCategories"
                    :title="$t('createAd.categoryDropdownTitle')"
                  />
                </div>

                <div class="ad-create__input">
                  <span class="ad-create__span">{{
                    $t("createAd.cityDropdownLabel")
                  }}</span>
                  <Dropdown
                    @choose="chooseCity"
                    filled
                    :list="locationStore.allCities"
                    :title="$t('createAd.cityDropdownTitle')"
                  />
                </div>
              </div>
            </div>
          </template>
        </DescriptionBlock>

        <DescriptionBlock
          empty
          :title="$t('createAd.descTitle')"
          :leading="$t('createAd.descLeading')"
          :trailing="`${descValue.length}/9000`"
        >
          <template #custom>
            <CustomInput
              colored
              is-textarea
              v-model="descValue"
              :placeholder="$t('createAd.mainTitlePlaceholder')"
            />
          </template>
        </DescriptionBlock>

        <DescriptionBlock empty :title="$t('createAd.contactsTitle')">
          <template #custom>
            <div class="ad-create__info">
              <div class="ad-create__input">
                <span class="ad-create__span">{{
                  $t("createAd.numberInputLabel")
                }}</span>
                <CustomInput
                  colored
                  v-model="numberValue"
                  placeholder="+999 99 9999999"
                />
              </div>

              <div class="ad-create__input">
                <span class="ad-create__span">{{
                  $t("createAd.emailInputLabel")
                }}</span>
                <CustomInput
                  colored
                  v-model="emailValue"
                  placeholder="example@gmail.com"
                />
              </div>

              <div class="ad-create__input">
                <span class="ad-create__span">{{
                  $t("createAd.nameInputLabel")
                }}</span>
                <CustomInput
                  colored
                  v-model="nameValue"
                  :placeholder="$t('createAd.nameInputPlaceholder')"
                />
              </div>
            </div>
          </template>
        </DescriptionBlock>

        <DescriptionBlock empty>
          <template #custom>
            <div class="ad-create__btn">
              <span class="ad-create__span">{{
                $t("createAd.createBtnLabel")
              }}</span>
              <FilledButton @onClick="createAd">
                <template #text>
                  {{ $t("createAd.createBtnText") }}
                </template>
              </FilledButton>
            </div>
          </template>
        </DescriptionBlock>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useAdsStore } from "../../../store/ads";
import DescriptionBlock from "../../../ui/DescriptionBlock/DescriptionBlock.vue";
import PageTitle from "../../../ui/PageTitle/PageTitle.vue";
import CustomInput from "../../../ui/CustomInput/CustomInput.vue";
import Dropdown from "../../../ui/Dropdown/Dropdown.vue";
import { useCategoriesStore } from "../../../store/categories";
import { useLocationStore } from "../../../store/location";
import FilledButton from "../../../ui/FilledButton/FilledButton.vue";

const titleValue = ref<string>("");
const numberValue = ref<string>("");
const emailValue = ref<string>("");
const descValue = ref<string>("");
const nameValue = ref<string>("");
const adsStore = useAdsStore();
const chosenCity = ref<number>(0);
const chosenCategory = ref<number>(0);
const categoriesStore = useCategoriesStore();
const locationStore = useLocationStore();

const chooseCategory = (id: number) => {
  chosenCategory.value = id;
};

const chooseCity = (id: number) => {
  chosenCity.value = id;
};

const createAd = () => {
  const form = new FormData();
  if (chosenCity.value) {
    form.append("city", chosenCity.value.toString());
  }
  if (chosenCategory.value) {
    form.append("category", chosenCategory.value.toString());
  }
  if (descValue.value) {
    form.append("description", descValue.value);
  }
  if (titleValue.value) {
    form.append("title", titleValue.value);
  }
  if (numberValue.value) {
    form.append("contact_number", numberValue.value);
  }
  if (emailValue.value) {
    form.append("email", emailValue.value);
  }
  if (nameValue.value) {
    form.append("name", nameValue.value);
  }

  adsStore.createAd(form);
};

onMounted(() => {
  if (!categoriesStore.allCategories) {
    categoriesStore.getCategories();
  }
});
</script>

<style scoped lang="scss">
.ad-create {
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

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__input {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__span {
    font-size: 18px;
    color: var(--additional-color);
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__desc {
    display: flex;
    flex-direction: column;
    gap: 40px;
    &__title {
      color: var(--additional-color);
      font-size: 24px;
      font-weight: 700;
    }

    &__subtitle {
      color: var(--additional-color);
      font-size: 24px;
    }

    &__dropdowns {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      gap: 50px;
    }
  }
}
</style>
