import { ref } from "vue";
import { defineStore } from "pinia";
import {
  createAdvertisement,
  getAdvertisements,
  getOnlyMyAdvertisements,
} from "../api/advertisements";
import { chosenData, getAdsParams } from "../models/models";
import { useAuthStore } from "./auth";

export const useAdsStore = defineStore("ads", () => {
  const authStore = useAuthStore();
  const isLoading = ref<boolean>(false);
  const adList = ref<null>(null);
  const filteredList = ref<null>(null);
  const myAds = ref<null>(null);
  const chosenData = ref<chosenData>({ category: 0 });

  const setChosenData = (value: number) => {
    chosenData.value.category = value;
  };

  const getFilteredAds = async (params: getAdsParams) => {
    authStore.checkTokens();
    const response = await getAdvertisements(params);
    console.log(response);
  };

  const getAllAds = async () => {
    authStore.checkTokens();
    const response = await getAdvertisements();
    console.log(response);
    if (response.results) {
      adList.value = response.results;
    }
  };

  const getMyAds = async () => {
    authStore.checkTokens();
    const response = await getOnlyMyAdvertisements();
    console.log(response);
  };

  const createAd = async (data: FormData) => {
    authStore.checkTokens();
    const response = await createAdvertisement(data);
    console.log(response);
  };

  return {
    getFilteredAds,
    getAllAds,
    getMyAds,
    filteredList,
    myAds,
    setChosenData,
    chosenData,
    adList,
    createAd,
    isLoading,
  };
});
