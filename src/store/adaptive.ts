import { defineStore } from "pinia";
import { ref } from "vue";
import AdaptiveState from "../helpers/enums/adaptiveEnum";

export const useAdaptiveStore = defineStore("adaptive", () => {
  const screenState = ref<string>("");

  const setScreenValue = (value: number) => {
    if (value > 768) {
      screenState.value = AdaptiveState.desktop;
    } else {
      screenState.value = AdaptiveState.mobile;
    }
  };

  return { setScreenValue, screenState };
});
