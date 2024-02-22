<template>
  <header
    class="navbar"
    :class="{ alt: route.fullPath === '/' || route.fullPath === '/about' }"
  >
    <MobileNavigation
      v-if="adaptiveStore.screenState === AdaptiveState.mobile"
    />
    <DesktopNavigation
      v-else-if="adaptiveStore.screenState === AdaptiveState.desktop"
    />
  </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import AdaptiveState from "../../helpers/enums/adaptiveEnum";
import MobileNavigation from "./components/MobileNavigation.vue";
import DesktopNavigation from "./components/DesktopNavigation.vue";
import { useAdaptiveStore } from "../../store/adaptive";

const route = useRoute();
const adaptiveStore = useAdaptiveStore();
</script>

<style lang="scss" scoped>
.navbar {
  &.alt {
    position: absolute;
    width: 100%;
    z-index: 10;
  }
}
</style>
