<template>
  <div class="login-form">
    <h3 class="login-form__title">
      {{ $t("loginPage.login.mainTitle") }}
    </h3>
    <div class="login-form__content">
      <form action="" class="login-form__form">
        <CustomInput
          icon="user.svg"
          :placeholder="$t('loginPage.login.mainPhoneLabel')"
        />
        <CustomInput
          icon="lock.svg"
          :placeholder="$t('loginPage.login.passwordLabel')"
        />
        <FilledButton :bigger="true">
          <template #text>
            {{ $t("loginPage.login.mainButtonTitle") }}
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
              {{ $t("loginPage.login.loginWith") }}
              <p class="text-blue">Google</p>
            </div>
          </template>
        </WhiteButton>
        <WhiteButton icon="facebook.svg">
          <template #text>
            <div class="text-blurred login-form__buttons__text">
              {{ $t("loginPage.login.loginWith") }}
              <p class="text-blue">Facebook</p>
            </div>
          </template>
        </WhiteButton>
      </div>
    </div>

    <div class="login-form__footer">
      <a @click="loginStore.openRecover">
        {{ $t("loginPage.login.forgot") }}
      </a>

      <p class="text-black">
        {{ $t("loginPage.login.firstTimeHere") }}
        <a @click="loginStore.openSignUp">
          {{ $t("loginPage.login.signUp") }}
        </a>
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

<style lang="scss">
@import "../../../../assets/styles/mixins/grid.scss";
.login-form {
  display: flex;
  flex-direction: column;
  @include adaptivGaplg(30, 16);
  height: max-content;
  width: max-content;
  border-radius: 10px;
  @include adaptivPaddinglg(60, 60, 60, 60, 40, 40, 40, 40);
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.25);
  background: var(--primary-color);
  color: var(--brand-color);

  @media (max-width: 768px) {
    box-shadow: none;
    width: 100%;
    @include adaptivGapmd(30, 16);
    @include adaptivPaddinglg(40, 40, 40, 40, 25, 25, 0, 0);
  }

  &__title {
    font-weight: 700;
    text-align: center;
    @include adaptiv-fontlg(36, 24);

    @media (max-width: 768px) {
      @include adaptiv-fontmd(36, 24);
    }
  }

  &__line {
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    gap: 25px;
    position: relative;

    &__text {
      width: 75px;
      text-align: center;
      @include adaptiv-fontlg(24, 18);

      @media (max-width: 768px) {
        @include adaptiv-fontmd(24, 18);
      }
    }

    &__item {
      width: 100%;
      background: var(--brand-color);
      height: 1px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    @include adaptivGaplg(25, 12);

    @media (max-width: 768px) {
      @include adaptivGapmd(25, 16);
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;

    &__text {
      font-family: var(--primary-font);
      font-weight: 500;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &__back {
    cursor: pointer;
    font-weight: 700;
    color: var(--brand-color);
  }

  &__footer {
    @include adaptiv-fontlg(24, 18);
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      @include adaptiv-fontmd(24, 18);
    }
  }
}
</style>
