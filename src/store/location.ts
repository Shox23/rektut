import { defineStore } from "pinia";
import { ref } from "vue";
import { getCitiesRequest, getCountriesRequest } from "../api/location";
import { CountryData } from "../models/models";

export const useLocationStore = defineStore("location", () => {
  const currentCountry = ref<string>("");
  const currentCity = ref<string>("");
  const allCities = ref<CountryData[] | null>(null);
  const allCountries = ref<CountryData[] | null>(null);

  const getCities = async () => {
    const response = await getCitiesRequest();
    if (response) {
      allCities.value = response;
    }
  };

  const getCountries = async () => {
    const response = await getCountriesRequest();
    // console.log(response);
    if (response) {
      allCountries.value = response;
    }
  };

  return {
    getCountries,
    getCities,
    currentCity,
    allCities,
    allCountries,
    currentCountry,
  };
});
