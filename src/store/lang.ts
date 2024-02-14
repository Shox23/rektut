import { defineStore } from "pinia";
import { ref } from "vue";

export const useLanguageStore = defineStore("i18n", () => {
  const defaultLang = ref<String>("en");

  const getDefaultLanguage = () => {
    if (localStorage.lang) {
      defaultLang.value = JSON.parse(localStorage.lang);
    } else {
      defaultLang.value = navigator.language.split("-")[1];
    }
    return defaultLang;
  };

  return { defaultLang, getDefaultLanguage };
});
