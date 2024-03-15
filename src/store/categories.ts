import { defineStore } from "pinia";
import { ref } from "vue";
import { CategoryData } from "../models/models";
import { getCategoriesRequest } from "../api/categories";
import { useAuthStore } from "./auth";

export const useCategoriesStore = defineStore("categories", () => {
  const authStore = useAuthStore();
  const loading = ref<boolean>(false);
  const allCategories = ref<CategoryData[] | null>(null);

  const getCategories = async () => {
    authStore.checkTokens();
    loading.value = true;
    const response = await getCategoriesRequest();
    loading.value = false;
    console.log(response);
    if (response) {
      allCategories.value = response;
    }
  };

  return { getCategories, loading, allCategories };
});
