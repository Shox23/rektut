import { defineStore } from "pinia";
import { editProfile, getProfile } from "../api";
import { profileData } from "../models";
import { ref } from "vue";

export const useProfileStore = defineStore("profile", () => {
  const profileData = ref<profileData | null>(null);

  const getCurrentProfile = async () => {
    const response = await getProfile();
    console.log(response);
    if (response) {
      profileData.value = response;
    }
  };

  const editCurrentProfile = async (data: FormData) => {
    const response = await editProfile(data);
    console.log(response);
  };

  return { getCurrentProfile, profileData, editCurrentProfile };
});
