<template>
  <div class="profile-page">
    <div class="profile-page__container container">
      <PageTitle
        :title="$t('profilePage.pageTitle')"
        :linkText="$t('profilePage.backLink')"
        @onClick="router.back"
      />
      <ProfileDetails  />
      <DescriptionBlock
        date="12.12.2024"
        :title="$t('profilePage.personalInfoTitle')"
        :trailing="$t('profilePage.released')"
        :leading="$t('profilePage.employer')"
      >
        <template #lower-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          similique est, fuga mollitia officiis corporis quod sed ullam
          voluptatum vel, laboriosam rerum non amet adipisci ex optio dolore
          dolorum dolores architecto porro omnis, voluptates reiciendis
          voluptas? Eveniet ullam vitae cupiditate.
        </template>
        <template #upper-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum
          est deleniti asperiores dolor tenetur fugiat doloremque saepe, quia
          quod eum ex veniam officiis soluta, eius impedit! Consequatur nemo
          dicta omnis placeat sapiente sequi corporis.
        </template>
      </DescriptionBlock>
      <SocialLinks />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import PageTitle from "../../ui/PageTitle/PageTitle.vue";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails.vue";
import DescriptionBlock from "../../ui/DescriptionBlock/DescriptionBlock.vue";
import SocialLinks from "./components/SocialLinks/SocialLinks.vue";
import { useProfileStore } from "./store";
import { onMounted } from "vue";

const router = useRouter();
const profileStore = useProfileStore();

onMounted(() => {
  profileStore.getCurrentProfile();
});
</script>

<style lang="scss" scoped>
.profile-page {
  padding: 30px 0;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 15px;
    @media (max-width: 1200px) {
      max-width: 1000px;
    }

    @media (max-width: 1024px) {
      max-width: 768px;
    }

    @media (max-width: 768px) {
      max-width: 576px;
    }

    @media (max-width: 576px) {
      max-width: 425px;
    }

    @media (max-width: 475px) {
      padding: 0 20px;
    }
  }
}
</style>
