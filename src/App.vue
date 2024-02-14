<template>
  <div class="app">
    <Navbar v-if="!route.fullPath.includes('/log-in')" />
    <div class="app__content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useLanguageStore } from "./store/lang";
import { useAdaptiveStore } from "./store/adaptive";
import Navbar from "./components/Navbar.vue/Navbar.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const langStore = useLanguageStore();
const adaptiveStore = useAdaptiveStore();

onMounted(() => {
  adaptiveStore.setScreenValue(window.innerWidth);
  window.addEventListener("resize", () => {
    adaptiveStore.setScreenValue(window.innerWidth);
  });
  langStore.getDefaultLanguage();
});
</script>

<style scoped></style>
