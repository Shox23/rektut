<template>
  <div class="login-form">
    <h3 class="login-form__title">
      {{ $t("loginPage.signUp.mainTitle") }}
    </h3>
    <div class="login-form__content">
      <form action="" class="login-form__form">
        <CustomInput
          icon="user.svg"
          :placeholder="$t('loginPage.signUp.mainPhoneLabel')"
        />
        <FilledButton :bigger="true">
          <template #text>
            {{ $t("loginPage.signUp.mainButtonTitle") }}
          </template>
        </FilledButton>
      </form>

      <div class="login-form__line">
        <div class="login-form__line__item"></div>
        <div class="login-form__line__text">
          {{ $t("loginPage.login.or") }}
        </div>
        <div class="login-form__line__item"></div>
      </div>

      <div class="login-form__buttons">
        <WhiteButton icon="google.svg">
          <template #text>
            <div class="text-blurred login-form__buttons__text">
              {{ $t("loginPage.signUp.loginWith") }}
              <p class="text-blue">Google</p>
            </div>
          </template>
        </WhiteButton>
        <WhiteButton icon="facebook.svg">
          <template #text>
            <div class="text-blurred login-form__buttons__text">
              {{ $t("loginPage.signUp.loginWith") }}
              <p class="text-blue">Facebook</p>
            </div>
          </template>
        </WhiteButton>
      </div>
    </div>

    <div class="login-form__footer">
      <p class="text-black">
        {{ $t("loginPage.signUp.registered") }}
        <a @click="loginStore.goBack">
          {{ $t("loginPage.signUp.login") }}
        </a>
      </p>

      <p class="login-form__back" @click="loginStore.goBack">
        {{ $t("loginPage.signUp.back") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "../../store/loginStore";
import CustomInput from "../../../../ui/CustomInput/CustomInput.vue";
import FilledButton from "../../../../ui/FilledButton/FilledButton.vue";
import WhiteButton from "../../../../ui/WhiteButton/WhiteButton.vue";

const loginStore = useLoginStore();
</script>
