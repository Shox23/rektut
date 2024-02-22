<template>
  <div class="social-links">
    <PageTitle :title="$t('profilePage.socialMedia')" />
    <div class="social-links__links">
      <WhiteButton :icon="item.icon" v-for="item in linkItems" :key="item.icon">
        <template #text>
          <a :href="item.link">{{
            item.title ? item.title : $t(`${item.localTitle}`)
          }}</a>
        </template>
      </WhiteButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageTitle from "../../../../ui/PageTitle/PageTitle.vue";
import WhiteButton from "../../../../ui/WhiteButton/WhiteButton.vue";

const linkItems = [
  {
    link: "/",
    title: "Instagram",
    icon: "instagram.svg",
  },
  {
    link: "",
    title: "Facebook",
    icon: "facebook.svg",
  },
  {
    link: "",
    title: "Google",
    icon: "google.svg",
  },
  {
    link: "",
    localTitle: "profilePage.website",
    icon: "global.svg",
  },
  {
    link: "",
    title: "WhatsApp",
    icon: "whatsapp.svg",
  },
];
</script>

<style lang="scss" scoped>
.social-links {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__links {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>
