import { defineStore } from "pinia";
import { ref } from "vue";
import LoginStage from "../enum/loginStage";
import { useRouter } from "vue-router";

export const useLoginStore = defineStore("login", () => {
  const router = useRouter();
  const currentStage = ref<string>(LoginStage.login);

  const goBack = () => {
    if (router.currentRoute.value.fullPath !== "/log-in") {
      router.push("/log-in");
    }
    currentStage.value = LoginStage.login;
    setCurrentStage(LoginStage.login);
  };

  const openSignUp = () => {
    router.push("/log-in/sign-up/");
    currentStage.value = LoginStage.signup;
    setCurrentStage(LoginStage.signup);
  };

  const openRecover = () => {
    router.push("/log-in/recover/");
    currentStage.value = LoginStage.recover;
    setCurrentStage(LoginStage.recover);
  };

  const setCurrentStage = (value?: string) => {
    if (value) {
      localStorage.loginStage = value;
    } else {
      if (localStorage.loginStage) {
        currentStage.value = localStorage.loginStage;
        if (currentStage.value == LoginStage.recover) {
          router.push("/log-in/recover/");
        }
        if (currentStage.value == LoginStage.signup) {
          router.push("/log-in/sign-up/");
        }
        if (currentStage.value == LoginStage.login) {
          router.push("/log-in/");
        }
      }
    }
  };

  return { currentStage, setCurrentStage, goBack, openRecover, openSignUp };
});
