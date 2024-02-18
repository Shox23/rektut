<template>
  <div class="login">
    <div class="login__container container">
      <div
        v-if="adaptiveStore.screenState === AdaptiveState.mobile"
        class="login__logo"
      >
        <img src="/icons/logo_sub.png" alt="logo" />
      </div>
      <Transition name="slide-up" mode="out-in">
        <LoginForm v-if="loginStore.currentStage === LoginStage.login" />
        <RecoverForm
          v-else-if="
            loginStore.currentStage === LoginStage.recover &&
            router.currentRoute.value.fullPath === '/log-in/recover/'
          "
        />
        <SignUpForm
          v-else-if="
            loginStore.currentStage === LoginStage.signup &&
            router.currentRoute.value.fullPath === '/log-in/sign-up/'
          "
        />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "./components/LoginForm/LoginForm.vue";
import RecoverForm from "./components/RecoverForm/RecoverForm.vue";
import SignUpForm from "./components/SignUpForm/SignUpForm.vue";
import { useLoginStore } from "./store/loginStore";
import LoginStage from "./enum/loginStage";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAdaptiveStore } from "../../store/adaptive";
import AdaptiveState from "../../helpers/enums/adaptiveEnum";

const router = useRouter();
const loginStore = useLoginStore();
const adaptiveStore = useAdaptiveStore();

onMounted(() => {
  loginStore.setCurrentStage();
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins/grid.scss";

.login {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 25px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: opacity(10%);
    content: "";
    background: url("/images/login-background.jpg") center no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__logo {
    text-align: center;
    height: 64px;
    width: 184px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 25px;
    }

    &::after {
      position: absolute;
      z-index: -1;
      // width: auto;
      // height: 700px;
      // @include adaptivWidthLg(508, 508);
      @include adaptivHeightlg(650, 400);
      aspect-ratio: 0.5;
      content: "";
      background: url("/icons/logo.svg") center no-repeat;
      background-size: contain;
      bottom: 0%;
      left: -5%;
      transform: rotate(-10deg);

      @media (max-width: 1600px) {
        bottom: 0%;
        left: 5%;
      }
      @media (max-width: 1300px) {
        bottom: 15%;
        left: 10%;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }

    &::before {
      position: absolute;
      z-index: -1;
      content: "";
      aspect-ratio: 0.8;
      @include adaptivHeightlg(315, 200);
      background: url("/icons/halfmoon.svg") center no-repeat;
      background-size: contain;
      top: 20%;
      right: -3%;

      @media (max-width: 1600px) {
        top: 20%;
        right: 5%;
      }
      @media (max-width: 1300px) {
        top: 20%;
        right: 10%;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
