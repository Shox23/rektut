<template>
  <div class="login-form">
    <h3 class="login-form__title">
      {{ $t("loginPage.signUp.mainTitle") }}
    </h3>
    <div class="login-form__content">
      <form @submit.prevent class="login-form__form">
        <CustomInput
          icon="phoneBrand.svg"
          v-model="phoneValue"
          :placeholder="$t('loginPage.signUp.mainPhoneLabel')"
        />
        <CustomInput
          icon="user.svg"
          v-model="emailValue"
          :placeholder="$t('loginPage.signUp.mainEmailLabel')"
        />
        <CustomInput
          icon="lock.svg"
          :mode-switcher="true"
          v-model="passwordValue"
          :type="inputPassword ? 'text' : 'password'"
          @onIconClick="inputPassword = !inputPassword"
          :placeholder="$t('loginPage.login.passwordLabel')"
        />
        <CustomInput
          icon="lock.svg"
          :mode-switcher="true"
          v-model="repeatPasswordValue"
          :type="inputRepeatPassword ? 'text' : 'password'"
          @onIconClick="inputRepeatPassword = !inputRepeatPassword"
          :placeholder="$t('loginPage.login.repeatPasswordLabel')"
        />
        <FilledButton @onClick="signUp" :bigger="true">
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
// import { loginRequest } from "../../api";
import { ref } from "vue";
import { signUpRequestData } from "../../models";
import { useAuthStore } from "../../../../store/auth";

const loginStore = useLoginStore();
const authStore = useAuthStore();
const inputPassword = ref<boolean>(false);
const inputRepeatPassword = ref<boolean>(false);
const phoneValue = ref<string>("");
const emailValue = ref<string>("");
const passwordValue = ref<string>("");
const repeatPasswordValue = ref<string>("");

const isEmail = (mail: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

const isPasswordValid = (password: string, repeatPassword: string) => {
  if (password.trim().length && repeatPassword.trim().length) {
    if (password === repeatPassword) {
      return true;
    }
    alert("Passwords are not equal");
    return false;
  }
  alert("Create password then repeat it");
  return false;
};

const signUp = () => {
  if (
    phoneValue.value.trim().length > 9 &&
    isEmail(emailValue.value) &&
    isPasswordValid(passwordValue.value, repeatPasswordValue.value)
  ) {
    const form: signUpRequestData = {
      groups: 1,
      phone: phoneValue.value.trim(),
      email: emailValue.value,
      password: passwordValue.value,
    };
    authStore.register(form);
  } else if (phoneValue.value.length < 9) {
    alert("Phone number is invalid");
  } else if (!isEmail(emailValue.value)) {
    alert("Email is invalid");
  } else if (!isPasswordValid(passwordValue.value, repeatPasswordValue.value)) {
    alert("Password is invalid");
  } else {
    console.log(phoneValue.value.trim().length < 9);
    console.log(isEmail(emailValue.value));
    console.log(phoneValue.value);

    alert("Something went wrong");
  }
};

// const registerWithSocial = (value: string) => {};
</script>
