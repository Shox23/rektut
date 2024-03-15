<template>
  <div class="profile-details">
    <div class="profile-details__avatar">
      <ImageUpload />
    </div>

    <div class="profile-details__data">
      <div class="profile-details__inputs">
        <CustomInput
          v-model="firstNameValue"
          :colored="true"
          :static-padding="true"
          :placeholder="
            profileStore.profileData && profileStore.profileData.first_name
              ? profileStore.profileData.first_name
              : $t('profilePage.firstNamePlaceholder')
          "
        />
        <CustomInput
          v-model="lastNameValue"
          :colored="true"
          :static-padding="true"
          :placeholder="
            profileStore.profileData && profileStore.profileData.last_name
              ? profileStore.profileData.last_name
              : $t('profilePage.lastNamePlaceholder')
          "
        />
        <CustomInput
          v-model="phoneValue"
          :colored="true"
          :static-padding="true"
          :placeholder="
            profileStore.profileData && profileStore.profileData.phone
              ? profileStore.profileData.phone
              : $t('profilePage.numberPlaceholder')
          "
        />
        <CustomInput
          v-model="emailValue"
          :colored="true"
          :static-padding="true"
          :placeholder="
            profileStore.profileData && profileStore.profileData.email
              ? profileStore.profileData.email
              : $t('profilePage.emailPlaceholder')
          "
        />
      </div>

      <div class="profile-details__checkbox">
        <Checkbox :check="isChecked" @check="handleCheckValue" />
        <p class="profile-details__agreement">
          {{ $t("profilePage.agreement") }}
        </p>
      </div>

      <div class="profile-details__controls">
        <FilledButton
          @on-click="editProfile"
          :profile-page="true"
          :full-width="
            adaptStore.screenState === AdaptiveState.mobile ? true : false
          "
        >
          <template #text>
            {{ $t("profilePage.filledBtnText") }}
          </template>
        </FilledButton>
        <OutlinedButton
          :profile-page="true"
          :full-width="
            adaptStore.screenState === AdaptiveState.mobile ? true : false
          "
        >
          <template #text>
            {{ $t("profilePage.outlinedBtnText") }}
          </template>
        </OutlinedButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ImageUpload from "../../../../components/ImageUpload/ImageUpload.vue";
import CustomInput from "../../../../ui/CustomInput/CustomInput.vue";
import FilledButton from "../../../../ui/FilledButton/FilledButton.vue";
import OutlinedButton from "../../../../ui/OutlinedButton/OutlinedButton.vue";
import Checkbox from "../../../../ui/Checkbox/Checkbox.vue";
import { useAdaptiveStore } from "../../../../store/adaptive";
import AdaptiveState from "../../../../helpers/enums/adaptiveEnum";
import { useProfileStore } from "../../store";

const profileStore = useProfileStore();
const adaptStore = useAdaptiveStore();
const isChecked = ref<boolean>(
  profileStore.profileData ? profileStore.profileData.is_agree_terms : false
);
const emailValue = ref<string>("");
const phoneValue = ref<string>("");
const lastNameValue = ref<string>("");
const firstNameValue = ref<string>("");

const handleCheckValue = (val: boolean) => {
  isChecked.value = val;
};

const editProfile = () => {
  const form = new FormData();

  // SET LAST NAME
  if (lastNameValue.value.trim()) {
    form.append("last_name", lastNameValue.value);
  } else if (profileStore.profileData && profileStore.profileData.last_name) {
    form.append("last_name", profileStore.profileData.last_name);
  }

  // SET FIRST NAME
  if (firstNameValue.value.trim()) {
    form.append("first_name", firstNameValue.value);
  } else if (profileStore.profileData && profileStore.profileData.first_name) {
    form.append("first_name", profileStore.profileData.first_name);
  }

  // SET PHONE NUMBER
  if (phoneValue.value.trim()) {
    form.append("phone", emailValue.value);
  } else if (profileStore.profileData && profileStore.profileData.phone) {
    form.append("phone", profileStore.profileData.phone);
  }

  // SET EMAIL
  if (phoneValue.value.trim()) {
    form.append("email", emailValue.value);
  } else if (profileStore.profileData && profileStore.profileData.email) {
    form.append("email", profileStore.profileData.email);
  }

  profileStore.editCurrentProfile(form);
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/mixins/grid.scss";

.profile-details {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &__avatar {
    width: 100%;
    max-width: 360px;

    @media (max-width: 1024px) {
      max-width: 320px;
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1024px) {
      gap: 10px;
    }

    @media (max-width: 768px) {
      gap: 15px;
    }
  }

  &__agreement {
    font-size: 16px;
    color: #18181b;
    line-height: 123%;

    @media (max-width: 768px) {
      line-height: 154%;
      @include adaptiv-fontmd(16, 11);
    }
  }

  &__checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 60%;

    @media (max-width: 1200px) {
      max-width: 80%;
      // flex-direction: column;
    }

    @media (max-width: 1024px) {
      max-width: 100%;
      // flex-direction: column;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__data {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1024px) {
      gap: 15px;
    }

    @media (max-width: 768px) {
      gap: 20px;
    }
  }
}
</style>
