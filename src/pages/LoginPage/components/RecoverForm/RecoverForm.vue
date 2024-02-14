<template>
  <div class="login-form">
    <h3 class="login-form__title">
      {{ $t("loginPage.recover.mainTitle") }}
    </h3>
    <div class="login-form__content">
      <form action="" class="login-form__form">
        <CustomInput
          icon="user.svg"
          :placeholder="$t('loginPage.recover.mainPhoneLabel')"
        />
        <FilledButton :bigger="true">
          <template #text>
            {{ $t("loginPage.recover.mainButtonTitle") }}
          </template>
        </FilledButton>
      </form>
    </div>

    <div class="login-form__footer recover-form__footer">
      <p class="text-black">
        {{ $t("loginPage.recover.remember") }}
        <a @click="loginStore.goBack">
          {{ $t("loginPage.recover.login") }}
        </a>
      </p>

      <p class="login-form__back" @click="loginStore.goBack">
        {{ $t("loginPage.recover.back") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "../../store/loginStore";
import CustomInput from "../../../../ui/CustomInput/CustomInput.vue";
import FilledButton from "../../../../ui/FilledButton/FilledButton.vue";

const loginStore = useLoginStore();
</script>

<style lang="scss">
.recover-form__footer {
  gap: 100px;

  @media (max-width: 768px) {
    gap: 20px;
  }
}
</style>
