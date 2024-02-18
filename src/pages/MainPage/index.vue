<template>
  <div class="main">
    <HeroSection />
    <SearchSection />
    <AdvertisementSection />
    <AboutSection />
  </div>
</template>

<script setup lang="ts">
import AboutSection from "./components/AboutSection/AboutSection.vue"
import SearchSection from "./components/SearchSection/SearchSection.vue";
import HeroSection from "./components/HeroSection/HeroSection.vue";
import AdvertisementSection from "./components/AdvertisementSection/AdvertisementSection.vue";
</script>

<style lang="scss">
.main {
  position: relative;
  height: 100vh;
  width: 100vw;
  // background: url("/images/Bg.jpg") no-repeat center;
  // background-size: cover;

  // &::after {
  //   top: 0;
  //   left: 0;
  //   width: 50%;
  //   height: 100%;
  //   content: "";
  //   position: absolute;
  //   background: rgba(0, 0, 0, 0.4);
  //   backdrop-filter: blur(3px);

  //   @media (max-width: 768px) {
  //     backdrop-filter: blur(10px);
  //   }
  // }

  &__title {
    position: absolute;
    top: 6%;
    left: 237px;
    // transform: translateX(-50%);
    width: 700px;
    // height: 330px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
